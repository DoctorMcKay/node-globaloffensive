var fs = require('fs');
var Steam = require('steam');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');

var Language = require('./language.js');
var Protos = require('./protos.js');

module.exports = GlobalOffensive;

require('util').inherits(GlobalOffensive, require('events').EventEmitter);

function GlobalOffensive(steam) {
	this._steam = steam.client || steam._client;
	this._gc = new Steam.SteamGameCoordinator(this._steam, 730);
	this.haveGCSession = false;
	this._hadGCSession = false;
	this._isInCSGO = false;
	
	var self = this;

	this._gc.on('message', function(header, body, callback) {
		var protobuf = !!header.proto;
		var handled = false;

		if (self._handlers[header.msg]) {
			handled = true;
			self._handlers[header.msg].call(self, protobuf ? body : ByteBuffer.wrap(body, ByteBuffer.LITTLE_ENDIAN));
		}

		var msgName = header.msg;
		for (var i in Language) {
			if(Language.hasOwnProperty(i) && Language[i] == header.msg) {
				msgName = i;
				break;
			}
		}

		self.emit('debug', "Got " + (handled ? "handled" : "unhandled") + " GC message " + msgName + (protobuf ? " (protobuf)" : "") + (!self.haveGCSession ? " (NO SESSION?)" : ""));
	});
	
	// "extend" the default steam.gamesPlayed function so we can catch when CS:GO starts up
	var gamesPlayed = steam.gamesPlayed;
	steam.gamesPlayed = function(input) {
		var appids = input;

		if(appids.games_played) {
			appids = appids.games_played;
		}

		if(!(appids instanceof Array)) {
			appids = [appids];
		}

		self._isInCSGO = false;
		for(var i = 0; i < appids.length; i++) {
			if(appids[i] == 730 || appids[i].game_id == 730) {
				self._isInCSGO = true;
				break;
			}
		}

		if (self._isInCSGO) {
			if (!self.haveGCSession) {
				self.emit('debug', "Connecting because we're playing CS:GO");
				self._connect();
			}
		} else {
			if (self._helloTimer) {
				clearTimeout(self._helloTimer);
				self._helloTimer = null;
				delete self._helloTimerMs;
			}

			self.emit('debug', "Making sure we're disconnected because we're not playing CS:GO");
			self.haveGCSession = false;
			self._hadGCSession = false;
		}
		
		gamesPlayed.call(steam, appids);
	};
	
	this._steam.on('loggedOff', onSteamLoggedOff);
	this._steam.on('disconnected', onSteamLoggedOff);

	function onSteamLoggedOff() {
		self._isInCSGO = false;
		self._hadGCSession = self.haveGCSession;
		if (self.haveGCSession) {
			self.emit('debug', "Emitting disconnectedFromGC because we're logged off of Steam");
			self.emit('disconnectedFromGC', GlobalOffensive.GCConnectionStatus.NO_SESSION);
			self.haveGCSession = false;
		}
	}
	
	this._steam.on('error', function(e) {
		self._isInCSGO = false;
		self._hadGCSession = false;
		if (self.haveGCSession) {
			self.emit('debug', "Emitting disconnectedFromGC due to Steam error");
			self.emit('disconnectedFromGC', GlobalOffensive.GCConnectionStatus.NO_SESSION);
			self.haveGCSession = false;
		}
	});
	
	this._steam.on('logOnResponse', function(response) {
		if(response.eresult == Steam.EResult.OK && self._hadGCSession) {
			self._connect();
			self._hadGCSession = false;
		}
	});
}

GlobalOffensive.prototype._connect = function() {
	if (!this._isInCSGO || this._helloTimer) {
		this.emit('debug', "Not trying to connect due to " + (!this._isInCSGO ? "not in CS:GO" : "has helloTimer"));
		return; // We're not in CS:GO or we're already trying to connect
	}
	
	var self = this;
	this._helloTimer = setTimeout(sendHello, 500);

	function sendHello() {
		if (!self._isInCSGO) {
			self.emit('debug', "Not sending hello because we're no longer in CS:GO");
			delete self._helloTimer;
			return;
		} else if (self.haveGCSession) {
			self.emit('debug', "Not sending hello because we have a session");
			clearTimeout(self._helloTimer);
			delete self._helloTimer;
			return;
		}

		self._send(Language.ClientHello, Protos.CMsgClientHello, {});
		self._helloTimerMs = Math.min(60000, (self._helloTimerMs || 1000) * 2); // exponential backoff, max 60 seconds
		self._helloTimer = setTimeout(sendHello, self._helloTimerMs);
		self.emit('debug', "Sending hello, setting timer for next attempt to " + self._helloTimerMs + " ms");
	}

};

GlobalOffensive.prototype._send = function(type, protobuf, body) {
	if(!this._steam.loggedOn) {
		return false;
	}
	
	var msgName = type;
	for(var i in Language) {
		if(Language.hasOwnProperty(i) && Language[i] == type) {
			msgName = i;
			break;
		}
	}
	
	this.emit('debug', "Sending GC message " + msgName);
	
	if(protobuf) {
		this._gc.send({"msg": type, "proto": {}}, (new protobuf(body)).toBuffer());
	} else {
		// This is a ByteBuffer
		this._gc.send({"msg": type}, body.flip().toBuffer());
	}
	
	return true;
};

GlobalOffensive.prototype.requestLiveGames = function() {
	this._send(Language.MatchListRequestCurrentLiveGames, Protos.CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames, {});
};

GlobalOffensive.prototype.requestRecentGames = function(steamid) {
	if (typeof steamid === 'object') {
		steamid = steamid.toString();
	}

	var sid = new SteamID(steamid);

	if (!sid.isValid() || sid.universe != SteamID.Universe.PUBLIC || sid.type != SteamID.Type.INDIVIDUAL || sid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.MatchListRequestRecentUserGames, Protos.CMsgGCCStrike15_v2_MatchListRequestRecentUserGames, {
		accountid: sid.accountid
	});
};

GlobalOffensive.prototype.requestLiveGameForUser = function(steamid) {
	if (typeof steamid === 'object') {
		steamid = steamid.toString();
	}

	var sid = new SteamID(steamid);

	if (!sid.isValid() || sid.universe != SteamID.Universe.PUBLIC || sid.type != SteamID.Type.INDIVIDUAL || sid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.MatchListRequestLiveGameForUser, Protos.CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser, {
		accountid: sid.accountid
	});
};

GlobalOffensive.prototype.inspectItem = function(owner, assetid, d, callback) {
	var match;
	if (typeof owner === 'string' && (match = owner.match(/[SM](\d+)A(\d+)D(\d+)$/))) {
		callback = assetid;
		owner = match[1];
		assetid = match[2];
		d = match[3];
	}

	var msg = {
		"paramA": assetid,
		"paramD": d,
		"paramS": 0,
		"paramM": 0
	};

	if (typeof owner === 'object') {
		owner = owner.toString();
	}

	try {
		var sid = new SteamID(owner);
		if (!sid.isValid() || sid.universe != SteamID.Universe.PUBLIC || sid.type != SteamID.Type.INDIVIDUAL || sid.instance != SteamID.Instance.DESKTOP) {
			throw 0;
		}
		// it's a valid steamid
		msg.paramS = owner;
	} catch (e) {
		msg.paramM = owner;
	}

	this._send(Language.Client2GCEconPreviewDataBlockRequest, Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest, msg);
	if (callback) {
		this.once('inspectItemInfo#' + assetid, callback);
	}
};

GlobalOffensive.prototype.requestPlayersProfile = function(steamid, callback) {
	if (typeof steamid === 'object') {
		steamid = steamid.toString();
	}

	var sid = new SteamID(steamid);

	if (!sid.isValid() || sid.universe != SteamID.Universe.PUBLIC || sid.type != SteamID.Type.INDIVIDUAL || sid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.ClientRequestPlayersProfile, Protos.CMsgGCCStrike15_v2_ClientRequestPlayersProfile, {
		accountId: sid.accountid,
		requestLevel: 32
	});

	if (callback) {
		this.once('playersProfile#' + sid.getSteamID64(), callback);
	}
};

GlobalOffensive.prototype.deleteItem = function(item) {
	var buffer = new ByteBuffer(8, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(item);
	this._send(Language.Delete, null, buffer);
};

GlobalOffensive.prototype._handlers = {};

function coerceToLong(num, signed) {
	return typeof num === 'string' ? new ByteBuffer.Long.fromString(num, !signed, 10) : num;
}

require('./enums.js');
require('./handlers.js');
