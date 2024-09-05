# Counter-Strike Global Offensive for Node.js
[![npm version](https://img.shields.io/npm/v/globaloffensive.svg)](https://npmjs.com/package/globaloffensive)
[![npm downloads](https://img.shields.io/npm/dm/globaloffensive.svg)](https://npmjs.com/package/globaloffensive)
[![license](https://img.shields.io/npm/l/globaloffensive.svg)](https://github.com/DoctorMcKay/node-globaloffensive/blob/master/LICENSE)

This module provides a very flexible interface for interacting with the [CS2](http://store.steampowered.com/app/730)
Game Coordinator. It's designed to work with a
[node-steam-user SteamUser](https://github.com/DoctorMcKay/node-steam-user) instance.

This is based off of [node-tf2](https://github.com/DoctorMcKay/node-tf2).

**You will need steam-user v4.2.0 or later and Node.js v14 or later to use globaloffensive v3.**  
You will need steam-user v4.2.0 or later and Node.js v8 or later to use globaloffensive v2.

# Setup

First, install it from npm:

	$ npm install globaloffensive

Require the module and call its constructor with your SteamUser instance:

```js
const SteamUser = require('steam-user');
const GlobalOffensive = require('globaloffensive');

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

As of v2.2.0, some special properties are populated on items in this array (and also item objects in `itemAcquired` and
related events), where applicable:

- `position` - This item's position in your inventory. If the item is new and unacknowledged, this is `0`
- `custom_name` - This item's custom name, applied via name tag
- `paint_index` - The item's paint index
- `paint_seed` - The item's paint seed
- `paint_wear` - The item's paint wear, as a float (often ignorantly referred to as "float value")
- `kill_eater_value` - Tracked stat value for StatTrak weapons
- `kill_eater_score_type` - What type of stat is tracked for StatTrak weapons. Currently only 0 (Kills) is available.
- `quest_id`
- `tradable_after` - A `Date` object representing when this item will become tradable. May be a date in the past, as this is not removed when the date is reached.
- `stickers` - An array of objects:
    - `slot` - The sticker slot number, 0-5
    - `sticker_id`
    - `wear` - The sticker's wear (how scratched it is), as a float. `null` if not scratched at all.
    - `scale` - Float, `null` if not applicable
    - `rotation` - Float, `null` if not applicable
    - `tint_id`
    - `offset_x` - Float, `null` if not applicable
    - `offset_y` - Float, `null` if not applicable
- `casket_id` - If this item is contained in a casket (storage unit), this is a string containing that casket's item ID
- `casket_contained_item_count` - If this item is a casket (storage unit), this is a count of how many items it contains

Note that if any of the above attributes are not applicable, then they will not exist in the item object.

It appears that under some circumstances, the GC might load items from storage units into your inventory without
calling [`getCasketContents`](#getcasketcontentscasketid-callback), so if you are using this property to see what items
are in your inventory, you will need to check `casket_id` to filter out items stored in storage units.

# Methods

### Constructor(steamClient)

When instantiating your node-globaloffensive instance, you need to pass your active Steam.SteamClient instance as the sole parameter, as shown here:

```js
var csgo = new GlobalOffensive(steamClient);
```

### requestGame(shareCodeOrDetails)
- `shareCodeOrDetails` - Either a share code as a string, or an object containing properties `matchId`, `outcomeId`, `token`

**v2.2.0 or later is required to use this method**

Requests stats for a historical game. Listen for the `matchList` event to get your response.

### requestLiveGames()

Request a list of current live tournament games.
This is the list you see in the client under Watch -> Live.
Listen for the `matchList` event to get your response.

### openContainer(containerid[, keyid])

- `containerid` - The asset ID of the container.
- `keyid` - The asset ID of the key, defaults to 0 if not provided as to unlock a keyless container.

Opens a container. Listen for the `itemAcquired` event to get the item unboxed (if open was successful)

### requestRecentGames(steamid)

Request a list of recent games (max. 8). This is the list you see in the client under Watch -> Your Matches.
Listen for the `matchList` event to get your response.

### requestLiveGameForUser(steamid)

Request live game info for a specific user. Listen for the `matchList` event to get your response.

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
			- `scale` - This property is only not null on the early dreamhack 2013 stickers. It is no longer used.
			- `rotation` - This property is only not null on the early dreamhack 2013 stickers. It is no longer used.
			- `tint_id`
			- `offset_x` - Float, `null` if not applicable
            - `offset_y` - Float, `null` if not applicable
		- `inventory` - An integer which has no use to you
		- `origin` - The numeric origin of this item
		- `questid` - You can ignore this
		- `dropreason`
		- `musicindex`
		- `entindex`

**v1.1.0 or later is required to use this method**

Sends the same request to the GC that the official client sends when you inspect an item. If all parameters are correct
and the GC is in a good mood, returns the item's data. Using this for an item your account owns is useless as all
the data is already available in `inventory`.

The response will arrive in the callback and in the `inspectItemInfo` event.

As of v2.1.0, the request will time out if no response is received in 10 seconds. If this happens,
[`inspectItemTimedOut`](#inspectitemtimedout) will be emitted.

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
			- `rank_id` - Rank (0-18), starting at 0 for unranked
			- `wins` - Number of wins
			- `rank_change` - Seems to always be `null`
			- `rank_type_id` - Rank type (6: Matchmaking, 7: Wingman, 10: Danger Zone)
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
		- `player_level` - Private rank level
		- `player_cur_xp` - Current XP, starting at 327680000 (level % = (player_cur_xp - 327680000) / 5000)
		- `player_xp_bonus_flags` - Seems to always be `null`
		- `rankings` - Array of ranking infos
			- `account_id`
			- `rank_id` - Rank (0-18), starting at 0 for unranked
			- `wins` - Number of wins
			- `rank_change` - Seems to always be `null`
			- `rank_type_id` - Rank type (6: Matchmaking, 7: Wingman, 10: Danger Zone)
	
**v1.2.0 or later is required to use this method**

Sends the same request to the GC that viewing the CSGO player profile from the in-game friendlist sends. Returns the same information that you would get in-game.
This returns the same protobuf that is used when you request your own profile data, so most of it stays empty.

### nameItem(nameTagId, itemId, name)
- `nameTagId` - The ID of the name tag you want to consume to do this
- `itemId` - The ID of the item you want to rename
- `name` - A string containing the item's new name

**v2.1.0 or later is required to use this method**

Renames a particular item in your inventory, using a given name tag. You can rename storage units for free by passing
`0` as the `nameTagId`.

### craft(items, recipe)
- `items` - An array of item IDs to craft
- `recipe` - An integer indicating which crafting recipe to use

**v2.3.0 or later is required to use this method**

Craft `items` together into a new item using a specific `recipe`. `items` should be an array of item IDs to craft.
You will receive a [`craftingComplete`](#craftingcomplete) event in response. If crafting succeeded, you will also get
[`itemRemoved`](#itemremoved) events for each item you spent, and [`itemAcquired`](#itemacquired) events for each item
you received.

Recipes are defined in items_game.txt. Available recipes as of late 2022 are:

- 0 = Trade-Up: 10x Consumer Grade → 1x Industrial Grade
- 1 = Trade-Up: 10x Industrial Grade → 1x Mil-Spec Grade
- 2 = Trade-Up: 10x Mil-Spec Grade → 1x Restricted
- 3 = Trade-Up: 10x Restricted → 1x Classified
- 4 = Trade-Up: 10x Classified → 1x Covert
- 10 = Trade-Up: 10x StatTrak Consumer Grade → 1x StatTrak Industrial Grade
- 11 = Trade-Up: 10x StatTrak Industrial Grade → 1x StatTrak Mil-Spec Grade
- 12 = Trade-Up: 10x StatTrak Mil-Spec Grade → 1x StatTrak Restricted
- 13 = Trade-Up: 10x StatTrak Restricted → 1x StatTrak Classified
- 14 = Trade-Up: 10x StatTrak Classified → 1x StatTrak Covert

### deleteItem(itemId)
- `itemId` - The ID of the item you want to delete

**1.3.0 or later is required to use this method**

Deletes a particular item from your inventory. **This is a destructive operation, which cannot be undone.**

### addToCasket(casketId, itemId)
- `casketId` - The ID of the casket (storage unit) you want to put an item into
- `itemId` - The ID of the item you want to put into the casket

**v2.1.0 or later is required to use this method**

Put an item in your inventory into a casket (storage unit) you own. Assuming the request succeeds,
[`itemRemoved`](#itemremoved) will be emitted for the item that was put into the casket, and
[`itemCustomizationNotification`](#itemcustomizationnotification) will be emitted with notification type
`CasketAdded` for the casket.

### removeFromCasket(casketId, itemId)
- `casketId` - The ID of the casket (storage unit) you want to remove an item from
- `itemId` - The ID of the item you want to remove from the casket

**v2.1.0 or later is required to use this method**

Remove an item from a casket (storage unit) you own and put it into your inventory. Assuming the request succeeds,
[`itemAcquired`](#itemremoved) will be emitted for the item that was removed from the casket, and
[`itemCustomizationNotification`](#itemcustomizationnotification) will be emitted with notification type
`CasketRemoved` for the casket.

### getCasketContents(casketId, callback)
- `casketId` - The ID of the casket (storage unit) you want to get the contents of
- `callback` - A function to be called once the contents are loaded
    - `err` - An `Error` object on failure, or `null` on success
    - `items` - An array of item objects, the same structure as objects in [`inventory`](#inventory)

**v2.1.0 or later is required to use this method**

Loads the contents of a storage unit. Note that calling this will have the GC load the contents of the storage unit
using the same mechanism as your actual inventory, so items in the storage unit will appear in the [`inventory`](#inventory)
property, and `itemAcquired` will be emitted for each item. Each item in your [`inventory`](#inventory) that is contained
inside of a storage unit has a property `casket_id`, the value of which is a string containing the ID of the storage unit
that contains that item.

It appears that under some circumstances, the GC might load these items into your inventory without calling this method,
so if you are using [`inventory`](#inventory) to see what items are in your inventory, you will need to check `casket_id`
to filter out items stored in storage units.
	
# Events

### connectedToGC

Emitted when a GC connection is established. You shouldn't use any methods before you receive this. Note that this may be received (after it's first emitted) without any disconnectedFromGC event being emitted. In this case, the GC simply restarted.

### disconnectedFromGC
- `reason` - A value from the `GCConnectionStatus` enum

Emitted when we're disconnected from the GC for any reason. node-globaloffensive will automatically try to reconnect and will emit `connectedToGC` when reconnected.

Example usage:

```js
const GlobalOffensive = require('globaloffensive');
let csgo = new GlobalOffensive(steamUser);

csgo.on('disconnectedFromGC', (reason) => {
    if (reason == GlobalOffensive.GCConnectionStatus.GC_GOING_DOWN) {
        console.log('GC going down');    
    }
});
```

### error
- `err` - An `Error` object

Emitted when we encounter a fatal error attempting to connect to the GC. If this event is not handled, the app will crash.

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
		- `tint_id`
        - `offset_x` - Float, `null` if not applicable
        - `offset_y` - Float, `null` if not applicable
	- `inventory` - An integer which has no use to you
	- `origin` - The numeric origin of this item
	- `questid` - You can ignore this
	- `dropreason`
	- `musicindex`
	- `entindex`

**v1.1.0 or later is required to use this method**

Emitted in response to an `inspectItem()` call.

### inspectItemTimedOut
- `assetid` - The asset ID of the item we attempted to inspect

**v2.1.0 or later is required to use this method**

Emitted if `inspectItem()` is called but we don't receive a timely reply to the request.

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

### itemCustomizationNotification
- `itemIds` - An array of item IDs (as strings) to which something happened
- `notificationType` - A value from the `ItemCustomizationNotification` enum

**v2.1.0 or later is required to use this event**

Emitted when the GC informs us that an item is customized somehow. Example:

```js
const GlobalOffensive = require('globaloffensive');
let csgo = new GlobalOffensive(steamUser);

csgo.on('itemCustomizationNotification', (itemIds, notificationType) => {
    if (notificationType == GlobalOffensive.ItemCustomizationNotification.CasketInvFull) {
        console.log('Storage unit ' + itemIds[0] + ' is full');
    }
});
```

### craftingComplete
- `recipe` - The ID of the recipe that was used to perform this craft, or -1 on failure
- `itemsGained` - An array of IDs of items that were gained as a result of this craft

**v2.3.0 or later is required to use this event**

Emitted when a craft initiated by the [`craft`](#craftitems-recipe) method finishes.

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
		- `rank_id` - Rank (0-18), starting at 0 for unranked
		- `wins` - Number of wins
		- `rank_change` - Seems to always be `null`
		- `rank_type_id` - Rank type (6: Matchmaking, 7: Wingman, 10: Danger Zone)
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
	- `player_level` - Private rank level
	- `player_cur_xp` - Current XP, starting at 327680000 (level % = (player_cur_xp - 327680000) / 5000)
	- `player_xp_bonus_flags` - Seems to always be `null`
	- `rankings` - Array of ranking infos
		- `account_id`
		- `rank_id` - Rank (0-18), starting at 0 for unranked
		- `wins` - Number of wins
		- `rank_change` - Seems to always be `null`
		- `rank_type_id` - Rank type (6: Matchmaking, 7: Wingman, 10: Danger Zone)

Emitted in response to an `requestPlayersProfile()` call.
