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

		if(self._handlers[header.msg]) {
			self._handlers[header.msg].call(self, protobuf ? body : ByteBuffer.wrap(body, ByteBuffer.LITTLE_ENDIAN));
		} else {
			var msgName = type;
			for(var i in Language) {
				if(Language.hasOwnProperty(i) && Language[i] == type) {
					msgName = i;
					break;
				}
			}

			self.emit('debug', "Got unhandled GC message " + msgName + (protobuf ? " (protobuf)" : ""));
		}
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

		if(self._isInCSGO) {
			if(!self.haveGCSession) {
				self._connect();
			}
		} else {
			if(self._helloInterval) {
				clearInterval(self._helloInterval);
				self._helloInterval = null;
			}

			self.haveGCSession = false;
			self._hadGCSession = false;
		}
		
		gamesPlayed.call(steam, appids);
	};
	
	this._steam.on('loggedOff', function() {
		self._isInCSGO = false;
		self._hadGCSession = self.haveGCSession;
		if(self.haveGCSession) {
			self.emit('disconnectedFromGC', GlobalOffensive.GCConnectionStatus.NO_SESSION);
			self.haveGCSession = false;
		}
	});
	
	this._steam.on('error', function(e) {
		self._isInCSGO = false;
		self._hadGCSession = false;
		if(self.haveGCSession) {
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
	if(!this._isInCSGO || this._helloInterval) {
		return; // We're not in CS:GO or we're already trying to connect
	}
	
	var self = this;

	function sendHello() {
		if(self.haveGCSession) {
			clearInterval(self._helloInterval);
			self._helloInterval = null;
			return;
		}
		
		self._send(Language.ClientHello, Protos.CMsgClientHello, {});
	}

	this._helloInterval = setInterval(sendHello, 5000);
	sendHello();
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
		if (!sid.isValid()) {
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

GlobalOffensive.prototype._handlers = {};

function coerceToLong(num, signed) {
	return typeof num === 'string' ? new ByteBuffer.Long.fromString(num, !signed, 10) : num;
}

require('./enums.js');
require('./handlers.js');
