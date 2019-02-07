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
     * @enum {string}
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
     * @property {number} k_EGCMsgVacVerificationChange=518 k_EGCMsgVacVerificationChange value
     * @property {number} k_EGCMsgAccountPhoneNumberChange=519 k_EGCMsgAccountPhoneNumberChange value
     * @property {number} k_EGCMsgInviteUserToLobby=523 k_EGCMsgInviteUserToLobby value
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
        values[valuesById[518] = "k_EGCMsgVacVerificationChange"] = 518;
        values[valuesById[519] = "k_EGCMsgAccountPhoneNumberChange"] = 519;
        values[valuesById[523] = "k_EGCMsgInviteUserToLobby"] = 523;
        return values;
    })();
    
    /**
     * ESOMsg enum.
     * @exports ESOMsg
     * @enum {string}
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
     * @enum {string}
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
     * @enum {string}
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
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.is_verified != null && message.hasOwnProperty("is_verified"))
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
        CMsgGCHVacVerificationChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCHVacVerificationChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.is_verified = reader.bool();
                    break;
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
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.phone_id != null && message.hasOwnProperty("phone_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.phone_id);
            if (message.is_verified != null && message.hasOwnProperty("is_verified"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.is_verified);
            if (message.is_identifying != null && message.hasOwnProperty("is_identifying"))
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
        CMsgGCHAccountPhoneNumberChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCHAccountPhoneNumberChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.phone_id = reader.uint64();
                    break;
                case 4:
                    message.is_verified = reader.bool();
                    break;
                case 5:
                    message.is_identifying = reader.bool();
                    break;
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
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.steamid_invited != null && message.hasOwnProperty("steamid_invited"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid_invited);
            if (message.steamid_lobby != null && message.hasOwnProperty("steamid_lobby"))
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
        CMsgGCHInviteUserToLobby.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCHInviteUserToLobby();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.steamid_invited = reader.fixed64();
                    break;
                case 4:
                    message.steamid_lobby = reader.fixed64();
                    break;
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
    
        return CMsgGCHInviteUserToLobby;
    })();

    return $root;
});
