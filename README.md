# Counter-Strike Global Offensive for Node.js

This module provides a very flexible interface for interacting with the [CS:GO](http://store.steampowered.com/app/730) Game Coordinator. It's designed to work with a [node-steam](https://github.com/seishun/node-steam) instance.

This is based off of [node-tf2](https://github.com/DoctorMcKay/node-tf2).

# Setup

First, install it from npm:

	$ npm install globaloffensive

Require the module and call its constructor with your node-steam instance:

```js
var Steam = require('steam');
var GlobalOffensive = require('globaloffensive');

var client = new Steam.SteamClient();
var csgo = new GlobalOffensive(client);
```

To initialize your GC connection, just launch CS:GO via node-steam normally:

```js
client.gamesPlayed([730]);
```

node-globaloffensive will emit a `connectedToGC` event when the game coordinator connection has been successfully established. You shouldn't try to do anything before you receive that event.

# Enums

There are some enums that are used by various methods and events. You can find them in `enums.js`.

# Properties

There are a few useful read-only properties available to you.

### haveGCSession

`true` if we're currently connected to the GC, `false` otherwise. You should only call methods when we have an active GC session.

### accountData

A big object containing account data and some statistics including players in-game. Undefined until `accountData` is emitted.

### inventory

An array containing the items in your inventory. Undefined until `connectedToGC` is emitted.

# Methods

### Constructor(steamClient)

When instantiating your node-globaloffensive instance, you need to pass your active Steam.SteamClient instance as the sole parameter, as shown here:

```js
var csgo = new GlobalOffensive(steamClient);
```

### requestLiveGames()

Request a list of current live tournament games. This is the list you see in the client under Watch -> Live. Listen for the `matchList` event to get your response.

# Events

### connectedToGC

Emitted when a GC connection is established. You shouldn't use any methods before you receive this. Note that this may be received (after it's first emitted) without any disconnectedFromGC event being emitted. In this case, the GC simply restarted.

### disconnectedFromGC

- `reason` - A value from the `GCConnectionStatus` enum

Emitted when we're disconnected from the GC for any reason. node-globaloffensive will automatically try to reconnect and will emit `connectedToGC` when reconnected.

### connectionStatus

- `status` - A value from the `GCConnectionStatus` enum
- `data` - The raw data that was received

Emitted when we receive the status of our connection to the GC. Exactly when this is emitted is currently unknown. **This may be removed in the future.**

### matchList

- `matches` - An array of matches
- `data` - The raw data that was received

Emitted when we receive a match list, especially after a `requestLiveGames()` call. This may be emitted at other times. Presently, the exact behavior is unknown.

### itemAcquired

- `item` - The item that you received

Emitted when you receive a new item.

### itemChanged

- `oldItem` - The item's previous state
- `item` - The item's new state

Emitted when an item in your inventory changes in some way.

### itemRemoved

- `item` - The item that you lost

Emitted when an item is removed from your inventory.
