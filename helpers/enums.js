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
	USD: 0,
	GBP: 1,
	EUR: 2,
	RUB: 3,
	BRL: 4,
	JPY: 8,
	NOK: 9,
	IDR: 10,
	MYR: 11,
	PHP: 12,
	SGD: 13,
	THB: 14,
	VND: 15,
	KRW: 16,
	TRY: 17,
	UAH: 18,
	MXN: 19,
	CAD: 20,
	AUD: 21,
	NZD: 22,
	PLN: 23,
	CHF: 24,
	CNY: 25,
	TWD: 26,
	HKD: 27,
	INR: 28,
	AED: 29,
	SAR: 30,
	ZAR: 31,
	COP: 32,
	PEN: 33,
	CLP: 34,
	Max: 35, 	// NOTE: Not actually the Maximum currency value, but the Terminator for the possible currency code range.
	Invalid: 255 	// make this a big number so we can avoid having to move it when we add another currency type
};