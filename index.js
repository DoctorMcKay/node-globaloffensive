var fs = require('fs');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');

var protomask = 0x80000000;

var Language = require('./language.js');
var Protos = require('./protos.js');

module.exports = GlobalOffensive;

require('util').inherits(GlobalOffensive, require('events').EventEmitter);

function GlobalOffensive(steam) {
	this._steam = steam;
	this.haveGCSession = false;
	this._hadGCSession = false;
	this._isInCSGO = false;
	
	var self = this;
	
	// "extend" the default steam.gamesPlayed function so we can catch when CS:GO starts up
	var gamesPlayed = steam.gamesPlayed;
	steam.gamesPlayed = function(appids) {
		if(appids.indexOf(730) != -1) {
			self._isInCSGO = true;
			if(!self.haveGCSession) {
				self._connect();
			}
		} else {
			if(self._helloInterval) {
				clearInterval(self._helloInterval);
				self._helloInterval = null;
			}
			
			self._isInCSGO = false;
			self.haveGCSession = false;
			self._hadGCSession = false;
		}
		
		gamesPlayed.call(steam, appids);
	};
	
	steam.on('fromGC', function(appID, type, body) {
		if(appID != 730) {
			// Not from the CS:GO GC
			return;
		}
		
		var protobuf = !!(type & protomask);
		type &= ~protomask;
		
		if(self._handlers[type]) {
			self._handlers[type].call(self, protobuf ? body : ByteBuffer.wrap(body, ByteBuffer.LITTLE_ENDIAN));
		} else {
			var msgName = type;
			for(var i in Language) {
				if(Language[i] == type) {
					msgName = i;
					break;
				}
			}
			
			self.emit('debug', "Got unhandled GC message " + msgName + (protobuf ? " (protobuf)" : ""));
		}
	});
	
	steam.on('loggedOff', function() {
		self._isInCSGO = false;
		self._hadGCSession = self.haveGCSession;
		if(self.haveGCSession) {
			self.emit('disconnectedFromGC', GlobalOffensive.GCGoodbyeReason.NO_SESSION);
			self.haveGCSession = false;
		}
	});
	
	steam.on('error', function(e) {
		self._isInCSGO = false;
		self._hadGCSession = false;
		if(self.haveGCSession) {
			self.emit('disconnectedFromGC', GlobalOffensive.GCGoodbyeReason.NO_SESSION);
			self.haveGCSession = false;
		}
	});
	
	steam.on('loggedOn', function() {
		if(self._hadGCSession) {
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
	this._helloInterval = setInterval(function() {
		if(self.haveGCSession) {
			clearInterval(self._helloInterval);
			self._helloInterval = null;
			return;
		}
		
		self._send(Language.ClientHello, Protos.CMsgClientHello, {});
	}, 5000);
};

GlobalOffensive.prototype._send = function(type, protobuf, body) {
	if(!this._steam.loggedOn) {
		return false;
	}
	
	var msgName = type;
	for(var i in Language) {
		if(Language[i] == type) {
			msgName = i;
			break;
		}
	}
	
	this.emit('debug', "Sending GC message " + msgName);
	
	if(protobuf) {
		this._steam.toGC(730, type | protomask, (new protobuf(body)).toBuffer());
	} else {
		// This is a ByteBuffer
		this._steam.toGC(730, type, body.flip().toBuffer());
	}
	
	return true;
};

GlobalOffensive.prototype.requestLiveGames = function() {
	this._send(Language.MatchListRequestCurrentLiveGames, Protos.CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames, {});
};

GlobalOffensive.prototype._handlers = {};

function coerceToLong(num, signed) {
	return typeof num === 'string' ? new ByteBuffer.Long.fromString(num, !signed, 10) : num;
}

require('./enums.js');
require('./handlers.js');
