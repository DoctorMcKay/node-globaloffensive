# Counter-Strike Global Offensive for Node.js
[![license](https://img.shields.io/npm/l/globaloffensive.svg)](https://github.com/Yaroslav-95/node-globaloffensive/blob/master/LICENSE)

This is a fork of DoctorMcKay's "globaloffensive" project. It includes a missing method in the original project - `requestGame(matchid, outcomeid, token)`.

This module provides a very flexible interface for interacting with the [CS:GO](http://store.steampowered.com/app/730)
Game Coordinator. It's designed to work with a
[node-steam-user SteamUser](https://github.com/DoctorMcKay/node-steam-user) instance.

This is based off of [node-tf2](https://github.com/DoctorMcKay/node-tf2).

**You will need node-steam-user v4.2.0 or later and Node.js v8 or later to use node-globaloffensive v2.**

# Setup

First, install it from npm:

	$ npm install @yaroslav-95/globaloffensive

Require the module and call its constructor with your SteamUser instance:

```js
const SteamUser = require('steam-user');
const GlobalOffensive = require('@yaroslav-95/globaloffensive');

let user = new SteamUser();
let csgo = new GlobalOffensive(user);
```

To initialize your GC connection, just launch CS:GO via SteamUser normally:

```js
client.gamesPlayed([730]);
```

node-globaloffensive will emit a `connectedToGC` event when the game coordinator connection has been successfully
established. You shouldn't try to do anything before you receive that event.

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

### requestRecentGames(steamid)

Request a list of recent games (max. 8). This is the list you see in the client under Watch -> Your Matches. Listen for the `matchList` event to get your response.

### requestLiveGameForUser(steamid)

Request live game info for a specific user. Listen for the `matchList` event to get your response.

### requestGame(matchid, outcomeid, token)

Request info for a finished game. Listen for the `matchList` event to get your response.

matchid, outcomeid, and token can be obtained from a sharecode, by using the [globaloffensive-sharecode](https://www.npmjs.com/package/globaloffensive-sharecode) package.

### inspectItem(owner[, assetid][, d][, callback])
- `owner` - The numeric SteamID or market listing ID of the owning Steam account or market listing, as a string; or an entire inspect link.
- `assetid` - If `owner` is not an entire inspect link, this is the numeric asset ID of this item, as a string
- `d` - If `owner` is not an entire inspect link, this is the "D" number from the inspect link (the last number following the "D" character)
- `callback` - Optional. Called if all parameters are valid when Steam responds to us.
    - `item` - An object containing the item's data
        - `accountid` - Seems to always be `null`
        - `itemid` - The item's asset ID, as a string
        - `defindex` - The item's definition index
        - `paintindex` - The item's paint index
        - `rarity` - The item's numeric rarity
        - `quality` - The item's numeric quality
        - `paintwear` - The item's paint wear percentage, as a float between 0 and 1 (frequently and incorrectly called "float value")
        - `paintseed` - The item's paint seed
        - `killeaterscoretype` - What kind of statistic the StatTrak version of this item tracks (may be `null` if not StatTrak)
        - `killeatervalue` - The item's tracked statistic value (kills)
        - `customname` - The item's custom name via a name tag, or `null` if none
        - `stickers` - An array of objects describing the stickers applied to this item
            - `slot` - What slot this sticker is applied to
            - `sticker_id` - The ID of this type of sticker
            - `wear` - Either `null` (not scratched) or a float between 0 and 1 describing how much this sticker has been scratched
            - `scale` - Always `null`?
            - `rotation` - Always `null`?
        - `inventory` - An integer which has no use to you
        - `origin` - The numeric origin of this item
        - `questid` - You can ignore this

**v1.1.0 or later is required to use this method**

Sends the same request to the GC that the official client sends when you inspect an item. If all parameters are correct
and the GC is in a good mood, returns the item's data. Using this for an item your account owns is useless as all
the data is already available in `inventory`.

The response will arrive in the callback and in the `inspectItemInfo` event.

### requestPlayersProfile(steamid[, callback])
- `steamid` - The numeric SteamID of the Steam account to pull profile data for. Needs to be playing CSGO and be on the friend list of the requesting account.
- `callback` - Optional. Called if all parameters are valid when Steam responds to us.
    - `profile` - An object containing the profiledata
        - `account_id` - Steam account id
		- `ongoingmatch`
		- `global_stats` - Seems to always be `null`
		- `penalty_seconds`
		- `penalty_reason`
		- `vac_banned`
		- `ranking`
		    - `account_id`
		    - `rank_id` - Matchmaking rank (0-18), starting at 0 for unranked
		    - `wins` - Number of matchmaking wins
		    - `rank_change` - Seems to always be `null`
		- `commendation`
		    - `cmd_friendly` - The number of "friendly" commendations the account has received
		    - `cmd_teaching` - The number of "teaching" commendations the account has received
		    - `cmd_leader` - The number of "leader" commendations the account has received
		- `medals` - Achievement medals, their ranks and coins
		    - `medal_team`
		    - `medal_combat`
		    - `medal_weapon`
		    - `medal_global`
		    - `medal_arms`
		    - `display_items_defidx` - Array of coins
		    - `featured_display_item_defidx`
		- `my_current_event`
		- `my_current_event_teams`
		- `my_current_team`
		- `my_current_event_stages`
		- `survey_vote`
		- `activity`
		- `seconds_until_next_mission`

**v1.2.0 or later is required to use this method**

Sends the same request to the GC that viewing the CSGO player profile from the in-game friendlist sends. Returns the same information that you would get in-game.
This returns the same protobuf that is used when you request your own profile data, so most of it stays empty.

### deleteItem(item)
- `item` - The ID of the item you want to delete

**1.3.0 or later is required to use this method**

Deletes a particular item from your inventory. **This is a destructive operation, which cannot be undone.**

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

### inspectItemInfo
- `item` - An object containing the item's data
   - `accountid` - Seems to always be `null`
   - `itemid` - The item's asset ID, as a string
   - `defindex` - The item's definition index
   - `paintindex` - The item's paint index
   - `rarity` - The item's numeric rarity
   - `quality` - The item's numeric quality
   - `paintwear` - The item's paint wear percentage, as a float between 0 and 1 (frequently and incorrectly called "float value")
   - `paintseed` - The item's paint seed
   - `killeaterscoretype` - What kind of statistic the StatTrak version of this item tracks (may be `null` if not StatTrak)
   - `killeatervalue` - The item's tracked statistic value (kills)
   - `customname` - The item's custom name via a name tag, or `null` if none
   - `stickers` - An array of objects describing the stickers applied to this item
       - `slot` - What slot this sticker is applied to
       - `sticker_id` - The ID of this type of sticker
       - `wear` - Either `null` (not scratched) or a float between 0 and 1 describing how much this sticker has been scratched
       - `scale` - Always `null`?
       - `rotation` - Always `null`?
   - `inventory` - An integer which has no use to you
   - `origin` - The numeric origin of this item
   - `questid` - You can ignore this

**v1.1.0 or later is required to use this method**

Emitted in response to an `inspectItem()` call.

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

### playersProfile
- `profile` - An object containing the profile data
    - `account_id` - Steam account id
    - `ongoingmatch`
    - `global_stats` - Seems to always be `null`
    - `penalty_seconds`
    - `penalty_reason`
    - `vac_banned`
    - `ranking`
        - `account_id`
        - `rank_id` - Matchmaking rank (0-18), starting at 0 for unranked
        - `wins` - Number of matchmaking wins
        - `rank_change` - Seems to always be `null`
    - `commendation`
        - `cmd_friendly` - The number of "friendly" commendations the account has received
        - `cmd_teaching` - The number of "teaching" commendations the account has received
        - `cmd_leader` - The number of "leader" commendations the account has received
    - `medals` - Achievement medals, their ranks and coins
        - `medal_team`
        - `medal_combat`
        - `medal_weapon`
        - `medal_global`
        - `medal_arms`
        - `display_items_defidx` - Array of coins
        - `featured_display_item_defidx`
    - `my_current_event`
    - `my_current_event_teams`
    - `my_current_team`
    - `my_current_event_stages`
    - `survey_vote`
    - `activity`
    - `seconds_until_next_mission`

Emitted in response to an `requestPlayersProfile()` call.
