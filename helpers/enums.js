var GlobalOffensive = require('../index.js');

GlobalOffensive.GCConnectionStatus = {
	HAVE_SESSION: 0,
	GC_GOING_DOWN: 1,
	NO_SESSION: 2,
	NO_SESSION_IN_LOGON_QUEUE: 3,
	NO_STEAM: 4
};

GlobalOffensive.ItemCustomizationNotification = {
	NameItem: 1006,
	UnlockCrate: 1007,
	XRayItemReveal: 1008,
	XRayItemClaim: 1009,
	CasketTooFull: 1011,
	CasketContents: 1012,
	CasketAdded: 1013,
	CasketRemoved: 1014,
	CasketInvFull: 1015,
	NameBaseItem: 1019,
	RemoveItemName: 1030,
	RemoveSticker: 1053,
	ApplySticker: 1086,
	StatTrakSwap: 1088,
	ActivateFanToken: 9178,
	ActivateOperationCoin: 9179,
	GraffitiUnseal: 9185,
	GenerateSouvenir: 9204
};

GlobalOffensive.ECurrency = {
	k_ECurrencyFirst: 0,
	k_ECurrencyUSD: 0,
	k_ECurrencyGBP: 1,
	k_ECurrencyEUR: 2,
	k_ECurrencyRUB: 3,
	k_ECurrencyBRL: 4,
	// space for Dota currencies
	k_ECurrencyJPY: 8,
	k_ECurrencyNOK: 9,
	k_ECurrencyIDR: 10,
	k_ECurrencyMYR: 11,
	k_ECurrencyPHP: 12,
	k_ECurrencySGD: 13,
	k_ECurrencyTHB: 14,
	k_ECurrencyVND: 15,
	k_ECurrencyKRW: 16,
	k_ECurrencyTRY: 17,
	k_ECurrencyUAH: 18,
	k_ECurrencyMXN: 19,
	k_ECurrencyCAD: 20,
	k_ECurrencyAUD: 21,
	k_ECurrencyNZD: 22,
	k_ECurrencyPLN: 23,
	k_ECurrencyCHF: 24,
	k_ECurrencyCNY: 25,
	k_ECurrencyTWD: 26,
	k_ECurrencyHKD: 27,
	k_ECurrencyINR: 28,
	k_ECurrencyAED: 29,
	k_ECurrencySAR: 30,
	k_ECurrencyZAR: 31,
	k_ECurrencyCOP: 32,
	k_ECurrencyPEN: 33,
	k_ECurrencyCLP: 34,
	// NOTE: Not actually the Maximum currency value, but the Terminator for the possible currency code range.
	k_ECurrencyMax: 35,
	// make this a big number so we can avoid having to move it when we add another currency type
	k_ECurrencyInvalid: 255
};