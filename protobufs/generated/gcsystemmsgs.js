/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * EGCSystemMsg enum.
     * @exports EGCSystemMsg
     * @enum {number}
     * @property {number} k_EGCMsgInvalid=0 k_EGCMsgInvalid value
     * @property {number} k_EGCMsgMulti=1 k_EGCMsgMulti value
     * @property {number} k_EGCMsgGenericReply=10 k_EGCMsgGenericReply value
     * @property {number} k_EGCMsgSystemBase=50 k_EGCMsgSystemBase value
     * @property {number} k_EGCMsgAchievementAwarded=51 k_EGCMsgAchievementAwarded value
     * @property {number} k_EGCMsgConCommand=52 k_EGCMsgConCommand value
     * @property {number} k_EGCMsgStartPlaying=53 k_EGCMsgStartPlaying value
     * @property {number} k_EGCMsgStopPlaying=54 k_EGCMsgStopPlaying value
     * @property {number} k_EGCMsgStartGameserver=55 k_EGCMsgStartGameserver value
     * @property {number} k_EGCMsgStopGameserver=56 k_EGCMsgStopGameserver value
     * @property {number} k_EGCMsgWGRequest=57 k_EGCMsgWGRequest value
     * @property {number} k_EGCMsgWGResponse=58 k_EGCMsgWGResponse value
     * @property {number} k_EGCMsgGetUserGameStatsSchema=59 k_EGCMsgGetUserGameStatsSchema value
     * @property {number} k_EGCMsgGetUserGameStatsSchemaResponse=60 k_EGCMsgGetUserGameStatsSchemaResponse value
     * @property {number} k_EGCMsgGetUserStatsDEPRECATED=61 k_EGCMsgGetUserStatsDEPRECATED value
     * @property {number} k_EGCMsgGetUserStatsResponse=62 k_EGCMsgGetUserStatsResponse value
     * @property {number} k_EGCMsgAppInfoUpdated=63 k_EGCMsgAppInfoUpdated value
     * @property {number} k_EGCMsgValidateSession=64 k_EGCMsgValidateSession value
     * @property {number} k_EGCMsgValidateSessionResponse=65 k_EGCMsgValidateSessionResponse value
     * @property {number} k_EGCMsgLookupAccountFromInput=66 k_EGCMsgLookupAccountFromInput value
     * @property {number} k_EGCMsgSendHTTPRequest=67 k_EGCMsgSendHTTPRequest value
     * @property {number} k_EGCMsgSendHTTPRequestResponse=68 k_EGCMsgSendHTTPRequestResponse value
     * @property {number} k_EGCMsgPreTestSetup=69 k_EGCMsgPreTestSetup value
     * @property {number} k_EGCMsgRecordSupportAction=70 k_EGCMsgRecordSupportAction value
     * @property {number} k_EGCMsgGetAccountDetails_DEPRECATED=71 k_EGCMsgGetAccountDetails_DEPRECATED value
     * @property {number} k_EGCMsgReceiveInterAppMessage=73 k_EGCMsgReceiveInterAppMessage value
     * @property {number} k_EGCMsgFindAccounts=74 k_EGCMsgFindAccounts value
     * @property {number} k_EGCMsgPostAlert=75 k_EGCMsgPostAlert value
     * @property {number} k_EGCMsgGetLicenses=76 k_EGCMsgGetLicenses value
     * @property {number} k_EGCMsgGetUserStats=77 k_EGCMsgGetUserStats value
     * @property {number} k_EGCMsgGetCommands=78 k_EGCMsgGetCommands value
     * @property {number} k_EGCMsgGetCommandsResponse=79 k_EGCMsgGetCommandsResponse value
     * @property {number} k_EGCMsgAddFreeLicense=80 k_EGCMsgAddFreeLicense value
     * @property {number} k_EGCMsgAddFreeLicenseResponse=81 k_EGCMsgAddFreeLicenseResponse value
     * @property {number} k_EGCMsgGetIPLocation=82 k_EGCMsgGetIPLocation value
     * @property {number} k_EGCMsgGetIPLocationResponse=83 k_EGCMsgGetIPLocationResponse value
     * @property {number} k_EGCMsgSystemStatsSchema=84 k_EGCMsgSystemStatsSchema value
     * @property {number} k_EGCMsgGetSystemStats=85 k_EGCMsgGetSystemStats value
     * @property {number} k_EGCMsgGetSystemStatsResponse=86 k_EGCMsgGetSystemStatsResponse value
     * @property {number} k_EGCMsgSendEmail=87 k_EGCMsgSendEmail value
     * @property {number} k_EGCMsgSendEmailResponse=88 k_EGCMsgSendEmailResponse value
     * @property {number} k_EGCMsgGetEmailTemplate=89 k_EGCMsgGetEmailTemplate value
     * @property {number} k_EGCMsgGetEmailTemplateResponse=90 k_EGCMsgGetEmailTemplateResponse value
     * @property {number} k_EGCMsgGrantGuestPass=91 k_EGCMsgGrantGuestPass value
     * @property {number} k_EGCMsgGrantGuestPassResponse=92 k_EGCMsgGrantGuestPassResponse value
     * @property {number} k_EGCMsgGetAccountDetails=93 k_EGCMsgGetAccountDetails value
     * @property {number} k_EGCMsgGetAccountDetailsResponse=94 k_EGCMsgGetAccountDetailsResponse value
     * @property {number} k_EGCMsgGetPersonaNames=95 k_EGCMsgGetPersonaNames value
     * @property {number} k_EGCMsgGetPersonaNamesResponse=96 k_EGCMsgGetPersonaNamesResponse value
     * @property {number} k_EGCMsgMultiplexMsg=97 k_EGCMsgMultiplexMsg value
     * @property {number} k_EGCMsgMultiplexMsgResponse=98 k_EGCMsgMultiplexMsgResponse value
     * @property {number} k_EGCMsgWebAPIRegisterInterfaces=101 k_EGCMsgWebAPIRegisterInterfaces value
     * @property {number} k_EGCMsgWebAPIJobRequest=102 k_EGCMsgWebAPIJobRequest value
     * @property {number} k_EGCMsgWebAPIJobRequestHttpResponse=104 k_EGCMsgWebAPIJobRequestHttpResponse value
     * @property {number} k_EGCMsgWebAPIJobRequestForwardResponse=105 k_EGCMsgWebAPIJobRequestForwardResponse value
     * @property {number} k_EGCMsgMemCachedGet=200 k_EGCMsgMemCachedGet value
     * @property {number} k_EGCMsgMemCachedGetResponse=201 k_EGCMsgMemCachedGetResponse value
     * @property {number} k_EGCMsgMemCachedSet=202 k_EGCMsgMemCachedSet value
     * @property {number} k_EGCMsgMemCachedDelete=203 k_EGCMsgMemCachedDelete value
     * @property {number} k_EGCMsgMemCachedStats=204 k_EGCMsgMemCachedStats value
     * @property {number} k_EGCMsgMemCachedStatsResponse=205 k_EGCMsgMemCachedStatsResponse value
     * @property {number} k_EGCMsgMasterSetDirectory=220 k_EGCMsgMasterSetDirectory value
     * @property {number} k_EGCMsgMasterSetDirectoryResponse=221 k_EGCMsgMasterSetDirectoryResponse value
     * @property {number} k_EGCMsgMasterSetWebAPIRouting=222 k_EGCMsgMasterSetWebAPIRouting value
     * @property {number} k_EGCMsgMasterSetWebAPIRoutingResponse=223 k_EGCMsgMasterSetWebAPIRoutingResponse value
     * @property {number} k_EGCMsgMasterSetClientMsgRouting=224 k_EGCMsgMasterSetClientMsgRouting value
     * @property {number} k_EGCMsgMasterSetClientMsgRoutingResponse=225 k_EGCMsgMasterSetClientMsgRoutingResponse value
     * @property {number} k_EGCMsgSetOptions=226 k_EGCMsgSetOptions value
     * @property {number} k_EGCMsgSetOptionsResponse=227 k_EGCMsgSetOptionsResponse value
     * @property {number} k_EGCMsgSystemBase2=500 k_EGCMsgSystemBase2 value
     * @property {number} k_EGCMsgGetPurchaseTrustStatus=501 k_EGCMsgGetPurchaseTrustStatus value
     * @property {number} k_EGCMsgGetPurchaseTrustStatusResponse=502 k_EGCMsgGetPurchaseTrustStatusResponse value
     * @property {number} k_EGCMsgUpdateSession=503 k_EGCMsgUpdateSession value
     * @property {number} k_EGCMsgGCAccountVacStatusChange=504 k_EGCMsgGCAccountVacStatusChange value
     * @property {number} k_EGCMsgCheckFriendship=505 k_EGCMsgCheckFriendship value
     * @property {number} k_EGCMsgCheckFriendshipResponse=506 k_EGCMsgCheckFriendshipResponse value
     * @property {number} k_EGCMsgGetPartnerAccountLink=507 k_EGCMsgGetPartnerAccountLink value
     * @property {number} k_EGCMsgGetPartnerAccountLinkResponse=508 k_EGCMsgGetPartnerAccountLinkResponse value
     * @property {number} k_EGCMsgDPPartnerMicroTxns=512 k_EGCMsgDPPartnerMicroTxns value
     * @property {number} k_EGCMsgDPPartnerMicroTxnsResponse=513 k_EGCMsgDPPartnerMicroTxnsResponse value
     * @property {number} k_EGCMsgVacVerificationChange=518 k_EGCMsgVacVerificationChange value
     * @property {number} k_EGCMsgAccountPhoneNumberChange=519 k_EGCMsgAccountPhoneNumberChange value
     * @property {number} k_EGCMsgInviteUserToLobby=523 k_EGCMsgInviteUserToLobby value
     * @property {number} k_EGCMsgGetGamePersonalDataCategoriesRequest=524 k_EGCMsgGetGamePersonalDataCategoriesRequest value
     * @property {number} k_EGCMsgGetGamePersonalDataCategoriesResponse=525 k_EGCMsgGetGamePersonalDataCategoriesResponse value
     * @property {number} k_EGCMsgGetGamePersonalDataEntriesRequest=526 k_EGCMsgGetGamePersonalDataEntriesRequest value
     * @property {number} k_EGCMsgGetGamePersonalDataEntriesResponse=527 k_EGCMsgGetGamePersonalDataEntriesResponse value
     * @property {number} k_EGCMsgTerminateGamePersonalDataEntriesRequest=528 k_EGCMsgTerminateGamePersonalDataEntriesRequest value
     * @property {number} k_EGCMsgTerminateGamePersonalDataEntriesResponse=529 k_EGCMsgTerminateGamePersonalDataEntriesResponse value
     * @property {number} k_EGCMsgRecurringSubscriptionStatusChange=530 k_EGCMsgRecurringSubscriptionStatusChange value
     * @property {number} k_EGCMsgDirectServiceMethod=531 k_EGCMsgDirectServiceMethod value
     * @property {number} k_EGCMsgDirectServiceMethodResponse=532 k_EGCMsgDirectServiceMethodResponse value
     */
    $root.EGCSystemMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EGCMsgInvalid"] = 0;
        values[valuesById[1] = "k_EGCMsgMulti"] = 1;
        values[valuesById[10] = "k_EGCMsgGenericReply"] = 10;
        values[valuesById[50] = "k_EGCMsgSystemBase"] = 50;
        values[valuesById[51] = "k_EGCMsgAchievementAwarded"] = 51;
        values[valuesById[52] = "k_EGCMsgConCommand"] = 52;
        values[valuesById[53] = "k_EGCMsgStartPlaying"] = 53;
        values[valuesById[54] = "k_EGCMsgStopPlaying"] = 54;
        values[valuesById[55] = "k_EGCMsgStartGameserver"] = 55;
        values[valuesById[56] = "k_EGCMsgStopGameserver"] = 56;
        values[valuesById[57] = "k_EGCMsgWGRequest"] = 57;
        values[valuesById[58] = "k_EGCMsgWGResponse"] = 58;
        values[valuesById[59] = "k_EGCMsgGetUserGameStatsSchema"] = 59;
        values[valuesById[60] = "k_EGCMsgGetUserGameStatsSchemaResponse"] = 60;
        values[valuesById[61] = "k_EGCMsgGetUserStatsDEPRECATED"] = 61;
        values[valuesById[62] = "k_EGCMsgGetUserStatsResponse"] = 62;
        values[valuesById[63] = "k_EGCMsgAppInfoUpdated"] = 63;
        values[valuesById[64] = "k_EGCMsgValidateSession"] = 64;
        values[valuesById[65] = "k_EGCMsgValidateSessionResponse"] = 65;
        values[valuesById[66] = "k_EGCMsgLookupAccountFromInput"] = 66;
        values[valuesById[67] = "k_EGCMsgSendHTTPRequest"] = 67;
        values[valuesById[68] = "k_EGCMsgSendHTTPRequestResponse"] = 68;
        values[valuesById[69] = "k_EGCMsgPreTestSetup"] = 69;
        values[valuesById[70] = "k_EGCMsgRecordSupportAction"] = 70;
        values[valuesById[71] = "k_EGCMsgGetAccountDetails_DEPRECATED"] = 71;
        values[valuesById[73] = "k_EGCMsgReceiveInterAppMessage"] = 73;
        values[valuesById[74] = "k_EGCMsgFindAccounts"] = 74;
        values[valuesById[75] = "k_EGCMsgPostAlert"] = 75;
        values[valuesById[76] = "k_EGCMsgGetLicenses"] = 76;
        values[valuesById[77] = "k_EGCMsgGetUserStats"] = 77;
        values[valuesById[78] = "k_EGCMsgGetCommands"] = 78;
        values[valuesById[79] = "k_EGCMsgGetCommandsResponse"] = 79;
        values[valuesById[80] = "k_EGCMsgAddFreeLicense"] = 80;
        values[valuesById[81] = "k_EGCMsgAddFreeLicenseResponse"] = 81;
        values[valuesById[82] = "k_EGCMsgGetIPLocation"] = 82;
        values[valuesById[83] = "k_EGCMsgGetIPLocationResponse"] = 83;
        values[valuesById[84] = "k_EGCMsgSystemStatsSchema"] = 84;
        values[valuesById[85] = "k_EGCMsgGetSystemStats"] = 85;
        values[valuesById[86] = "k_EGCMsgGetSystemStatsResponse"] = 86;
        values[valuesById[87] = "k_EGCMsgSendEmail"] = 87;
        values[valuesById[88] = "k_EGCMsgSendEmailResponse"] = 88;
        values[valuesById[89] = "k_EGCMsgGetEmailTemplate"] = 89;
        values[valuesById[90] = "k_EGCMsgGetEmailTemplateResponse"] = 90;
        values[valuesById[91] = "k_EGCMsgGrantGuestPass"] = 91;
        values[valuesById[92] = "k_EGCMsgGrantGuestPassResponse"] = 92;
        values[valuesById[93] = "k_EGCMsgGetAccountDetails"] = 93;
        values[valuesById[94] = "k_EGCMsgGetAccountDetailsResponse"] = 94;
        values[valuesById[95] = "k_EGCMsgGetPersonaNames"] = 95;
        values[valuesById[96] = "k_EGCMsgGetPersonaNamesResponse"] = 96;
        values[valuesById[97] = "k_EGCMsgMultiplexMsg"] = 97;
        values[valuesById[98] = "k_EGCMsgMultiplexMsgResponse"] = 98;
        values[valuesById[101] = "k_EGCMsgWebAPIRegisterInterfaces"] = 101;
        values[valuesById[102] = "k_EGCMsgWebAPIJobRequest"] = 102;
        values[valuesById[104] = "k_EGCMsgWebAPIJobRequestHttpResponse"] = 104;
        values[valuesById[105] = "k_EGCMsgWebAPIJobRequestForwardResponse"] = 105;
        values[valuesById[200] = "k_EGCMsgMemCachedGet"] = 200;
        values[valuesById[201] = "k_EGCMsgMemCachedGetResponse"] = 201;
        values[valuesById[202] = "k_EGCMsgMemCachedSet"] = 202;
        values[valuesById[203] = "k_EGCMsgMemCachedDelete"] = 203;
        values[valuesById[204] = "k_EGCMsgMemCachedStats"] = 204;
        values[valuesById[205] = "k_EGCMsgMemCachedStatsResponse"] = 205;
        values[valuesById[220] = "k_EGCMsgMasterSetDirectory"] = 220;
        values[valuesById[221] = "k_EGCMsgMasterSetDirectoryResponse"] = 221;
        values[valuesById[222] = "k_EGCMsgMasterSetWebAPIRouting"] = 222;
        values[valuesById[223] = "k_EGCMsgMasterSetWebAPIRoutingResponse"] = 223;
        values[valuesById[224] = "k_EGCMsgMasterSetClientMsgRouting"] = 224;
        values[valuesById[225] = "k_EGCMsgMasterSetClientMsgRoutingResponse"] = 225;
        values[valuesById[226] = "k_EGCMsgSetOptions"] = 226;
        values[valuesById[227] = "k_EGCMsgSetOptionsResponse"] = 227;
        values[valuesById[500] = "k_EGCMsgSystemBase2"] = 500;
        values[valuesById[501] = "k_EGCMsgGetPurchaseTrustStatus"] = 501;
        values[valuesById[502] = "k_EGCMsgGetPurchaseTrustStatusResponse"] = 502;
        values[valuesById[503] = "k_EGCMsgUpdateSession"] = 503;
        values[valuesById[504] = "k_EGCMsgGCAccountVacStatusChange"] = 504;
        values[valuesById[505] = "k_EGCMsgCheckFriendship"] = 505;
        values[valuesById[506] = "k_EGCMsgCheckFriendshipResponse"] = 506;
        values[valuesById[507] = "k_EGCMsgGetPartnerAccountLink"] = 507;
        values[valuesById[508] = "k_EGCMsgGetPartnerAccountLinkResponse"] = 508;
        values[valuesById[512] = "k_EGCMsgDPPartnerMicroTxns"] = 512;
        values[valuesById[513] = "k_EGCMsgDPPartnerMicroTxnsResponse"] = 513;
        values[valuesById[518] = "k_EGCMsgVacVerificationChange"] = 518;
        values[valuesById[519] = "k_EGCMsgAccountPhoneNumberChange"] = 519;
        values[valuesById[523] = "k_EGCMsgInviteUserToLobby"] = 523;
        values[valuesById[524] = "k_EGCMsgGetGamePersonalDataCategoriesRequest"] = 524;
        values[valuesById[525] = "k_EGCMsgGetGamePersonalDataCategoriesResponse"] = 525;
        values[valuesById[526] = "k_EGCMsgGetGamePersonalDataEntriesRequest"] = 526;
        values[valuesById[527] = "k_EGCMsgGetGamePersonalDataEntriesResponse"] = 527;
        values[valuesById[528] = "k_EGCMsgTerminateGamePersonalDataEntriesRequest"] = 528;
        values[valuesById[529] = "k_EGCMsgTerminateGamePersonalDataEntriesResponse"] = 529;
        values[valuesById[530] = "k_EGCMsgRecurringSubscriptionStatusChange"] = 530;
        values[valuesById[531] = "k_EGCMsgDirectServiceMethod"] = 531;
        values[valuesById[532] = "k_EGCMsgDirectServiceMethodResponse"] = 532;
        return values;
    })();
    
    /**
     * ESOMsg enum.
     * @exports ESOMsg
     * @enum {number}
     * @property {number} k_ESOMsg_Create=21 k_ESOMsg_Create value
     * @property {number} k_ESOMsg_Update=22 k_ESOMsg_Update value
     * @property {number} k_ESOMsg_Destroy=23 k_ESOMsg_Destroy value
     * @property {number} k_ESOMsg_CacheSubscribed=24 k_ESOMsg_CacheSubscribed value
     * @property {number} k_ESOMsg_CacheUnsubscribed=25 k_ESOMsg_CacheUnsubscribed value
     * @property {number} k_ESOMsg_UpdateMultiple=26 k_ESOMsg_UpdateMultiple value
     * @property {number} k_ESOMsg_CacheSubscriptionCheck=27 k_ESOMsg_CacheSubscriptionCheck value
     * @property {number} k_ESOMsg_CacheSubscriptionRefresh=28 k_ESOMsg_CacheSubscriptionRefresh value
     */
    $root.ESOMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[21] = "k_ESOMsg_Create"] = 21;
        values[valuesById[22] = "k_ESOMsg_Update"] = 22;
        values[valuesById[23] = "k_ESOMsg_Destroy"] = 23;
        values[valuesById[24] = "k_ESOMsg_CacheSubscribed"] = 24;
        values[valuesById[25] = "k_ESOMsg_CacheUnsubscribed"] = 25;
        values[valuesById[26] = "k_ESOMsg_UpdateMultiple"] = 26;
        values[valuesById[27] = "k_ESOMsg_CacheSubscriptionCheck"] = 27;
        values[valuesById[28] = "k_ESOMsg_CacheSubscriptionRefresh"] = 28;
        return values;
    })();
    
    /**
     * EGCBaseClientMsg enum.
     * @exports EGCBaseClientMsg
     * @enum {number}
     * @property {number} k_EMsgGCClientWelcome=4004 k_EMsgGCClientWelcome value
     * @property {number} k_EMsgGCServerWelcome=4005 k_EMsgGCServerWelcome value
     * @property {number} k_EMsgGCClientHello=4006 k_EMsgGCClientHello value
     * @property {number} k_EMsgGCServerHello=4007 k_EMsgGCServerHello value
     * @property {number} k_EMsgGCClientConnectionStatus=4009 k_EMsgGCClientConnectionStatus value
     * @property {number} k_EMsgGCServerConnectionStatus=4010 k_EMsgGCServerConnectionStatus value
     * @property {number} k_EMsgGCClientHelloPartner=4011 k_EMsgGCClientHelloPartner value
     * @property {number} k_EMsgGCClientHelloPW=4012 k_EMsgGCClientHelloPW value
     * @property {number} k_EMsgGCClientHelloR2=4013 k_EMsgGCClientHelloR2 value
     * @property {number} k_EMsgGCClientHelloR3=4014 k_EMsgGCClientHelloR3 value
     * @property {number} k_EMsgGCClientHelloR4=4015 k_EMsgGCClientHelloR4 value
     */
    $root.EGCBaseClientMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[4004] = "k_EMsgGCClientWelcome"] = 4004;
        values[valuesById[4005] = "k_EMsgGCServerWelcome"] = 4005;
        values[valuesById[4006] = "k_EMsgGCClientHello"] = 4006;
        values[valuesById[4007] = "k_EMsgGCServerHello"] = 4007;
        values[valuesById[4009] = "k_EMsgGCClientConnectionStatus"] = 4009;
        values[valuesById[4010] = "k_EMsgGCServerConnectionStatus"] = 4010;
        values[valuesById[4011] = "k_EMsgGCClientHelloPartner"] = 4011;
        values[valuesById[4012] = "k_EMsgGCClientHelloPW"] = 4012;
        values[valuesById[4013] = "k_EMsgGCClientHelloR2"] = 4013;
        values[valuesById[4014] = "k_EMsgGCClientHelloR3"] = 4014;
        values[valuesById[4015] = "k_EMsgGCClientHelloR4"] = 4015;
        return values;
    })();
    
    /**
     * EGCToGCMsg enum.
     * @exports EGCToGCMsg
     * @enum {number}
     * @property {number} k_EGCToGCMsgMasterAck=150 k_EGCToGCMsgMasterAck value
     * @property {number} k_EGCToGCMsgMasterAckResponse=151 k_EGCToGCMsgMasterAckResponse value
     * @property {number} k_EGCToGCMsgRouted=152 k_EGCToGCMsgRouted value
     * @property {number} k_EGCToGCMsgRoutedReply=153 k_EGCToGCMsgRoutedReply value
     * @property {number} k_EMsgUpdateSessionIP=154 k_EMsgUpdateSessionIP value
     * @property {number} k_EMsgRequestSessionIP=155 k_EMsgRequestSessionIP value
     * @property {number} k_EMsgRequestSessionIPResponse=156 k_EMsgRequestSessionIPResponse value
     * @property {number} k_EGCToGCMsgMasterStartupComplete=157 k_EGCToGCMsgMasterStartupComplete value
     */
    $root.EGCToGCMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[150] = "k_EGCToGCMsgMasterAck"] = 150;
        values[valuesById[151] = "k_EGCToGCMsgMasterAckResponse"] = 151;
        values[valuesById[152] = "k_EGCToGCMsgRouted"] = 152;
        values[valuesById[153] = "k_EGCToGCMsgRoutedReply"] = 153;
        values[valuesById[154] = "k_EMsgUpdateSessionIP"] = 154;
        values[valuesById[155] = "k_EMsgRequestSessionIP"] = 155;
        values[valuesById[156] = "k_EMsgRequestSessionIPResponse"] = 156;
        values[valuesById[157] = "k_EGCToGCMsgMasterStartupComplete"] = 157;
        return values;
    })();
    
    /**
     * ECommunityItemClass enum.
     * @exports ECommunityItemClass
     * @enum {number}
     * @property {number} k_ECommunityItemClass_Invalid=0 k_ECommunityItemClass_Invalid value
     * @property {number} k_ECommunityItemClass_Badge=1 k_ECommunityItemClass_Badge value
     * @property {number} k_ECommunityItemClass_GameCard=2 k_ECommunityItemClass_GameCard value
     * @property {number} k_ECommunityItemClass_ProfileBackground=3 k_ECommunityItemClass_ProfileBackground value
     * @property {number} k_ECommunityItemClass_Emoticon=4 k_ECommunityItemClass_Emoticon value
     * @property {number} k_ECommunityItemClass_BoosterPack=5 k_ECommunityItemClass_BoosterPack value
     * @property {number} k_ECommunityItemClass_Consumable=6 k_ECommunityItemClass_Consumable value
     * @property {number} k_ECommunityItemClass_GameGoo=7 k_ECommunityItemClass_GameGoo value
     * @property {number} k_ECommunityItemClass_ProfileModifier=8 k_ECommunityItemClass_ProfileModifier value
     * @property {number} k_ECommunityItemClass_Scene=9 k_ECommunityItemClass_Scene value
     * @property {number} k_ECommunityItemClass_SalienItem=10 k_ECommunityItemClass_SalienItem value
     */
    $root.ECommunityItemClass = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ECommunityItemClass_Invalid"] = 0;
        values[valuesById[1] = "k_ECommunityItemClass_Badge"] = 1;
        values[valuesById[2] = "k_ECommunityItemClass_GameCard"] = 2;
        values[valuesById[3] = "k_ECommunityItemClass_ProfileBackground"] = 3;
        values[valuesById[4] = "k_ECommunityItemClass_Emoticon"] = 4;
        values[valuesById[5] = "k_ECommunityItemClass_BoosterPack"] = 5;
        values[valuesById[6] = "k_ECommunityItemClass_Consumable"] = 6;
        values[valuesById[7] = "k_ECommunityItemClass_GameGoo"] = 7;
        values[valuesById[8] = "k_ECommunityItemClass_ProfileModifier"] = 8;
        values[valuesById[9] = "k_ECommunityItemClass_Scene"] = 9;
        values[valuesById[10] = "k_ECommunityItemClass_SalienItem"] = 10;
        return values;
    })();
    
    /**
     * ECommunityItemAttribute enum.
     * @exports ECommunityItemAttribute
     * @enum {number}
     * @property {number} k_ECommunityItemAttribute_Invalid=0 k_ECommunityItemAttribute_Invalid value
     * @property {number} k_ECommunityItemAttribute_CardBorder=1 k_ECommunityItemAttribute_CardBorder value
     * @property {number} k_ECommunityItemAttribute_Level=2 k_ECommunityItemAttribute_Level value
     * @property {number} k_ECommunityItemAttribute_IssueNumber=3 k_ECommunityItemAttribute_IssueNumber value
     * @property {number} k_ECommunityItemAttribute_TradableTime=4 k_ECommunityItemAttribute_TradableTime value
     * @property {number} k_ECommunityItemAttribute_StorePackageID=5 k_ECommunityItemAttribute_StorePackageID value
     * @property {number} k_ECommunityItemAttribute_CommunityItemAppID=6 k_ECommunityItemAttribute_CommunityItemAppID value
     * @property {number} k_ECommunityItemAttribute_CommunityItemType=7 k_ECommunityItemAttribute_CommunityItemType value
     * @property {number} k_ECommunityItemAttribute_ProfileModiferEnabled=8 k_ECommunityItemAttribute_ProfileModiferEnabled value
     * @property {number} k_ECommunityItemAttribute_ExpiryTime=9 k_ECommunityItemAttribute_ExpiryTime value
     */
    $root.ECommunityItemAttribute = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ECommunityItemAttribute_Invalid"] = 0;
        values[valuesById[1] = "k_ECommunityItemAttribute_CardBorder"] = 1;
        values[valuesById[2] = "k_ECommunityItemAttribute_Level"] = 2;
        values[valuesById[3] = "k_ECommunityItemAttribute_IssueNumber"] = 3;
        values[valuesById[4] = "k_ECommunityItemAttribute_TradableTime"] = 4;
        values[valuesById[5] = "k_ECommunityItemAttribute_StorePackageID"] = 5;
        values[valuesById[6] = "k_ECommunityItemAttribute_CommunityItemAppID"] = 6;
        values[valuesById[7] = "k_ECommunityItemAttribute_CommunityItemType"] = 7;
        values[valuesById[8] = "k_ECommunityItemAttribute_ProfileModiferEnabled"] = 8;
        values[valuesById[9] = "k_ECommunityItemAttribute_ExpiryTime"] = 9;
        return values;
    })();
    
    $root.CMsgGCHVacVerificationChange = (function() {
    
        /**
         * Properties of a CMsgGCHVacVerificationChange.
         * @exports ICMsgGCHVacVerificationChange
         * @interface ICMsgGCHVacVerificationChange
         * @property {number|Long|null} [steamid] CMsgGCHVacVerificationChange steamid
         * @property {number|null} [appid] CMsgGCHVacVerificationChange appid
         * @property {boolean|null} [is_verified] CMsgGCHVacVerificationChange is_verified
         */
    
        /**
         * Constructs a new CMsgGCHVacVerificationChange.
         * @exports CMsgGCHVacVerificationChange
         * @classdesc Represents a CMsgGCHVacVerificationChange.
         * @implements ICMsgGCHVacVerificationChange
         * @constructor
         * @param {ICMsgGCHVacVerificationChange=} [properties] Properties to set
         */
        function CMsgGCHVacVerificationChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCHVacVerificationChange steamid.
         * @member {number|Long} steamid
         * @memberof CMsgGCHVacVerificationChange
         * @instance
         */
        CMsgGCHVacVerificationChange.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgGCHVacVerificationChange appid.
         * @member {number} appid
         * @memberof CMsgGCHVacVerificationChange
         * @instance
         */
        CMsgGCHVacVerificationChange.prototype.appid = 0;
    
        /**
         * CMsgGCHVacVerificationChange is_verified.
         * @member {boolean} is_verified
         * @memberof CMsgGCHVacVerificationChange
         * @instance
         */
        CMsgGCHVacVerificationChange.prototype.is_verified = false;
    
        /**
         * Creates a new CMsgGCHVacVerificationChange instance using the specified properties.
         * @function create
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {ICMsgGCHVacVerificationChange=} [properties] Properties to set
         * @returns {CMsgGCHVacVerificationChange} CMsgGCHVacVerificationChange instance
         */
        CMsgGCHVacVerificationChange.create = function create(properties) {
            return new CMsgGCHVacVerificationChange(properties);
        };
    
        /**
         * Encodes the specified CMsgGCHVacVerificationChange message. Does not implicitly {@link CMsgGCHVacVerificationChange.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {ICMsgGCHVacVerificationChange} message CMsgGCHVacVerificationChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHVacVerificationChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.is_verified != null && Object.hasOwnProperty.call(message, "is_verified"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_verified);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCHVacVerificationChange message, length delimited. Does not implicitly {@link CMsgGCHVacVerificationChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {ICMsgGCHVacVerificationChange} message CMsgGCHVacVerificationChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHVacVerificationChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCHVacVerificationChange message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCHVacVerificationChange} CMsgGCHVacVerificationChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHVacVerificationChange.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCHVacVerificationChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 2: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.is_verified = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCHVacVerificationChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCHVacVerificationChange} CMsgGCHVacVerificationChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHVacVerificationChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCHVacVerificationChange message.
         * @function verify
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCHVacVerificationChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.is_verified != null && message.hasOwnProperty("is_verified"))
                if (typeof message.is_verified !== "boolean")
                    return "is_verified: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCHVacVerificationChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCHVacVerificationChange} CMsgGCHVacVerificationChange
         */
        CMsgGCHVacVerificationChange.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCHVacVerificationChange)
                return object;
            var message = new $root.CMsgGCHVacVerificationChange();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.is_verified != null)
                message.is_verified = Boolean(object.is_verified);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCHVacVerificationChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {CMsgGCHVacVerificationChange} message CMsgGCHVacVerificationChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCHVacVerificationChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.appid = 0;
                object.is_verified = false;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.is_verified != null && message.hasOwnProperty("is_verified"))
                object.is_verified = message.is_verified;
            return object;
        };
    
        /**
         * Converts this CMsgGCHVacVerificationChange to JSON.
         * @function toJSON
         * @memberof CMsgGCHVacVerificationChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCHVacVerificationChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCHVacVerificationChange
         * @function getTypeUrl
         * @memberof CMsgGCHVacVerificationChange
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCHVacVerificationChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCHVacVerificationChange";
        };
    
        return CMsgGCHVacVerificationChange;
    })();
    
    $root.CMsgGCHAccountPhoneNumberChange = (function() {
    
        /**
         * Properties of a CMsgGCHAccountPhoneNumberChange.
         * @exports ICMsgGCHAccountPhoneNumberChange
         * @interface ICMsgGCHAccountPhoneNumberChange
         * @property {number|Long|null} [steamid] CMsgGCHAccountPhoneNumberChange steamid
         * @property {number|null} [appid] CMsgGCHAccountPhoneNumberChange appid
         * @property {number|Long|null} [phone_id] CMsgGCHAccountPhoneNumberChange phone_id
         * @property {boolean|null} [is_verified] CMsgGCHAccountPhoneNumberChange is_verified
         * @property {boolean|null} [is_identifying] CMsgGCHAccountPhoneNumberChange is_identifying
         */
    
        /**
         * Constructs a new CMsgGCHAccountPhoneNumberChange.
         * @exports CMsgGCHAccountPhoneNumberChange
         * @classdesc Represents a CMsgGCHAccountPhoneNumberChange.
         * @implements ICMsgGCHAccountPhoneNumberChange
         * @constructor
         * @param {ICMsgGCHAccountPhoneNumberChange=} [properties] Properties to set
         */
        function CMsgGCHAccountPhoneNumberChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCHAccountPhoneNumberChange steamid.
         * @member {number|Long} steamid
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @instance
         */
        CMsgGCHAccountPhoneNumberChange.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgGCHAccountPhoneNumberChange appid.
         * @member {number} appid
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @instance
         */
        CMsgGCHAccountPhoneNumberChange.prototype.appid = 0;
    
        /**
         * CMsgGCHAccountPhoneNumberChange phone_id.
         * @member {number|Long} phone_id
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @instance
         */
        CMsgGCHAccountPhoneNumberChange.prototype.phone_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgGCHAccountPhoneNumberChange is_verified.
         * @member {boolean} is_verified
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @instance
         */
        CMsgGCHAccountPhoneNumberChange.prototype.is_verified = false;
    
        /**
         * CMsgGCHAccountPhoneNumberChange is_identifying.
         * @member {boolean} is_identifying
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @instance
         */
        CMsgGCHAccountPhoneNumberChange.prototype.is_identifying = false;
    
        /**
         * Creates a new CMsgGCHAccountPhoneNumberChange instance using the specified properties.
         * @function create
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {ICMsgGCHAccountPhoneNumberChange=} [properties] Properties to set
         * @returns {CMsgGCHAccountPhoneNumberChange} CMsgGCHAccountPhoneNumberChange instance
         */
        CMsgGCHAccountPhoneNumberChange.create = function create(properties) {
            return new CMsgGCHAccountPhoneNumberChange(properties);
        };
    
        /**
         * Encodes the specified CMsgGCHAccountPhoneNumberChange message. Does not implicitly {@link CMsgGCHAccountPhoneNumberChange.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {ICMsgGCHAccountPhoneNumberChange} message CMsgGCHAccountPhoneNumberChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHAccountPhoneNumberChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.phone_id != null && Object.hasOwnProperty.call(message, "phone_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.phone_id);
            if (message.is_verified != null && Object.hasOwnProperty.call(message, "is_verified"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.is_verified);
            if (message.is_identifying != null && Object.hasOwnProperty.call(message, "is_identifying"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_identifying);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCHAccountPhoneNumberChange message, length delimited. Does not implicitly {@link CMsgGCHAccountPhoneNumberChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {ICMsgGCHAccountPhoneNumberChange} message CMsgGCHAccountPhoneNumberChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHAccountPhoneNumberChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCHAccountPhoneNumberChange message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCHAccountPhoneNumberChange} CMsgGCHAccountPhoneNumberChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHAccountPhoneNumberChange.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCHAccountPhoneNumberChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 2: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.phone_id = reader.uint64();
                        break;
                    }
                case 4: {
                        message.is_verified = reader.bool();
                        break;
                    }
                case 5: {
                        message.is_identifying = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCHAccountPhoneNumberChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCHAccountPhoneNumberChange} CMsgGCHAccountPhoneNumberChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHAccountPhoneNumberChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCHAccountPhoneNumberChange message.
         * @function verify
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCHAccountPhoneNumberChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.phone_id != null && message.hasOwnProperty("phone_id"))
                if (!$util.isInteger(message.phone_id) && !(message.phone_id && $util.isInteger(message.phone_id.low) && $util.isInteger(message.phone_id.high)))
                    return "phone_id: integer|Long expected";
            if (message.is_verified != null && message.hasOwnProperty("is_verified"))
                if (typeof message.is_verified !== "boolean")
                    return "is_verified: boolean expected";
            if (message.is_identifying != null && message.hasOwnProperty("is_identifying"))
                if (typeof message.is_identifying !== "boolean")
                    return "is_identifying: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCHAccountPhoneNumberChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCHAccountPhoneNumberChange} CMsgGCHAccountPhoneNumberChange
         */
        CMsgGCHAccountPhoneNumberChange.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCHAccountPhoneNumberChange)
                return object;
            var message = new $root.CMsgGCHAccountPhoneNumberChange();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.phone_id != null)
                if ($util.Long)
                    (message.phone_id = $util.Long.fromValue(object.phone_id)).unsigned = true;
                else if (typeof object.phone_id === "string")
                    message.phone_id = parseInt(object.phone_id, 10);
                else if (typeof object.phone_id === "number")
                    message.phone_id = object.phone_id;
                else if (typeof object.phone_id === "object")
                    message.phone_id = new $util.LongBits(object.phone_id.low >>> 0, object.phone_id.high >>> 0).toNumber(true);
            if (object.is_verified != null)
                message.is_verified = Boolean(object.is_verified);
            if (object.is_identifying != null)
                message.is_identifying = Boolean(object.is_identifying);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCHAccountPhoneNumberChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {CMsgGCHAccountPhoneNumberChange} message CMsgGCHAccountPhoneNumberChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCHAccountPhoneNumberChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.phone_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.phone_id = options.longs === String ? "0" : 0;
                object.is_verified = false;
                object.is_identifying = false;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.phone_id != null && message.hasOwnProperty("phone_id"))
                if (typeof message.phone_id === "number")
                    object.phone_id = options.longs === String ? String(message.phone_id) : message.phone_id;
                else
                    object.phone_id = options.longs === String ? $util.Long.prototype.toString.call(message.phone_id) : options.longs === Number ? new $util.LongBits(message.phone_id.low >>> 0, message.phone_id.high >>> 0).toNumber(true) : message.phone_id;
            if (message.is_verified != null && message.hasOwnProperty("is_verified"))
                object.is_verified = message.is_verified;
            if (message.is_identifying != null && message.hasOwnProperty("is_identifying"))
                object.is_identifying = message.is_identifying;
            return object;
        };
    
        /**
         * Converts this CMsgGCHAccountPhoneNumberChange to JSON.
         * @function toJSON
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCHAccountPhoneNumberChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCHAccountPhoneNumberChange
         * @function getTypeUrl
         * @memberof CMsgGCHAccountPhoneNumberChange
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCHAccountPhoneNumberChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCHAccountPhoneNumberChange";
        };
    
        return CMsgGCHAccountPhoneNumberChange;
    })();
    
    $root.CMsgGCHInviteUserToLobby = (function() {
    
        /**
         * Properties of a CMsgGCHInviteUserToLobby.
         * @exports ICMsgGCHInviteUserToLobby
         * @interface ICMsgGCHInviteUserToLobby
         * @property {number|Long|null} [steamid] CMsgGCHInviteUserToLobby steamid
         * @property {number|null} [appid] CMsgGCHInviteUserToLobby appid
         * @property {number|Long|null} [steamid_invited] CMsgGCHInviteUserToLobby steamid_invited
         * @property {number|Long|null} [steamid_lobby] CMsgGCHInviteUserToLobby steamid_lobby
         */
    
        /**
         * Constructs a new CMsgGCHInviteUserToLobby.
         * @exports CMsgGCHInviteUserToLobby
         * @classdesc Represents a CMsgGCHInviteUserToLobby.
         * @implements ICMsgGCHInviteUserToLobby
         * @constructor
         * @param {ICMsgGCHInviteUserToLobby=} [properties] Properties to set
         */
        function CMsgGCHInviteUserToLobby(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCHInviteUserToLobby steamid.
         * @member {number|Long} steamid
         * @memberof CMsgGCHInviteUserToLobby
         * @instance
         */
        CMsgGCHInviteUserToLobby.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgGCHInviteUserToLobby appid.
         * @member {number} appid
         * @memberof CMsgGCHInviteUserToLobby
         * @instance
         */
        CMsgGCHInviteUserToLobby.prototype.appid = 0;
    
        /**
         * CMsgGCHInviteUserToLobby steamid_invited.
         * @member {number|Long} steamid_invited
         * @memberof CMsgGCHInviteUserToLobby
         * @instance
         */
        CMsgGCHInviteUserToLobby.prototype.steamid_invited = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgGCHInviteUserToLobby steamid_lobby.
         * @member {number|Long} steamid_lobby
         * @memberof CMsgGCHInviteUserToLobby
         * @instance
         */
        CMsgGCHInviteUserToLobby.prototype.steamid_lobby = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgGCHInviteUserToLobby instance using the specified properties.
         * @function create
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {ICMsgGCHInviteUserToLobby=} [properties] Properties to set
         * @returns {CMsgGCHInviteUserToLobby} CMsgGCHInviteUserToLobby instance
         */
        CMsgGCHInviteUserToLobby.create = function create(properties) {
            return new CMsgGCHInviteUserToLobby(properties);
        };
    
        /**
         * Encodes the specified CMsgGCHInviteUserToLobby message. Does not implicitly {@link CMsgGCHInviteUserToLobby.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {ICMsgGCHInviteUserToLobby} message CMsgGCHInviteUserToLobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHInviteUserToLobby.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.steamid_invited != null && Object.hasOwnProperty.call(message, "steamid_invited"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid_invited);
            if (message.steamid_lobby != null && Object.hasOwnProperty.call(message, "steamid_lobby"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.steamid_lobby);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCHInviteUserToLobby message, length delimited. Does not implicitly {@link CMsgGCHInviteUserToLobby.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {ICMsgGCHInviteUserToLobby} message CMsgGCHInviteUserToLobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHInviteUserToLobby.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCHInviteUserToLobby message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCHInviteUserToLobby} CMsgGCHInviteUserToLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHInviteUserToLobby.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCHInviteUserToLobby();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 2: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.steamid_invited = reader.fixed64();
                        break;
                    }
                case 4: {
                        message.steamid_lobby = reader.fixed64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCHInviteUserToLobby message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCHInviteUserToLobby} CMsgGCHInviteUserToLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHInviteUserToLobby.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCHInviteUserToLobby message.
         * @function verify
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCHInviteUserToLobby.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid_invited != null && message.hasOwnProperty("steamid_invited"))
                if (!$util.isInteger(message.steamid_invited) && !(message.steamid_invited && $util.isInteger(message.steamid_invited.low) && $util.isInteger(message.steamid_invited.high)))
                    return "steamid_invited: integer|Long expected";
            if (message.steamid_lobby != null && message.hasOwnProperty("steamid_lobby"))
                if (!$util.isInteger(message.steamid_lobby) && !(message.steamid_lobby && $util.isInteger(message.steamid_lobby.low) && $util.isInteger(message.steamid_lobby.high)))
                    return "steamid_lobby: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCHInviteUserToLobby message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCHInviteUserToLobby} CMsgGCHInviteUserToLobby
         */
        CMsgGCHInviteUserToLobby.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCHInviteUserToLobby)
                return object;
            var message = new $root.CMsgGCHInviteUserToLobby();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.steamid_invited != null)
                if ($util.Long)
                    (message.steamid_invited = $util.Long.fromValue(object.steamid_invited)).unsigned = false;
                else if (typeof object.steamid_invited === "string")
                    message.steamid_invited = parseInt(object.steamid_invited, 10);
                else if (typeof object.steamid_invited === "number")
                    message.steamid_invited = object.steamid_invited;
                else if (typeof object.steamid_invited === "object")
                    message.steamid_invited = new $util.LongBits(object.steamid_invited.low >>> 0, object.steamid_invited.high >>> 0).toNumber();
            if (object.steamid_lobby != null)
                if ($util.Long)
                    (message.steamid_lobby = $util.Long.fromValue(object.steamid_lobby)).unsigned = false;
                else if (typeof object.steamid_lobby === "string")
                    message.steamid_lobby = parseInt(object.steamid_lobby, 10);
                else if (typeof object.steamid_lobby === "number")
                    message.steamid_lobby = object.steamid_lobby;
                else if (typeof object.steamid_lobby === "object")
                    message.steamid_lobby = new $util.LongBits(object.steamid_lobby.low >>> 0, object.steamid_lobby.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCHInviteUserToLobby message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {CMsgGCHInviteUserToLobby} message CMsgGCHInviteUserToLobby
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCHInviteUserToLobby.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid_invited = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid_invited = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid_lobby = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid_lobby = options.longs === String ? "0" : 0;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid_invited != null && message.hasOwnProperty("steamid_invited"))
                if (typeof message.steamid_invited === "number")
                    object.steamid_invited = options.longs === String ? String(message.steamid_invited) : message.steamid_invited;
                else
                    object.steamid_invited = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_invited) : options.longs === Number ? new $util.LongBits(message.steamid_invited.low >>> 0, message.steamid_invited.high >>> 0).toNumber() : message.steamid_invited;
            if (message.steamid_lobby != null && message.hasOwnProperty("steamid_lobby"))
                if (typeof message.steamid_lobby === "number")
                    object.steamid_lobby = options.longs === String ? String(message.steamid_lobby) : message.steamid_lobby;
                else
                    object.steamid_lobby = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_lobby) : options.longs === Number ? new $util.LongBits(message.steamid_lobby.low >>> 0, message.steamid_lobby.high >>> 0).toNumber() : message.steamid_lobby;
            return object;
        };
    
        /**
         * Converts this CMsgGCHInviteUserToLobby to JSON.
         * @function toJSON
         * @memberof CMsgGCHInviteUserToLobby
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCHInviteUserToLobby.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCHInviteUserToLobby
         * @function getTypeUrl
         * @memberof CMsgGCHInviteUserToLobby
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCHInviteUserToLobby.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCHInviteUserToLobby";
        };
    
        return CMsgGCHInviteUserToLobby;
    })();
    
    $root.CMsgGCHRecurringSubscriptionStatusChange = (function() {
    
        /**
         * Properties of a CMsgGCHRecurringSubscriptionStatusChange.
         * @exports ICMsgGCHRecurringSubscriptionStatusChange
         * @interface ICMsgGCHRecurringSubscriptionStatusChange
         * @property {number|Long|null} [steamid] CMsgGCHRecurringSubscriptionStatusChange steamid
         * @property {number|null} [appid] CMsgGCHRecurringSubscriptionStatusChange appid
         * @property {number|Long|null} [agreementid] CMsgGCHRecurringSubscriptionStatusChange agreementid
         * @property {boolean|null} [active] CMsgGCHRecurringSubscriptionStatusChange active
         */
    
        /**
         * Constructs a new CMsgGCHRecurringSubscriptionStatusChange.
         * @exports CMsgGCHRecurringSubscriptionStatusChange
         * @classdesc Represents a CMsgGCHRecurringSubscriptionStatusChange.
         * @implements ICMsgGCHRecurringSubscriptionStatusChange
         * @constructor
         * @param {ICMsgGCHRecurringSubscriptionStatusChange=} [properties] Properties to set
         */
        function CMsgGCHRecurringSubscriptionStatusChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCHRecurringSubscriptionStatusChange steamid.
         * @member {number|Long} steamid
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @instance
         */
        CMsgGCHRecurringSubscriptionStatusChange.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgGCHRecurringSubscriptionStatusChange appid.
         * @member {number} appid
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @instance
         */
        CMsgGCHRecurringSubscriptionStatusChange.prototype.appid = 0;
    
        /**
         * CMsgGCHRecurringSubscriptionStatusChange agreementid.
         * @member {number|Long} agreementid
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @instance
         */
        CMsgGCHRecurringSubscriptionStatusChange.prototype.agreementid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgGCHRecurringSubscriptionStatusChange active.
         * @member {boolean} active
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @instance
         */
        CMsgGCHRecurringSubscriptionStatusChange.prototype.active = false;
    
        /**
         * Creates a new CMsgGCHRecurringSubscriptionStatusChange instance using the specified properties.
         * @function create
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {ICMsgGCHRecurringSubscriptionStatusChange=} [properties] Properties to set
         * @returns {CMsgGCHRecurringSubscriptionStatusChange} CMsgGCHRecurringSubscriptionStatusChange instance
         */
        CMsgGCHRecurringSubscriptionStatusChange.create = function create(properties) {
            return new CMsgGCHRecurringSubscriptionStatusChange(properties);
        };
    
        /**
         * Encodes the specified CMsgGCHRecurringSubscriptionStatusChange message. Does not implicitly {@link CMsgGCHRecurringSubscriptionStatusChange.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {ICMsgGCHRecurringSubscriptionStatusChange} message CMsgGCHRecurringSubscriptionStatusChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHRecurringSubscriptionStatusChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.agreementid != null && Object.hasOwnProperty.call(message, "agreementid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.agreementid);
            if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.active);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCHRecurringSubscriptionStatusChange message, length delimited. Does not implicitly {@link CMsgGCHRecurringSubscriptionStatusChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {ICMsgGCHRecurringSubscriptionStatusChange} message CMsgGCHRecurringSubscriptionStatusChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCHRecurringSubscriptionStatusChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCHRecurringSubscriptionStatusChange message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCHRecurringSubscriptionStatusChange} CMsgGCHRecurringSubscriptionStatusChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHRecurringSubscriptionStatusChange.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCHRecurringSubscriptionStatusChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 2: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.agreementid = reader.fixed64();
                        break;
                    }
                case 4: {
                        message.active = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCHRecurringSubscriptionStatusChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCHRecurringSubscriptionStatusChange} CMsgGCHRecurringSubscriptionStatusChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCHRecurringSubscriptionStatusChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCHRecurringSubscriptionStatusChange message.
         * @function verify
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCHRecurringSubscriptionStatusChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.agreementid != null && message.hasOwnProperty("agreementid"))
                if (!$util.isInteger(message.agreementid) && !(message.agreementid && $util.isInteger(message.agreementid.low) && $util.isInteger(message.agreementid.high)))
                    return "agreementid: integer|Long expected";
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCHRecurringSubscriptionStatusChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCHRecurringSubscriptionStatusChange} CMsgGCHRecurringSubscriptionStatusChange
         */
        CMsgGCHRecurringSubscriptionStatusChange.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCHRecurringSubscriptionStatusChange)
                return object;
            var message = new $root.CMsgGCHRecurringSubscriptionStatusChange();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.agreementid != null)
                if ($util.Long)
                    (message.agreementid = $util.Long.fromValue(object.agreementid)).unsigned = false;
                else if (typeof object.agreementid === "string")
                    message.agreementid = parseInt(object.agreementid, 10);
                else if (typeof object.agreementid === "number")
                    message.agreementid = object.agreementid;
                else if (typeof object.agreementid === "object")
                    message.agreementid = new $util.LongBits(object.agreementid.low >>> 0, object.agreementid.high >>> 0).toNumber();
            if (object.active != null)
                message.active = Boolean(object.active);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCHRecurringSubscriptionStatusChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {CMsgGCHRecurringSubscriptionStatusChange} message CMsgGCHRecurringSubscriptionStatusChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCHRecurringSubscriptionStatusChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.agreementid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.agreementid = options.longs === String ? "0" : 0;
                object.active = false;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.agreementid != null && message.hasOwnProperty("agreementid"))
                if (typeof message.agreementid === "number")
                    object.agreementid = options.longs === String ? String(message.agreementid) : message.agreementid;
                else
                    object.agreementid = options.longs === String ? $util.Long.prototype.toString.call(message.agreementid) : options.longs === Number ? new $util.LongBits(message.agreementid.low >>> 0, message.agreementid.high >>> 0).toNumber() : message.agreementid;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            return object;
        };
    
        /**
         * Converts this CMsgGCHRecurringSubscriptionStatusChange to JSON.
         * @function toJSON
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCHRecurringSubscriptionStatusChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCHRecurringSubscriptionStatusChange
         * @function getTypeUrl
         * @memberof CMsgGCHRecurringSubscriptionStatusChange
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCHRecurringSubscriptionStatusChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCHRecurringSubscriptionStatusChange";
        };
    
        return CMsgGCHRecurringSubscriptionStatusChange;
    })();
    
    $root.CQuest_PublisherAddCommunityItemsToPlayer_Request = (function() {
    
        /**
         * Properties of a CQuest_PublisherAddCommunityItemsToPlayer_Request.
         * @exports ICQuest_PublisherAddCommunityItemsToPlayer_Request
         * @interface ICQuest_PublisherAddCommunityItemsToPlayer_Request
         * @property {number|Long|null} [steamid] CQuest_PublisherAddCommunityItemsToPlayer_Request steamid
         * @property {number|null} [appid] CQuest_PublisherAddCommunityItemsToPlayer_Request appid
         * @property {number|null} [match_item_type] CQuest_PublisherAddCommunityItemsToPlayer_Request match_item_type
         * @property {number|null} [match_item_class] CQuest_PublisherAddCommunityItemsToPlayer_Request match_item_class
         * @property {string|null} [prefix_item_name] CQuest_PublisherAddCommunityItemsToPlayer_Request prefix_item_name
         * @property {Array.<CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute>|null} [attributes] CQuest_PublisherAddCommunityItemsToPlayer_Request attributes
         * @property {string|null} [note] CQuest_PublisherAddCommunityItemsToPlayer_Request note
         */
    
        /**
         * Constructs a new CQuest_PublisherAddCommunityItemsToPlayer_Request.
         * @exports CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @classdesc Represents a CQuest_PublisherAddCommunityItemsToPlayer_Request.
         * @implements ICQuest_PublisherAddCommunityItemsToPlayer_Request
         * @constructor
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Request=} [properties] Properties to set
         */
        function CQuest_PublisherAddCommunityItemsToPlayer_Request(properties) {
            this.attributes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Request steamid.
         * @member {number|Long} steamid
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Request appid.
         * @member {number} appid
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.appid = 0;
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Request match_item_type.
         * @member {number} match_item_type
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.match_item_type = 0;
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Request match_item_class.
         * @member {number} match_item_class
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.match_item_class = 0;
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Request prefix_item_name.
         * @member {string} prefix_item_name
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.prefix_item_name = "";
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Request attributes.
         * @member {Array.<CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute>} attributes
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.attributes = $util.emptyArray;
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Request note.
         * @member {string} note
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.note = "";
    
        /**
         * Creates a new CQuest_PublisherAddCommunityItemsToPlayer_Request instance using the specified properties.
         * @function create
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Request=} [properties] Properties to set
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request} CQuest_PublisherAddCommunityItemsToPlayer_Request instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.create = function create(properties) {
            return new CQuest_PublisherAddCommunityItemsToPlayer_Request(properties);
        };
    
        /**
         * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Request message. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.verify|verify} messages.
         * @function encode
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Request} message CQuest_PublisherAddCommunityItemsToPlayer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.steamid);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.match_item_type != null && Object.hasOwnProperty.call(message, "match_item_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.match_item_type);
            if (message.match_item_class != null && Object.hasOwnProperty.call(message, "match_item_class"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.match_item_class);
            if (message.prefix_item_name != null && Object.hasOwnProperty.call(message, "prefix_item_name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.prefix_item_name);
            if (message.attributes != null && message.attributes.length)
                for (var i = 0; i < message.attributes.length; ++i)
                    $root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.encode(message.attributes[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.note);
            return writer;
        };
    
        /**
         * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Request message, length delimited. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Request} message CQuest_PublisherAddCommunityItemsToPlayer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request} CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CQuest_PublisherAddCommunityItemsToPlayer_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.steamid = reader.uint64();
                        break;
                    }
                case 2: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.match_item_type = reader.uint32();
                        break;
                    }
                case 4: {
                        message.match_item_class = reader.uint32();
                        break;
                    }
                case 5: {
                        message.prefix_item_name = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.attributes && message.attributes.length))
                            message.attributes = [];
                        message.attributes.push($root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.note = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request} CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CQuest_PublisherAddCommunityItemsToPlayer_Request message.
         * @function verify
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.match_item_type != null && message.hasOwnProperty("match_item_type"))
                if (!$util.isInteger(message.match_item_type))
                    return "match_item_type: integer expected";
            if (message.match_item_class != null && message.hasOwnProperty("match_item_class"))
                if (!$util.isInteger(message.match_item_class))
                    return "match_item_class: integer expected";
            if (message.prefix_item_name != null && message.hasOwnProperty("prefix_item_name"))
                if (!$util.isString(message.prefix_item_name))
                    return "prefix_item_name: string expected";
            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.verify(message.attributes[i]);
                    if (error)
                        return "attributes." + error;
                }
            }
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            return null;
        };
    
        /**
         * Creates a CQuest_PublisherAddCommunityItemsToPlayer_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request} CQuest_PublisherAddCommunityItemsToPlayer_Request
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CQuest_PublisherAddCommunityItemsToPlayer_Request)
                return object;
            var message = new $root.CQuest_PublisherAddCommunityItemsToPlayer_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.match_item_type != null)
                message.match_item_type = object.match_item_type >>> 0;
            if (object.match_item_class != null)
                message.match_item_class = object.match_item_class >>> 0;
            if (object.prefix_item_name != null)
                message.prefix_item_name = String(object.prefix_item_name);
            if (object.attributes) {
                if (!Array.isArray(object.attributes))
                    throw TypeError(".CQuest_PublisherAddCommunityItemsToPlayer_Request.attributes: array expected");
                message.attributes = [];
                for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                        throw TypeError(".CQuest_PublisherAddCommunityItemsToPlayer_Request.attributes: object expected");
                    message.attributes[i] = $root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.fromObject(object.attributes[i]);
                }
            }
            if (object.note != null)
                message.note = String(object.note);
            return message;
        };
    
        /**
         * Creates a plain object from a CQuest_PublisherAddCommunityItemsToPlayer_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {CQuest_PublisherAddCommunityItemsToPlayer_Request} message CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.attributes = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.appid = 0;
                object.match_item_type = 0;
                object.match_item_class = 0;
                object.prefix_item_name = "";
                object.note = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.match_item_type != null && message.hasOwnProperty("match_item_type"))
                object.match_item_type = message.match_item_type;
            if (message.match_item_class != null && message.hasOwnProperty("match_item_class"))
                object.match_item_class = message.match_item_class;
            if (message.prefix_item_name != null && message.hasOwnProperty("prefix_item_name"))
                object.prefix_item_name = message.prefix_item_name;
            if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.toObject(message.attributes[j], options);
            }
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            return object;
        };
    
        /**
         * Converts this CQuest_PublisherAddCommunityItemsToPlayer_Request to JSON.
         * @function toJSON
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @function getTypeUrl
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CQuest_PublisherAddCommunityItemsToPlayer_Request";
        };
    
        CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute = (function() {
    
            /**
             * Properties of an Attribute.
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
             * @interface IAttribute
             * @property {number|null} [attribute] Attribute attribute
             * @property {number|Long|null} [value] Attribute value
             */
    
            /**
             * Constructs a new Attribute.
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request
             * @classdesc Represents an Attribute.
             * @implements IAttribute
             * @constructor
             * @param {CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute=} [properties] Properties to set
             */
            function Attribute(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Attribute attribute.
             * @member {number} attribute
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @instance
             */
            Attribute.prototype.attribute = 0;
    
            /**
             * Attribute value.
             * @member {number|Long} value
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @instance
             */
            Attribute.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new Attribute instance using the specified properties.
             * @function create
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute=} [properties] Properties to set
             * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute} Attribute instance
             */
            Attribute.create = function create(properties) {
                return new Attribute(properties);
            };
    
            /**
             * Encodes the specified Attribute message. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.verify|verify} messages.
             * @function encode
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute} message Attribute message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Attribute.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.attribute != null && Object.hasOwnProperty.call(message, "attribute"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.attribute);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified Attribute message, length delimited. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {CQuest_PublisherAddCommunityItemsToPlayer_Request.IAttribute} message Attribute message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Attribute.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Attribute message from the specified reader or buffer.
             * @function decode
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute} Attribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Attribute.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.attribute = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.value = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Attribute message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute} Attribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Attribute.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Attribute message.
             * @function verify
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Attribute.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.attribute != null && message.hasOwnProperty("attribute"))
                    if (!$util.isInteger(message.attribute))
                        return "attribute: integer expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute} Attribute
             */
            Attribute.fromObject = function fromObject(object) {
                if (object instanceof $root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute)
                    return object;
                var message = new $root.CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute();
                if (object.attribute != null)
                    message.attribute = object.attribute >>> 0;
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from an Attribute message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute} message Attribute
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Attribute.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.attribute = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                }
                if (message.attribute != null && message.hasOwnProperty("attribute"))
                    object.attribute = message.attribute;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };
    
            /**
             * Converts this Attribute to JSON.
             * @function toJSON
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Attribute.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Attribute
             * @function getTypeUrl
             * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Attribute.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute";
            };
    
            return Attribute;
        })();
    
        return CQuest_PublisherAddCommunityItemsToPlayer_Request;
    })();
    
    $root.CQuest_PublisherAddCommunityItemsToPlayer_Response = (function() {
    
        /**
         * Properties of a CQuest_PublisherAddCommunityItemsToPlayer_Response.
         * @exports ICQuest_PublisherAddCommunityItemsToPlayer_Response
         * @interface ICQuest_PublisherAddCommunityItemsToPlayer_Response
         * @property {number|null} [items_matched] CQuest_PublisherAddCommunityItemsToPlayer_Response items_matched
         * @property {number|null} [items_granted] CQuest_PublisherAddCommunityItemsToPlayer_Response items_granted
         */
    
        /**
         * Constructs a new CQuest_PublisherAddCommunityItemsToPlayer_Response.
         * @exports CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @classdesc Represents a CQuest_PublisherAddCommunityItemsToPlayer_Response.
         * @implements ICQuest_PublisherAddCommunityItemsToPlayer_Response
         * @constructor
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Response=} [properties] Properties to set
         */
        function CQuest_PublisherAddCommunityItemsToPlayer_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Response items_matched.
         * @member {number} items_matched
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.prototype.items_matched = 0;
    
        /**
         * CQuest_PublisherAddCommunityItemsToPlayer_Response items_granted.
         * @member {number} items_granted
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.prototype.items_granted = 0;
    
        /**
         * Creates a new CQuest_PublisherAddCommunityItemsToPlayer_Response instance using the specified properties.
         * @function create
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Response=} [properties] Properties to set
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Response} CQuest_PublisherAddCommunityItemsToPlayer_Response instance
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.create = function create(properties) {
            return new CQuest_PublisherAddCommunityItemsToPlayer_Response(properties);
        };
    
        /**
         * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Response message. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Response.verify|verify} messages.
         * @function encode
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Response} message CQuest_PublisherAddCommunityItemsToPlayer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items_matched != null && Object.hasOwnProperty.call(message, "items_matched"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.items_matched);
            if (message.items_granted != null && Object.hasOwnProperty.call(message, "items_granted"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.items_granted);
            return writer;
        };
    
        /**
         * Encodes the specified CQuest_PublisherAddCommunityItemsToPlayer_Response message, length delimited. Does not implicitly {@link CQuest_PublisherAddCommunityItemsToPlayer_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {ICQuest_PublisherAddCommunityItemsToPlayer_Response} message CQuest_PublisherAddCommunityItemsToPlayer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Response} CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CQuest_PublisherAddCommunityItemsToPlayer_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.items_matched = reader.uint32();
                        break;
                    }
                case 2: {
                        message.items_granted = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CQuest_PublisherAddCommunityItemsToPlayer_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Response} CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CQuest_PublisherAddCommunityItemsToPlayer_Response message.
         * @function verify
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items_matched != null && message.hasOwnProperty("items_matched"))
                if (!$util.isInteger(message.items_matched))
                    return "items_matched: integer expected";
            if (message.items_granted != null && message.hasOwnProperty("items_granted"))
                if (!$util.isInteger(message.items_granted))
                    return "items_granted: integer expected";
            return null;
        };
    
        /**
         * Creates a CQuest_PublisherAddCommunityItemsToPlayer_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CQuest_PublisherAddCommunityItemsToPlayer_Response} CQuest_PublisherAddCommunityItemsToPlayer_Response
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CQuest_PublisherAddCommunityItemsToPlayer_Response)
                return object;
            var message = new $root.CQuest_PublisherAddCommunityItemsToPlayer_Response();
            if (object.items_matched != null)
                message.items_matched = object.items_matched >>> 0;
            if (object.items_granted != null)
                message.items_granted = object.items_granted >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CQuest_PublisherAddCommunityItemsToPlayer_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {CQuest_PublisherAddCommunityItemsToPlayer_Response} message CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.items_matched = 0;
                object.items_granted = 0;
            }
            if (message.items_matched != null && message.hasOwnProperty("items_matched"))
                object.items_matched = message.items_matched;
            if (message.items_granted != null && message.hasOwnProperty("items_granted"))
                object.items_granted = message.items_granted;
            return object;
        };
    
        /**
         * Converts this CQuest_PublisherAddCommunityItemsToPlayer_Response to JSON.
         * @function toJSON
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @function getTypeUrl
         * @memberof CQuest_PublisherAddCommunityItemsToPlayer_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CQuest_PublisherAddCommunityItemsToPlayer_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CQuest_PublisherAddCommunityItemsToPlayer_Response";
        };
    
        return CQuest_PublisherAddCommunityItemsToPlayer_Response;
    })();
    
    $root.CCommunity_GamePersonalDataCategoryInfo = (function() {
    
        /**
         * Properties of a CCommunity_GamePersonalDataCategoryInfo.
         * @exports ICCommunity_GamePersonalDataCategoryInfo
         * @interface ICCommunity_GamePersonalDataCategoryInfo
         * @property {string|null} [type] CCommunity_GamePersonalDataCategoryInfo type
         * @property {string|null} [localization_token] CCommunity_GamePersonalDataCategoryInfo localization_token
         * @property {string|null} [template_file] CCommunity_GamePersonalDataCategoryInfo template_file
         */
    
        /**
         * Constructs a new CCommunity_GamePersonalDataCategoryInfo.
         * @exports CCommunity_GamePersonalDataCategoryInfo
         * @classdesc Represents a CCommunity_GamePersonalDataCategoryInfo.
         * @implements ICCommunity_GamePersonalDataCategoryInfo
         * @constructor
         * @param {ICCommunity_GamePersonalDataCategoryInfo=} [properties] Properties to set
         */
        function CCommunity_GamePersonalDataCategoryInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_GamePersonalDataCategoryInfo type.
         * @member {string} type
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @instance
         */
        CCommunity_GamePersonalDataCategoryInfo.prototype.type = "";
    
        /**
         * CCommunity_GamePersonalDataCategoryInfo localization_token.
         * @member {string} localization_token
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @instance
         */
        CCommunity_GamePersonalDataCategoryInfo.prototype.localization_token = "";
    
        /**
         * CCommunity_GamePersonalDataCategoryInfo template_file.
         * @member {string} template_file
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @instance
         */
        CCommunity_GamePersonalDataCategoryInfo.prototype.template_file = "";
    
        /**
         * Creates a new CCommunity_GamePersonalDataCategoryInfo instance using the specified properties.
         * @function create
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {ICCommunity_GamePersonalDataCategoryInfo=} [properties] Properties to set
         * @returns {CCommunity_GamePersonalDataCategoryInfo} CCommunity_GamePersonalDataCategoryInfo instance
         */
        CCommunity_GamePersonalDataCategoryInfo.create = function create(properties) {
            return new CCommunity_GamePersonalDataCategoryInfo(properties);
        };
    
        /**
         * Encodes the specified CCommunity_GamePersonalDataCategoryInfo message. Does not implicitly {@link CCommunity_GamePersonalDataCategoryInfo.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {ICCommunity_GamePersonalDataCategoryInfo} message CCommunity_GamePersonalDataCategoryInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GamePersonalDataCategoryInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.localization_token != null && Object.hasOwnProperty.call(message, "localization_token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.localization_token);
            if (message.template_file != null && Object.hasOwnProperty.call(message, "template_file"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.template_file);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_GamePersonalDataCategoryInfo message, length delimited. Does not implicitly {@link CCommunity_GamePersonalDataCategoryInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {ICCommunity_GamePersonalDataCategoryInfo} message CCommunity_GamePersonalDataCategoryInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GamePersonalDataCategoryInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_GamePersonalDataCategoryInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_GamePersonalDataCategoryInfo} CCommunity_GamePersonalDataCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GamePersonalDataCategoryInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_GamePersonalDataCategoryInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.localization_token = reader.string();
                        break;
                    }
                case 3: {
                        message.template_file = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_GamePersonalDataCategoryInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_GamePersonalDataCategoryInfo} CCommunity_GamePersonalDataCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GamePersonalDataCategoryInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_GamePersonalDataCategoryInfo message.
         * @function verify
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_GamePersonalDataCategoryInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.localization_token != null && message.hasOwnProperty("localization_token"))
                if (!$util.isString(message.localization_token))
                    return "localization_token: string expected";
            if (message.template_file != null && message.hasOwnProperty("template_file"))
                if (!$util.isString(message.template_file))
                    return "template_file: string expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_GamePersonalDataCategoryInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_GamePersonalDataCategoryInfo} CCommunity_GamePersonalDataCategoryInfo
         */
        CCommunity_GamePersonalDataCategoryInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_GamePersonalDataCategoryInfo)
                return object;
            var message = new $root.CCommunity_GamePersonalDataCategoryInfo();
            if (object.type != null)
                message.type = String(object.type);
            if (object.localization_token != null)
                message.localization_token = String(object.localization_token);
            if (object.template_file != null)
                message.template_file = String(object.template_file);
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_GamePersonalDataCategoryInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {CCommunity_GamePersonalDataCategoryInfo} message CCommunity_GamePersonalDataCategoryInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_GamePersonalDataCategoryInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.localization_token = "";
                object.template_file = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.localization_token != null && message.hasOwnProperty("localization_token"))
                object.localization_token = message.localization_token;
            if (message.template_file != null && message.hasOwnProperty("template_file"))
                object.template_file = message.template_file;
            return object;
        };
    
        /**
         * Converts this CCommunity_GamePersonalDataCategoryInfo to JSON.
         * @function toJSON
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_GamePersonalDataCategoryInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CCommunity_GamePersonalDataCategoryInfo
         * @function getTypeUrl
         * @memberof CCommunity_GamePersonalDataCategoryInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCommunity_GamePersonalDataCategoryInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CCommunity_GamePersonalDataCategoryInfo";
        };
    
        return CCommunity_GamePersonalDataCategoryInfo;
    })();
    
    $root.CCommunity_GetGamePersonalDataCategories_Request = (function() {
    
        /**
         * Properties of a CCommunity_GetGamePersonalDataCategories_Request.
         * @exports ICCommunity_GetGamePersonalDataCategories_Request
         * @interface ICCommunity_GetGamePersonalDataCategories_Request
         * @property {number|null} [appid] CCommunity_GetGamePersonalDataCategories_Request appid
         */
    
        /**
         * Constructs a new CCommunity_GetGamePersonalDataCategories_Request.
         * @exports CCommunity_GetGamePersonalDataCategories_Request
         * @classdesc Represents a CCommunity_GetGamePersonalDataCategories_Request.
         * @implements ICCommunity_GetGamePersonalDataCategories_Request
         * @constructor
         * @param {ICCommunity_GetGamePersonalDataCategories_Request=} [properties] Properties to set
         */
        function CCommunity_GetGamePersonalDataCategories_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_GetGamePersonalDataCategories_Request appid.
         * @member {number} appid
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @instance
         */
        CCommunity_GetGamePersonalDataCategories_Request.prototype.appid = 0;
    
        /**
         * Creates a new CCommunity_GetGamePersonalDataCategories_Request instance using the specified properties.
         * @function create
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {ICCommunity_GetGamePersonalDataCategories_Request=} [properties] Properties to set
         * @returns {CCommunity_GetGamePersonalDataCategories_Request} CCommunity_GetGamePersonalDataCategories_Request instance
         */
        CCommunity_GetGamePersonalDataCategories_Request.create = function create(properties) {
            return new CCommunity_GetGamePersonalDataCategories_Request(properties);
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataCategories_Request message. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Request.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {ICCommunity_GetGamePersonalDataCategories_Request} message CCommunity_GetGamePersonalDataCategories_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataCategories_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataCategories_Request message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {ICCommunity_GetGamePersonalDataCategories_Request} message CCommunity_GetGamePersonalDataCategories_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataCategories_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataCategories_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_GetGamePersonalDataCategories_Request} CCommunity_GetGamePersonalDataCategories_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataCategories_Request.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_GetGamePersonalDataCategories_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataCategories_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_GetGamePersonalDataCategories_Request} CCommunity_GetGamePersonalDataCategories_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataCategories_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_GetGamePersonalDataCategories_Request message.
         * @function verify
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_GetGamePersonalDataCategories_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_GetGamePersonalDataCategories_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_GetGamePersonalDataCategories_Request} CCommunity_GetGamePersonalDataCategories_Request
         */
        CCommunity_GetGamePersonalDataCategories_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_GetGamePersonalDataCategories_Request)
                return object;
            var message = new $root.CCommunity_GetGamePersonalDataCategories_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_GetGamePersonalDataCategories_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {CCommunity_GetGamePersonalDataCategories_Request} message CCommunity_GetGamePersonalDataCategories_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_GetGamePersonalDataCategories_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.appid = 0;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CCommunity_GetGamePersonalDataCategories_Request to JSON.
         * @function toJSON
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_GetGamePersonalDataCategories_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CCommunity_GetGamePersonalDataCategories_Request
         * @function getTypeUrl
         * @memberof CCommunity_GetGamePersonalDataCategories_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCommunity_GetGamePersonalDataCategories_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CCommunity_GetGamePersonalDataCategories_Request";
        };
    
        return CCommunity_GetGamePersonalDataCategories_Request;
    })();
    
    $root.CCommunity_GetGamePersonalDataCategories_Response = (function() {
    
        /**
         * Properties of a CCommunity_GetGamePersonalDataCategories_Response.
         * @exports ICCommunity_GetGamePersonalDataCategories_Response
         * @interface ICCommunity_GetGamePersonalDataCategories_Response
         * @property {Array.<ICCommunity_GamePersonalDataCategoryInfo>|null} [categories] CCommunity_GetGamePersonalDataCategories_Response categories
         * @property {string|null} [app_assets_basename] CCommunity_GetGamePersonalDataCategories_Response app_assets_basename
         */
    
        /**
         * Constructs a new CCommunity_GetGamePersonalDataCategories_Response.
         * @exports CCommunity_GetGamePersonalDataCategories_Response
         * @classdesc Represents a CCommunity_GetGamePersonalDataCategories_Response.
         * @implements ICCommunity_GetGamePersonalDataCategories_Response
         * @constructor
         * @param {ICCommunity_GetGamePersonalDataCategories_Response=} [properties] Properties to set
         */
        function CCommunity_GetGamePersonalDataCategories_Response(properties) {
            this.categories = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_GetGamePersonalDataCategories_Response categories.
         * @member {Array.<ICCommunity_GamePersonalDataCategoryInfo>} categories
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @instance
         */
        CCommunity_GetGamePersonalDataCategories_Response.prototype.categories = $util.emptyArray;
    
        /**
         * CCommunity_GetGamePersonalDataCategories_Response app_assets_basename.
         * @member {string} app_assets_basename
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @instance
         */
        CCommunity_GetGamePersonalDataCategories_Response.prototype.app_assets_basename = "";
    
        /**
         * Creates a new CCommunity_GetGamePersonalDataCategories_Response instance using the specified properties.
         * @function create
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {ICCommunity_GetGamePersonalDataCategories_Response=} [properties] Properties to set
         * @returns {CCommunity_GetGamePersonalDataCategories_Response} CCommunity_GetGamePersonalDataCategories_Response instance
         */
        CCommunity_GetGamePersonalDataCategories_Response.create = function create(properties) {
            return new CCommunity_GetGamePersonalDataCategories_Response(properties);
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataCategories_Response message. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Response.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {ICCommunity_GetGamePersonalDataCategories_Response} message CCommunity_GetGamePersonalDataCategories_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataCategories_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.categories != null && message.categories.length)
                for (var i = 0; i < message.categories.length; ++i)
                    $root.CCommunity_GamePersonalDataCategoryInfo.encode(message.categories[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.app_assets_basename != null && Object.hasOwnProperty.call(message, "app_assets_basename"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.app_assets_basename);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataCategories_Response message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataCategories_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {ICCommunity_GetGamePersonalDataCategories_Response} message CCommunity_GetGamePersonalDataCategories_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataCategories_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataCategories_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_GetGamePersonalDataCategories_Response} CCommunity_GetGamePersonalDataCategories_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataCategories_Response.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_GetGamePersonalDataCategories_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.categories && message.categories.length))
                            message.categories = [];
                        message.categories.push($root.CCommunity_GamePersonalDataCategoryInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.app_assets_basename = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataCategories_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_GetGamePersonalDataCategories_Response} CCommunity_GetGamePersonalDataCategories_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataCategories_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_GetGamePersonalDataCategories_Response message.
         * @function verify
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_GetGamePersonalDataCategories_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (var i = 0; i < message.categories.length; ++i) {
                    var error = $root.CCommunity_GamePersonalDataCategoryInfo.verify(message.categories[i]);
                    if (error)
                        return "categories." + error;
                }
            }
            if (message.app_assets_basename != null && message.hasOwnProperty("app_assets_basename"))
                if (!$util.isString(message.app_assets_basename))
                    return "app_assets_basename: string expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_GetGamePersonalDataCategories_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_GetGamePersonalDataCategories_Response} CCommunity_GetGamePersonalDataCategories_Response
         */
        CCommunity_GetGamePersonalDataCategories_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_GetGamePersonalDataCategories_Response)
                return object;
            var message = new $root.CCommunity_GetGamePersonalDataCategories_Response();
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".CCommunity_GetGamePersonalDataCategories_Response.categories: array expected");
                message.categories = [];
                for (var i = 0; i < object.categories.length; ++i) {
                    if (typeof object.categories[i] !== "object")
                        throw TypeError(".CCommunity_GetGamePersonalDataCategories_Response.categories: object expected");
                    message.categories[i] = $root.CCommunity_GamePersonalDataCategoryInfo.fromObject(object.categories[i]);
                }
            }
            if (object.app_assets_basename != null)
                message.app_assets_basename = String(object.app_assets_basename);
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_GetGamePersonalDataCategories_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {CCommunity_GetGamePersonalDataCategories_Response} message CCommunity_GetGamePersonalDataCategories_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_GetGamePersonalDataCategories_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.categories = [];
            if (options.defaults)
                object.app_assets_basename = "";
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (var j = 0; j < message.categories.length; ++j)
                    object.categories[j] = $root.CCommunity_GamePersonalDataCategoryInfo.toObject(message.categories[j], options);
            }
            if (message.app_assets_basename != null && message.hasOwnProperty("app_assets_basename"))
                object.app_assets_basename = message.app_assets_basename;
            return object;
        };
    
        /**
         * Converts this CCommunity_GetGamePersonalDataCategories_Response to JSON.
         * @function toJSON
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_GetGamePersonalDataCategories_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CCommunity_GetGamePersonalDataCategories_Response
         * @function getTypeUrl
         * @memberof CCommunity_GetGamePersonalDataCategories_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCommunity_GetGamePersonalDataCategories_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CCommunity_GetGamePersonalDataCategories_Response";
        };
    
        return CCommunity_GetGamePersonalDataCategories_Response;
    })();
    
    $root.CCommunity_GetGamePersonalDataEntries_Request = (function() {
    
        /**
         * Properties of a CCommunity_GetGamePersonalDataEntries_Request.
         * @exports ICCommunity_GetGamePersonalDataEntries_Request
         * @interface ICCommunity_GetGamePersonalDataEntries_Request
         * @property {number|null} [appid] CCommunity_GetGamePersonalDataEntries_Request appid
         * @property {number|Long|null} [steamid] CCommunity_GetGamePersonalDataEntries_Request steamid
         * @property {string|null} [type] CCommunity_GetGamePersonalDataEntries_Request type
         * @property {string|null} [continue_token] CCommunity_GetGamePersonalDataEntries_Request continue_token
         */
    
        /**
         * Constructs a new CCommunity_GetGamePersonalDataEntries_Request.
         * @exports CCommunity_GetGamePersonalDataEntries_Request
         * @classdesc Represents a CCommunity_GetGamePersonalDataEntries_Request.
         * @implements ICCommunity_GetGamePersonalDataEntries_Request
         * @constructor
         * @param {ICCommunity_GetGamePersonalDataEntries_Request=} [properties] Properties to set
         */
        function CCommunity_GetGamePersonalDataEntries_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Request appid.
         * @member {number} appid
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Request.prototype.appid = 0;
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Request steamid.
         * @member {number|Long} steamid
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Request type.
         * @member {string} type
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Request.prototype.type = "";
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Request continue_token.
         * @member {string} continue_token
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Request.prototype.continue_token = "";
    
        /**
         * Creates a new CCommunity_GetGamePersonalDataEntries_Request instance using the specified properties.
         * @function create
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {ICCommunity_GetGamePersonalDataEntries_Request=} [properties] Properties to set
         * @returns {CCommunity_GetGamePersonalDataEntries_Request} CCommunity_GetGamePersonalDataEntries_Request instance
         */
        CCommunity_GetGamePersonalDataEntries_Request.create = function create(properties) {
            return new CCommunity_GetGamePersonalDataEntries_Request(properties);
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataEntries_Request message. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Request.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {ICCommunity_GetGamePersonalDataEntries_Request} message CCommunity_GetGamePersonalDataEntries_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataEntries_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.steamid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.continue_token != null && Object.hasOwnProperty.call(message, "continue_token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.continue_token);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataEntries_Request message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {ICCommunity_GetGamePersonalDataEntries_Request} message CCommunity_GetGamePersonalDataEntries_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataEntries_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataEntries_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_GetGamePersonalDataEntries_Request} CCommunity_GetGamePersonalDataEntries_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataEntries_Request.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_GetGamePersonalDataEntries_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.steamid = reader.uint64();
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                case 4: {
                        message.continue_token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataEntries_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_GetGamePersonalDataEntries_Request} CCommunity_GetGamePersonalDataEntries_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataEntries_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_GetGamePersonalDataEntries_Request message.
         * @function verify
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_GetGamePersonalDataEntries_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.continue_token != null && message.hasOwnProperty("continue_token"))
                if (!$util.isString(message.continue_token))
                    return "continue_token: string expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_GetGamePersonalDataEntries_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_GetGamePersonalDataEntries_Request} CCommunity_GetGamePersonalDataEntries_Request
         */
        CCommunity_GetGamePersonalDataEntries_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_GetGamePersonalDataEntries_Request)
                return object;
            var message = new $root.CCommunity_GetGamePersonalDataEntries_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            if (object.type != null)
                message.type = String(object.type);
            if (object.continue_token != null)
                message.continue_token = String(object.continue_token);
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_GetGamePersonalDataEntries_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {CCommunity_GetGamePersonalDataEntries_Request} message CCommunity_GetGamePersonalDataEntries_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_GetGamePersonalDataEntries_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.type = "";
                object.continue_token = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.continue_token != null && message.hasOwnProperty("continue_token"))
                object.continue_token = message.continue_token;
            return object;
        };
    
        /**
         * Converts this CCommunity_GetGamePersonalDataEntries_Request to JSON.
         * @function toJSON
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_GetGamePersonalDataEntries_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CCommunity_GetGamePersonalDataEntries_Request
         * @function getTypeUrl
         * @memberof CCommunity_GetGamePersonalDataEntries_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCommunity_GetGamePersonalDataEntries_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CCommunity_GetGamePersonalDataEntries_Request";
        };
    
        return CCommunity_GetGamePersonalDataEntries_Request;
    })();
    
    $root.CCommunity_GetGamePersonalDataEntries_Response = (function() {
    
        /**
         * Properties of a CCommunity_GetGamePersonalDataEntries_Response.
         * @exports ICCommunity_GetGamePersonalDataEntries_Response
         * @interface ICCommunity_GetGamePersonalDataEntries_Response
         * @property {number|null} [gceresult] CCommunity_GetGamePersonalDataEntries_Response gceresult
         * @property {Array.<string>|null} [entries] CCommunity_GetGamePersonalDataEntries_Response entries
         * @property {string|null} [continue_token] CCommunity_GetGamePersonalDataEntries_Response continue_token
         * @property {string|null} [continue_text] CCommunity_GetGamePersonalDataEntries_Response continue_text
         */
    
        /**
         * Constructs a new CCommunity_GetGamePersonalDataEntries_Response.
         * @exports CCommunity_GetGamePersonalDataEntries_Response
         * @classdesc Represents a CCommunity_GetGamePersonalDataEntries_Response.
         * @implements ICCommunity_GetGamePersonalDataEntries_Response
         * @constructor
         * @param {ICCommunity_GetGamePersonalDataEntries_Response=} [properties] Properties to set
         */
        function CCommunity_GetGamePersonalDataEntries_Response(properties) {
            this.entries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Response gceresult.
         * @member {number} gceresult
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Response.prototype.gceresult = 0;
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Response entries.
         * @member {Array.<string>} entries
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Response.prototype.entries = $util.emptyArray;
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Response continue_token.
         * @member {string} continue_token
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Response.prototype.continue_token = "";
    
        /**
         * CCommunity_GetGamePersonalDataEntries_Response continue_text.
         * @member {string} continue_text
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @instance
         */
        CCommunity_GetGamePersonalDataEntries_Response.prototype.continue_text = "";
    
        /**
         * Creates a new CCommunity_GetGamePersonalDataEntries_Response instance using the specified properties.
         * @function create
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {ICCommunity_GetGamePersonalDataEntries_Response=} [properties] Properties to set
         * @returns {CCommunity_GetGamePersonalDataEntries_Response} CCommunity_GetGamePersonalDataEntries_Response instance
         */
        CCommunity_GetGamePersonalDataEntries_Response.create = function create(properties) {
            return new CCommunity_GetGamePersonalDataEntries_Response(properties);
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataEntries_Response message. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Response.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {ICCommunity_GetGamePersonalDataEntries_Response} message CCommunity_GetGamePersonalDataEntries_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataEntries_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gceresult != null && Object.hasOwnProperty.call(message, "gceresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.gceresult);
            if (message.entries != null && message.entries.length)
                for (var i = 0; i < message.entries.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.entries[i]);
            if (message.continue_token != null && Object.hasOwnProperty.call(message, "continue_token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.continue_token);
            if (message.continue_text != null && Object.hasOwnProperty.call(message, "continue_text"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.continue_text);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_GetGamePersonalDataEntries_Response message, length delimited. Does not implicitly {@link CCommunity_GetGamePersonalDataEntries_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {ICCommunity_GetGamePersonalDataEntries_Response} message CCommunity_GetGamePersonalDataEntries_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_GetGamePersonalDataEntries_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataEntries_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_GetGamePersonalDataEntries_Response} CCommunity_GetGamePersonalDataEntries_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataEntries_Response.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_GetGamePersonalDataEntries_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.gceresult = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.entries && message.entries.length))
                            message.entries = [];
                        message.entries.push(reader.string());
                        break;
                    }
                case 3: {
                        message.continue_token = reader.string();
                        break;
                    }
                case 4: {
                        message.continue_text = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_GetGamePersonalDataEntries_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_GetGamePersonalDataEntries_Response} CCommunity_GetGamePersonalDataEntries_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_GetGamePersonalDataEntries_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_GetGamePersonalDataEntries_Response message.
         * @function verify
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_GetGamePersonalDataEntries_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gceresult != null && message.hasOwnProperty("gceresult"))
                if (!$util.isInteger(message.gceresult))
                    return "gceresult: integer expected";
            if (message.entries != null && message.hasOwnProperty("entries")) {
                if (!Array.isArray(message.entries))
                    return "entries: array expected";
                for (var i = 0; i < message.entries.length; ++i)
                    if (!$util.isString(message.entries[i]))
                        return "entries: string[] expected";
            }
            if (message.continue_token != null && message.hasOwnProperty("continue_token"))
                if (!$util.isString(message.continue_token))
                    return "continue_token: string expected";
            if (message.continue_text != null && message.hasOwnProperty("continue_text"))
                if (!$util.isString(message.continue_text))
                    return "continue_text: string expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_GetGamePersonalDataEntries_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_GetGamePersonalDataEntries_Response} CCommunity_GetGamePersonalDataEntries_Response
         */
        CCommunity_GetGamePersonalDataEntries_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_GetGamePersonalDataEntries_Response)
                return object;
            var message = new $root.CCommunity_GetGamePersonalDataEntries_Response();
            if (object.gceresult != null)
                message.gceresult = object.gceresult >>> 0;
            if (object.entries) {
                if (!Array.isArray(object.entries))
                    throw TypeError(".CCommunity_GetGamePersonalDataEntries_Response.entries: array expected");
                message.entries = [];
                for (var i = 0; i < object.entries.length; ++i)
                    message.entries[i] = String(object.entries[i]);
            }
            if (object.continue_token != null)
                message.continue_token = String(object.continue_token);
            if (object.continue_text != null)
                message.continue_text = String(object.continue_text);
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_GetGamePersonalDataEntries_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {CCommunity_GetGamePersonalDataEntries_Response} message CCommunity_GetGamePersonalDataEntries_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_GetGamePersonalDataEntries_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entries = [];
            if (options.defaults) {
                object.gceresult = 0;
                object.continue_token = "";
                object.continue_text = "";
            }
            if (message.gceresult != null && message.hasOwnProperty("gceresult"))
                object.gceresult = message.gceresult;
            if (message.entries && message.entries.length) {
                object.entries = [];
                for (var j = 0; j < message.entries.length; ++j)
                    object.entries[j] = message.entries[j];
            }
            if (message.continue_token != null && message.hasOwnProperty("continue_token"))
                object.continue_token = message.continue_token;
            if (message.continue_text != null && message.hasOwnProperty("continue_text"))
                object.continue_text = message.continue_text;
            return object;
        };
    
        /**
         * Converts this CCommunity_GetGamePersonalDataEntries_Response to JSON.
         * @function toJSON
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_GetGamePersonalDataEntries_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CCommunity_GetGamePersonalDataEntries_Response
         * @function getTypeUrl
         * @memberof CCommunity_GetGamePersonalDataEntries_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCommunity_GetGamePersonalDataEntries_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CCommunity_GetGamePersonalDataEntries_Response";
        };
    
        return CCommunity_GetGamePersonalDataEntries_Response;
    })();
    
    $root.CCommunity_TerminateGamePersonalDataEntries_Request = (function() {
    
        /**
         * Properties of a CCommunity_TerminateGamePersonalDataEntries_Request.
         * @exports ICCommunity_TerminateGamePersonalDataEntries_Request
         * @interface ICCommunity_TerminateGamePersonalDataEntries_Request
         * @property {number|null} [appid] CCommunity_TerminateGamePersonalDataEntries_Request appid
         * @property {number|Long|null} [steamid] CCommunity_TerminateGamePersonalDataEntries_Request steamid
         */
    
        /**
         * Constructs a new CCommunity_TerminateGamePersonalDataEntries_Request.
         * @exports CCommunity_TerminateGamePersonalDataEntries_Request
         * @classdesc Represents a CCommunity_TerminateGamePersonalDataEntries_Request.
         * @implements ICCommunity_TerminateGamePersonalDataEntries_Request
         * @constructor
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Request=} [properties] Properties to set
         */
        function CCommunity_TerminateGamePersonalDataEntries_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_TerminateGamePersonalDataEntries_Request appid.
         * @member {number} appid
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @instance
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.prototype.appid = 0;
    
        /**
         * CCommunity_TerminateGamePersonalDataEntries_Request steamid.
         * @member {number|Long} steamid
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @instance
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CCommunity_TerminateGamePersonalDataEntries_Request instance using the specified properties.
         * @function create
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Request=} [properties] Properties to set
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Request} CCommunity_TerminateGamePersonalDataEntries_Request instance
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.create = function create(properties) {
            return new CCommunity_TerminateGamePersonalDataEntries_Request(properties);
        };
    
        /**
         * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Request message. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Request.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Request} message CCommunity_TerminateGamePersonalDataEntries_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Request message, length delimited. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Request} message CCommunity_TerminateGamePersonalDataEntries_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_TerminateGamePersonalDataEntries_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Request} CCommunity_TerminateGamePersonalDataEntries_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_TerminateGamePersonalDataEntries_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.steamid = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_TerminateGamePersonalDataEntries_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Request} CCommunity_TerminateGamePersonalDataEntries_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_TerminateGamePersonalDataEntries_Request message.
         * @function verify
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_TerminateGamePersonalDataEntries_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Request} CCommunity_TerminateGamePersonalDataEntries_Request
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_TerminateGamePersonalDataEntries_Request)
                return object;
            var message = new $root.CCommunity_TerminateGamePersonalDataEntries_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_TerminateGamePersonalDataEntries_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {CCommunity_TerminateGamePersonalDataEntries_Request} message CCommunity_TerminateGamePersonalDataEntries_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            return object;
        };
    
        /**
         * Converts this CCommunity_TerminateGamePersonalDataEntries_Request to JSON.
         * @function toJSON
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CCommunity_TerminateGamePersonalDataEntries_Request
         * @function getTypeUrl
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCommunity_TerminateGamePersonalDataEntries_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CCommunity_TerminateGamePersonalDataEntries_Request";
        };
    
        return CCommunity_TerminateGamePersonalDataEntries_Request;
    })();
    
    $root.CCommunity_TerminateGamePersonalDataEntries_Response = (function() {
    
        /**
         * Properties of a CCommunity_TerminateGamePersonalDataEntries_Response.
         * @exports ICCommunity_TerminateGamePersonalDataEntries_Response
         * @interface ICCommunity_TerminateGamePersonalDataEntries_Response
         * @property {number|null} [gceresult] CCommunity_TerminateGamePersonalDataEntries_Response gceresult
         */
    
        /**
         * Constructs a new CCommunity_TerminateGamePersonalDataEntries_Response.
         * @exports CCommunity_TerminateGamePersonalDataEntries_Response
         * @classdesc Represents a CCommunity_TerminateGamePersonalDataEntries_Response.
         * @implements ICCommunity_TerminateGamePersonalDataEntries_Response
         * @constructor
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Response=} [properties] Properties to set
         */
        function CCommunity_TerminateGamePersonalDataEntries_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_TerminateGamePersonalDataEntries_Response gceresult.
         * @member {number} gceresult
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @instance
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.prototype.gceresult = 0;
    
        /**
         * Creates a new CCommunity_TerminateGamePersonalDataEntries_Response instance using the specified properties.
         * @function create
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Response=} [properties] Properties to set
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Response} CCommunity_TerminateGamePersonalDataEntries_Response instance
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.create = function create(properties) {
            return new CCommunity_TerminateGamePersonalDataEntries_Response(properties);
        };
    
        /**
         * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Response message. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Response.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Response} message CCommunity_TerminateGamePersonalDataEntries_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gceresult != null && Object.hasOwnProperty.call(message, "gceresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.gceresult);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_TerminateGamePersonalDataEntries_Response message, length delimited. Does not implicitly {@link CCommunity_TerminateGamePersonalDataEntries_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {ICCommunity_TerminateGamePersonalDataEntries_Response} message CCommunity_TerminateGamePersonalDataEntries_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_TerminateGamePersonalDataEntries_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Response} CCommunity_TerminateGamePersonalDataEntries_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_TerminateGamePersonalDataEntries_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.gceresult = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_TerminateGamePersonalDataEntries_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Response} CCommunity_TerminateGamePersonalDataEntries_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_TerminateGamePersonalDataEntries_Response message.
         * @function verify
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gceresult != null && message.hasOwnProperty("gceresult"))
                if (!$util.isInteger(message.gceresult))
                    return "gceresult: integer expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_TerminateGamePersonalDataEntries_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_TerminateGamePersonalDataEntries_Response} CCommunity_TerminateGamePersonalDataEntries_Response
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_TerminateGamePersonalDataEntries_Response)
                return object;
            var message = new $root.CCommunity_TerminateGamePersonalDataEntries_Response();
            if (object.gceresult != null)
                message.gceresult = object.gceresult >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_TerminateGamePersonalDataEntries_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {CCommunity_TerminateGamePersonalDataEntries_Response} message CCommunity_TerminateGamePersonalDataEntries_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gceresult = 0;
            if (message.gceresult != null && message.hasOwnProperty("gceresult"))
                object.gceresult = message.gceresult;
            return object;
        };
    
        /**
         * Converts this CCommunity_TerminateGamePersonalDataEntries_Response to JSON.
         * @function toJSON
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CCommunity_TerminateGamePersonalDataEntries_Response
         * @function getTypeUrl
         * @memberof CCommunity_TerminateGamePersonalDataEntries_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CCommunity_TerminateGamePersonalDataEntries_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CCommunity_TerminateGamePersonalDataEntries_Response";
        };
    
        return CCommunity_TerminateGamePersonalDataEntries_Response;
    })();

    return $root;
});
