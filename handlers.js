var fs = require('fs');

var GlobalOffensive = require('./index.js');
var Language = require('./language.js');
var Protos = require('./protos.js');

var handlers = GlobalOffensive.prototype._handlers;

// ClientWelcome and ClientConnectionStatus
handlers[Language.ClientWelcome] = function(body) {
	this.haveGCSession = true;
	this.emit('connectedToGC');
};

handlers[Language.MatchmakingGC2ClientHello] = function(body) {
	var proto = Protos.CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.decode(body);
	this.emit('accountData', proto);
	this.accountData = proto;
};

handlers[Language.ClientConnectionStatus] = function(body) {
	var proto = Protos.ClientConnectionStatus.decode(body);
	this.emit('connectionStatus', body.status, body);
	
	if(body.status != GlobalOffensive.GCConnectionStatus.HAVE_SESSION) {
		this.emit('disconnectedFromGC', body.status);
		
		if(this.haveGCSession) {
			this._connect(); // Try to reconnect
			this.haveGCSession = false;
		}
	}
};

// MatchList
handlers[Language.MatchList] = function(body) {
	var proto = Protos.CMsgGCCStrike15_v2_MatchList.decode(body);
	console.log(proto);
	this.emit('matchList', proto.matches, proto);
};
