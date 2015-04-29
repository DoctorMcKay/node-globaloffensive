var fs = require('fs');

var GlobalOffensive = require('./index.js');
var Language = require('./language.js');
var Protos = require('./protos.js');

var handlers = GlobalOffensive.prototype._handlers;

// ClientWelcome and ClientConnectionStatus
handlers[Language.ClientWelcome] = function(body) {
	var proto = Protos.CMsgClientWelcome.decode(body);
	
	if(proto.outofdateSubscribedCaches && proto.outofdateSubscribedCaches.length) {
		proto.outofdateSubscribedCaches[0].objects.forEach(function(cache) {
			switch(cache.typeId) {
				case 1:
					// Inventory
					var items = cache.objectData.map(function(object) {
						var item = Protos.CSOEconItem.decode(object);
						var isNew = (item.inventory >>> 30) & 1;
						item.id = item.id.toString();
						item.originalId = item.originalId.toString();
						item.position = (isNew ? 0 : item.inventory & 0xFFFF);
						return item;
					});
					
					this.inventory = items;
					break;
				/*case 7:
					// Account metadata - this doesn't appear to be useful in CS:GO
					var data = Protos.CSOEconGameAccountClient.decode(cache.objectData[0]);
					break;*/
				/*case 43:
					// Most likely item presets (multiple)	
					var data = Protos.CSOSelectedItemPreset.decode(cache.objectData[0]);
					break;*/
				default:
					this.emit('debug', "Unknown SO type " + cache.typeId + " with " + cache.objectData.length + " items");
					break;
			}
		}.bind(this));
	}
	
	this.inventory = this.inventory || [];
	
	this.haveGCSession = true;
	this.emit('connectedToGC');
};

handlers[Language.MatchmakingGC2ClientHello] = function(body) {
	var proto = Protos.CMsgGCCStrike15_v2_MatchmakingGC2ClientHello.decode(body);
	this.emit('accountData', proto);
	this.accountData = proto;
};

handlers[Language.ClientConnectionStatus] = function(body) {
	var proto = Protos.CMsgConnectionStatus.decode(body);
	this.emit('connectionStatus', proto.status, proto);
	
	if(proto.status != GlobalOffensive.GCConnectionStatus.HAVE_SESSION) {
		this.emit('disconnectedFromGC', proto.status);
		
		if(this.haveGCSession) {
			this._connect(); // Try to reconnect
			this.haveGCSession = false;
		}
	}
};

// MatchList
handlers[Language.MatchList] = function(body) {
	var proto = Protos.CMsgGCCStrike15_v2_MatchList.decode(body);
	this.emit('matchList', proto.matches, proto);
};

// SO
handlers[Language.SO_Create] = function(body) {
	var proto = Protos.CMsgSOSingleObject.decode(body);
	this._handleSOCreate(proto);
};

GlobalOffensive.prototype._handleSOCreate = function(proto) {
	if(proto.typeId != 1) {
		return; // Not an item
	}
	
	if(!this.inventory) {
		return; // We don't have our inventory yet! (this shouldn't be possible in CS:GO, but wutevs)
	}
	
	var item = Protos.CSOEconItem.decode(proto.objectData);
	item.id = item.id.toString();
	item.originalId = item.originalId.toString();
	item.position = item.inventory & 0x0000FFFF;
	this.inventory.push(item);
	this.emit('itemAcquired', item);
};

handlers[Language.SO_Update] = function(body) {
	var proto = Protos.CMsgSOSingleObject.decode(body);
	this._handleSOUpdate(proto);
};

GlobalOffensive.prototype._handleSOUpdate = function(so) {
	if(so.typeId != 1) {
		return; // Not an item, we don't care
	}
	
	if(!this.inventory) {
		return; // We somehow don't have our inventory yet!
	}
	
	var item = Protos.CSOEconItem.decode(so.objectData);
	item.id = item.id.toString();
	item.originalId = item.originalId.toString();
	item.position = item.inventory & 0x0000FFFF;
	for(var i = 0; i < this.inventory.length; i++) {
		if(this.inventory[i].id == item.id) {
			var oldItem = this.inventory[i];
			this.inventory[i] = item;
			
			this.emit('itemChanged', oldItem, item);
			break;
		}
	}
};

handlers[Language.SO_Destroy] = function(body) {
	var proto = Protos.CMsgSOSingleObject.decode(body);
	this._handleSODestroy(proto);
};

GlobalOffensive.prototype._handleSODestroy = function(proto) {
	if(proto.typeId != 1) {
		return; // Not an item
	}
	
	var item = Protos.CSOEconItem.decode(proto.objectData);
	item.id = item.id.toString();
	var itemData = null;
	for(var i = 0; i < this.inventory.length; i++) {
		if(this.inventory[i].id == item.id) {
			itemData = this.inventory[i];
			this.inventory.splice(i, 1);
			break;
		}
	}
	
	this.emit('itemRemoved', itemData);
};


handlers[Language.SO_UpdateMultiple] = function(body) {
	var proto = Protos.CMsgSOMultipleObjects.decode(body);
	
	// Added
	(proto.objectsAdded || []).forEach(function(item) {
		this._handleSOCreate(item);
	}.bind(this));
	
	// Modified
	(proto.objectsModified || []).forEach(function(item) {
		this._handleSOUpdate(item);
	}.bind(this));
	
	// Destroyed
	(proto.objectsRemoved || []).forEach(function(item) {
		this._handleSODestroy(item);
	}.bind(this));
};
