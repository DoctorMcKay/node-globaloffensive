const ByteBuffer = require('bytebuffer');
const EventEmitter = require('events').EventEmitter;
const SteamID = require('steamid');
const Util = require('util');

const Language = require('./language.js');
const Protos = require('./protobufs/generated/_load.js');

const STEAM_APPID = 730;

module.exports = GlobalOffensive;

Util.inherits(GlobalOffensive, EventEmitter);

function GlobalOffensive(steam) {
	if (steam.packageName != 'steam-user' || !steam.packageVersion || !steam.constructor) {
		throw new Error('globaloffensive v2 only supports steam-user v4.2.0 or later.');
	} else {
		let parts = steam.packageVersion.split('.');
		if (parts[0] < 4 || parts[1] < 2) {
			throw new Error(`globaloffensive v2 only supports steam-user v4.2.0 or later. ${steam.constructor.name} v${steam.packageVersion} given.`);
		}
	}

	this._steam = steam;
	this.haveGCSession = false;
	this._isInCSGO = false;

	this._steam.on('receivedFromGC', (appid, msgType, payload) => {
		if (appid != STEAM_APPID) {
			return; // we don't care
		}

		let isProtobuf = !Buffer.isBuffer(payload);
		let handler = null;

		if (this._handlers[msgType]) {
			handler = this._handlers[msgType];
		}

		let msgName = msgType;
		for (let i in Language) {
			if (Language.hasOwnProperty(i) && Language[i] == msgType) {
				msgName = i;
				break;
			}
		}

		this.emit('debug', "Got " + (handler ? "handled" : "unhandled") + " GC message " + msgName + (isProtobuf ? " (protobuf)" : ""));
		if (handler) {
			handler.call(this, isProtobuf ? payload : ByteBuffer.wrap(payload, ByteBuffer.LITTLE_ENDIAN));
		}
	});

	this._steam.on('appLaunched', (appid) => {
		if (this._isInCSGO) {
			return; // we don't care if it was launched again
		}

		if (appid == STEAM_APPID) {
			this._isInCSGO = true;
			if (!this.haveGCSession) {
				this._connect();
			}
		}
	});

	let handleAppQuit = (emitDisconnectEvent) => {
		if (this._helloInterval) {
			clearInterval(this._helloInterval);
			this._helloInterval = null;
		}

		if (this.haveGCSession && emitDisconnectEvent) {
			this.emit('disconnectedFromGC', GlobalOffensive.GCConnectionStatus.NO_SESSION);
		}

		this.haveGCSession = false;
	};

	this._steam.on('appQuit', (appid) => {
		if (!this._isInCSGO) {
			return;
		}

		if (appid == STEAM_APPID) {
			this._isInCSGO = false;
			handleAppQuit(false);
		}
	});

	this._steam.on('disconnected', () => {
		handleAppQuit(true);
	});

	this._steam.on('error', (err) => {
		handleAppQuit(true);
	});
}

GlobalOffensive.prototype._connect = function() {
	if (!this._isInCSGO || this._helloTimer) {
		this.emit('debug', "Not trying to connect due to " + (!this._isInCSGO ? "not in CS:GO" : "has helloTimer"));
		return; // We're not in CS:GO or we're already trying to connect
	}

	let sendHello = () => {
		if (!this._isInCSGO) {
			this.emit('debug', "Not sending hello because we're no longer in CS:GO");
			delete this._helloTimer;
			return;
		} else if (this.haveGCSession) {
			this.emit('debug', "Not sending hello because we have a session");
			clearTimeout(this._helloTimer);
			delete this._helloTimer;
			return;
		}

		this._send(Language.ClientHello, Protos.CMsgClientHello, {});
		this._helloTimerMs = Math.min(60000, (this._helloTimerMs || 1000) * 2); // exponential backoff, max 60 seconds
		this._helloTimer = setTimeout(sendHello, this._helloTimerMs);
		this.emit('debug', "Sending hello, setting timer for next attempt to " + this._helloTimerMs + " ms");
	};

	this._helloTimer = setTimeout(sendHello, 500);
};

GlobalOffensive.prototype._send = function(type, protobuf, body) {
	if (!this._steam.steamID) {
		return false;
	}

	let msgName = type;
	for (let i in Language) {
		if (Language[i] == type) {
			msgName = i;
			break;
		}
	}

	this.emit('debug', "Sending GC message " + msgName);

	if (protobuf) {
		this._steam.sendToGC(STEAM_APPID, type, {}, protobuf.encode(body).finish());
	} else {
		// This is a ByteBuffer
		this._steam.sendToGC(STEAM_APPID, type, null, body.flip().toBuffer());
	}

	return true;
};

GlobalOffensive.prototype.requestLiveGames = function() {
	this._send(Language.MatchListRequestCurrentLiveGames, Protos.CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames, {});
};

GlobalOffensive.prototype.requestRecentGames = function(steamid) {
	if (typeof steamid === 'string') {
		steamid = new SteamID(steamid);
	}

	if (!steamid.isValid() || steamid.universe != SteamID.Universe.PUBLIC || steamid.type != SteamID.Type.INDIVIDUAL || steamid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.MatchListRequestRecentUserGames, Protos.CMsgGCCStrike15_v2_MatchListRequestRecentUserGames, {
		accountid: steamid.accountid
	});
};

GlobalOffensive.prototype.requestLiveGameForUser = function(steamid) {
	if (typeof steamid === 'string') {
		steamid = new SteamID(steamid);
	}

	if (!steamid.isValid() || steamid.universe != SteamID.Universe.PUBLIC || steamid.type != SteamID.Type.INDIVIDUAL || steamid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.MatchListRequestLiveGameForUser, Protos.CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser, {
		accountid: steamid.accountid
	});
};

GlobalOffensive.prototype.inspectItem = function(owner, assetid, d, callback) {
	let match;
	if (typeof owner === 'string' && (match = owner.match(/[SM](\d+)A(\d+)D(\d+)$/))) {
		callback = assetid;
		owner = match[1];
		assetid = match[2];
		d = match[3];
	}

	let msg = {
		"param_a": assetid,
		"param_d": d,
		"param_s": 0,
		"param_m": 0
	};

	if (typeof owner === 'object') {
		owner = owner.toString();
	}

	try {
		let sid = new SteamID(owner);
		if (!sid.isValid() || sid.universe != SteamID.Universe.PUBLIC || sid.type != SteamID.Type.INDIVIDUAL || sid.instance != SteamID.Instance.DESKTOP) {
			throw 0;
		}
		// it's a valid steamid
		msg.param_s = owner;
	} catch (e) {
		msg.param_m = owner;
	}

	this._send(Language.Client2GCEconPreviewDataBlockRequest, Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest, msg);
	if (callback) {
		this.once('inspectItemInfo#' + assetid, callback);
	}
};

GlobalOffensive.prototype.requestPlayersProfile = function(steamid, callback) {
	if (typeof steamid == 'string') {
		steamid = new SteamID(steamid);
	}

	if (!steamid.isValid() || steamid.universe != SteamID.Universe.PUBLIC || steamid.type != SteamID.Type.INDIVIDUAL || steamid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.ClientRequestPlayersProfile, Protos.CMsgGCCStrike15_v2_ClientRequestPlayersProfile, {
		account_id: steamid.accountid,
		request_level: 32
	});

	if (callback) {
		this.once('playersProfile#' + steamid.getSteamID64(), callback);
	}
};

GlobalOffensive.prototype.deleteItem = function(item) {
	let buffer = new ByteBuffer(8, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(item);
	this._send(Language.Delete, null, buffer);
};

GlobalOffensive.prototype._handlers = {};

require('./enums.js');
require('./handlers.js');
