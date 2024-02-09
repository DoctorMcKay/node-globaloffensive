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
     * SignonState_t enum.
     * @exports SignonState_t
     * @enum {number}
     * @property {number} SIGNONSTATE_NONE=0 SIGNONSTATE_NONE value
     * @property {number} SIGNONSTATE_CHALLENGE=1 SIGNONSTATE_CHALLENGE value
     * @property {number} SIGNONSTATE_CONNECTED=2 SIGNONSTATE_CONNECTED value
     * @property {number} SIGNONSTATE_NEW=3 SIGNONSTATE_NEW value
     * @property {number} SIGNONSTATE_PRESPAWN=4 SIGNONSTATE_PRESPAWN value
     * @property {number} SIGNONSTATE_SPAWN=5 SIGNONSTATE_SPAWN value
     * @property {number} SIGNONSTATE_FULL=6 SIGNONSTATE_FULL value
     * @property {number} SIGNONSTATE_CHANGELEVEL=7 SIGNONSTATE_CHANGELEVEL value
     */
    $root.SignonState_t = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SIGNONSTATE_NONE"] = 0;
        values[valuesById[1] = "SIGNONSTATE_CHALLENGE"] = 1;
        values[valuesById[2] = "SIGNONSTATE_CONNECTED"] = 2;
        values[valuesById[3] = "SIGNONSTATE_NEW"] = 3;
        values[valuesById[4] = "SIGNONSTATE_PRESPAWN"] = 4;
        values[valuesById[5] = "SIGNONSTATE_SPAWN"] = 5;
        values[valuesById[6] = "SIGNONSTATE_FULL"] = 6;
        values[valuesById[7] = "SIGNONSTATE_CHANGELEVEL"] = 7;
        return values;
    })();
    
    /**
     * NET_Messages enum.
     * @exports NET_Messages
     * @enum {number}
     * @property {number} net_NOP=0 net_NOP value
     * @property {number} net_Disconnect=1 net_Disconnect value
     * @property {number} net_SplitScreenUser=3 net_SplitScreenUser value
     * @property {number} net_Tick=4 net_Tick value
     * @property {number} net_StringCmd=5 net_StringCmd value
     * @property {number} net_SetConVar=6 net_SetConVar value
     * @property {number} net_SignonState=7 net_SignonState value
     * @property {number} net_SpawnGroup_Load=8 net_SpawnGroup_Load value
     * @property {number} net_SpawnGroup_ManifestUpdate=9 net_SpawnGroup_ManifestUpdate value
     * @property {number} net_SpawnGroup_SetCreationTick=11 net_SpawnGroup_SetCreationTick value
     * @property {number} net_SpawnGroup_Unload=12 net_SpawnGroup_Unload value
     * @property {number} net_SpawnGroup_LoadCompleted=13 net_SpawnGroup_LoadCompleted value
     * @property {number} net_DebugOverlay=15 net_DebugOverlay value
     */
    $root.NET_Messages = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "net_NOP"] = 0;
        values[valuesById[1] = "net_Disconnect"] = 1;
        values[valuesById[3] = "net_SplitScreenUser"] = 3;
        values[valuesById[4] = "net_Tick"] = 4;
        values[valuesById[5] = "net_StringCmd"] = 5;
        values[valuesById[6] = "net_SetConVar"] = 6;
        values[valuesById[7] = "net_SignonState"] = 7;
        values[valuesById[8] = "net_SpawnGroup_Load"] = 8;
        values[valuesById[9] = "net_SpawnGroup_ManifestUpdate"] = 9;
        values[valuesById[11] = "net_SpawnGroup_SetCreationTick"] = 11;
        values[valuesById[12] = "net_SpawnGroup_Unload"] = 12;
        values[valuesById[13] = "net_SpawnGroup_LoadCompleted"] = 13;
        values[valuesById[15] = "net_DebugOverlay"] = 15;
        return values;
    })();
    
    /**
     * SpawnGroupFlags_t enum.
     * @exports SpawnGroupFlags_t
     * @enum {number}
     * @property {number} SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE=1 SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE value
     * @property {number} SPAWN_GROUP_DONT_SPAWN_ENTITIES=2 SPAWN_GROUP_DONT_SPAWN_ENTITIES value
     * @property {number} SPAWN_GROUP_SYNCHRONOUS_SPAWN=4 SPAWN_GROUP_SYNCHRONOUS_SPAWN value
     * @property {number} SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP=8 SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP value
     * @property {number} SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES=16 SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES value
     * @property {number} SPAWN_GROUP_BLOCK_UNTIL_LOADED=64 SPAWN_GROUP_BLOCK_UNTIL_LOADED value
     * @property {number} SPAWN_GROUP_LOAD_STREAMING_DATA=128 SPAWN_GROUP_LOAD_STREAMING_DATA value
     * @property {number} SPAWN_GROUP_CREATE_NEW_SCENE_WORLD=256 SPAWN_GROUP_CREATE_NEW_SCENE_WORLD value
     */
    $root.SpawnGroupFlags_t = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE"] = 1;
        values[valuesById[2] = "SPAWN_GROUP_DONT_SPAWN_ENTITIES"] = 2;
        values[valuesById[4] = "SPAWN_GROUP_SYNCHRONOUS_SPAWN"] = 4;
        values[valuesById[8] = "SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP"] = 8;
        values[valuesById[16] = "SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES"] = 16;
        values[valuesById[64] = "SPAWN_GROUP_BLOCK_UNTIL_LOADED"] = 64;
        values[valuesById[128] = "SPAWN_GROUP_LOAD_STREAMING_DATA"] = 128;
        values[valuesById[256] = "SPAWN_GROUP_CREATE_NEW_SCENE_WORLD"] = 256;
        return values;
    })();
    
    $root.CMsgVector = (function() {
    
        /**
         * Properties of a CMsgVector.
         * @exports ICMsgVector
         * @interface ICMsgVector
         * @property {number|null} [x] CMsgVector x
         * @property {number|null} [y] CMsgVector y
         * @property {number|null} [z] CMsgVector z
         * @property {number|null} [w] CMsgVector w
         */
    
        /**
         * Constructs a new CMsgVector.
         * @exports CMsgVector
         * @classdesc Represents a CMsgVector.
         * @implements ICMsgVector
         * @constructor
         * @param {ICMsgVector=} [properties] Properties to set
         */
        function CMsgVector(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgVector x.
         * @member {number} x
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.x = 0;
    
        /**
         * CMsgVector y.
         * @member {number} y
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.y = 0;
    
        /**
         * CMsgVector z.
         * @member {number} z
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.z = 0;
    
        /**
         * CMsgVector w.
         * @member {number} w
         * @memberof CMsgVector
         * @instance
         */
        CMsgVector.prototype.w = 0;
    
        /**
         * Creates a new CMsgVector instance using the specified properties.
         * @function create
         * @memberof CMsgVector
         * @static
         * @param {ICMsgVector=} [properties] Properties to set
         * @returns {CMsgVector} CMsgVector instance
         */
        CMsgVector.create = function create(properties) {
            return new CMsgVector(properties);
        };
    
        /**
         * Encodes the specified CMsgVector message. Does not implicitly {@link CMsgVector.verify|verify} messages.
         * @function encode
         * @memberof CMsgVector
         * @static
         * @param {ICMsgVector} message CMsgVector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.w);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgVector message, length delimited. Does not implicitly {@link CMsgVector.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgVector
         * @static
         * @param {ICMsgVector} message CMsgVector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgVector message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgVector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgVector} CMsgVector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVector();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                case 4: {
                        message.w = reader.float();
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
         * Decodes a CMsgVector message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgVector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgVector} CMsgVector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgVector message.
         * @function verify
         * @memberof CMsgVector
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgVector.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgVector message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgVector
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgVector} CMsgVector
         */
        CMsgVector.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgVector)
                return object;
            var message = new $root.CMsgVector();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.w != null)
                message.w = Number(object.w);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgVector message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgVector
         * @static
         * @param {CMsgVector} message CMsgVector
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgVector.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.w = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            return object;
        };
    
        /**
         * Converts this CMsgVector to JSON.
         * @function toJSON
         * @memberof CMsgVector
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgVector.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgVector
         * @function getTypeUrl
         * @memberof CMsgVector
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgVector.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgVector";
        };
    
        return CMsgVector;
    })();
    
    $root.CMsgVector2D = (function() {
    
        /**
         * Properties of a CMsgVector2D.
         * @exports ICMsgVector2D
         * @interface ICMsgVector2D
         * @property {number|null} [x] CMsgVector2D x
         * @property {number|null} [y] CMsgVector2D y
         */
    
        /**
         * Constructs a new CMsgVector2D.
         * @exports CMsgVector2D
         * @classdesc Represents a CMsgVector2D.
         * @implements ICMsgVector2D
         * @constructor
         * @param {ICMsgVector2D=} [properties] Properties to set
         */
        function CMsgVector2D(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgVector2D x.
         * @member {number} x
         * @memberof CMsgVector2D
         * @instance
         */
        CMsgVector2D.prototype.x = 0;
    
        /**
         * CMsgVector2D y.
         * @member {number} y
         * @memberof CMsgVector2D
         * @instance
         */
        CMsgVector2D.prototype.y = 0;
    
        /**
         * Creates a new CMsgVector2D instance using the specified properties.
         * @function create
         * @memberof CMsgVector2D
         * @static
         * @param {ICMsgVector2D=} [properties] Properties to set
         * @returns {CMsgVector2D} CMsgVector2D instance
         */
        CMsgVector2D.create = function create(properties) {
            return new CMsgVector2D(properties);
        };
    
        /**
         * Encodes the specified CMsgVector2D message. Does not implicitly {@link CMsgVector2D.verify|verify} messages.
         * @function encode
         * @memberof CMsgVector2D
         * @static
         * @param {ICMsgVector2D} message CMsgVector2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector2D.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgVector2D message, length delimited. Does not implicitly {@link CMsgVector2D.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgVector2D
         * @static
         * @param {ICMsgVector2D} message CMsgVector2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVector2D.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgVector2D message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgVector2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgVector2D} CMsgVector2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector2D.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVector2D();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
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
         * Decodes a CMsgVector2D message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgVector2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgVector2D} CMsgVector2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVector2D.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgVector2D message.
         * @function verify
         * @memberof CMsgVector2D
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgVector2D.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgVector2D message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgVector2D
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgVector2D} CMsgVector2D
         */
        CMsgVector2D.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgVector2D)
                return object;
            var message = new $root.CMsgVector2D();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgVector2D message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgVector2D
         * @static
         * @param {CMsgVector2D} message CMsgVector2D
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgVector2D.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };
    
        /**
         * Converts this CMsgVector2D to JSON.
         * @function toJSON
         * @memberof CMsgVector2D
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgVector2D.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgVector2D
         * @function getTypeUrl
         * @memberof CMsgVector2D
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgVector2D.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgVector2D";
        };
    
        return CMsgVector2D;
    })();
    
    $root.CMsgQAngle = (function() {
    
        /**
         * Properties of a CMsgQAngle.
         * @exports ICMsgQAngle
         * @interface ICMsgQAngle
         * @property {number|null} [x] CMsgQAngle x
         * @property {number|null} [y] CMsgQAngle y
         * @property {number|null} [z] CMsgQAngle z
         */
    
        /**
         * Constructs a new CMsgQAngle.
         * @exports CMsgQAngle
         * @classdesc Represents a CMsgQAngle.
         * @implements ICMsgQAngle
         * @constructor
         * @param {ICMsgQAngle=} [properties] Properties to set
         */
        function CMsgQAngle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgQAngle x.
         * @member {number} x
         * @memberof CMsgQAngle
         * @instance
         */
        CMsgQAngle.prototype.x = 0;
    
        /**
         * CMsgQAngle y.
         * @member {number} y
         * @memberof CMsgQAngle
         * @instance
         */
        CMsgQAngle.prototype.y = 0;
    
        /**
         * CMsgQAngle z.
         * @member {number} z
         * @memberof CMsgQAngle
         * @instance
         */
        CMsgQAngle.prototype.z = 0;
    
        /**
         * Creates a new CMsgQAngle instance using the specified properties.
         * @function create
         * @memberof CMsgQAngle
         * @static
         * @param {ICMsgQAngle=} [properties] Properties to set
         * @returns {CMsgQAngle} CMsgQAngle instance
         */
        CMsgQAngle.create = function create(properties) {
            return new CMsgQAngle(properties);
        };
    
        /**
         * Encodes the specified CMsgQAngle message. Does not implicitly {@link CMsgQAngle.verify|verify} messages.
         * @function encode
         * @memberof CMsgQAngle
         * @static
         * @param {ICMsgQAngle} message CMsgQAngle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQAngle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgQAngle message, length delimited. Does not implicitly {@link CMsgQAngle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgQAngle
         * @static
         * @param {ICMsgQAngle} message CMsgQAngle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQAngle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgQAngle message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgQAngle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgQAngle} CMsgQAngle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQAngle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgQAngle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
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
         * Decodes a CMsgQAngle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgQAngle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgQAngle} CMsgQAngle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQAngle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgQAngle message.
         * @function verify
         * @memberof CMsgQAngle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgQAngle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgQAngle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgQAngle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgQAngle} CMsgQAngle
         */
        CMsgQAngle.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgQAngle)
                return object;
            var message = new $root.CMsgQAngle();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgQAngle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgQAngle
         * @static
         * @param {CMsgQAngle} message CMsgQAngle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgQAngle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this CMsgQAngle to JSON.
         * @function toJSON
         * @memberof CMsgQAngle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgQAngle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgQAngle
         * @function getTypeUrl
         * @memberof CMsgQAngle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgQAngle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgQAngle";
        };
    
        return CMsgQAngle;
    })();
    
    $root.CMsgQuaternion = (function() {
    
        /**
         * Properties of a CMsgQuaternion.
         * @exports ICMsgQuaternion
         * @interface ICMsgQuaternion
         * @property {number|null} [x] CMsgQuaternion x
         * @property {number|null} [y] CMsgQuaternion y
         * @property {number|null} [z] CMsgQuaternion z
         * @property {number|null} [w] CMsgQuaternion w
         */
    
        /**
         * Constructs a new CMsgQuaternion.
         * @exports CMsgQuaternion
         * @classdesc Represents a CMsgQuaternion.
         * @implements ICMsgQuaternion
         * @constructor
         * @param {ICMsgQuaternion=} [properties] Properties to set
         */
        function CMsgQuaternion(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgQuaternion x.
         * @member {number} x
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.x = 0;
    
        /**
         * CMsgQuaternion y.
         * @member {number} y
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.y = 0;
    
        /**
         * CMsgQuaternion z.
         * @member {number} z
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.z = 0;
    
        /**
         * CMsgQuaternion w.
         * @member {number} w
         * @memberof CMsgQuaternion
         * @instance
         */
        CMsgQuaternion.prototype.w = 0;
    
        /**
         * Creates a new CMsgQuaternion instance using the specified properties.
         * @function create
         * @memberof CMsgQuaternion
         * @static
         * @param {ICMsgQuaternion=} [properties] Properties to set
         * @returns {CMsgQuaternion} CMsgQuaternion instance
         */
        CMsgQuaternion.create = function create(properties) {
            return new CMsgQuaternion(properties);
        };
    
        /**
         * Encodes the specified CMsgQuaternion message. Does not implicitly {@link CMsgQuaternion.verify|verify} messages.
         * @function encode
         * @memberof CMsgQuaternion
         * @static
         * @param {ICMsgQuaternion} message CMsgQuaternion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQuaternion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.w);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgQuaternion message, length delimited. Does not implicitly {@link CMsgQuaternion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgQuaternion
         * @static
         * @param {ICMsgQuaternion} message CMsgQuaternion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgQuaternion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgQuaternion message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgQuaternion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgQuaternion} CMsgQuaternion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQuaternion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgQuaternion();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                case 4: {
                        message.w = reader.float();
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
         * Decodes a CMsgQuaternion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgQuaternion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgQuaternion} CMsgQuaternion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgQuaternion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgQuaternion message.
         * @function verify
         * @memberof CMsgQuaternion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgQuaternion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgQuaternion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgQuaternion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgQuaternion} CMsgQuaternion
         */
        CMsgQuaternion.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgQuaternion)
                return object;
            var message = new $root.CMsgQuaternion();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.w != null)
                message.w = Number(object.w);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgQuaternion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgQuaternion
         * @static
         * @param {CMsgQuaternion} message CMsgQuaternion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgQuaternion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.w = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            return object;
        };
    
        /**
         * Converts this CMsgQuaternion to JSON.
         * @function toJSON
         * @memberof CMsgQuaternion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgQuaternion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgQuaternion
         * @function getTypeUrl
         * @memberof CMsgQuaternion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgQuaternion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgQuaternion";
        };
    
        return CMsgQuaternion;
    })();
    
    $root.CMsgTransform = (function() {
    
        /**
         * Properties of a CMsgTransform.
         * @exports ICMsgTransform
         * @interface ICMsgTransform
         * @property {ICMsgVector|null} [position] CMsgTransform position
         * @property {number|null} [scale] CMsgTransform scale
         * @property {ICMsgQuaternion|null} [orientation] CMsgTransform orientation
         */
    
        /**
         * Constructs a new CMsgTransform.
         * @exports CMsgTransform
         * @classdesc Represents a CMsgTransform.
         * @implements ICMsgTransform
         * @constructor
         * @param {ICMsgTransform=} [properties] Properties to set
         */
        function CMsgTransform(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgTransform position.
         * @member {ICMsgVector|null|undefined} position
         * @memberof CMsgTransform
         * @instance
         */
        CMsgTransform.prototype.position = null;
    
        /**
         * CMsgTransform scale.
         * @member {number} scale
         * @memberof CMsgTransform
         * @instance
         */
        CMsgTransform.prototype.scale = 0;
    
        /**
         * CMsgTransform orientation.
         * @member {ICMsgQuaternion|null|undefined} orientation
         * @memberof CMsgTransform
         * @instance
         */
        CMsgTransform.prototype.orientation = null;
    
        /**
         * Creates a new CMsgTransform instance using the specified properties.
         * @function create
         * @memberof CMsgTransform
         * @static
         * @param {ICMsgTransform=} [properties] Properties to set
         * @returns {CMsgTransform} CMsgTransform instance
         */
        CMsgTransform.create = function create(properties) {
            return new CMsgTransform(properties);
        };
    
        /**
         * Encodes the specified CMsgTransform message. Does not implicitly {@link CMsgTransform.verify|verify} messages.
         * @function encode
         * @memberof CMsgTransform
         * @static
         * @param {ICMsgTransform} message CMsgTransform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgTransform.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.CMsgVector.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.scale);
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                $root.CMsgQuaternion.encode(message.orientation, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgTransform message, length delimited. Does not implicitly {@link CMsgTransform.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgTransform
         * @static
         * @param {ICMsgTransform} message CMsgTransform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgTransform.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgTransform message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgTransform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgTransform} CMsgTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgTransform.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgTransform();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.position = $root.CMsgVector.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.scale = reader.float();
                        break;
                    }
                case 3: {
                        message.orientation = $root.CMsgQuaternion.decode(reader, reader.uint32());
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
         * Decodes a CMsgTransform message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgTransform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgTransform} CMsgTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgTransform.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgTransform message.
         * @function verify
         * @memberof CMsgTransform
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgTransform.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                var error = $root.CMsgVector.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.scale != null && message.hasOwnProperty("scale"))
                if (typeof message.scale !== "number")
                    return "scale: number expected";
            if (message.orientation != null && message.hasOwnProperty("orientation")) {
                var error = $root.CMsgQuaternion.verify(message.orientation);
                if (error)
                    return "orientation." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgTransform message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgTransform
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgTransform} CMsgTransform
         */
        CMsgTransform.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgTransform)
                return object;
            var message = new $root.CMsgTransform();
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".CMsgTransform.position: object expected");
                message.position = $root.CMsgVector.fromObject(object.position);
            }
            if (object.scale != null)
                message.scale = Number(object.scale);
            if (object.orientation != null) {
                if (typeof object.orientation !== "object")
                    throw TypeError(".CMsgTransform.orientation: object expected");
                message.orientation = $root.CMsgQuaternion.fromObject(object.orientation);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgTransform message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgTransform
         * @static
         * @param {CMsgTransform} message CMsgTransform
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgTransform.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.position = null;
                object.scale = 0;
                object.orientation = null;
            }
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.CMsgVector.toObject(message.position, options);
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = $root.CMsgQuaternion.toObject(message.orientation, options);
            return object;
        };
    
        /**
         * Converts this CMsgTransform to JSON.
         * @function toJSON
         * @memberof CMsgTransform
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgTransform.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgTransform
         * @function getTypeUrl
         * @memberof CMsgTransform
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgTransform.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgTransform";
        };
    
        return CMsgTransform;
    })();
    
    $root.CMsgRGBA = (function() {
    
        /**
         * Properties of a CMsgRGBA.
         * @exports ICMsgRGBA
         * @interface ICMsgRGBA
         * @property {number|null} [r] CMsgRGBA r
         * @property {number|null} [g] CMsgRGBA g
         * @property {number|null} [b] CMsgRGBA b
         * @property {number|null} [a] CMsgRGBA a
         */
    
        /**
         * Constructs a new CMsgRGBA.
         * @exports CMsgRGBA
         * @classdesc Represents a CMsgRGBA.
         * @implements ICMsgRGBA
         * @constructor
         * @param {ICMsgRGBA=} [properties] Properties to set
         */
        function CMsgRGBA(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRGBA r.
         * @member {number} r
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.r = 0;
    
        /**
         * CMsgRGBA g.
         * @member {number} g
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.g = 0;
    
        /**
         * CMsgRGBA b.
         * @member {number} b
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.b = 0;
    
        /**
         * CMsgRGBA a.
         * @member {number} a
         * @memberof CMsgRGBA
         * @instance
         */
        CMsgRGBA.prototype.a = 0;
    
        /**
         * Creates a new CMsgRGBA instance using the specified properties.
         * @function create
         * @memberof CMsgRGBA
         * @static
         * @param {ICMsgRGBA=} [properties] Properties to set
         * @returns {CMsgRGBA} CMsgRGBA instance
         */
        CMsgRGBA.create = function create(properties) {
            return new CMsgRGBA(properties);
        };
    
        /**
         * Encodes the specified CMsgRGBA message. Does not implicitly {@link CMsgRGBA.verify|verify} messages.
         * @function encode
         * @memberof CMsgRGBA
         * @static
         * @param {ICMsgRGBA} message CMsgRGBA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRGBA.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.r != null && Object.hasOwnProperty.call(message, "r"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.r);
            if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.g);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.b);
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.a);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRGBA message, length delimited. Does not implicitly {@link CMsgRGBA.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRGBA
         * @static
         * @param {ICMsgRGBA} message CMsgRGBA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRGBA.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRGBA message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRGBA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRGBA} CMsgRGBA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRGBA.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRGBA();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.r = reader.int32();
                        break;
                    }
                case 2: {
                        message.g = reader.int32();
                        break;
                    }
                case 3: {
                        message.b = reader.int32();
                        break;
                    }
                case 4: {
                        message.a = reader.int32();
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
         * Decodes a CMsgRGBA message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRGBA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRGBA} CMsgRGBA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRGBA.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRGBA message.
         * @function verify
         * @memberof CMsgRGBA
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRGBA.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.r != null && message.hasOwnProperty("r"))
                if (!$util.isInteger(message.r))
                    return "r: integer expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (!$util.isInteger(message.g))
                    return "g: integer expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b))
                    return "b: integer expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isInteger(message.a))
                    return "a: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRGBA message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRGBA
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRGBA} CMsgRGBA
         */
        CMsgRGBA.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRGBA)
                return object;
            var message = new $root.CMsgRGBA();
            if (object.r != null)
                message.r = object.r | 0;
            if (object.g != null)
                message.g = object.g | 0;
            if (object.b != null)
                message.b = object.b | 0;
            if (object.a != null)
                message.a = object.a | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRGBA message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRGBA
         * @static
         * @param {CMsgRGBA} message CMsgRGBA
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRGBA.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.r = 0;
                object.g = 0;
                object.b = 0;
                object.a = 0;
            }
            if (message.r != null && message.hasOwnProperty("r"))
                object.r = message.r;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = message.g;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            return object;
        };
    
        /**
         * Converts this CMsgRGBA to JSON.
         * @function toJSON
         * @memberof CMsgRGBA
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRGBA.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgRGBA
         * @function getTypeUrl
         * @memberof CMsgRGBA
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgRGBA.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgRGBA";
        };
    
        return CMsgRGBA;
    })();
    
    $root.CMsgPlayerInfo = (function() {
    
        /**
         * Properties of a CMsgPlayerInfo.
         * @exports ICMsgPlayerInfo
         * @interface ICMsgPlayerInfo
         * @property {string|null} [name] CMsgPlayerInfo name
         * @property {number|Long|null} [xuid] CMsgPlayerInfo xuid
         * @property {number|null} [userid] CMsgPlayerInfo userid
         * @property {number|Long|null} [steamid] CMsgPlayerInfo steamid
         * @property {boolean|null} [fakeplayer] CMsgPlayerInfo fakeplayer
         * @property {boolean|null} [ishltv] CMsgPlayerInfo ishltv
         */
    
        /**
         * Constructs a new CMsgPlayerInfo.
         * @exports CMsgPlayerInfo
         * @classdesc Represents a CMsgPlayerInfo.
         * @implements ICMsgPlayerInfo
         * @constructor
         * @param {ICMsgPlayerInfo=} [properties] Properties to set
         */
        function CMsgPlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPlayerInfo name.
         * @member {string} name
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.name = "";
    
        /**
         * CMsgPlayerInfo xuid.
         * @member {number|Long} xuid
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.xuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgPlayerInfo userid.
         * @member {number} userid
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.userid = 0;
    
        /**
         * CMsgPlayerInfo steamid.
         * @member {number|Long} steamid
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgPlayerInfo fakeplayer.
         * @member {boolean} fakeplayer
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.fakeplayer = false;
    
        /**
         * CMsgPlayerInfo ishltv.
         * @member {boolean} ishltv
         * @memberof CMsgPlayerInfo
         * @instance
         */
        CMsgPlayerInfo.prototype.ishltv = false;
    
        /**
         * Creates a new CMsgPlayerInfo instance using the specified properties.
         * @function create
         * @memberof CMsgPlayerInfo
         * @static
         * @param {ICMsgPlayerInfo=} [properties] Properties to set
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo instance
         */
        CMsgPlayerInfo.create = function create(properties) {
            return new CMsgPlayerInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgPlayerInfo message. Does not implicitly {@link CMsgPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgPlayerInfo
         * @static
         * @param {ICMsgPlayerInfo} message CMsgPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.xuid != null && Object.hasOwnProperty.call(message, "xuid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.xuid);
            if (message.userid != null && Object.hasOwnProperty.call(message, "userid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userid);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.steamid);
            if (message.fakeplayer != null && Object.hasOwnProperty.call(message, "fakeplayer"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.fakeplayer);
            if (message.ishltv != null && Object.hasOwnProperty.call(message, "ishltv"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ishltv);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPlayerInfo message, length delimited. Does not implicitly {@link CMsgPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPlayerInfo
         * @static
         * @param {ICMsgPlayerInfo} message CMsgPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.xuid = reader.fixed64();
                        break;
                    }
                case 3: {
                        message.userid = reader.int32();
                        break;
                    }
                case 4: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 5: {
                        message.fakeplayer = reader.bool();
                        break;
                    }
                case 6: {
                        message.ishltv = reader.bool();
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
         * Decodes a CMsgPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPlayerInfo message.
         * @function verify
         * @memberof CMsgPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.xuid != null && message.hasOwnProperty("xuid"))
                if (!$util.isInteger(message.xuid) && !(message.xuid && $util.isInteger(message.xuid.low) && $util.isInteger(message.xuid.high)))
                    return "xuid: integer|Long expected";
            if (message.userid != null && message.hasOwnProperty("userid"))
                if (!$util.isInteger(message.userid))
                    return "userid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.fakeplayer != null && message.hasOwnProperty("fakeplayer"))
                if (typeof message.fakeplayer !== "boolean")
                    return "fakeplayer: boolean expected";
            if (message.ishltv != null && message.hasOwnProperty("ishltv"))
                if (typeof message.ishltv !== "boolean")
                    return "ishltv: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPlayerInfo} CMsgPlayerInfo
         */
        CMsgPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPlayerInfo)
                return object;
            var message = new $root.CMsgPlayerInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.xuid != null)
                if ($util.Long)
                    (message.xuid = $util.Long.fromValue(object.xuid)).unsigned = false;
                else if (typeof object.xuid === "string")
                    message.xuid = parseInt(object.xuid, 10);
                else if (typeof object.xuid === "number")
                    message.xuid = object.xuid;
                else if (typeof object.xuid === "object")
                    message.xuid = new $util.LongBits(object.xuid.low >>> 0, object.xuid.high >>> 0).toNumber();
            if (object.userid != null)
                message.userid = object.userid | 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.fakeplayer != null)
                message.fakeplayer = Boolean(object.fakeplayer);
            if (object.ishltv != null)
                message.ishltv = Boolean(object.ishltv);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPlayerInfo
         * @static
         * @param {CMsgPlayerInfo} message CMsgPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.xuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.xuid = options.longs === String ? "0" : 0;
                object.userid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.fakeplayer = false;
                object.ishltv = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.xuid != null && message.hasOwnProperty("xuid"))
                if (typeof message.xuid === "number")
                    object.xuid = options.longs === String ? String(message.xuid) : message.xuid;
                else
                    object.xuid = options.longs === String ? $util.Long.prototype.toString.call(message.xuid) : options.longs === Number ? new $util.LongBits(message.xuid.low >>> 0, message.xuid.high >>> 0).toNumber() : message.xuid;
            if (message.userid != null && message.hasOwnProperty("userid"))
                object.userid = message.userid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.fakeplayer != null && message.hasOwnProperty("fakeplayer"))
                object.fakeplayer = message.fakeplayer;
            if (message.ishltv != null && message.hasOwnProperty("ishltv"))
                object.ishltv = message.ishltv;
            return object;
        };
    
        /**
         * Converts this CMsgPlayerInfo to JSON.
         * @function toJSON
         * @memberof CMsgPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgPlayerInfo
         * @function getTypeUrl
         * @memberof CMsgPlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgPlayerInfo";
        };
    
        return CMsgPlayerInfo;
    })();
    
    $root.CEntityMsg = (function() {
    
        /**
         * Properties of a CEntityMsg.
         * @exports ICEntityMsg
         * @interface ICEntityMsg
         * @property {number|null} [target_entity] CEntityMsg target_entity
         */
    
        /**
         * Constructs a new CEntityMsg.
         * @exports CEntityMsg
         * @classdesc Represents a CEntityMsg.
         * @implements ICEntityMsg
         * @constructor
         * @param {ICEntityMsg=} [properties] Properties to set
         */
        function CEntityMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CEntityMsg target_entity.
         * @member {number} target_entity
         * @memberof CEntityMsg
         * @instance
         */
        CEntityMsg.prototype.target_entity = 16777215;
    
        /**
         * Creates a new CEntityMsg instance using the specified properties.
         * @function create
         * @memberof CEntityMsg
         * @static
         * @param {ICEntityMsg=} [properties] Properties to set
         * @returns {CEntityMsg} CEntityMsg instance
         */
        CEntityMsg.create = function create(properties) {
            return new CEntityMsg(properties);
        };
    
        /**
         * Encodes the specified CEntityMsg message. Does not implicitly {@link CEntityMsg.verify|verify} messages.
         * @function encode
         * @memberof CEntityMsg
         * @static
         * @param {ICEntityMsg} message CEntityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEntityMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.target_entity != null && Object.hasOwnProperty.call(message, "target_entity"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.target_entity);
            return writer;
        };
    
        /**
         * Encodes the specified CEntityMsg message, length delimited. Does not implicitly {@link CEntityMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CEntityMsg
         * @static
         * @param {ICEntityMsg} message CEntityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEntityMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CEntityMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CEntityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CEntityMsg} CEntityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEntityMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CEntityMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.target_entity = reader.uint32();
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
         * Decodes a CEntityMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CEntityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CEntityMsg} CEntityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEntityMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CEntityMsg message.
         * @function verify
         * @memberof CEntityMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CEntityMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.target_entity != null && message.hasOwnProperty("target_entity"))
                if (!$util.isInteger(message.target_entity))
                    return "target_entity: integer expected";
            return null;
        };
    
        /**
         * Creates a CEntityMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CEntityMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CEntityMsg} CEntityMsg
         */
        CEntityMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CEntityMsg)
                return object;
            var message = new $root.CEntityMsg();
            if (object.target_entity != null)
                message.target_entity = object.target_entity >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CEntityMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CEntityMsg
         * @static
         * @param {CEntityMsg} message CEntityMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CEntityMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.target_entity = 16777215;
            if (message.target_entity != null && message.hasOwnProperty("target_entity"))
                object.target_entity = message.target_entity;
            return object;
        };
    
        /**
         * Converts this CEntityMsg to JSON.
         * @function toJSON
         * @memberof CEntityMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CEntityMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CEntityMsg
         * @function getTypeUrl
         * @memberof CEntityMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CEntityMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CEntityMsg";
        };
    
        return CEntityMsg;
    })();
    
    $root.CMsg_CVars = (function() {
    
        /**
         * Properties of a CMsg_CVars.
         * @exports ICMsg_CVars
         * @interface ICMsg_CVars
         * @property {Array.<CMsg_CVars.ICVar>|null} [cvars] CMsg_CVars cvars
         */
    
        /**
         * Constructs a new CMsg_CVars.
         * @exports CMsg_CVars
         * @classdesc Represents a CMsg_CVars.
         * @implements ICMsg_CVars
         * @constructor
         * @param {ICMsg_CVars=} [properties] Properties to set
         */
        function CMsg_CVars(properties) {
            this.cvars = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsg_CVars cvars.
         * @member {Array.<CMsg_CVars.ICVar>} cvars
         * @memberof CMsg_CVars
         * @instance
         */
        CMsg_CVars.prototype.cvars = $util.emptyArray;
    
        /**
         * Creates a new CMsg_CVars instance using the specified properties.
         * @function create
         * @memberof CMsg_CVars
         * @static
         * @param {ICMsg_CVars=} [properties] Properties to set
         * @returns {CMsg_CVars} CMsg_CVars instance
         */
        CMsg_CVars.create = function create(properties) {
            return new CMsg_CVars(properties);
        };
    
        /**
         * Encodes the specified CMsg_CVars message. Does not implicitly {@link CMsg_CVars.verify|verify} messages.
         * @function encode
         * @memberof CMsg_CVars
         * @static
         * @param {ICMsg_CVars} message CMsg_CVars message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsg_CVars.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cvars != null && message.cvars.length)
                for (var i = 0; i < message.cvars.length; ++i)
                    $root.CMsg_CVars.CVar.encode(message.cvars[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsg_CVars message, length delimited. Does not implicitly {@link CMsg_CVars.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsg_CVars
         * @static
         * @param {ICMsg_CVars} message CMsg_CVars message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsg_CVars.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsg_CVars message from the specified reader or buffer.
         * @function decode
         * @memberof CMsg_CVars
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsg_CVars} CMsg_CVars
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsg_CVars.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsg_CVars();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.cvars && message.cvars.length))
                            message.cvars = [];
                        message.cvars.push($root.CMsg_CVars.CVar.decode(reader, reader.uint32()));
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
         * Decodes a CMsg_CVars message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsg_CVars
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsg_CVars} CMsg_CVars
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsg_CVars.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsg_CVars message.
         * @function verify
         * @memberof CMsg_CVars
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsg_CVars.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cvars != null && message.hasOwnProperty("cvars")) {
                if (!Array.isArray(message.cvars))
                    return "cvars: array expected";
                for (var i = 0; i < message.cvars.length; ++i) {
                    var error = $root.CMsg_CVars.CVar.verify(message.cvars[i]);
                    if (error)
                        return "cvars." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsg_CVars message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsg_CVars
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsg_CVars} CMsg_CVars
         */
        CMsg_CVars.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsg_CVars)
                return object;
            var message = new $root.CMsg_CVars();
            if (object.cvars) {
                if (!Array.isArray(object.cvars))
                    throw TypeError(".CMsg_CVars.cvars: array expected");
                message.cvars = [];
                for (var i = 0; i < object.cvars.length; ++i) {
                    if (typeof object.cvars[i] !== "object")
                        throw TypeError(".CMsg_CVars.cvars: object expected");
                    message.cvars[i] = $root.CMsg_CVars.CVar.fromObject(object.cvars[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsg_CVars message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsg_CVars
         * @static
         * @param {CMsg_CVars} message CMsg_CVars
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsg_CVars.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cvars = [];
            if (message.cvars && message.cvars.length) {
                object.cvars = [];
                for (var j = 0; j < message.cvars.length; ++j)
                    object.cvars[j] = $root.CMsg_CVars.CVar.toObject(message.cvars[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsg_CVars to JSON.
         * @function toJSON
         * @memberof CMsg_CVars
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsg_CVars.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsg_CVars
         * @function getTypeUrl
         * @memberof CMsg_CVars
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsg_CVars.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsg_CVars";
        };
    
        CMsg_CVars.CVar = (function() {
    
            /**
             * Properties of a CVar.
             * @memberof CMsg_CVars
             * @interface ICVar
             * @property {string|null} [name] CVar name
             * @property {string|null} [value] CVar value
             */
    
            /**
             * Constructs a new CVar.
             * @memberof CMsg_CVars
             * @classdesc Represents a CVar.
             * @implements ICVar
             * @constructor
             * @param {CMsg_CVars.ICVar=} [properties] Properties to set
             */
            function CVar(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CVar name.
             * @member {string} name
             * @memberof CMsg_CVars.CVar
             * @instance
             */
            CVar.prototype.name = "";
    
            /**
             * CVar value.
             * @member {string} value
             * @memberof CMsg_CVars.CVar
             * @instance
             */
            CVar.prototype.value = "";
    
            /**
             * Creates a new CVar instance using the specified properties.
             * @function create
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.ICVar=} [properties] Properties to set
             * @returns {CMsg_CVars.CVar} CVar instance
             */
            CVar.create = function create(properties) {
                return new CVar(properties);
            };
    
            /**
             * Encodes the specified CVar message. Does not implicitly {@link CMsg_CVars.CVar.verify|verify} messages.
             * @function encode
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.ICVar} message CVar message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CVar.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified CVar message, length delimited. Does not implicitly {@link CMsg_CVars.CVar.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.ICVar} message CVar message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CVar.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CVar message from the specified reader or buffer.
             * @function decode
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsg_CVars.CVar} CVar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CVar.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsg_CVars.CVar();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.string();
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
             * Decodes a CVar message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsg_CVars.CVar} CVar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CVar.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CVar message.
             * @function verify
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CVar.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a CVar message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsg_CVars.CVar} CVar
             */
            CVar.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsg_CVars.CVar)
                    return object;
                var message = new $root.CMsg_CVars.CVar();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a CVar message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {CMsg_CVars.CVar} message CVar
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CVar.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this CVar to JSON.
             * @function toJSON
             * @memberof CMsg_CVars.CVar
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CVar.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CVar
             * @function getTypeUrl
             * @memberof CMsg_CVars.CVar
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CVar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsg_CVars.CVar";
            };
    
            return CVar;
        })();
    
        return CMsg_CVars;
    })();
    
    $root.CNETMsg_NOP = (function() {
    
        /**
         * Properties of a CNETMsg_NOP.
         * @exports ICNETMsg_NOP
         * @interface ICNETMsg_NOP
         */
    
        /**
         * Constructs a new CNETMsg_NOP.
         * @exports CNETMsg_NOP
         * @classdesc Represents a CNETMsg_NOP.
         * @implements ICNETMsg_NOP
         * @constructor
         * @param {ICNETMsg_NOP=} [properties] Properties to set
         */
        function CNETMsg_NOP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CNETMsg_NOP instance using the specified properties.
         * @function create
         * @memberof CNETMsg_NOP
         * @static
         * @param {ICNETMsg_NOP=} [properties] Properties to set
         * @returns {CNETMsg_NOP} CNETMsg_NOP instance
         */
        CNETMsg_NOP.create = function create(properties) {
            return new CNETMsg_NOP(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_NOP message. Does not implicitly {@link CNETMsg_NOP.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_NOP
         * @static
         * @param {ICNETMsg_NOP} message CNETMsg_NOP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_NOP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_NOP message, length delimited. Does not implicitly {@link CNETMsg_NOP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_NOP
         * @static
         * @param {ICNETMsg_NOP} message CNETMsg_NOP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_NOP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_NOP message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_NOP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_NOP} CNETMsg_NOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_NOP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_NOP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CNETMsg_NOP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_NOP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_NOP} CNETMsg_NOP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_NOP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_NOP message.
         * @function verify
         * @memberof CNETMsg_NOP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_NOP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_NOP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_NOP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_NOP} CNETMsg_NOP
         */
        CNETMsg_NOP.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_NOP)
                return object;
            return new $root.CNETMsg_NOP();
        };
    
        /**
         * Creates a plain object from a CNETMsg_NOP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_NOP
         * @static
         * @param {CNETMsg_NOP} message CNETMsg_NOP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_NOP.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CNETMsg_NOP to JSON.
         * @function toJSON
         * @memberof CNETMsg_NOP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_NOP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_NOP
         * @function getTypeUrl
         * @memberof CNETMsg_NOP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_NOP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_NOP";
        };
    
        return CNETMsg_NOP;
    })();
    
    $root.CNETMsg_SplitScreenUser = (function() {
    
        /**
         * Properties of a CNETMsg_SplitScreenUser.
         * @exports ICNETMsg_SplitScreenUser
         * @interface ICNETMsg_SplitScreenUser
         * @property {number|null} [slot] CNETMsg_SplitScreenUser slot
         */
    
        /**
         * Constructs a new CNETMsg_SplitScreenUser.
         * @exports CNETMsg_SplitScreenUser
         * @classdesc Represents a CNETMsg_SplitScreenUser.
         * @implements ICNETMsg_SplitScreenUser
         * @constructor
         * @param {ICNETMsg_SplitScreenUser=} [properties] Properties to set
         */
        function CNETMsg_SplitScreenUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SplitScreenUser slot.
         * @member {number} slot
         * @memberof CNETMsg_SplitScreenUser
         * @instance
         */
        CNETMsg_SplitScreenUser.prototype.slot = 0;
    
        /**
         * Creates a new CNETMsg_SplitScreenUser instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {ICNETMsg_SplitScreenUser=} [properties] Properties to set
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser instance
         */
        CNETMsg_SplitScreenUser.create = function create(properties) {
            return new CNETMsg_SplitScreenUser(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SplitScreenUser message. Does not implicitly {@link CNETMsg_SplitScreenUser.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {ICNETMsg_SplitScreenUser} message CNETMsg_SplitScreenUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SplitScreenUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.slot);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SplitScreenUser message, length delimited. Does not implicitly {@link CNETMsg_SplitScreenUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {ICNETMsg_SplitScreenUser} message CNETMsg_SplitScreenUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SplitScreenUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SplitScreenUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SplitScreenUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.slot = reader.int32();
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
         * Decodes a CNETMsg_SplitScreenUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SplitScreenUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SplitScreenUser message.
         * @function verify
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SplitScreenUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SplitScreenUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SplitScreenUser} CNETMsg_SplitScreenUser
         */
        CNETMsg_SplitScreenUser.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SplitScreenUser)
                return object;
            var message = new $root.CNETMsg_SplitScreenUser();
            if (object.slot != null)
                message.slot = object.slot | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SplitScreenUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {CNETMsg_SplitScreenUser} message CNETMsg_SplitScreenUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SplitScreenUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.slot = 0;
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SplitScreenUser to JSON.
         * @function toJSON
         * @memberof CNETMsg_SplitScreenUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SplitScreenUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SplitScreenUser
         * @function getTypeUrl
         * @memberof CNETMsg_SplitScreenUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SplitScreenUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SplitScreenUser";
        };
    
        return CNETMsg_SplitScreenUser;
    })();
    
    $root.CNETMsg_Disconnect = (function() {
    
        /**
         * Properties of a CNETMsg_Disconnect.
         * @exports ICNETMsg_Disconnect
         * @interface ICNETMsg_Disconnect
         * @property {ENetworkDisconnectionReason|null} [reason] CNETMsg_Disconnect reason
         */
    
        /**
         * Constructs a new CNETMsg_Disconnect.
         * @exports CNETMsg_Disconnect
         * @classdesc Represents a CNETMsg_Disconnect.
         * @implements ICNETMsg_Disconnect
         * @constructor
         * @param {ICNETMsg_Disconnect=} [properties] Properties to set
         */
        function CNETMsg_Disconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_Disconnect reason.
         * @member {ENetworkDisconnectionReason} reason
         * @memberof CNETMsg_Disconnect
         * @instance
         */
        CNETMsg_Disconnect.prototype.reason = 0;
    
        /**
         * Creates a new CNETMsg_Disconnect instance using the specified properties.
         * @function create
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {ICNETMsg_Disconnect=} [properties] Properties to set
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect instance
         */
        CNETMsg_Disconnect.create = function create(properties) {
            return new CNETMsg_Disconnect(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_Disconnect message. Does not implicitly {@link CNETMsg_Disconnect.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {ICNETMsg_Disconnect} message CNETMsg_Disconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Disconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_Disconnect message, length delimited. Does not implicitly {@link CNETMsg_Disconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {ICNETMsg_Disconnect} message CNETMsg_Disconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Disconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_Disconnect message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Disconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_Disconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.reason = reader.int32();
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
         * Decodes a CNETMsg_Disconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Disconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_Disconnect message.
         * @function verify
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_Disconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 128:
                case 129:
                case 130:
                case 131:
                case 132:
                case 133:
                case 134:
                case 135:
                case 136:
                case 137:
                case 138:
                case 139:
                case 140:
                case 141:
                case 142:
                case 143:
                case 144:
                case 145:
                case 146:
                case 147:
                case 148:
                case 149:
                case 150:
                case 151:
                case 152:
                case 153:
                case 154:
                case 155:
                case 156:
                case 157:
                case 158:
                case 159:
                case 160:
                case 161:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CNETMsg_Disconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_Disconnect} CNETMsg_Disconnect
         */
        CNETMsg_Disconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_Disconnect)
                return object;
            var message = new $root.CNETMsg_Disconnect();
            switch (object.reason) {
            default:
                if (typeof object.reason === "number") {
                    message.reason = object.reason;
                    break;
                }
                break;
            case "NETWORK_DISCONNECT_INVALID":
            case 0:
                message.reason = 0;
                break;
            case "NETWORK_DISCONNECT_SHUTDOWN":
            case 1:
                message.reason = 1;
                break;
            case "NETWORK_DISCONNECT_DISCONNECT_BY_USER":
            case 2:
                message.reason = 2;
                break;
            case "NETWORK_DISCONNECT_DISCONNECT_BY_SERVER":
            case 3:
                message.reason = 3;
                break;
            case "NETWORK_DISCONNECT_LOST":
            case 4:
                message.reason = 4;
                break;
            case "NETWORK_DISCONNECT_OVERFLOW":
            case 5:
                message.reason = 5;
                break;
            case "NETWORK_DISCONNECT_STEAM_BANNED":
            case 6:
                message.reason = 6;
                break;
            case "NETWORK_DISCONNECT_STEAM_INUSE":
            case 7:
                message.reason = 7;
                break;
            case "NETWORK_DISCONNECT_STEAM_TICKET":
            case 8:
                message.reason = 8;
                break;
            case "NETWORK_DISCONNECT_STEAM_LOGON":
            case 9:
                message.reason = 9;
                break;
            case "NETWORK_DISCONNECT_STEAM_AUTHCANCELLED":
            case 10:
                message.reason = 10;
                break;
            case "NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED":
            case 11:
                message.reason = 11;
                break;
            case "NETWORK_DISCONNECT_STEAM_AUTHINVALID":
            case 12:
                message.reason = 12;
                break;
            case "NETWORK_DISCONNECT_STEAM_VACBANSTATE":
            case 13:
                message.reason = 13;
                break;
            case "NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE":
            case 14:
                message.reason = 14;
                break;
            case "NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT":
            case 15:
                message.reason = 15;
                break;
            case "NETWORK_DISCONNECT_STEAM_DROPPED":
            case 16:
                message.reason = 16;
                break;
            case "NETWORK_DISCONNECT_STEAM_OWNERSHIP":
            case 17:
                message.reason = 17;
                break;
            case "NETWORK_DISCONNECT_SERVERINFO_OVERFLOW":
            case 18:
                message.reason = 18;
                break;
            case "NETWORK_DISCONNECT_TICKMSG_OVERFLOW":
            case 19:
                message.reason = 19;
                break;
            case "NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW":
            case 20:
                message.reason = 20;
                break;
            case "NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW":
            case 21:
                message.reason = 21;
                break;
            case "NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW":
            case 22:
                message.reason = 22;
                break;
            case "NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW":
            case 23:
                message.reason = 23;
                break;
            case "NETWORK_DISCONNECT_SNAPSHOTOVERFLOW":
            case 24:
                message.reason = 24;
                break;
            case "NETWORK_DISCONNECT_SNAPSHOTERROR":
            case 25:
                message.reason = 25;
                break;
            case "NETWORK_DISCONNECT_RELIABLEOVERFLOW":
            case 26:
                message.reason = 26;
                break;
            case "NETWORK_DISCONNECT_BADDELTATICK":
            case 27:
                message.reason = 27;
                break;
            case "NETWORK_DISCONNECT_NOMORESPLITS":
            case 28:
                message.reason = 28;
                break;
            case "NETWORK_DISCONNECT_TIMEDOUT":
            case 29:
                message.reason = 29;
                break;
            case "NETWORK_DISCONNECT_DISCONNECTED":
            case 30:
                message.reason = 30;
                break;
            case "NETWORK_DISCONNECT_LEAVINGSPLIT":
            case 31:
                message.reason = 31;
                break;
            case "NETWORK_DISCONNECT_DIFFERENTCLASSTABLES":
            case 32:
                message.reason = 32;
                break;
            case "NETWORK_DISCONNECT_BADRELAYPASSWORD":
            case 33:
                message.reason = 33;
                break;
            case "NETWORK_DISCONNECT_BADSPECTATORPASSWORD":
            case 34:
                message.reason = 34;
                break;
            case "NETWORK_DISCONNECT_HLTVRESTRICTED":
            case 35:
                message.reason = 35;
                break;
            case "NETWORK_DISCONNECT_NOSPECTATORS":
            case 36:
                message.reason = 36;
                break;
            case "NETWORK_DISCONNECT_HLTVUNAVAILABLE":
            case 37:
                message.reason = 37;
                break;
            case "NETWORK_DISCONNECT_HLTVSTOP":
            case 38:
                message.reason = 38;
                break;
            case "NETWORK_DISCONNECT_KICKED":
            case 39:
                message.reason = 39;
                break;
            case "NETWORK_DISCONNECT_BANADDED":
            case 40:
                message.reason = 40;
                break;
            case "NETWORK_DISCONNECT_KICKBANADDED":
            case 41:
                message.reason = 41;
                break;
            case "NETWORK_DISCONNECT_HLTVDIRECT":
            case 42:
                message.reason = 42;
                break;
            case "NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA":
            case 43:
                message.reason = 43;
                break;
            case "NETWORK_DISCONNECT_PURESERVER_MISMATCH":
            case 44:
                message.reason = 44;
                break;
            case "NETWORK_DISCONNECT_USERCMD":
            case 45:
                message.reason = 45;
                break;
            case "NETWORK_DISCONNECT_REJECTED_BY_GAME":
            case 46:
                message.reason = 46;
                break;
            case "NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR":
            case 47:
                message.reason = 47;
                break;
            case "NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR":
            case 48:
                message.reason = 48;
                break;
            case "NETWORK_DISCONNECT_BAD_SERVER_PASSWORD":
            case 49:
                message.reason = 49;
                break;
            case "NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION":
            case 50:
                message.reason = 50;
                break;
            case "NETWORK_DISCONNECT_CONNECTION_FAILURE":
            case 51:
                message.reason = 51;
                break;
            case "NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS":
            case 52:
                message.reason = 52;
                break;
            case "NETWORK_DISCONNECT_RECONNECTION":
            case 53:
                message.reason = 53;
                break;
            case "NETWORK_DISCONNECT_LOOPSHUTDOWN":
            case 54:
                message.reason = 54;
                break;
            case "NETWORK_DISCONNECT_LOOPDEACTIVATE":
            case 55:
                message.reason = 55;
                break;
            case "NETWORK_DISCONNECT_HOST_ENDGAME":
            case 56:
                message.reason = 56;
                break;
            case "NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE":
            case 57:
                message.reason = 57;
                break;
            case "NETWORK_DISCONNECT_CREATE_SERVER_FAILED":
            case 58:
                message.reason = 58;
                break;
            case "NETWORK_DISCONNECT_EXITING":
            case 59:
                message.reason = 59;
                break;
            case "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE":
            case 60:
                message.reason = 60;
                break;
            case "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY":
            case 61:
                message.reason = 61;
                break;
            case "NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL":
            case 62:
                message.reason = 62;
                break;
            case "NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP":
            case 63:
                message.reason = 63;
                break;
            case "NETWORK_DISCONNECT_CLIENT_NO_MAP":
            case 64:
                message.reason = 64;
                break;
            case "NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP":
            case 65:
                message.reason = 65;
                break;
            case "NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM":
            case 66:
                message.reason = 66;
                break;
            case "NETWORK_DISCONNECT_STEAM_DENY_MISC":
            case 67:
                message.reason = 67;
                break;
            case "NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT":
            case 68:
                message.reason = 68;
                break;
            case "NETWORK_DISCONNECT_SERVER_SHUTDOWN":
            case 69:
                message.reason = 69;
                break;
            case "NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE":
            case 71:
                message.reason = 71;
                break;
            case "NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT":
            case 72:
                message.reason = 72;
                break;
            case "NETWORK_DISCONNECT_SERVER_INCOMPATIBLE":
            case 73:
                message.reason = 73;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS":
            case 74:
                message.reason = 74;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY":
            case 75:
                message.reason = 75;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG":
            case 76:
                message.reason = 76;
                break;
            case "NETWORK_DISCONNECT_LOCALPROBLEM_OTHER":
            case 77:
                message.reason = 77;
                break;
            case "NETWORK_DISCONNECT_REMOTE_TIMEOUT":
            case 79:
                message.reason = 79;
                break;
            case "NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING":
            case 80:
                message.reason = 80;
                break;
            case "NETWORK_DISCONNECT_REMOTE_OTHER":
            case 81:
                message.reason = 81;
                break;
            case "NETWORK_DISCONNECT_REMOTE_BADCRYPT":
            case 82:
                message.reason = 82;
                break;
            case "NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED":
            case 83:
                message.reason = 83;
                break;
            case "NETWORK_DISCONNECT_UNUSUAL":
            case 84:
                message.reason = 84;
                break;
            case "NETWORK_DISCONNECT_INTERNAL_ERROR":
            case 85:
                message.reason = 85;
                break;
            case "NETWORK_DISCONNECT_REJECT_BADCHALLENGE":
            case 128:
                message.reason = 128;
                break;
            case "NETWORK_DISCONNECT_REJECT_NOLOBBY":
            case 129:
                message.reason = 129;
                break;
            case "NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP":
            case 130:
                message.reason = 130;
                break;
            case "NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER":
            case 131:
                message.reason = 131;
                break;
            case "NETWORK_DISCONNECT_REJECT_HIDDEN_GAME":
            case 132:
                message.reason = 132;
                break;
            case "NETWORK_DISCONNECT_REJECT_LANRESTRICT":
            case 133:
                message.reason = 133;
                break;
            case "NETWORK_DISCONNECT_REJECT_BADPASSWORD":
            case 134:
                message.reason = 134;
                break;
            case "NETWORK_DISCONNECT_REJECT_SERVERFULL":
            case 135:
                message.reason = 135;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION":
            case 136:
                message.reason = 136;
                break;
            case "NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL":
            case 137:
                message.reason = 137;
                break;
            case "NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY":
            case 138:
                message.reason = 138;
                break;
            case "NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY":
            case 139:
                message.reason = 139;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH":
            case 140:
                message.reason = 140;
                break;
            case "NETWORK_DISCONNECT_REJECT_OLDPROTOCOL":
            case 141:
                message.reason = 141;
                break;
            case "NETWORK_DISCONNECT_REJECT_NEWPROTOCOL":
            case 142:
                message.reason = 142;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION":
            case 143:
                message.reason = 143;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN":
            case 144:
                message.reason = 144;
                break;
            case "NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN":
            case 145:
                message.reason = 145;
                break;
            case "NETWORK_DISCONNECT_REJECT_STEAM":
            case 146:
                message.reason = 146;
                break;
            case "NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED":
            case 147:
                message.reason = 147;
                break;
            case "NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID":
            case 148:
                message.reason = 148;
                break;
            case "NETWORK_DISCONNECT_REJECT_BANNED":
            case 149:
                message.reason = 149;
                break;
            case "NETWORK_DISCONNECT_KICKED_TEAMKILLING":
            case 150:
                message.reason = 150;
                break;
            case "NETWORK_DISCONNECT_KICKED_TK_START":
            case 151:
                message.reason = 151;
                break;
            case "NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT":
            case 152:
                message.reason = 152;
                break;
            case "NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT":
            case 153:
                message.reason = 153;
                break;
            case "NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN":
            case 154:
                message.reason = 154;
                break;
            case "NETWORK_DISCONNECT_KICKED_TEAMHURTING":
            case 155:
                message.reason = 155;
                break;
            case "NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING":
            case 156:
                message.reason = 156;
                break;
            case "NETWORK_DISCONNECT_KICKED_VOTEDOFF":
            case 157:
                message.reason = 157;
                break;
            case "NETWORK_DISCONNECT_KICKED_IDLE":
            case 158:
                message.reason = 158;
                break;
            case "NETWORK_DISCONNECT_KICKED_SUICIDE":
            case 159:
                message.reason = 159;
                break;
            case "NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN":
            case 160:
                message.reason = 160;
                break;
            case "NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET":
            case 161:
                message.reason = 161;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_Disconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {CNETMsg_Disconnect} message CNETMsg_Disconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_Disconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = options.enums === String ? "NETWORK_DISCONNECT_INVALID" : 0;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.ENetworkDisconnectionReason[message.reason] === undefined ? message.reason : $root.ENetworkDisconnectionReason[message.reason] : message.reason;
            return object;
        };
    
        /**
         * Converts this CNETMsg_Disconnect to JSON.
         * @function toJSON
         * @memberof CNETMsg_Disconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_Disconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_Disconnect
         * @function getTypeUrl
         * @memberof CNETMsg_Disconnect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_Disconnect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_Disconnect";
        };
    
        return CNETMsg_Disconnect;
    })();
    
    $root.CNETMsg_Tick = (function() {
    
        /**
         * Properties of a CNETMsg_Tick.
         * @exports ICNETMsg_Tick
         * @interface ICNETMsg_Tick
         * @property {number|null} [tick] CNETMsg_Tick tick
         * @property {number|null} [host_frametime] CNETMsg_Tick host_frametime
         * @property {number|null} [host_frametime_std_deviation] CNETMsg_Tick host_frametime_std_deviation
         * @property {number|null} [host_computationtime] CNETMsg_Tick host_computationtime
         * @property {number|null} [host_computationtime_std_deviation] CNETMsg_Tick host_computationtime_std_deviation
         * @property {number|null} [host_framestarttime_std_deviation] CNETMsg_Tick host_framestarttime_std_deviation
         * @property {number|null} [host_loss] CNETMsg_Tick host_loss
         * @property {number|null} [host_unfiltered_frametime] CNETMsg_Tick host_unfiltered_frametime
         * @property {number|null} [hltv_replay_flags] CNETMsg_Tick hltv_replay_flags
         * @property {number|null} [expected_long_tick] CNETMsg_Tick expected_long_tick
         * @property {string|null} [expected_long_tick_reason] CNETMsg_Tick expected_long_tick_reason
         */
    
        /**
         * Constructs a new CNETMsg_Tick.
         * @exports CNETMsg_Tick
         * @classdesc Represents a CNETMsg_Tick.
         * @implements ICNETMsg_Tick
         * @constructor
         * @param {ICNETMsg_Tick=} [properties] Properties to set
         */
        function CNETMsg_Tick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_Tick tick.
         * @member {number} tick
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.tick = 0;
    
        /**
         * CNETMsg_Tick host_frametime.
         * @member {number} host_frametime
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.host_frametime = 0;
    
        /**
         * CNETMsg_Tick host_frametime_std_deviation.
         * @member {number} host_frametime_std_deviation
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.host_frametime_std_deviation = 0;
    
        /**
         * CNETMsg_Tick host_computationtime.
         * @member {number} host_computationtime
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.host_computationtime = 0;
    
        /**
         * CNETMsg_Tick host_computationtime_std_deviation.
         * @member {number} host_computationtime_std_deviation
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.host_computationtime_std_deviation = 0;
    
        /**
         * CNETMsg_Tick host_framestarttime_std_deviation.
         * @member {number} host_framestarttime_std_deviation
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.host_framestarttime_std_deviation = 0;
    
        /**
         * CNETMsg_Tick host_loss.
         * @member {number} host_loss
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.host_loss = 0;
    
        /**
         * CNETMsg_Tick host_unfiltered_frametime.
         * @member {number} host_unfiltered_frametime
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.host_unfiltered_frametime = 0;
    
        /**
         * CNETMsg_Tick hltv_replay_flags.
         * @member {number} hltv_replay_flags
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.hltv_replay_flags = 0;
    
        /**
         * CNETMsg_Tick expected_long_tick.
         * @member {number} expected_long_tick
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.expected_long_tick = 0;
    
        /**
         * CNETMsg_Tick expected_long_tick_reason.
         * @member {string} expected_long_tick_reason
         * @memberof CNETMsg_Tick
         * @instance
         */
        CNETMsg_Tick.prototype.expected_long_tick_reason = "";
    
        /**
         * Creates a new CNETMsg_Tick instance using the specified properties.
         * @function create
         * @memberof CNETMsg_Tick
         * @static
         * @param {ICNETMsg_Tick=} [properties] Properties to set
         * @returns {CNETMsg_Tick} CNETMsg_Tick instance
         */
        CNETMsg_Tick.create = function create(properties) {
            return new CNETMsg_Tick(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_Tick message. Does not implicitly {@link CNETMsg_Tick.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_Tick
         * @static
         * @param {ICNETMsg_Tick} message CNETMsg_Tick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Tick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tick != null && Object.hasOwnProperty.call(message, "tick"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tick);
            if (message.host_frametime != null && Object.hasOwnProperty.call(message, "host_frametime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.host_frametime);
            if (message.host_frametime_std_deviation != null && Object.hasOwnProperty.call(message, "host_frametime_std_deviation"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.host_frametime_std_deviation);
            if (message.host_computationtime != null && Object.hasOwnProperty.call(message, "host_computationtime"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.host_computationtime);
            if (message.host_computationtime_std_deviation != null && Object.hasOwnProperty.call(message, "host_computationtime_std_deviation"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.host_computationtime_std_deviation);
            if (message.host_framestarttime_std_deviation != null && Object.hasOwnProperty.call(message, "host_framestarttime_std_deviation"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.host_framestarttime_std_deviation);
            if (message.host_loss != null && Object.hasOwnProperty.call(message, "host_loss"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.host_loss);
            if (message.host_unfiltered_frametime != null && Object.hasOwnProperty.call(message, "host_unfiltered_frametime"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.host_unfiltered_frametime);
            if (message.hltv_replay_flags != null && Object.hasOwnProperty.call(message, "hltv_replay_flags"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.hltv_replay_flags);
            if (message.expected_long_tick != null && Object.hasOwnProperty.call(message, "expected_long_tick"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.expected_long_tick);
            if (message.expected_long_tick_reason != null && Object.hasOwnProperty.call(message, "expected_long_tick_reason"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.expected_long_tick_reason);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_Tick message, length delimited. Does not implicitly {@link CNETMsg_Tick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_Tick
         * @static
         * @param {ICNETMsg_Tick} message CNETMsg_Tick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_Tick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_Tick message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_Tick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_Tick} CNETMsg_Tick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Tick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_Tick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tick = reader.uint32();
                        break;
                    }
                case 2: {
                        message.host_frametime = reader.uint32();
                        break;
                    }
                case 3: {
                        message.host_frametime_std_deviation = reader.uint32();
                        break;
                    }
                case 4: {
                        message.host_computationtime = reader.uint32();
                        break;
                    }
                case 5: {
                        message.host_computationtime_std_deviation = reader.uint32();
                        break;
                    }
                case 6: {
                        message.host_framestarttime_std_deviation = reader.uint32();
                        break;
                    }
                case 7: {
                        message.host_loss = reader.uint32();
                        break;
                    }
                case 8: {
                        message.host_unfiltered_frametime = reader.uint32();
                        break;
                    }
                case 9: {
                        message.hltv_replay_flags = reader.uint32();
                        break;
                    }
                case 10: {
                        message.expected_long_tick = reader.uint32();
                        break;
                    }
                case 11: {
                        message.expected_long_tick_reason = reader.string();
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
         * Decodes a CNETMsg_Tick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_Tick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_Tick} CNETMsg_Tick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_Tick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_Tick message.
         * @function verify
         * @memberof CNETMsg_Tick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_Tick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tick != null && message.hasOwnProperty("tick"))
                if (!$util.isInteger(message.tick))
                    return "tick: integer expected";
            if (message.host_frametime != null && message.hasOwnProperty("host_frametime"))
                if (!$util.isInteger(message.host_frametime))
                    return "host_frametime: integer expected";
            if (message.host_frametime_std_deviation != null && message.hasOwnProperty("host_frametime_std_deviation"))
                if (!$util.isInteger(message.host_frametime_std_deviation))
                    return "host_frametime_std_deviation: integer expected";
            if (message.host_computationtime != null && message.hasOwnProperty("host_computationtime"))
                if (!$util.isInteger(message.host_computationtime))
                    return "host_computationtime: integer expected";
            if (message.host_computationtime_std_deviation != null && message.hasOwnProperty("host_computationtime_std_deviation"))
                if (!$util.isInteger(message.host_computationtime_std_deviation))
                    return "host_computationtime_std_deviation: integer expected";
            if (message.host_framestarttime_std_deviation != null && message.hasOwnProperty("host_framestarttime_std_deviation"))
                if (!$util.isInteger(message.host_framestarttime_std_deviation))
                    return "host_framestarttime_std_deviation: integer expected";
            if (message.host_loss != null && message.hasOwnProperty("host_loss"))
                if (!$util.isInteger(message.host_loss))
                    return "host_loss: integer expected";
            if (message.host_unfiltered_frametime != null && message.hasOwnProperty("host_unfiltered_frametime"))
                if (!$util.isInteger(message.host_unfiltered_frametime))
                    return "host_unfiltered_frametime: integer expected";
            if (message.hltv_replay_flags != null && message.hasOwnProperty("hltv_replay_flags"))
                if (!$util.isInteger(message.hltv_replay_flags))
                    return "hltv_replay_flags: integer expected";
            if (message.expected_long_tick != null && message.hasOwnProperty("expected_long_tick"))
                if (!$util.isInteger(message.expected_long_tick))
                    return "expected_long_tick: integer expected";
            if (message.expected_long_tick_reason != null && message.hasOwnProperty("expected_long_tick_reason"))
                if (!$util.isString(message.expected_long_tick_reason))
                    return "expected_long_tick_reason: string expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_Tick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_Tick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_Tick} CNETMsg_Tick
         */
        CNETMsg_Tick.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_Tick)
                return object;
            var message = new $root.CNETMsg_Tick();
            if (object.tick != null)
                message.tick = object.tick >>> 0;
            if (object.host_frametime != null)
                message.host_frametime = object.host_frametime >>> 0;
            if (object.host_frametime_std_deviation != null)
                message.host_frametime_std_deviation = object.host_frametime_std_deviation >>> 0;
            if (object.host_computationtime != null)
                message.host_computationtime = object.host_computationtime >>> 0;
            if (object.host_computationtime_std_deviation != null)
                message.host_computationtime_std_deviation = object.host_computationtime_std_deviation >>> 0;
            if (object.host_framestarttime_std_deviation != null)
                message.host_framestarttime_std_deviation = object.host_framestarttime_std_deviation >>> 0;
            if (object.host_loss != null)
                message.host_loss = object.host_loss >>> 0;
            if (object.host_unfiltered_frametime != null)
                message.host_unfiltered_frametime = object.host_unfiltered_frametime >>> 0;
            if (object.hltv_replay_flags != null)
                message.hltv_replay_flags = object.hltv_replay_flags >>> 0;
            if (object.expected_long_tick != null)
                message.expected_long_tick = object.expected_long_tick >>> 0;
            if (object.expected_long_tick_reason != null)
                message.expected_long_tick_reason = String(object.expected_long_tick_reason);
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_Tick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_Tick
         * @static
         * @param {CNETMsg_Tick} message CNETMsg_Tick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_Tick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tick = 0;
                object.host_frametime = 0;
                object.host_frametime_std_deviation = 0;
                object.host_computationtime = 0;
                object.host_computationtime_std_deviation = 0;
                object.host_framestarttime_std_deviation = 0;
                object.host_loss = 0;
                object.host_unfiltered_frametime = 0;
                object.hltv_replay_flags = 0;
                object.expected_long_tick = 0;
                object.expected_long_tick_reason = "";
            }
            if (message.tick != null && message.hasOwnProperty("tick"))
                object.tick = message.tick;
            if (message.host_frametime != null && message.hasOwnProperty("host_frametime"))
                object.host_frametime = message.host_frametime;
            if (message.host_frametime_std_deviation != null && message.hasOwnProperty("host_frametime_std_deviation"))
                object.host_frametime_std_deviation = message.host_frametime_std_deviation;
            if (message.host_computationtime != null && message.hasOwnProperty("host_computationtime"))
                object.host_computationtime = message.host_computationtime;
            if (message.host_computationtime_std_deviation != null && message.hasOwnProperty("host_computationtime_std_deviation"))
                object.host_computationtime_std_deviation = message.host_computationtime_std_deviation;
            if (message.host_framestarttime_std_deviation != null && message.hasOwnProperty("host_framestarttime_std_deviation"))
                object.host_framestarttime_std_deviation = message.host_framestarttime_std_deviation;
            if (message.host_loss != null && message.hasOwnProperty("host_loss"))
                object.host_loss = message.host_loss;
            if (message.host_unfiltered_frametime != null && message.hasOwnProperty("host_unfiltered_frametime"))
                object.host_unfiltered_frametime = message.host_unfiltered_frametime;
            if (message.hltv_replay_flags != null && message.hasOwnProperty("hltv_replay_flags"))
                object.hltv_replay_flags = message.hltv_replay_flags;
            if (message.expected_long_tick != null && message.hasOwnProperty("expected_long_tick"))
                object.expected_long_tick = message.expected_long_tick;
            if (message.expected_long_tick_reason != null && message.hasOwnProperty("expected_long_tick_reason"))
                object.expected_long_tick_reason = message.expected_long_tick_reason;
            return object;
        };
    
        /**
         * Converts this CNETMsg_Tick to JSON.
         * @function toJSON
         * @memberof CNETMsg_Tick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_Tick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_Tick
         * @function getTypeUrl
         * @memberof CNETMsg_Tick
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_Tick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_Tick";
        };
    
        return CNETMsg_Tick;
    })();
    
    $root.CNETMsg_StringCmd = (function() {
    
        /**
         * Properties of a CNETMsg_StringCmd.
         * @exports ICNETMsg_StringCmd
         * @interface ICNETMsg_StringCmd
         * @property {string|null} [command] CNETMsg_StringCmd command
         * @property {number|null} [prediction_sync] CNETMsg_StringCmd prediction_sync
         */
    
        /**
         * Constructs a new CNETMsg_StringCmd.
         * @exports CNETMsg_StringCmd
         * @classdesc Represents a CNETMsg_StringCmd.
         * @implements ICNETMsg_StringCmd
         * @constructor
         * @param {ICNETMsg_StringCmd=} [properties] Properties to set
         */
        function CNETMsg_StringCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_StringCmd command.
         * @member {string} command
         * @memberof CNETMsg_StringCmd
         * @instance
         */
        CNETMsg_StringCmd.prototype.command = "";
    
        /**
         * CNETMsg_StringCmd prediction_sync.
         * @member {number} prediction_sync
         * @memberof CNETMsg_StringCmd
         * @instance
         */
        CNETMsg_StringCmd.prototype.prediction_sync = 0;
    
        /**
         * Creates a new CNETMsg_StringCmd instance using the specified properties.
         * @function create
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {ICNETMsg_StringCmd=} [properties] Properties to set
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd instance
         */
        CNETMsg_StringCmd.create = function create(properties) {
            return new CNETMsg_StringCmd(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_StringCmd message. Does not implicitly {@link CNETMsg_StringCmd.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {ICNETMsg_StringCmd} message CNETMsg_StringCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_StringCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.prediction_sync != null && Object.hasOwnProperty.call(message, "prediction_sync"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.prediction_sync);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_StringCmd message, length delimited. Does not implicitly {@link CNETMsg_StringCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {ICNETMsg_StringCmd} message CNETMsg_StringCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_StringCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_StringCmd message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_StringCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_StringCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.command = reader.string();
                        break;
                    }
                case 2: {
                        message.prediction_sync = reader.uint32();
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
         * Decodes a CNETMsg_StringCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_StringCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_StringCmd message.
         * @function verify
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_StringCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.prediction_sync != null && message.hasOwnProperty("prediction_sync"))
                if (!$util.isInteger(message.prediction_sync))
                    return "prediction_sync: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_StringCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_StringCmd} CNETMsg_StringCmd
         */
        CNETMsg_StringCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_StringCmd)
                return object;
            var message = new $root.CNETMsg_StringCmd();
            if (object.command != null)
                message.command = String(object.command);
            if (object.prediction_sync != null)
                message.prediction_sync = object.prediction_sync >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_StringCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {CNETMsg_StringCmd} message CNETMsg_StringCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_StringCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = "";
                object.prediction_sync = 0;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.prediction_sync != null && message.hasOwnProperty("prediction_sync"))
                object.prediction_sync = message.prediction_sync;
            return object;
        };
    
        /**
         * Converts this CNETMsg_StringCmd to JSON.
         * @function toJSON
         * @memberof CNETMsg_StringCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_StringCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_StringCmd
         * @function getTypeUrl
         * @memberof CNETMsg_StringCmd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_StringCmd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_StringCmd";
        };
    
        return CNETMsg_StringCmd;
    })();
    
    $root.CNETMsg_SetConVar = (function() {
    
        /**
         * Properties of a CNETMsg_SetConVar.
         * @exports ICNETMsg_SetConVar
         * @interface ICNETMsg_SetConVar
         * @property {ICMsg_CVars|null} [convars] CNETMsg_SetConVar convars
         */
    
        /**
         * Constructs a new CNETMsg_SetConVar.
         * @exports CNETMsg_SetConVar
         * @classdesc Represents a CNETMsg_SetConVar.
         * @implements ICNETMsg_SetConVar
         * @constructor
         * @param {ICNETMsg_SetConVar=} [properties] Properties to set
         */
        function CNETMsg_SetConVar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SetConVar convars.
         * @member {ICMsg_CVars|null|undefined} convars
         * @memberof CNETMsg_SetConVar
         * @instance
         */
        CNETMsg_SetConVar.prototype.convars = null;
    
        /**
         * Creates a new CNETMsg_SetConVar instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {ICNETMsg_SetConVar=} [properties] Properties to set
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar instance
         */
        CNETMsg_SetConVar.create = function create(properties) {
            return new CNETMsg_SetConVar(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SetConVar message. Does not implicitly {@link CNETMsg_SetConVar.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {ICNETMsg_SetConVar} message CNETMsg_SetConVar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SetConVar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.convars != null && Object.hasOwnProperty.call(message, "convars"))
                $root.CMsg_CVars.encode(message.convars, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SetConVar message, length delimited. Does not implicitly {@link CNETMsg_SetConVar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {ICNETMsg_SetConVar} message CNETMsg_SetConVar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SetConVar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SetConVar message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SetConVar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SetConVar();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.convars = $root.CMsg_CVars.decode(reader, reader.uint32());
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
         * Decodes a CNETMsg_SetConVar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SetConVar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SetConVar message.
         * @function verify
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SetConVar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.convars != null && message.hasOwnProperty("convars")) {
                var error = $root.CMsg_CVars.verify(message.convars);
                if (error)
                    return "convars." + error;
            }
            return null;
        };
    
        /**
         * Creates a CNETMsg_SetConVar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SetConVar} CNETMsg_SetConVar
         */
        CNETMsg_SetConVar.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SetConVar)
                return object;
            var message = new $root.CNETMsg_SetConVar();
            if (object.convars != null) {
                if (typeof object.convars !== "object")
                    throw TypeError(".CNETMsg_SetConVar.convars: object expected");
                message.convars = $root.CMsg_CVars.fromObject(object.convars);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SetConVar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {CNETMsg_SetConVar} message CNETMsg_SetConVar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SetConVar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.convars = null;
            if (message.convars != null && message.hasOwnProperty("convars"))
                object.convars = $root.CMsg_CVars.toObject(message.convars, options);
            return object;
        };
    
        /**
         * Converts this CNETMsg_SetConVar to JSON.
         * @function toJSON
         * @memberof CNETMsg_SetConVar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SetConVar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SetConVar
         * @function getTypeUrl
         * @memberof CNETMsg_SetConVar
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SetConVar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SetConVar";
        };
    
        return CNETMsg_SetConVar;
    })();
    
    $root.CNETMsg_SignonState = (function() {
    
        /**
         * Properties of a CNETMsg_SignonState.
         * @exports ICNETMsg_SignonState
         * @interface ICNETMsg_SignonState
         * @property {SignonState_t|null} [signon_state] CNETMsg_SignonState signon_state
         * @property {number|null} [spawn_count] CNETMsg_SignonState spawn_count
         * @property {number|null} [num_server_players] CNETMsg_SignonState num_server_players
         * @property {Array.<string>|null} [players_networkids] CNETMsg_SignonState players_networkids
         * @property {string|null} [map_name] CNETMsg_SignonState map_name
         * @property {string|null} [addons] CNETMsg_SignonState addons
         */
    
        /**
         * Constructs a new CNETMsg_SignonState.
         * @exports CNETMsg_SignonState
         * @classdesc Represents a CNETMsg_SignonState.
         * @implements ICNETMsg_SignonState
         * @constructor
         * @param {ICNETMsg_SignonState=} [properties] Properties to set
         */
        function CNETMsg_SignonState(properties) {
            this.players_networkids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SignonState signon_state.
         * @member {SignonState_t} signon_state
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.signon_state = 0;
    
        /**
         * CNETMsg_SignonState spawn_count.
         * @member {number} spawn_count
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.spawn_count = 0;
    
        /**
         * CNETMsg_SignonState num_server_players.
         * @member {number} num_server_players
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.num_server_players = 0;
    
        /**
         * CNETMsg_SignonState players_networkids.
         * @member {Array.<string>} players_networkids
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.players_networkids = $util.emptyArray;
    
        /**
         * CNETMsg_SignonState map_name.
         * @member {string} map_name
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.map_name = "";
    
        /**
         * CNETMsg_SignonState addons.
         * @member {string} addons
         * @memberof CNETMsg_SignonState
         * @instance
         */
        CNETMsg_SignonState.prototype.addons = "";
    
        /**
         * Creates a new CNETMsg_SignonState instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SignonState
         * @static
         * @param {ICNETMsg_SignonState=} [properties] Properties to set
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState instance
         */
        CNETMsg_SignonState.create = function create(properties) {
            return new CNETMsg_SignonState(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SignonState message. Does not implicitly {@link CNETMsg_SignonState.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SignonState
         * @static
         * @param {ICNETMsg_SignonState} message CNETMsg_SignonState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SignonState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signon_state != null && Object.hasOwnProperty.call(message, "signon_state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.signon_state);
            if (message.spawn_count != null && Object.hasOwnProperty.call(message, "spawn_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.spawn_count);
            if (message.num_server_players != null && Object.hasOwnProperty.call(message, "num_server_players"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.num_server_players);
            if (message.players_networkids != null && message.players_networkids.length)
                for (var i = 0; i < message.players_networkids.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.players_networkids[i]);
            if (message.map_name != null && Object.hasOwnProperty.call(message, "map_name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.map_name);
            if (message.addons != null && Object.hasOwnProperty.call(message, "addons"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.addons);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SignonState message, length delimited. Does not implicitly {@link CNETMsg_SignonState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SignonState
         * @static
         * @param {ICNETMsg_SignonState} message CNETMsg_SignonState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SignonState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SignonState message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SignonState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SignonState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SignonState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.signon_state = reader.int32();
                        break;
                    }
                case 2: {
                        message.spawn_count = reader.uint32();
                        break;
                    }
                case 3: {
                        message.num_server_players = reader.uint32();
                        break;
                    }
                case 4: {
                        if (!(message.players_networkids && message.players_networkids.length))
                            message.players_networkids = [];
                        message.players_networkids.push(reader.string());
                        break;
                    }
                case 5: {
                        message.map_name = reader.string();
                        break;
                    }
                case 6: {
                        message.addons = reader.string();
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
         * Decodes a CNETMsg_SignonState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SignonState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SignonState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SignonState message.
         * @function verify
         * @memberof CNETMsg_SignonState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SignonState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signon_state != null && message.hasOwnProperty("signon_state"))
                switch (message.signon_state) {
                default:
                    return "signon_state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.spawn_count != null && message.hasOwnProperty("spawn_count"))
                if (!$util.isInteger(message.spawn_count))
                    return "spawn_count: integer expected";
            if (message.num_server_players != null && message.hasOwnProperty("num_server_players"))
                if (!$util.isInteger(message.num_server_players))
                    return "num_server_players: integer expected";
            if (message.players_networkids != null && message.hasOwnProperty("players_networkids")) {
                if (!Array.isArray(message.players_networkids))
                    return "players_networkids: array expected";
                for (var i = 0; i < message.players_networkids.length; ++i)
                    if (!$util.isString(message.players_networkids[i]))
                        return "players_networkids: string[] expected";
            }
            if (message.map_name != null && message.hasOwnProperty("map_name"))
                if (!$util.isString(message.map_name))
                    return "map_name: string expected";
            if (message.addons != null && message.hasOwnProperty("addons"))
                if (!$util.isString(message.addons))
                    return "addons: string expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SignonState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SignonState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SignonState} CNETMsg_SignonState
         */
        CNETMsg_SignonState.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SignonState)
                return object;
            var message = new $root.CNETMsg_SignonState();
            switch (object.signon_state) {
            default:
                if (typeof object.signon_state === "number") {
                    message.signon_state = object.signon_state;
                    break;
                }
                break;
            case "SIGNONSTATE_NONE":
            case 0:
                message.signon_state = 0;
                break;
            case "SIGNONSTATE_CHALLENGE":
            case 1:
                message.signon_state = 1;
                break;
            case "SIGNONSTATE_CONNECTED":
            case 2:
                message.signon_state = 2;
                break;
            case "SIGNONSTATE_NEW":
            case 3:
                message.signon_state = 3;
                break;
            case "SIGNONSTATE_PRESPAWN":
            case 4:
                message.signon_state = 4;
                break;
            case "SIGNONSTATE_SPAWN":
            case 5:
                message.signon_state = 5;
                break;
            case "SIGNONSTATE_FULL":
            case 6:
                message.signon_state = 6;
                break;
            case "SIGNONSTATE_CHANGELEVEL":
            case 7:
                message.signon_state = 7;
                break;
            }
            if (object.spawn_count != null)
                message.spawn_count = object.spawn_count >>> 0;
            if (object.num_server_players != null)
                message.num_server_players = object.num_server_players >>> 0;
            if (object.players_networkids) {
                if (!Array.isArray(object.players_networkids))
                    throw TypeError(".CNETMsg_SignonState.players_networkids: array expected");
                message.players_networkids = [];
                for (var i = 0; i < object.players_networkids.length; ++i)
                    message.players_networkids[i] = String(object.players_networkids[i]);
            }
            if (object.map_name != null)
                message.map_name = String(object.map_name);
            if (object.addons != null)
                message.addons = String(object.addons);
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SignonState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SignonState
         * @static
         * @param {CNETMsg_SignonState} message CNETMsg_SignonState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SignonState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players_networkids = [];
            if (options.defaults) {
                object.signon_state = options.enums === String ? "SIGNONSTATE_NONE" : 0;
                object.spawn_count = 0;
                object.num_server_players = 0;
                object.map_name = "";
                object.addons = "";
            }
            if (message.signon_state != null && message.hasOwnProperty("signon_state"))
                object.signon_state = options.enums === String ? $root.SignonState_t[message.signon_state] === undefined ? message.signon_state : $root.SignonState_t[message.signon_state] : message.signon_state;
            if (message.spawn_count != null && message.hasOwnProperty("spawn_count"))
                object.spawn_count = message.spawn_count;
            if (message.num_server_players != null && message.hasOwnProperty("num_server_players"))
                object.num_server_players = message.num_server_players;
            if (message.players_networkids && message.players_networkids.length) {
                object.players_networkids = [];
                for (var j = 0; j < message.players_networkids.length; ++j)
                    object.players_networkids[j] = message.players_networkids[j];
            }
            if (message.map_name != null && message.hasOwnProperty("map_name"))
                object.map_name = message.map_name;
            if (message.addons != null && message.hasOwnProperty("addons"))
                object.addons = message.addons;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SignonState to JSON.
         * @function toJSON
         * @memberof CNETMsg_SignonState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SignonState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SignonState
         * @function getTypeUrl
         * @memberof CNETMsg_SignonState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SignonState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SignonState";
        };
    
        return CNETMsg_SignonState;
    })();
    
    $root.CSVCMsg_GameEvent = (function() {
    
        /**
         * Properties of a CSVCMsg_GameEvent.
         * @exports ICSVCMsg_GameEvent
         * @interface ICSVCMsg_GameEvent
         * @property {string|null} [event_name] CSVCMsg_GameEvent event_name
         * @property {number|null} [eventid] CSVCMsg_GameEvent eventid
         * @property {Array.<CSVCMsg_GameEvent.Ikey_t>|null} [keys] CSVCMsg_GameEvent keys
         */
    
        /**
         * Constructs a new CSVCMsg_GameEvent.
         * @exports CSVCMsg_GameEvent
         * @classdesc Represents a CSVCMsg_GameEvent.
         * @implements ICSVCMsg_GameEvent
         * @constructor
         * @param {ICSVCMsg_GameEvent=} [properties] Properties to set
         */
        function CSVCMsg_GameEvent(properties) {
            this.keys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSVCMsg_GameEvent event_name.
         * @member {string} event_name
         * @memberof CSVCMsg_GameEvent
         * @instance
         */
        CSVCMsg_GameEvent.prototype.event_name = "";
    
        /**
         * CSVCMsg_GameEvent eventid.
         * @member {number} eventid
         * @memberof CSVCMsg_GameEvent
         * @instance
         */
        CSVCMsg_GameEvent.prototype.eventid = 0;
    
        /**
         * CSVCMsg_GameEvent keys.
         * @member {Array.<CSVCMsg_GameEvent.Ikey_t>} keys
         * @memberof CSVCMsg_GameEvent
         * @instance
         */
        CSVCMsg_GameEvent.prototype.keys = $util.emptyArray;
    
        /**
         * Creates a new CSVCMsg_GameEvent instance using the specified properties.
         * @function create
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {ICSVCMsg_GameEvent=} [properties] Properties to set
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent instance
         */
        CSVCMsg_GameEvent.create = function create(properties) {
            return new CSVCMsg_GameEvent(properties);
        };
    
        /**
         * Encodes the specified CSVCMsg_GameEvent message. Does not implicitly {@link CSVCMsg_GameEvent.verify|verify} messages.
         * @function encode
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {ICSVCMsg_GameEvent} message CSVCMsg_GameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event_name != null && Object.hasOwnProperty.call(message, "event_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.event_name);
            if (message.eventid != null && Object.hasOwnProperty.call(message, "eventid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.eventid);
            if (message.keys != null && message.keys.length)
                for (var i = 0; i < message.keys.length; ++i)
                    $root.CSVCMsg_GameEvent.key_t.encode(message.keys[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CSVCMsg_GameEvent message, length delimited. Does not implicitly {@link CSVCMsg_GameEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {ICSVCMsg_GameEvent} message CSVCMsg_GameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.event_name = reader.string();
                        break;
                    }
                case 2: {
                        message.eventid = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push($root.CSVCMsg_GameEvent.key_t.decode(reader, reader.uint32()));
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
         * Decodes a CSVCMsg_GameEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSVCMsg_GameEvent message.
         * @function verify
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSVCMsg_GameEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                if (!$util.isString(message.event_name))
                    return "event_name: string expected";
            if (message.eventid != null && message.hasOwnProperty("eventid"))
                if (!$util.isInteger(message.eventid))
                    return "eventid: integer expected";
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (var i = 0; i < message.keys.length; ++i) {
                    var error = $root.CSVCMsg_GameEvent.key_t.verify(message.keys[i]);
                    if (error)
                        return "keys." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CSVCMsg_GameEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSVCMsg_GameEvent} CSVCMsg_GameEvent
         */
        CSVCMsg_GameEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CSVCMsg_GameEvent)
                return object;
            var message = new $root.CSVCMsg_GameEvent();
            if (object.event_name != null)
                message.event_name = String(object.event_name);
            if (object.eventid != null)
                message.eventid = object.eventid | 0;
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".CSVCMsg_GameEvent.keys: array expected");
                message.keys = [];
                for (var i = 0; i < object.keys.length; ++i) {
                    if (typeof object.keys[i] !== "object")
                        throw TypeError(".CSVCMsg_GameEvent.keys: object expected");
                    message.keys[i] = $root.CSVCMsg_GameEvent.key_t.fromObject(object.keys[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CSVCMsg_GameEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {CSVCMsg_GameEvent} message CSVCMsg_GameEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSVCMsg_GameEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.keys = [];
            if (options.defaults) {
                object.event_name = "";
                object.eventid = 0;
            }
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                object.event_name = message.event_name;
            if (message.eventid != null && message.hasOwnProperty("eventid"))
                object.eventid = message.eventid;
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (var j = 0; j < message.keys.length; ++j)
                    object.keys[j] = $root.CSVCMsg_GameEvent.key_t.toObject(message.keys[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CSVCMsg_GameEvent to JSON.
         * @function toJSON
         * @memberof CSVCMsg_GameEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSVCMsg_GameEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSVCMsg_GameEvent
         * @function getTypeUrl
         * @memberof CSVCMsg_GameEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSVCMsg_GameEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSVCMsg_GameEvent";
        };
    
        CSVCMsg_GameEvent.key_t = (function() {
    
            /**
             * Properties of a key_t.
             * @memberof CSVCMsg_GameEvent
             * @interface Ikey_t
             * @property {number|null} [type] key_t type
             * @property {string|null} [val_string] key_t val_string
             * @property {number|null} [val_float] key_t val_float
             * @property {number|null} [val_long] key_t val_long
             * @property {number|null} [val_short] key_t val_short
             * @property {number|null} [val_byte] key_t val_byte
             * @property {boolean|null} [val_bool] key_t val_bool
             * @property {number|Long|null} [val_uint64] key_t val_uint64
             */
    
            /**
             * Constructs a new key_t.
             * @memberof CSVCMsg_GameEvent
             * @classdesc Represents a key_t.
             * @implements Ikey_t
             * @constructor
             * @param {CSVCMsg_GameEvent.Ikey_t=} [properties] Properties to set
             */
            function key_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * key_t type.
             * @member {number} type
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.type = 0;
    
            /**
             * key_t val_string.
             * @member {string} val_string
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.val_string = "";
    
            /**
             * key_t val_float.
             * @member {number} val_float
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.val_float = 0;
    
            /**
             * key_t val_long.
             * @member {number} val_long
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.val_long = 0;
    
            /**
             * key_t val_short.
             * @member {number} val_short
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.val_short = 0;
    
            /**
             * key_t val_byte.
             * @member {number} val_byte
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.val_byte = 0;
    
            /**
             * key_t val_bool.
             * @member {boolean} val_bool
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.val_bool = false;
    
            /**
             * key_t val_uint64.
             * @member {number|Long} val_uint64
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             */
            key_t.prototype.val_uint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new key_t instance using the specified properties.
             * @function create
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.Ikey_t=} [properties] Properties to set
             * @returns {CSVCMsg_GameEvent.key_t} key_t instance
             */
            key_t.create = function create(properties) {
                return new key_t(properties);
            };
    
            /**
             * Encodes the specified key_t message. Does not implicitly {@link CSVCMsg_GameEvent.key_t.verify|verify} messages.
             * @function encode
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.Ikey_t} message key_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            key_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.val_string != null && Object.hasOwnProperty.call(message, "val_string"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.val_string);
                if (message.val_float != null && Object.hasOwnProperty.call(message, "val_float"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.val_float);
                if (message.val_long != null && Object.hasOwnProperty.call(message, "val_long"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.val_long);
                if (message.val_short != null && Object.hasOwnProperty.call(message, "val_short"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.val_short);
                if (message.val_byte != null && Object.hasOwnProperty.call(message, "val_byte"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.val_byte);
                if (message.val_bool != null && Object.hasOwnProperty.call(message, "val_bool"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.val_bool);
                if (message.val_uint64 != null && Object.hasOwnProperty.call(message, "val_uint64"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.val_uint64);
                return writer;
            };
    
            /**
             * Encodes the specified key_t message, length delimited. Does not implicitly {@link CSVCMsg_GameEvent.key_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.Ikey_t} message key_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            key_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a key_t message from the specified reader or buffer.
             * @function decode
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CSVCMsg_GameEvent.key_t} key_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            key_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameEvent.key_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.int32();
                            break;
                        }
                    case 2: {
                            message.val_string = reader.string();
                            break;
                        }
                    case 3: {
                            message.val_float = reader.float();
                            break;
                        }
                    case 4: {
                            message.val_long = reader.int32();
                            break;
                        }
                    case 5: {
                            message.val_short = reader.int32();
                            break;
                        }
                    case 6: {
                            message.val_byte = reader.int32();
                            break;
                        }
                    case 7: {
                            message.val_bool = reader.bool();
                            break;
                        }
                    case 8: {
                            message.val_uint64 = reader.uint64();
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
             * Decodes a key_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CSVCMsg_GameEvent.key_t} key_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            key_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a key_t message.
             * @function verify
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            key_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                if (message.val_string != null && message.hasOwnProperty("val_string"))
                    if (!$util.isString(message.val_string))
                        return "val_string: string expected";
                if (message.val_float != null && message.hasOwnProperty("val_float"))
                    if (typeof message.val_float !== "number")
                        return "val_float: number expected";
                if (message.val_long != null && message.hasOwnProperty("val_long"))
                    if (!$util.isInteger(message.val_long))
                        return "val_long: integer expected";
                if (message.val_short != null && message.hasOwnProperty("val_short"))
                    if (!$util.isInteger(message.val_short))
                        return "val_short: integer expected";
                if (message.val_byte != null && message.hasOwnProperty("val_byte"))
                    if (!$util.isInteger(message.val_byte))
                        return "val_byte: integer expected";
                if (message.val_bool != null && message.hasOwnProperty("val_bool"))
                    if (typeof message.val_bool !== "boolean")
                        return "val_bool: boolean expected";
                if (message.val_uint64 != null && message.hasOwnProperty("val_uint64"))
                    if (!$util.isInteger(message.val_uint64) && !(message.val_uint64 && $util.isInteger(message.val_uint64.low) && $util.isInteger(message.val_uint64.high)))
                        return "val_uint64: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a key_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CSVCMsg_GameEvent.key_t} key_t
             */
            key_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CSVCMsg_GameEvent.key_t)
                    return object;
                var message = new $root.CSVCMsg_GameEvent.key_t();
                if (object.type != null)
                    message.type = object.type | 0;
                if (object.val_string != null)
                    message.val_string = String(object.val_string);
                if (object.val_float != null)
                    message.val_float = Number(object.val_float);
                if (object.val_long != null)
                    message.val_long = object.val_long | 0;
                if (object.val_short != null)
                    message.val_short = object.val_short | 0;
                if (object.val_byte != null)
                    message.val_byte = object.val_byte | 0;
                if (object.val_bool != null)
                    message.val_bool = Boolean(object.val_bool);
                if (object.val_uint64 != null)
                    if ($util.Long)
                        (message.val_uint64 = $util.Long.fromValue(object.val_uint64)).unsigned = true;
                    else if (typeof object.val_uint64 === "string")
                        message.val_uint64 = parseInt(object.val_uint64, 10);
                    else if (typeof object.val_uint64 === "number")
                        message.val_uint64 = object.val_uint64;
                    else if (typeof object.val_uint64 === "object")
                        message.val_uint64 = new $util.LongBits(object.val_uint64.low >>> 0, object.val_uint64.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a key_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {CSVCMsg_GameEvent.key_t} message key_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            key_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = 0;
                    object.val_string = "";
                    object.val_float = 0;
                    object.val_long = 0;
                    object.val_short = 0;
                    object.val_byte = 0;
                    object.val_bool = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.val_uint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.val_uint64 = options.longs === String ? "0" : 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.val_string != null && message.hasOwnProperty("val_string"))
                    object.val_string = message.val_string;
                if (message.val_float != null && message.hasOwnProperty("val_float"))
                    object.val_float = options.json && !isFinite(message.val_float) ? String(message.val_float) : message.val_float;
                if (message.val_long != null && message.hasOwnProperty("val_long"))
                    object.val_long = message.val_long;
                if (message.val_short != null && message.hasOwnProperty("val_short"))
                    object.val_short = message.val_short;
                if (message.val_byte != null && message.hasOwnProperty("val_byte"))
                    object.val_byte = message.val_byte;
                if (message.val_bool != null && message.hasOwnProperty("val_bool"))
                    object.val_bool = message.val_bool;
                if (message.val_uint64 != null && message.hasOwnProperty("val_uint64"))
                    if (typeof message.val_uint64 === "number")
                        object.val_uint64 = options.longs === String ? String(message.val_uint64) : message.val_uint64;
                    else
                        object.val_uint64 = options.longs === String ? $util.Long.prototype.toString.call(message.val_uint64) : options.longs === Number ? new $util.LongBits(message.val_uint64.low >>> 0, message.val_uint64.high >>> 0).toNumber(true) : message.val_uint64;
                return object;
            };
    
            /**
             * Converts this key_t to JSON.
             * @function toJSON
             * @memberof CSVCMsg_GameEvent.key_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            key_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for key_t
             * @function getTypeUrl
             * @memberof CSVCMsg_GameEvent.key_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            key_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CSVCMsg_GameEvent.key_t";
            };
    
            return key_t;
        })();
    
        return CSVCMsg_GameEvent;
    })();
    
    $root.CSVCMsgList_GameEvents = (function() {
    
        /**
         * Properties of a CSVCMsgList_GameEvents.
         * @exports ICSVCMsgList_GameEvents
         * @interface ICSVCMsgList_GameEvents
         * @property {Array.<CSVCMsgList_GameEvents.Ievent_t>|null} [events] CSVCMsgList_GameEvents events
         */
    
        /**
         * Constructs a new CSVCMsgList_GameEvents.
         * @exports CSVCMsgList_GameEvents
         * @classdesc Represents a CSVCMsgList_GameEvents.
         * @implements ICSVCMsgList_GameEvents
         * @constructor
         * @param {ICSVCMsgList_GameEvents=} [properties] Properties to set
         */
        function CSVCMsgList_GameEvents(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSVCMsgList_GameEvents events.
         * @member {Array.<CSVCMsgList_GameEvents.Ievent_t>} events
         * @memberof CSVCMsgList_GameEvents
         * @instance
         */
        CSVCMsgList_GameEvents.prototype.events = $util.emptyArray;
    
        /**
         * Creates a new CSVCMsgList_GameEvents instance using the specified properties.
         * @function create
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {ICSVCMsgList_GameEvents=} [properties] Properties to set
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents instance
         */
        CSVCMsgList_GameEvents.create = function create(properties) {
            return new CSVCMsgList_GameEvents(properties);
        };
    
        /**
         * Encodes the specified CSVCMsgList_GameEvents message. Does not implicitly {@link CSVCMsgList_GameEvents.verify|verify} messages.
         * @function encode
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {ICSVCMsgList_GameEvents} message CSVCMsgList_GameEvents message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsgList_GameEvents.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.CSVCMsgList_GameEvents.event_t.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CSVCMsgList_GameEvents message, length delimited. Does not implicitly {@link CSVCMsgList_GameEvents.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {ICSVCMsgList_GameEvents} message CSVCMsgList_GameEvents message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsgList_GameEvents.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSVCMsgList_GameEvents message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsgList_GameEvents.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsgList_GameEvents();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.CSVCMsgList_GameEvents.event_t.decode(reader, reader.uint32()));
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
         * Decodes a CSVCMsgList_GameEvents message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsgList_GameEvents.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSVCMsgList_GameEvents message.
         * @function verify
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSVCMsgList_GameEvents.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.CSVCMsgList_GameEvents.event_t.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CSVCMsgList_GameEvents message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSVCMsgList_GameEvents} CSVCMsgList_GameEvents
         */
        CSVCMsgList_GameEvents.fromObject = function fromObject(object) {
            if (object instanceof $root.CSVCMsgList_GameEvents)
                return object;
            var message = new $root.CSVCMsgList_GameEvents();
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".CSVCMsgList_GameEvents.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".CSVCMsgList_GameEvents.events: object expected");
                    message.events[i] = $root.CSVCMsgList_GameEvents.event_t.fromObject(object.events[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CSVCMsgList_GameEvents message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {CSVCMsgList_GameEvents} message CSVCMsgList_GameEvents
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSVCMsgList_GameEvents.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.CSVCMsgList_GameEvents.event_t.toObject(message.events[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CSVCMsgList_GameEvents to JSON.
         * @function toJSON
         * @memberof CSVCMsgList_GameEvents
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSVCMsgList_GameEvents.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSVCMsgList_GameEvents
         * @function getTypeUrl
         * @memberof CSVCMsgList_GameEvents
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSVCMsgList_GameEvents.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSVCMsgList_GameEvents";
        };
    
        CSVCMsgList_GameEvents.event_t = (function() {
    
            /**
             * Properties of an event_t.
             * @memberof CSVCMsgList_GameEvents
             * @interface Ievent_t
             * @property {number|null} [tick] event_t tick
             * @property {ICSVCMsg_GameEvent|null} [event] event_t event
             */
    
            /**
             * Constructs a new event_t.
             * @memberof CSVCMsgList_GameEvents
             * @classdesc Represents an event_t.
             * @implements Ievent_t
             * @constructor
             * @param {CSVCMsgList_GameEvents.Ievent_t=} [properties] Properties to set
             */
            function event_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * event_t tick.
             * @member {number} tick
             * @memberof CSVCMsgList_GameEvents.event_t
             * @instance
             */
            event_t.prototype.tick = 0;
    
            /**
             * event_t event.
             * @member {ICSVCMsg_GameEvent|null|undefined} event
             * @memberof CSVCMsgList_GameEvents.event_t
             * @instance
             */
            event_t.prototype.event = null;
    
            /**
             * Creates a new event_t instance using the specified properties.
             * @function create
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.Ievent_t=} [properties] Properties to set
             * @returns {CSVCMsgList_GameEvents.event_t} event_t instance
             */
            event_t.create = function create(properties) {
                return new event_t(properties);
            };
    
            /**
             * Encodes the specified event_t message. Does not implicitly {@link CSVCMsgList_GameEvents.event_t.verify|verify} messages.
             * @function encode
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.Ievent_t} message event_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            event_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tick != null && Object.hasOwnProperty.call(message, "tick"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tick);
                if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                    $root.CSVCMsg_GameEvent.encode(message.event, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified event_t message, length delimited. Does not implicitly {@link CSVCMsgList_GameEvents.event_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.Ievent_t} message event_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            event_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an event_t message from the specified reader or buffer.
             * @function decode
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CSVCMsgList_GameEvents.event_t} event_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            event_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsgList_GameEvents.event_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.tick = reader.int32();
                            break;
                        }
                    case 2: {
                            message.event = $root.CSVCMsg_GameEvent.decode(reader, reader.uint32());
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
             * Decodes an event_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CSVCMsgList_GameEvents.event_t} event_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            event_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an event_t message.
             * @function verify
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            event_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tick != null && message.hasOwnProperty("tick"))
                    if (!$util.isInteger(message.tick))
                        return "tick: integer expected";
                if (message.event != null && message.hasOwnProperty("event")) {
                    var error = $root.CSVCMsg_GameEvent.verify(message.event);
                    if (error)
                        return "event." + error;
                }
                return null;
            };
    
            /**
             * Creates an event_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CSVCMsgList_GameEvents.event_t} event_t
             */
            event_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CSVCMsgList_GameEvents.event_t)
                    return object;
                var message = new $root.CSVCMsgList_GameEvents.event_t();
                if (object.tick != null)
                    message.tick = object.tick | 0;
                if (object.event != null) {
                    if (typeof object.event !== "object")
                        throw TypeError(".CSVCMsgList_GameEvents.event_t.event: object expected");
                    message.event = $root.CSVCMsg_GameEvent.fromObject(object.event);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an event_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {CSVCMsgList_GameEvents.event_t} message event_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            event_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tick = 0;
                    object.event = null;
                }
                if (message.tick != null && message.hasOwnProperty("tick"))
                    object.tick = message.tick;
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = $root.CSVCMsg_GameEvent.toObject(message.event, options);
                return object;
            };
    
            /**
             * Converts this event_t to JSON.
             * @function toJSON
             * @memberof CSVCMsgList_GameEvents.event_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            event_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for event_t
             * @function getTypeUrl
             * @memberof CSVCMsgList_GameEvents.event_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            event_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CSVCMsgList_GameEvents.event_t";
            };
    
            return event_t;
        })();
    
        return CSVCMsgList_GameEvents;
    })();
    
    $root.CNETMsg_SpawnGroup_Load = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_Load.
         * @exports ICNETMsg_SpawnGroup_Load
         * @interface ICNETMsg_SpawnGroup_Load
         * @property {string|null} [worldname] CNETMsg_SpawnGroup_Load worldname
         * @property {string|null} [entitylumpname] CNETMsg_SpawnGroup_Load entitylumpname
         * @property {string|null} [entityfiltername] CNETMsg_SpawnGroup_Load entityfiltername
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_Load spawngrouphandle
         * @property {number|null} [spawngroupownerhandle] CNETMsg_SpawnGroup_Load spawngroupownerhandle
         * @property {ICMsgVector|null} [world_offset_pos] CNETMsg_SpawnGroup_Load world_offset_pos
         * @property {ICMsgQAngle|null} [world_offset_angle] CNETMsg_SpawnGroup_Load world_offset_angle
         * @property {Uint8Array|null} [spawngroupmanifest] CNETMsg_SpawnGroup_Load spawngroupmanifest
         * @property {number|null} [flags] CNETMsg_SpawnGroup_Load flags
         * @property {number|null} [tickcount] CNETMsg_SpawnGroup_Load tickcount
         * @property {boolean|null} [manifestincomplete] CNETMsg_SpawnGroup_Load manifestincomplete
         * @property {string|null} [localnamefixup] CNETMsg_SpawnGroup_Load localnamefixup
         * @property {string|null} [parentnamefixup] CNETMsg_SpawnGroup_Load parentnamefixup
         * @property {number|null} [manifestloadpriority] CNETMsg_SpawnGroup_Load manifestloadpriority
         * @property {number|null} [worldgroupid] CNETMsg_SpawnGroup_Load worldgroupid
         * @property {number|null} [creationsequence] CNETMsg_SpawnGroup_Load creationsequence
         * @property {string|null} [savegamefilename] CNETMsg_SpawnGroup_Load savegamefilename
         * @property {number|null} [spawngroupparenthandle] CNETMsg_SpawnGroup_Load spawngroupparenthandle
         * @property {boolean|null} [leveltransition] CNETMsg_SpawnGroup_Load leveltransition
         * @property {string|null} [worldgroupname] CNETMsg_SpawnGroup_Load worldgroupname
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_Load.
         * @exports CNETMsg_SpawnGroup_Load
         * @classdesc Represents a CNETMsg_SpawnGroup_Load.
         * @implements ICNETMsg_SpawnGroup_Load
         * @constructor
         * @param {ICNETMsg_SpawnGroup_Load=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_Load(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_Load worldname.
         * @member {string} worldname
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldname = "";
    
        /**
         * CNETMsg_SpawnGroup_Load entitylumpname.
         * @member {string} entitylumpname
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.entitylumpname = "";
    
        /**
         * CNETMsg_SpawnGroup_Load entityfiltername.
         * @member {string} entityfiltername
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.entityfiltername = "";
    
        /**
         * CNETMsg_SpawnGroup_Load spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load spawngroupownerhandle.
         * @member {number} spawngroupownerhandle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngroupownerhandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load world_offset_pos.
         * @member {ICMsgVector|null|undefined} world_offset_pos
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.world_offset_pos = null;
    
        /**
         * CNETMsg_SpawnGroup_Load world_offset_angle.
         * @member {ICMsgQAngle|null|undefined} world_offset_angle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.world_offset_angle = null;
    
        /**
         * CNETMsg_SpawnGroup_Load spawngroupmanifest.
         * @member {Uint8Array} spawngroupmanifest
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngroupmanifest = $util.newBuffer([]);
    
        /**
         * CNETMsg_SpawnGroup_Load flags.
         * @member {number} flags
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.flags = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load tickcount.
         * @member {number} tickcount
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.tickcount = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load manifestincomplete.
         * @member {boolean} manifestincomplete
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.manifestincomplete = false;
    
        /**
         * CNETMsg_SpawnGroup_Load localnamefixup.
         * @member {string} localnamefixup
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.localnamefixup = "";
    
        /**
         * CNETMsg_SpawnGroup_Load parentnamefixup.
         * @member {string} parentnamefixup
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.parentnamefixup = "";
    
        /**
         * CNETMsg_SpawnGroup_Load manifestloadpriority.
         * @member {number} manifestloadpriority
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.manifestloadpriority = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load worldgroupid.
         * @member {number} worldgroupid
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldgroupid = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load creationsequence.
         * @member {number} creationsequence
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.creationsequence = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load savegamefilename.
         * @member {string} savegamefilename
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.savegamefilename = "";
    
        /**
         * CNETMsg_SpawnGroup_Load spawngroupparenthandle.
         * @member {number} spawngroupparenthandle
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.spawngroupparenthandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Load leveltransition.
         * @member {boolean} leveltransition
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.leveltransition = false;
    
        /**
         * CNETMsg_SpawnGroup_Load worldgroupname.
         * @member {string} worldgroupname
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         */
        CNETMsg_SpawnGroup_Load.prototype.worldgroupname = "";
    
        /**
         * Creates a new CNETMsg_SpawnGroup_Load instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {ICNETMsg_SpawnGroup_Load=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load instance
         */
        CNETMsg_SpawnGroup_Load.create = function create(properties) {
            return new CNETMsg_SpawnGroup_Load(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Load message. Does not implicitly {@link CNETMsg_SpawnGroup_Load.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {ICNETMsg_SpawnGroup_Load} message CNETMsg_SpawnGroup_Load message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Load.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.worldname != null && Object.hasOwnProperty.call(message, "worldname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.worldname);
            if (message.entitylumpname != null && Object.hasOwnProperty.call(message, "entitylumpname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.entitylumpname);
            if (message.entityfiltername != null && Object.hasOwnProperty.call(message, "entityfiltername"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.entityfiltername);
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.spawngrouphandle);
            if (message.spawngroupownerhandle != null && Object.hasOwnProperty.call(message, "spawngroupownerhandle"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.spawngroupownerhandle);
            if (message.world_offset_pos != null && Object.hasOwnProperty.call(message, "world_offset_pos"))
                $root.CMsgVector.encode(message.world_offset_pos, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.world_offset_angle != null && Object.hasOwnProperty.call(message, "world_offset_angle"))
                $root.CMsgQAngle.encode(message.world_offset_angle, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.spawngroupmanifest != null && Object.hasOwnProperty.call(message, "spawngroupmanifest"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.spawngroupmanifest);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.flags);
            if (message.tickcount != null && Object.hasOwnProperty.call(message, "tickcount"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.tickcount);
            if (message.manifestincomplete != null && Object.hasOwnProperty.call(message, "manifestincomplete"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.manifestincomplete);
            if (message.localnamefixup != null && Object.hasOwnProperty.call(message, "localnamefixup"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.localnamefixup);
            if (message.parentnamefixup != null && Object.hasOwnProperty.call(message, "parentnamefixup"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.parentnamefixup);
            if (message.manifestloadpriority != null && Object.hasOwnProperty.call(message, "manifestloadpriority"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.manifestloadpriority);
            if (message.worldgroupid != null && Object.hasOwnProperty.call(message, "worldgroupid"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.worldgroupid);
            if (message.creationsequence != null && Object.hasOwnProperty.call(message, "creationsequence"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.creationsequence);
            if (message.savegamefilename != null && Object.hasOwnProperty.call(message, "savegamefilename"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.savegamefilename);
            if (message.spawngroupparenthandle != null && Object.hasOwnProperty.call(message, "spawngroupparenthandle"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.spawngroupparenthandle);
            if (message.leveltransition != null && Object.hasOwnProperty.call(message, "leveltransition"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.leveltransition);
            if (message.worldgroupname != null && Object.hasOwnProperty.call(message, "worldgroupname"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.worldgroupname);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Load message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_Load.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {ICNETMsg_SpawnGroup_Load} message CNETMsg_SpawnGroup_Load message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Load.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_Load message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Load.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_Load();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.worldname = reader.string();
                        break;
                    }
                case 2: {
                        message.entitylumpname = reader.string();
                        break;
                    }
                case 3: {
                        message.entityfiltername = reader.string();
                        break;
                    }
                case 4: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 5: {
                        message.spawngroupownerhandle = reader.uint32();
                        break;
                    }
                case 6: {
                        message.world_offset_pos = $root.CMsgVector.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.world_offset_angle = $root.CMsgQAngle.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.spawngroupmanifest = reader.bytes();
                        break;
                    }
                case 9: {
                        message.flags = reader.uint32();
                        break;
                    }
                case 10: {
                        message.tickcount = reader.int32();
                        break;
                    }
                case 11: {
                        message.manifestincomplete = reader.bool();
                        break;
                    }
                case 12: {
                        message.localnamefixup = reader.string();
                        break;
                    }
                case 13: {
                        message.parentnamefixup = reader.string();
                        break;
                    }
                case 14: {
                        message.manifestloadpriority = reader.int32();
                        break;
                    }
                case 15: {
                        message.worldgroupid = reader.uint32();
                        break;
                    }
                case 16: {
                        message.creationsequence = reader.uint32();
                        break;
                    }
                case 17: {
                        message.savegamefilename = reader.string();
                        break;
                    }
                case 18: {
                        message.spawngroupparenthandle = reader.uint32();
                        break;
                    }
                case 19: {
                        message.leveltransition = reader.bool();
                        break;
                    }
                case 20: {
                        message.worldgroupname = reader.string();
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
         * Decodes a CNETMsg_SpawnGroup_Load message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Load.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_Load message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_Load.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.worldname != null && message.hasOwnProperty("worldname"))
                if (!$util.isString(message.worldname))
                    return "worldname: string expected";
            if (message.entitylumpname != null && message.hasOwnProperty("entitylumpname"))
                if (!$util.isString(message.entitylumpname))
                    return "entitylumpname: string expected";
            if (message.entityfiltername != null && message.hasOwnProperty("entityfiltername"))
                if (!$util.isString(message.entityfiltername))
                    return "entityfiltername: string expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.spawngroupownerhandle != null && message.hasOwnProperty("spawngroupownerhandle"))
                if (!$util.isInteger(message.spawngroupownerhandle))
                    return "spawngroupownerhandle: integer expected";
            if (message.world_offset_pos != null && message.hasOwnProperty("world_offset_pos")) {
                var error = $root.CMsgVector.verify(message.world_offset_pos);
                if (error)
                    return "world_offset_pos." + error;
            }
            if (message.world_offset_angle != null && message.hasOwnProperty("world_offset_angle")) {
                var error = $root.CMsgQAngle.verify(message.world_offset_angle);
                if (error)
                    return "world_offset_angle." + error;
            }
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                if (!(message.spawngroupmanifest && typeof message.spawngroupmanifest.length === "number" || $util.isString(message.spawngroupmanifest)))
                    return "spawngroupmanifest: buffer expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                if (!$util.isInteger(message.tickcount))
                    return "tickcount: integer expected";
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                if (typeof message.manifestincomplete !== "boolean")
                    return "manifestincomplete: boolean expected";
            if (message.localnamefixup != null && message.hasOwnProperty("localnamefixup"))
                if (!$util.isString(message.localnamefixup))
                    return "localnamefixup: string expected";
            if (message.parentnamefixup != null && message.hasOwnProperty("parentnamefixup"))
                if (!$util.isString(message.parentnamefixup))
                    return "parentnamefixup: string expected";
            if (message.manifestloadpriority != null && message.hasOwnProperty("manifestloadpriority"))
                if (!$util.isInteger(message.manifestloadpriority))
                    return "manifestloadpriority: integer expected";
            if (message.worldgroupid != null && message.hasOwnProperty("worldgroupid"))
                if (!$util.isInteger(message.worldgroupid))
                    return "worldgroupid: integer expected";
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                if (!$util.isInteger(message.creationsequence))
                    return "creationsequence: integer expected";
            if (message.savegamefilename != null && message.hasOwnProperty("savegamefilename"))
                if (!$util.isString(message.savegamefilename))
                    return "savegamefilename: string expected";
            if (message.spawngroupparenthandle != null && message.hasOwnProperty("spawngroupparenthandle"))
                if (!$util.isInteger(message.spawngroupparenthandle))
                    return "spawngroupparenthandle: integer expected";
            if (message.leveltransition != null && message.hasOwnProperty("leveltransition"))
                if (typeof message.leveltransition !== "boolean")
                    return "leveltransition: boolean expected";
            if (message.worldgroupname != null && message.hasOwnProperty("worldgroupname"))
                if (!$util.isString(message.worldgroupname))
                    return "worldgroupname: string expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_Load message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_Load} CNETMsg_SpawnGroup_Load
         */
        CNETMsg_SpawnGroup_Load.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_Load)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_Load();
            if (object.worldname != null)
                message.worldname = String(object.worldname);
            if (object.entitylumpname != null)
                message.entitylumpname = String(object.entitylumpname);
            if (object.entityfiltername != null)
                message.entityfiltername = String(object.entityfiltername);
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.spawngroupownerhandle != null)
                message.spawngroupownerhandle = object.spawngroupownerhandle >>> 0;
            if (object.world_offset_pos != null) {
                if (typeof object.world_offset_pos !== "object")
                    throw TypeError(".CNETMsg_SpawnGroup_Load.world_offset_pos: object expected");
                message.world_offset_pos = $root.CMsgVector.fromObject(object.world_offset_pos);
            }
            if (object.world_offset_angle != null) {
                if (typeof object.world_offset_angle !== "object")
                    throw TypeError(".CNETMsg_SpawnGroup_Load.world_offset_angle: object expected");
                message.world_offset_angle = $root.CMsgQAngle.fromObject(object.world_offset_angle);
            }
            if (object.spawngroupmanifest != null)
                if (typeof object.spawngroupmanifest === "string")
                    $util.base64.decode(object.spawngroupmanifest, message.spawngroupmanifest = $util.newBuffer($util.base64.length(object.spawngroupmanifest)), 0);
                else if (object.spawngroupmanifest.length >= 0)
                    message.spawngroupmanifest = object.spawngroupmanifest;
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.tickcount != null)
                message.tickcount = object.tickcount | 0;
            if (object.manifestincomplete != null)
                message.manifestincomplete = Boolean(object.manifestincomplete);
            if (object.localnamefixup != null)
                message.localnamefixup = String(object.localnamefixup);
            if (object.parentnamefixup != null)
                message.parentnamefixup = String(object.parentnamefixup);
            if (object.manifestloadpriority != null)
                message.manifestloadpriority = object.manifestloadpriority | 0;
            if (object.worldgroupid != null)
                message.worldgroupid = object.worldgroupid >>> 0;
            if (object.creationsequence != null)
                message.creationsequence = object.creationsequence >>> 0;
            if (object.savegamefilename != null)
                message.savegamefilename = String(object.savegamefilename);
            if (object.spawngroupparenthandle != null)
                message.spawngroupparenthandle = object.spawngroupparenthandle >>> 0;
            if (object.leveltransition != null)
                message.leveltransition = Boolean(object.leveltransition);
            if (object.worldgroupname != null)
                message.worldgroupname = String(object.worldgroupname);
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_Load message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {CNETMsg_SpawnGroup_Load} message CNETMsg_SpawnGroup_Load
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_Load.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.worldname = "";
                object.entitylumpname = "";
                object.entityfiltername = "";
                object.spawngrouphandle = 0;
                object.spawngroupownerhandle = 0;
                object.world_offset_pos = null;
                object.world_offset_angle = null;
                if (options.bytes === String)
                    object.spawngroupmanifest = "";
                else {
                    object.spawngroupmanifest = [];
                    if (options.bytes !== Array)
                        object.spawngroupmanifest = $util.newBuffer(object.spawngroupmanifest);
                }
                object.flags = 0;
                object.tickcount = 0;
                object.manifestincomplete = false;
                object.localnamefixup = "";
                object.parentnamefixup = "";
                object.manifestloadpriority = 0;
                object.worldgroupid = 0;
                object.creationsequence = 0;
                object.savegamefilename = "";
                object.spawngroupparenthandle = 0;
                object.leveltransition = false;
                object.worldgroupname = "";
            }
            if (message.worldname != null && message.hasOwnProperty("worldname"))
                object.worldname = message.worldname;
            if (message.entitylumpname != null && message.hasOwnProperty("entitylumpname"))
                object.entitylumpname = message.entitylumpname;
            if (message.entityfiltername != null && message.hasOwnProperty("entityfiltername"))
                object.entityfiltername = message.entityfiltername;
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.spawngroupownerhandle != null && message.hasOwnProperty("spawngroupownerhandle"))
                object.spawngroupownerhandle = message.spawngroupownerhandle;
            if (message.world_offset_pos != null && message.hasOwnProperty("world_offset_pos"))
                object.world_offset_pos = $root.CMsgVector.toObject(message.world_offset_pos, options);
            if (message.world_offset_angle != null && message.hasOwnProperty("world_offset_angle"))
                object.world_offset_angle = $root.CMsgQAngle.toObject(message.world_offset_angle, options);
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                object.spawngroupmanifest = options.bytes === String ? $util.base64.encode(message.spawngroupmanifest, 0, message.spawngroupmanifest.length) : options.bytes === Array ? Array.prototype.slice.call(message.spawngroupmanifest) : message.spawngroupmanifest;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                object.tickcount = message.tickcount;
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                object.manifestincomplete = message.manifestincomplete;
            if (message.localnamefixup != null && message.hasOwnProperty("localnamefixup"))
                object.localnamefixup = message.localnamefixup;
            if (message.parentnamefixup != null && message.hasOwnProperty("parentnamefixup"))
                object.parentnamefixup = message.parentnamefixup;
            if (message.manifestloadpriority != null && message.hasOwnProperty("manifestloadpriority"))
                object.manifestloadpriority = message.manifestloadpriority;
            if (message.worldgroupid != null && message.hasOwnProperty("worldgroupid"))
                object.worldgroupid = message.worldgroupid;
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                object.creationsequence = message.creationsequence;
            if (message.savegamefilename != null && message.hasOwnProperty("savegamefilename"))
                object.savegamefilename = message.savegamefilename;
            if (message.spawngroupparenthandle != null && message.hasOwnProperty("spawngroupparenthandle"))
                object.spawngroupparenthandle = message.spawngroupparenthandle;
            if (message.leveltransition != null && message.hasOwnProperty("leveltransition"))
                object.leveltransition = message.leveltransition;
            if (message.worldgroupname != null && message.hasOwnProperty("worldgroupname"))
                object.worldgroupname = message.worldgroupname;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_Load to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_Load
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_Load.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_Load
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_Load
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_Load.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_Load";
        };
    
        return CNETMsg_SpawnGroup_Load;
    })();
    
    $root.CNETMsg_SpawnGroup_ManifestUpdate = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_ManifestUpdate.
         * @exports ICNETMsg_SpawnGroup_ManifestUpdate
         * @interface ICNETMsg_SpawnGroup_ManifestUpdate
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_ManifestUpdate spawngrouphandle
         * @property {Uint8Array|null} [spawngroupmanifest] CNETMsg_SpawnGroup_ManifestUpdate spawngroupmanifest
         * @property {boolean|null} [manifestincomplete] CNETMsg_SpawnGroup_ManifestUpdate manifestincomplete
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_ManifestUpdate.
         * @exports CNETMsg_SpawnGroup_ManifestUpdate
         * @classdesc Represents a CNETMsg_SpawnGroup_ManifestUpdate.
         * @implements ICNETMsg_SpawnGroup_ManifestUpdate
         * @constructor
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_ManifestUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_ManifestUpdate spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_ManifestUpdate spawngroupmanifest.
         * @member {Uint8Array} spawngroupmanifest
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.spawngroupmanifest = $util.newBuffer([]);
    
        /**
         * CNETMsg_SpawnGroup_ManifestUpdate manifestincomplete.
         * @member {boolean} manifestincomplete
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.manifestincomplete = false;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_ManifestUpdate instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate instance
         */
        CNETMsg_SpawnGroup_ManifestUpdate.create = function create(properties) {
            return new CNETMsg_SpawnGroup_ManifestUpdate(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_ManifestUpdate message. Does not implicitly {@link CNETMsg_SpawnGroup_ManifestUpdate.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate} message CNETMsg_SpawnGroup_ManifestUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_ManifestUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            if (message.spawngroupmanifest != null && Object.hasOwnProperty.call(message, "spawngroupmanifest"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.spawngroupmanifest);
            if (message.manifestincomplete != null && Object.hasOwnProperty.call(message, "manifestincomplete"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.manifestincomplete);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_ManifestUpdate message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_ManifestUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {ICNETMsg_SpawnGroup_ManifestUpdate} message CNETMsg_SpawnGroup_ManifestUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_ManifestUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_ManifestUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_ManifestUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_ManifestUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 2: {
                        message.spawngroupmanifest = reader.bytes();
                        break;
                    }
                case 3: {
                        message.manifestincomplete = reader.bool();
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
         * Decodes a CNETMsg_SpawnGroup_ManifestUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_ManifestUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_ManifestUpdate message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_ManifestUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                if (!(message.spawngroupmanifest && typeof message.spawngroupmanifest.length === "number" || $util.isString(message.spawngroupmanifest)))
                    return "spawngroupmanifest: buffer expected";
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                if (typeof message.manifestincomplete !== "boolean")
                    return "manifestincomplete: boolean expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_ManifestUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_ManifestUpdate} CNETMsg_SpawnGroup_ManifestUpdate
         */
        CNETMsg_SpawnGroup_ManifestUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_ManifestUpdate)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_ManifestUpdate();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.spawngroupmanifest != null)
                if (typeof object.spawngroupmanifest === "string")
                    $util.base64.decode(object.spawngroupmanifest, message.spawngroupmanifest = $util.newBuffer($util.base64.length(object.spawngroupmanifest)), 0);
                else if (object.spawngroupmanifest.length >= 0)
                    message.spawngroupmanifest = object.spawngroupmanifest;
            if (object.manifestincomplete != null)
                message.manifestincomplete = Boolean(object.manifestincomplete);
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_ManifestUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {CNETMsg_SpawnGroup_ManifestUpdate} message CNETMsg_SpawnGroup_ManifestUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_ManifestUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.spawngrouphandle = 0;
                if (options.bytes === String)
                    object.spawngroupmanifest = "";
                else {
                    object.spawngroupmanifest = [];
                    if (options.bytes !== Array)
                        object.spawngroupmanifest = $util.newBuffer(object.spawngroupmanifest);
                }
                object.manifestincomplete = false;
            }
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.spawngroupmanifest != null && message.hasOwnProperty("spawngroupmanifest"))
                object.spawngroupmanifest = options.bytes === String ? $util.base64.encode(message.spawngroupmanifest, 0, message.spawngroupmanifest.length) : options.bytes === Array ? Array.prototype.slice.call(message.spawngroupmanifest) : message.spawngroupmanifest;
            if (message.manifestincomplete != null && message.hasOwnProperty("manifestincomplete"))
                object.manifestincomplete = message.manifestincomplete;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_ManifestUpdate to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_ManifestUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_ManifestUpdate
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_ManifestUpdate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_ManifestUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_ManifestUpdate";
        };
    
        return CNETMsg_SpawnGroup_ManifestUpdate;
    })();
    
    $root.CNETMsg_SpawnGroup_SetCreationTick = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_SetCreationTick.
         * @exports ICNETMsg_SpawnGroup_SetCreationTick
         * @interface ICNETMsg_SpawnGroup_SetCreationTick
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_SetCreationTick spawngrouphandle
         * @property {number|null} [tickcount] CNETMsg_SpawnGroup_SetCreationTick tickcount
         * @property {number|null} [creationsequence] CNETMsg_SpawnGroup_SetCreationTick creationsequence
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_SetCreationTick.
         * @exports CNETMsg_SpawnGroup_SetCreationTick
         * @classdesc Represents a CNETMsg_SpawnGroup_SetCreationTick.
         * @implements ICNETMsg_SpawnGroup_SetCreationTick
         * @constructor
         * @param {ICNETMsg_SpawnGroup_SetCreationTick=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_SetCreationTick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_SetCreationTick spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_SetCreationTick tickcount.
         * @member {number} tickcount
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.tickcount = 0;
    
        /**
         * CNETMsg_SpawnGroup_SetCreationTick creationsequence.
         * @member {number} creationsequence
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.creationsequence = 0;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_SetCreationTick instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {ICNETMsg_SpawnGroup_SetCreationTick=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick instance
         */
        CNETMsg_SpawnGroup_SetCreationTick.create = function create(properties) {
            return new CNETMsg_SpawnGroup_SetCreationTick(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_SetCreationTick message. Does not implicitly {@link CNETMsg_SpawnGroup_SetCreationTick.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {ICNETMsg_SpawnGroup_SetCreationTick} message CNETMsg_SpawnGroup_SetCreationTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_SetCreationTick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            if (message.tickcount != null && Object.hasOwnProperty.call(message, "tickcount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tickcount);
            if (message.creationsequence != null && Object.hasOwnProperty.call(message, "creationsequence"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.creationsequence);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_SetCreationTick message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_SetCreationTick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {ICNETMsg_SpawnGroup_SetCreationTick} message CNETMsg_SpawnGroup_SetCreationTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_SetCreationTick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_SetCreationTick message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_SetCreationTick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_SetCreationTick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 2: {
                        message.tickcount = reader.int32();
                        break;
                    }
                case 3: {
                        message.creationsequence = reader.uint32();
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
         * Decodes a CNETMsg_SpawnGroup_SetCreationTick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_SetCreationTick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_SetCreationTick message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_SetCreationTick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                if (!$util.isInteger(message.tickcount))
                    return "tickcount: integer expected";
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                if (!$util.isInteger(message.creationsequence))
                    return "creationsequence: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_SetCreationTick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_SetCreationTick} CNETMsg_SpawnGroup_SetCreationTick
         */
        CNETMsg_SpawnGroup_SetCreationTick.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_SetCreationTick)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_SetCreationTick();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.tickcount != null)
                message.tickcount = object.tickcount | 0;
            if (object.creationsequence != null)
                message.creationsequence = object.creationsequence >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_SetCreationTick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {CNETMsg_SpawnGroup_SetCreationTick} message CNETMsg_SpawnGroup_SetCreationTick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_SetCreationTick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.spawngrouphandle = 0;
                object.tickcount = 0;
                object.creationsequence = 0;
            }
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                object.tickcount = message.tickcount;
            if (message.creationsequence != null && message.hasOwnProperty("creationsequence"))
                object.creationsequence = message.creationsequence;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_SetCreationTick to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_SetCreationTick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_SetCreationTick
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_SetCreationTick
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_SetCreationTick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_SetCreationTick";
        };
    
        return CNETMsg_SpawnGroup_SetCreationTick;
    })();
    
    $root.CNETMsg_SpawnGroup_Unload = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_Unload.
         * @exports ICNETMsg_SpawnGroup_Unload
         * @interface ICNETMsg_SpawnGroup_Unload
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_Unload spawngrouphandle
         * @property {number|null} [flags] CNETMsg_SpawnGroup_Unload flags
         * @property {number|null} [tickcount] CNETMsg_SpawnGroup_Unload tickcount
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_Unload.
         * @exports CNETMsg_SpawnGroup_Unload
         * @classdesc Represents a CNETMsg_SpawnGroup_Unload.
         * @implements ICNETMsg_SpawnGroup_Unload
         * @constructor
         * @param {ICNETMsg_SpawnGroup_Unload=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_Unload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_Unload spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         */
        CNETMsg_SpawnGroup_Unload.prototype.spawngrouphandle = 0;
    
        /**
         * CNETMsg_SpawnGroup_Unload flags.
         * @member {number} flags
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         */
        CNETMsg_SpawnGroup_Unload.prototype.flags = 0;
    
        /**
         * CNETMsg_SpawnGroup_Unload tickcount.
         * @member {number} tickcount
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         */
        CNETMsg_SpawnGroup_Unload.prototype.tickcount = 0;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_Unload instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {ICNETMsg_SpawnGroup_Unload=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload instance
         */
        CNETMsg_SpawnGroup_Unload.create = function create(properties) {
            return new CNETMsg_SpawnGroup_Unload(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Unload message. Does not implicitly {@link CNETMsg_SpawnGroup_Unload.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {ICNETMsg_SpawnGroup_Unload} message CNETMsg_SpawnGroup_Unload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Unload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.flags);
            if (message.tickcount != null && Object.hasOwnProperty.call(message, "tickcount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tickcount);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_Unload message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_Unload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {ICNETMsg_SpawnGroup_Unload} message CNETMsg_SpawnGroup_Unload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_Unload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_Unload message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Unload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_Unload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
                        break;
                    }
                case 2: {
                        message.flags = reader.uint32();
                        break;
                    }
                case 3: {
                        message.tickcount = reader.int32();
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
         * Decodes a CNETMsg_SpawnGroup_Unload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_Unload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_Unload message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_Unload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                if (!$util.isInteger(message.tickcount))
                    return "tickcount: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_Unload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_Unload} CNETMsg_SpawnGroup_Unload
         */
        CNETMsg_SpawnGroup_Unload.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_Unload)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_Unload();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.tickcount != null)
                message.tickcount = object.tickcount | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_Unload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {CNETMsg_SpawnGroup_Unload} message CNETMsg_SpawnGroup_Unload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_Unload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.spawngrouphandle = 0;
                object.flags = 0;
                object.tickcount = 0;
            }
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.tickcount != null && message.hasOwnProperty("tickcount"))
                object.tickcount = message.tickcount;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_Unload to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_Unload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_Unload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_Unload
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_Unload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_Unload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_Unload";
        };
    
        return CNETMsg_SpawnGroup_Unload;
    })();
    
    $root.CNETMsg_SpawnGroup_LoadCompleted = (function() {
    
        /**
         * Properties of a CNETMsg_SpawnGroup_LoadCompleted.
         * @exports ICNETMsg_SpawnGroup_LoadCompleted
         * @interface ICNETMsg_SpawnGroup_LoadCompleted
         * @property {number|null} [spawngrouphandle] CNETMsg_SpawnGroup_LoadCompleted spawngrouphandle
         */
    
        /**
         * Constructs a new CNETMsg_SpawnGroup_LoadCompleted.
         * @exports CNETMsg_SpawnGroup_LoadCompleted
         * @classdesc Represents a CNETMsg_SpawnGroup_LoadCompleted.
         * @implements ICNETMsg_SpawnGroup_LoadCompleted
         * @constructor
         * @param {ICNETMsg_SpawnGroup_LoadCompleted=} [properties] Properties to set
         */
        function CNETMsg_SpawnGroup_LoadCompleted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_SpawnGroup_LoadCompleted spawngrouphandle.
         * @member {number} spawngrouphandle
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @instance
         */
        CNETMsg_SpawnGroup_LoadCompleted.prototype.spawngrouphandle = 0;
    
        /**
         * Creates a new CNETMsg_SpawnGroup_LoadCompleted instance using the specified properties.
         * @function create
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {ICNETMsg_SpawnGroup_LoadCompleted=} [properties] Properties to set
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted instance
         */
        CNETMsg_SpawnGroup_LoadCompleted.create = function create(properties) {
            return new CNETMsg_SpawnGroup_LoadCompleted(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_LoadCompleted message. Does not implicitly {@link CNETMsg_SpawnGroup_LoadCompleted.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {ICNETMsg_SpawnGroup_LoadCompleted} message CNETMsg_SpawnGroup_LoadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_LoadCompleted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_SpawnGroup_LoadCompleted message, length delimited. Does not implicitly {@link CNETMsg_SpawnGroup_LoadCompleted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {ICNETMsg_SpawnGroup_LoadCompleted} message CNETMsg_SpawnGroup_LoadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_SpawnGroup_LoadCompleted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_SpawnGroup_LoadCompleted message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_LoadCompleted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_SpawnGroup_LoadCompleted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.spawngrouphandle = reader.uint32();
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
         * Decodes a CNETMsg_SpawnGroup_LoadCompleted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_SpawnGroup_LoadCompleted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_SpawnGroup_LoadCompleted message.
         * @function verify
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_SpawnGroup_LoadCompleted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                if (!$util.isInteger(message.spawngrouphandle))
                    return "spawngrouphandle: integer expected";
            return null;
        };
    
        /**
         * Creates a CNETMsg_SpawnGroup_LoadCompleted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_SpawnGroup_LoadCompleted} CNETMsg_SpawnGroup_LoadCompleted
         */
        CNETMsg_SpawnGroup_LoadCompleted.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_SpawnGroup_LoadCompleted)
                return object;
            var message = new $root.CNETMsg_SpawnGroup_LoadCompleted();
            if (object.spawngrouphandle != null)
                message.spawngrouphandle = object.spawngrouphandle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_SpawnGroup_LoadCompleted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {CNETMsg_SpawnGroup_LoadCompleted} message CNETMsg_SpawnGroup_LoadCompleted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_SpawnGroup_LoadCompleted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.spawngrouphandle = 0;
            if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                object.spawngrouphandle = message.spawngrouphandle;
            return object;
        };
    
        /**
         * Converts this CNETMsg_SpawnGroup_LoadCompleted to JSON.
         * @function toJSON
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_SpawnGroup_LoadCompleted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_SpawnGroup_LoadCompleted
         * @function getTypeUrl
         * @memberof CNETMsg_SpawnGroup_LoadCompleted
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_SpawnGroup_LoadCompleted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_SpawnGroup_LoadCompleted";
        };
    
        return CNETMsg_SpawnGroup_LoadCompleted;
    })();
    
    $root.CSVCMsg_GameSessionConfiguration = (function() {
    
        /**
         * Properties of a CSVCMsg_GameSessionConfiguration.
         * @exports ICSVCMsg_GameSessionConfiguration
         * @interface ICSVCMsg_GameSessionConfiguration
         * @property {boolean|null} [is_multiplayer] CSVCMsg_GameSessionConfiguration is_multiplayer
         * @property {boolean|null} [is_loadsavegame] CSVCMsg_GameSessionConfiguration is_loadsavegame
         * @property {boolean|null} [is_background_map] CSVCMsg_GameSessionConfiguration is_background_map
         * @property {boolean|null} [is_headless] CSVCMsg_GameSessionConfiguration is_headless
         * @property {number|null} [min_client_limit] CSVCMsg_GameSessionConfiguration min_client_limit
         * @property {number|null} [max_client_limit] CSVCMsg_GameSessionConfiguration max_client_limit
         * @property {number|null} [max_clients] CSVCMsg_GameSessionConfiguration max_clients
         * @property {number|null} [tick_interval] CSVCMsg_GameSessionConfiguration tick_interval
         * @property {string|null} [hostname] CSVCMsg_GameSessionConfiguration hostname
         * @property {string|null} [savegamename] CSVCMsg_GameSessionConfiguration savegamename
         * @property {string|null} [s1_mapname] CSVCMsg_GameSessionConfiguration s1_mapname
         * @property {string|null} [gamemode] CSVCMsg_GameSessionConfiguration gamemode
         * @property {string|null} [server_ip_address] CSVCMsg_GameSessionConfiguration server_ip_address
         * @property {Uint8Array|null} [data] CSVCMsg_GameSessionConfiguration data
         * @property {boolean|null} [is_localonly] CSVCMsg_GameSessionConfiguration is_localonly
         * @property {boolean|null} [no_steam_server] CSVCMsg_GameSessionConfiguration no_steam_server
         * @property {boolean|null} [is_transition] CSVCMsg_GameSessionConfiguration is_transition
         * @property {string|null} [previouslevel] CSVCMsg_GameSessionConfiguration previouslevel
         * @property {string|null} [landmarkname] CSVCMsg_GameSessionConfiguration landmarkname
         */
    
        /**
         * Constructs a new CSVCMsg_GameSessionConfiguration.
         * @exports CSVCMsg_GameSessionConfiguration
         * @classdesc Represents a CSVCMsg_GameSessionConfiguration.
         * @implements ICSVCMsg_GameSessionConfiguration
         * @constructor
         * @param {ICSVCMsg_GameSessionConfiguration=} [properties] Properties to set
         */
        function CSVCMsg_GameSessionConfiguration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSVCMsg_GameSessionConfiguration is_multiplayer.
         * @member {boolean} is_multiplayer
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.is_multiplayer = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration is_loadsavegame.
         * @member {boolean} is_loadsavegame
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.is_loadsavegame = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration is_background_map.
         * @member {boolean} is_background_map
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.is_background_map = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration is_headless.
         * @member {boolean} is_headless
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.is_headless = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration min_client_limit.
         * @member {number} min_client_limit
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.min_client_limit = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration max_client_limit.
         * @member {number} max_client_limit
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.max_client_limit = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration max_clients.
         * @member {number} max_clients
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.max_clients = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration tick_interval.
         * @member {number} tick_interval
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.tick_interval = 0;
    
        /**
         * CSVCMsg_GameSessionConfiguration hostname.
         * @member {string} hostname
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.hostname = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration savegamename.
         * @member {string} savegamename
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.savegamename = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration s1_mapname.
         * @member {string} s1_mapname
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.s1_mapname = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration gamemode.
         * @member {string} gamemode
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.gamemode = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration server_ip_address.
         * @member {string} server_ip_address
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.server_ip_address = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration data.
         * @member {Uint8Array} data
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.data = $util.newBuffer([]);
    
        /**
         * CSVCMsg_GameSessionConfiguration is_localonly.
         * @member {boolean} is_localonly
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.is_localonly = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration no_steam_server.
         * @member {boolean} no_steam_server
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.no_steam_server = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration is_transition.
         * @member {boolean} is_transition
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.is_transition = false;
    
        /**
         * CSVCMsg_GameSessionConfiguration previouslevel.
         * @member {string} previouslevel
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.previouslevel = "";
    
        /**
         * CSVCMsg_GameSessionConfiguration landmarkname.
         * @member {string} landmarkname
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         */
        CSVCMsg_GameSessionConfiguration.prototype.landmarkname = "";
    
        /**
         * Creates a new CSVCMsg_GameSessionConfiguration instance using the specified properties.
         * @function create
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {ICSVCMsg_GameSessionConfiguration=} [properties] Properties to set
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration instance
         */
        CSVCMsg_GameSessionConfiguration.create = function create(properties) {
            return new CSVCMsg_GameSessionConfiguration(properties);
        };
    
        /**
         * Encodes the specified CSVCMsg_GameSessionConfiguration message. Does not implicitly {@link CSVCMsg_GameSessionConfiguration.verify|verify} messages.
         * @function encode
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {ICSVCMsg_GameSessionConfiguration} message CSVCMsg_GameSessionConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameSessionConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.is_multiplayer != null && Object.hasOwnProperty.call(message, "is_multiplayer"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.is_multiplayer);
            if (message.is_loadsavegame != null && Object.hasOwnProperty.call(message, "is_loadsavegame"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_loadsavegame);
            if (message.is_background_map != null && Object.hasOwnProperty.call(message, "is_background_map"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_background_map);
            if (message.is_headless != null && Object.hasOwnProperty.call(message, "is_headless"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.is_headless);
            if (message.min_client_limit != null && Object.hasOwnProperty.call(message, "min_client_limit"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.min_client_limit);
            if (message.max_client_limit != null && Object.hasOwnProperty.call(message, "max_client_limit"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.max_client_limit);
            if (message.max_clients != null && Object.hasOwnProperty.call(message, "max_clients"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.max_clients);
            if (message.tick_interval != null && Object.hasOwnProperty.call(message, "tick_interval"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.tick_interval);
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.hostname);
            if (message.savegamename != null && Object.hasOwnProperty.call(message, "savegamename"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.savegamename);
            if (message.s1_mapname != null && Object.hasOwnProperty.call(message, "s1_mapname"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.s1_mapname);
            if (message.gamemode != null && Object.hasOwnProperty.call(message, "gamemode"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.gamemode);
            if (message.server_ip_address != null && Object.hasOwnProperty.call(message, "server_ip_address"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.server_ip_address);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.data);
            if (message.is_localonly != null && Object.hasOwnProperty.call(message, "is_localonly"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.is_localonly);
            if (message.is_transition != null && Object.hasOwnProperty.call(message, "is_transition"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.is_transition);
            if (message.previouslevel != null && Object.hasOwnProperty.call(message, "previouslevel"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.previouslevel);
            if (message.landmarkname != null && Object.hasOwnProperty.call(message, "landmarkname"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.landmarkname);
            if (message.no_steam_server != null && Object.hasOwnProperty.call(message, "no_steam_server"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.no_steam_server);
            return writer;
        };
    
        /**
         * Encodes the specified CSVCMsg_GameSessionConfiguration message, length delimited. Does not implicitly {@link CSVCMsg_GameSessionConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {ICSVCMsg_GameSessionConfiguration} message CSVCMsg_GameSessionConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSVCMsg_GameSessionConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSVCMsg_GameSessionConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameSessionConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSVCMsg_GameSessionConfiguration();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.is_multiplayer = reader.bool();
                        break;
                    }
                case 2: {
                        message.is_loadsavegame = reader.bool();
                        break;
                    }
                case 3: {
                        message.is_background_map = reader.bool();
                        break;
                    }
                case 4: {
                        message.is_headless = reader.bool();
                        break;
                    }
                case 5: {
                        message.min_client_limit = reader.uint32();
                        break;
                    }
                case 6: {
                        message.max_client_limit = reader.uint32();
                        break;
                    }
                case 7: {
                        message.max_clients = reader.uint32();
                        break;
                    }
                case 8: {
                        message.tick_interval = reader.fixed32();
                        break;
                    }
                case 9: {
                        message.hostname = reader.string();
                        break;
                    }
                case 10: {
                        message.savegamename = reader.string();
                        break;
                    }
                case 11: {
                        message.s1_mapname = reader.string();
                        break;
                    }
                case 12: {
                        message.gamemode = reader.string();
                        break;
                    }
                case 13: {
                        message.server_ip_address = reader.string();
                        break;
                    }
                case 14: {
                        message.data = reader.bytes();
                        break;
                    }
                case 15: {
                        message.is_localonly = reader.bool();
                        break;
                    }
                case 19: {
                        message.no_steam_server = reader.bool();
                        break;
                    }
                case 16: {
                        message.is_transition = reader.bool();
                        break;
                    }
                case 17: {
                        message.previouslevel = reader.string();
                        break;
                    }
                case 18: {
                        message.landmarkname = reader.string();
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
         * Decodes a CSVCMsg_GameSessionConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSVCMsg_GameSessionConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSVCMsg_GameSessionConfiguration message.
         * @function verify
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSVCMsg_GameSessionConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.is_multiplayer != null && message.hasOwnProperty("is_multiplayer"))
                if (typeof message.is_multiplayer !== "boolean")
                    return "is_multiplayer: boolean expected";
            if (message.is_loadsavegame != null && message.hasOwnProperty("is_loadsavegame"))
                if (typeof message.is_loadsavegame !== "boolean")
                    return "is_loadsavegame: boolean expected";
            if (message.is_background_map != null && message.hasOwnProperty("is_background_map"))
                if (typeof message.is_background_map !== "boolean")
                    return "is_background_map: boolean expected";
            if (message.is_headless != null && message.hasOwnProperty("is_headless"))
                if (typeof message.is_headless !== "boolean")
                    return "is_headless: boolean expected";
            if (message.min_client_limit != null && message.hasOwnProperty("min_client_limit"))
                if (!$util.isInteger(message.min_client_limit))
                    return "min_client_limit: integer expected";
            if (message.max_client_limit != null && message.hasOwnProperty("max_client_limit"))
                if (!$util.isInteger(message.max_client_limit))
                    return "max_client_limit: integer expected";
            if (message.max_clients != null && message.hasOwnProperty("max_clients"))
                if (!$util.isInteger(message.max_clients))
                    return "max_clients: integer expected";
            if (message.tick_interval != null && message.hasOwnProperty("tick_interval"))
                if (!$util.isInteger(message.tick_interval))
                    return "tick_interval: integer expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            if (message.savegamename != null && message.hasOwnProperty("savegamename"))
                if (!$util.isString(message.savegamename))
                    return "savegamename: string expected";
            if (message.s1_mapname != null && message.hasOwnProperty("s1_mapname"))
                if (!$util.isString(message.s1_mapname))
                    return "s1_mapname: string expected";
            if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                if (!$util.isString(message.gamemode))
                    return "gamemode: string expected";
            if (message.server_ip_address != null && message.hasOwnProperty("server_ip_address"))
                if (!$util.isString(message.server_ip_address))
                    return "server_ip_address: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.is_localonly != null && message.hasOwnProperty("is_localonly"))
                if (typeof message.is_localonly !== "boolean")
                    return "is_localonly: boolean expected";
            if (message.no_steam_server != null && message.hasOwnProperty("no_steam_server"))
                if (typeof message.no_steam_server !== "boolean")
                    return "no_steam_server: boolean expected";
            if (message.is_transition != null && message.hasOwnProperty("is_transition"))
                if (typeof message.is_transition !== "boolean")
                    return "is_transition: boolean expected";
            if (message.previouslevel != null && message.hasOwnProperty("previouslevel"))
                if (!$util.isString(message.previouslevel))
                    return "previouslevel: string expected";
            if (message.landmarkname != null && message.hasOwnProperty("landmarkname"))
                if (!$util.isString(message.landmarkname))
                    return "landmarkname: string expected";
            return null;
        };
    
        /**
         * Creates a CSVCMsg_GameSessionConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSVCMsg_GameSessionConfiguration} CSVCMsg_GameSessionConfiguration
         */
        CSVCMsg_GameSessionConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.CSVCMsg_GameSessionConfiguration)
                return object;
            var message = new $root.CSVCMsg_GameSessionConfiguration();
            if (object.is_multiplayer != null)
                message.is_multiplayer = Boolean(object.is_multiplayer);
            if (object.is_loadsavegame != null)
                message.is_loadsavegame = Boolean(object.is_loadsavegame);
            if (object.is_background_map != null)
                message.is_background_map = Boolean(object.is_background_map);
            if (object.is_headless != null)
                message.is_headless = Boolean(object.is_headless);
            if (object.min_client_limit != null)
                message.min_client_limit = object.min_client_limit >>> 0;
            if (object.max_client_limit != null)
                message.max_client_limit = object.max_client_limit >>> 0;
            if (object.max_clients != null)
                message.max_clients = object.max_clients >>> 0;
            if (object.tick_interval != null)
                message.tick_interval = object.tick_interval >>> 0;
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.savegamename != null)
                message.savegamename = String(object.savegamename);
            if (object.s1_mapname != null)
                message.s1_mapname = String(object.s1_mapname);
            if (object.gamemode != null)
                message.gamemode = String(object.gamemode);
            if (object.server_ip_address != null)
                message.server_ip_address = String(object.server_ip_address);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.is_localonly != null)
                message.is_localonly = Boolean(object.is_localonly);
            if (object.no_steam_server != null)
                message.no_steam_server = Boolean(object.no_steam_server);
            if (object.is_transition != null)
                message.is_transition = Boolean(object.is_transition);
            if (object.previouslevel != null)
                message.previouslevel = String(object.previouslevel);
            if (object.landmarkname != null)
                message.landmarkname = String(object.landmarkname);
            return message;
        };
    
        /**
         * Creates a plain object from a CSVCMsg_GameSessionConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {CSVCMsg_GameSessionConfiguration} message CSVCMsg_GameSessionConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSVCMsg_GameSessionConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.is_multiplayer = false;
                object.is_loadsavegame = false;
                object.is_background_map = false;
                object.is_headless = false;
                object.min_client_limit = 0;
                object.max_client_limit = 0;
                object.max_clients = 0;
                object.tick_interval = 0;
                object.hostname = "";
                object.savegamename = "";
                object.s1_mapname = "";
                object.gamemode = "";
                object.server_ip_address = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.is_localonly = false;
                object.is_transition = false;
                object.previouslevel = "";
                object.landmarkname = "";
                object.no_steam_server = false;
            }
            if (message.is_multiplayer != null && message.hasOwnProperty("is_multiplayer"))
                object.is_multiplayer = message.is_multiplayer;
            if (message.is_loadsavegame != null && message.hasOwnProperty("is_loadsavegame"))
                object.is_loadsavegame = message.is_loadsavegame;
            if (message.is_background_map != null && message.hasOwnProperty("is_background_map"))
                object.is_background_map = message.is_background_map;
            if (message.is_headless != null && message.hasOwnProperty("is_headless"))
                object.is_headless = message.is_headless;
            if (message.min_client_limit != null && message.hasOwnProperty("min_client_limit"))
                object.min_client_limit = message.min_client_limit;
            if (message.max_client_limit != null && message.hasOwnProperty("max_client_limit"))
                object.max_client_limit = message.max_client_limit;
            if (message.max_clients != null && message.hasOwnProperty("max_clients"))
                object.max_clients = message.max_clients;
            if (message.tick_interval != null && message.hasOwnProperty("tick_interval"))
                object.tick_interval = message.tick_interval;
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.savegamename != null && message.hasOwnProperty("savegamename"))
                object.savegamename = message.savegamename;
            if (message.s1_mapname != null && message.hasOwnProperty("s1_mapname"))
                object.s1_mapname = message.s1_mapname;
            if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                object.gamemode = message.gamemode;
            if (message.server_ip_address != null && message.hasOwnProperty("server_ip_address"))
                object.server_ip_address = message.server_ip_address;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.is_localonly != null && message.hasOwnProperty("is_localonly"))
                object.is_localonly = message.is_localonly;
            if (message.is_transition != null && message.hasOwnProperty("is_transition"))
                object.is_transition = message.is_transition;
            if (message.previouslevel != null && message.hasOwnProperty("previouslevel"))
                object.previouslevel = message.previouslevel;
            if (message.landmarkname != null && message.hasOwnProperty("landmarkname"))
                object.landmarkname = message.landmarkname;
            if (message.no_steam_server != null && message.hasOwnProperty("no_steam_server"))
                object.no_steam_server = message.no_steam_server;
            return object;
        };
    
        /**
         * Converts this CSVCMsg_GameSessionConfiguration to JSON.
         * @function toJSON
         * @memberof CSVCMsg_GameSessionConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSVCMsg_GameSessionConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSVCMsg_GameSessionConfiguration
         * @function getTypeUrl
         * @memberof CSVCMsg_GameSessionConfiguration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSVCMsg_GameSessionConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSVCMsg_GameSessionConfiguration";
        };
    
        return CSVCMsg_GameSessionConfiguration;
    })();
    
    $root.CNETMsg_DebugOverlay = (function() {
    
        /**
         * Properties of a CNETMsg_DebugOverlay.
         * @exports ICNETMsg_DebugOverlay
         * @interface ICNETMsg_DebugOverlay
         * @property {number|null} [etype] CNETMsg_DebugOverlay etype
         * @property {Array.<ICMsgVector>|null} [vectors] CNETMsg_DebugOverlay vectors
         * @property {Array.<ICMsgRGBA>|null} [colors] CNETMsg_DebugOverlay colors
         * @property {Array.<number>|null} [dimensions] CNETMsg_DebugOverlay dimensions
         * @property {Array.<number>|null} [times] CNETMsg_DebugOverlay times
         * @property {Array.<boolean>|null} [bools] CNETMsg_DebugOverlay bools
         * @property {Array.<number|Long>|null} [uint64s] CNETMsg_DebugOverlay uint64s
         * @property {Array.<string>|null} [strings] CNETMsg_DebugOverlay strings
         */
    
        /**
         * Constructs a new CNETMsg_DebugOverlay.
         * @exports CNETMsg_DebugOverlay
         * @classdesc Represents a CNETMsg_DebugOverlay.
         * @implements ICNETMsg_DebugOverlay
         * @constructor
         * @param {ICNETMsg_DebugOverlay=} [properties] Properties to set
         */
        function CNETMsg_DebugOverlay(properties) {
            this.vectors = [];
            this.colors = [];
            this.dimensions = [];
            this.times = [];
            this.bools = [];
            this.uint64s = [];
            this.strings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNETMsg_DebugOverlay etype.
         * @member {number} etype
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.etype = 0;
    
        /**
         * CNETMsg_DebugOverlay vectors.
         * @member {Array.<ICMsgVector>} vectors
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.vectors = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay colors.
         * @member {Array.<ICMsgRGBA>} colors
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.colors = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay dimensions.
         * @member {Array.<number>} dimensions
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.dimensions = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay times.
         * @member {Array.<number>} times
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.times = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay bools.
         * @member {Array.<boolean>} bools
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.bools = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay uint64s.
         * @member {Array.<number|Long>} uint64s
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.uint64s = $util.emptyArray;
    
        /**
         * CNETMsg_DebugOverlay strings.
         * @member {Array.<string>} strings
         * @memberof CNETMsg_DebugOverlay
         * @instance
         */
        CNETMsg_DebugOverlay.prototype.strings = $util.emptyArray;
    
        /**
         * Creates a new CNETMsg_DebugOverlay instance using the specified properties.
         * @function create
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {ICNETMsg_DebugOverlay=} [properties] Properties to set
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay instance
         */
        CNETMsg_DebugOverlay.create = function create(properties) {
            return new CNETMsg_DebugOverlay(properties);
        };
    
        /**
         * Encodes the specified CNETMsg_DebugOverlay message. Does not implicitly {@link CNETMsg_DebugOverlay.verify|verify} messages.
         * @function encode
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {ICNETMsg_DebugOverlay} message CNETMsg_DebugOverlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_DebugOverlay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.etype != null && Object.hasOwnProperty.call(message, "etype"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.etype);
            if (message.vectors != null && message.vectors.length)
                for (var i = 0; i < message.vectors.length; ++i)
                    $root.CMsgVector.encode(message.vectors[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.colors != null && message.colors.length)
                for (var i = 0; i < message.colors.length; ++i)
                    $root.CMsgRGBA.encode(message.colors[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.dimensions != null && message.dimensions.length)
                for (var i = 0; i < message.dimensions.length; ++i)
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.dimensions[i]);
            if (message.times != null && message.times.length)
                for (var i = 0; i < message.times.length; ++i)
                    writer.uint32(/* id 5, wireType 5 =*/45).float(message.times[i]);
            if (message.bools != null && message.bools.length)
                for (var i = 0; i < message.bools.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.bools[i]);
            if (message.uint64s != null && message.uint64s.length)
                for (var i = 0; i < message.uint64s.length; ++i)
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.uint64s[i]);
            if (message.strings != null && message.strings.length)
                for (var i = 0; i < message.strings.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.strings[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CNETMsg_DebugOverlay message, length delimited. Does not implicitly {@link CNETMsg_DebugOverlay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {ICNETMsg_DebugOverlay} message CNETMsg_DebugOverlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNETMsg_DebugOverlay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNETMsg_DebugOverlay message from the specified reader or buffer.
         * @function decode
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_DebugOverlay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNETMsg_DebugOverlay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.etype = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.vectors && message.vectors.length))
                            message.vectors = [];
                        message.vectors.push($root.CMsgVector.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.colors && message.colors.length))
                            message.colors = [];
                        message.colors.push($root.CMsgRGBA.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.dimensions && message.dimensions.length))
                            message.dimensions = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dimensions.push(reader.float());
                        } else
                            message.dimensions.push(reader.float());
                        break;
                    }
                case 5: {
                        if (!(message.times && message.times.length))
                            message.times = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.times.push(reader.float());
                        } else
                            message.times.push(reader.float());
                        break;
                    }
                case 6: {
                        if (!(message.bools && message.bools.length))
                            message.bools = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bools.push(reader.bool());
                        } else
                            message.bools.push(reader.bool());
                        break;
                    }
                case 7: {
                        if (!(message.uint64s && message.uint64s.length))
                            message.uint64s = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.uint64s.push(reader.uint64());
                        } else
                            message.uint64s.push(reader.uint64());
                        break;
                    }
                case 8: {
                        if (!(message.strings && message.strings.length))
                            message.strings = [];
                        message.strings.push(reader.string());
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
         * Decodes a CNETMsg_DebugOverlay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNETMsg_DebugOverlay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNETMsg_DebugOverlay message.
         * @function verify
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNETMsg_DebugOverlay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.etype != null && message.hasOwnProperty("etype"))
                if (!$util.isInteger(message.etype))
                    return "etype: integer expected";
            if (message.vectors != null && message.hasOwnProperty("vectors")) {
                if (!Array.isArray(message.vectors))
                    return "vectors: array expected";
                for (var i = 0; i < message.vectors.length; ++i) {
                    var error = $root.CMsgVector.verify(message.vectors[i]);
                    if (error)
                        return "vectors." + error;
                }
            }
            if (message.colors != null && message.hasOwnProperty("colors")) {
                if (!Array.isArray(message.colors))
                    return "colors: array expected";
                for (var i = 0; i < message.colors.length; ++i) {
                    var error = $root.CMsgRGBA.verify(message.colors[i]);
                    if (error)
                        return "colors." + error;
                }
            }
            if (message.dimensions != null && message.hasOwnProperty("dimensions")) {
                if (!Array.isArray(message.dimensions))
                    return "dimensions: array expected";
                for (var i = 0; i < message.dimensions.length; ++i)
                    if (typeof message.dimensions[i] !== "number")
                        return "dimensions: number[] expected";
            }
            if (message.times != null && message.hasOwnProperty("times")) {
                if (!Array.isArray(message.times))
                    return "times: array expected";
                for (var i = 0; i < message.times.length; ++i)
                    if (typeof message.times[i] !== "number")
                        return "times: number[] expected";
            }
            if (message.bools != null && message.hasOwnProperty("bools")) {
                if (!Array.isArray(message.bools))
                    return "bools: array expected";
                for (var i = 0; i < message.bools.length; ++i)
                    if (typeof message.bools[i] !== "boolean")
                        return "bools: boolean[] expected";
            }
            if (message.uint64s != null && message.hasOwnProperty("uint64s")) {
                if (!Array.isArray(message.uint64s))
                    return "uint64s: array expected";
                for (var i = 0; i < message.uint64s.length; ++i)
                    if (!$util.isInteger(message.uint64s[i]) && !(message.uint64s[i] && $util.isInteger(message.uint64s[i].low) && $util.isInteger(message.uint64s[i].high)))
                        return "uint64s: integer|Long[] expected";
            }
            if (message.strings != null && message.hasOwnProperty("strings")) {
                if (!Array.isArray(message.strings))
                    return "strings: array expected";
                for (var i = 0; i < message.strings.length; ++i)
                    if (!$util.isString(message.strings[i]))
                        return "strings: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CNETMsg_DebugOverlay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNETMsg_DebugOverlay} CNETMsg_DebugOverlay
         */
        CNETMsg_DebugOverlay.fromObject = function fromObject(object) {
            if (object instanceof $root.CNETMsg_DebugOverlay)
                return object;
            var message = new $root.CNETMsg_DebugOverlay();
            if (object.etype != null)
                message.etype = object.etype | 0;
            if (object.vectors) {
                if (!Array.isArray(object.vectors))
                    throw TypeError(".CNETMsg_DebugOverlay.vectors: array expected");
                message.vectors = [];
                for (var i = 0; i < object.vectors.length; ++i) {
                    if (typeof object.vectors[i] !== "object")
                        throw TypeError(".CNETMsg_DebugOverlay.vectors: object expected");
                    message.vectors[i] = $root.CMsgVector.fromObject(object.vectors[i]);
                }
            }
            if (object.colors) {
                if (!Array.isArray(object.colors))
                    throw TypeError(".CNETMsg_DebugOverlay.colors: array expected");
                message.colors = [];
                for (var i = 0; i < object.colors.length; ++i) {
                    if (typeof object.colors[i] !== "object")
                        throw TypeError(".CNETMsg_DebugOverlay.colors: object expected");
                    message.colors[i] = $root.CMsgRGBA.fromObject(object.colors[i]);
                }
            }
            if (object.dimensions) {
                if (!Array.isArray(object.dimensions))
                    throw TypeError(".CNETMsg_DebugOverlay.dimensions: array expected");
                message.dimensions = [];
                for (var i = 0; i < object.dimensions.length; ++i)
                    message.dimensions[i] = Number(object.dimensions[i]);
            }
            if (object.times) {
                if (!Array.isArray(object.times))
                    throw TypeError(".CNETMsg_DebugOverlay.times: array expected");
                message.times = [];
                for (var i = 0; i < object.times.length; ++i)
                    message.times[i] = Number(object.times[i]);
            }
            if (object.bools) {
                if (!Array.isArray(object.bools))
                    throw TypeError(".CNETMsg_DebugOverlay.bools: array expected");
                message.bools = [];
                for (var i = 0; i < object.bools.length; ++i)
                    message.bools[i] = Boolean(object.bools[i]);
            }
            if (object.uint64s) {
                if (!Array.isArray(object.uint64s))
                    throw TypeError(".CNETMsg_DebugOverlay.uint64s: array expected");
                message.uint64s = [];
                for (var i = 0; i < object.uint64s.length; ++i)
                    if ($util.Long)
                        (message.uint64s[i] = $util.Long.fromValue(object.uint64s[i])).unsigned = true;
                    else if (typeof object.uint64s[i] === "string")
                        message.uint64s[i] = parseInt(object.uint64s[i], 10);
                    else if (typeof object.uint64s[i] === "number")
                        message.uint64s[i] = object.uint64s[i];
                    else if (typeof object.uint64s[i] === "object")
                        message.uint64s[i] = new $util.LongBits(object.uint64s[i].low >>> 0, object.uint64s[i].high >>> 0).toNumber(true);
            }
            if (object.strings) {
                if (!Array.isArray(object.strings))
                    throw TypeError(".CNETMsg_DebugOverlay.strings: array expected");
                message.strings = [];
                for (var i = 0; i < object.strings.length; ++i)
                    message.strings[i] = String(object.strings[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CNETMsg_DebugOverlay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {CNETMsg_DebugOverlay} message CNETMsg_DebugOverlay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNETMsg_DebugOverlay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.vectors = [];
                object.colors = [];
                object.dimensions = [];
                object.times = [];
                object.bools = [];
                object.uint64s = [];
                object.strings = [];
            }
            if (options.defaults)
                object.etype = 0;
            if (message.etype != null && message.hasOwnProperty("etype"))
                object.etype = message.etype;
            if (message.vectors && message.vectors.length) {
                object.vectors = [];
                for (var j = 0; j < message.vectors.length; ++j)
                    object.vectors[j] = $root.CMsgVector.toObject(message.vectors[j], options);
            }
            if (message.colors && message.colors.length) {
                object.colors = [];
                for (var j = 0; j < message.colors.length; ++j)
                    object.colors[j] = $root.CMsgRGBA.toObject(message.colors[j], options);
            }
            if (message.dimensions && message.dimensions.length) {
                object.dimensions = [];
                for (var j = 0; j < message.dimensions.length; ++j)
                    object.dimensions[j] = options.json && !isFinite(message.dimensions[j]) ? String(message.dimensions[j]) : message.dimensions[j];
            }
            if (message.times && message.times.length) {
                object.times = [];
                for (var j = 0; j < message.times.length; ++j)
                    object.times[j] = options.json && !isFinite(message.times[j]) ? String(message.times[j]) : message.times[j];
            }
            if (message.bools && message.bools.length) {
                object.bools = [];
                for (var j = 0; j < message.bools.length; ++j)
                    object.bools[j] = message.bools[j];
            }
            if (message.uint64s && message.uint64s.length) {
                object.uint64s = [];
                for (var j = 0; j < message.uint64s.length; ++j)
                    if (typeof message.uint64s[j] === "number")
                        object.uint64s[j] = options.longs === String ? String(message.uint64s[j]) : message.uint64s[j];
                    else
                        object.uint64s[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uint64s[j]) : options.longs === Number ? new $util.LongBits(message.uint64s[j].low >>> 0, message.uint64s[j].high >>> 0).toNumber(true) : message.uint64s[j];
            }
            if (message.strings && message.strings.length) {
                object.strings = [];
                for (var j = 0; j < message.strings.length; ++j)
                    object.strings[j] = message.strings[j];
            }
            return object;
        };
    
        /**
         * Converts this CNETMsg_DebugOverlay to JSON.
         * @function toJSON
         * @memberof CNETMsg_DebugOverlay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNETMsg_DebugOverlay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CNETMsg_DebugOverlay
         * @function getTypeUrl
         * @memberof CNETMsg_DebugOverlay
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CNETMsg_DebugOverlay.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CNETMsg_DebugOverlay";
        };
    
        return CNETMsg_DebugOverlay;
    })();
    
    /**
     * ENetworkDisconnectionReason enum.
     * @exports ENetworkDisconnectionReason
     * @enum {number}
     * @property {number} NETWORK_DISCONNECT_INVALID=0 NETWORK_DISCONNECT_INVALID value
     * @property {number} NETWORK_DISCONNECT_SHUTDOWN=1 NETWORK_DISCONNECT_SHUTDOWN value
     * @property {number} NETWORK_DISCONNECT_DISCONNECT_BY_USER=2 NETWORK_DISCONNECT_DISCONNECT_BY_USER value
     * @property {number} NETWORK_DISCONNECT_DISCONNECT_BY_SERVER=3 NETWORK_DISCONNECT_DISCONNECT_BY_SERVER value
     * @property {number} NETWORK_DISCONNECT_LOST=4 NETWORK_DISCONNECT_LOST value
     * @property {number} NETWORK_DISCONNECT_OVERFLOW=5 NETWORK_DISCONNECT_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_STEAM_BANNED=6 NETWORK_DISCONNECT_STEAM_BANNED value
     * @property {number} NETWORK_DISCONNECT_STEAM_INUSE=7 NETWORK_DISCONNECT_STEAM_INUSE value
     * @property {number} NETWORK_DISCONNECT_STEAM_TICKET=8 NETWORK_DISCONNECT_STEAM_TICKET value
     * @property {number} NETWORK_DISCONNECT_STEAM_LOGON=9 NETWORK_DISCONNECT_STEAM_LOGON value
     * @property {number} NETWORK_DISCONNECT_STEAM_AUTHCANCELLED=10 NETWORK_DISCONNECT_STEAM_AUTHCANCELLED value
     * @property {number} NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED=11 NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED value
     * @property {number} NETWORK_DISCONNECT_STEAM_AUTHINVALID=12 NETWORK_DISCONNECT_STEAM_AUTHINVALID value
     * @property {number} NETWORK_DISCONNECT_STEAM_VACBANSTATE=13 NETWORK_DISCONNECT_STEAM_VACBANSTATE value
     * @property {number} NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE=14 NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE value
     * @property {number} NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT=15 NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT value
     * @property {number} NETWORK_DISCONNECT_STEAM_DROPPED=16 NETWORK_DISCONNECT_STEAM_DROPPED value
     * @property {number} NETWORK_DISCONNECT_STEAM_OWNERSHIP=17 NETWORK_DISCONNECT_STEAM_OWNERSHIP value
     * @property {number} NETWORK_DISCONNECT_SERVERINFO_OVERFLOW=18 NETWORK_DISCONNECT_SERVERINFO_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_TICKMSG_OVERFLOW=19 NETWORK_DISCONNECT_TICKMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW=20 NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW=21 NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW=22 NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW=23 NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW value
     * @property {number} NETWORK_DISCONNECT_SNAPSHOTOVERFLOW=24 NETWORK_DISCONNECT_SNAPSHOTOVERFLOW value
     * @property {number} NETWORK_DISCONNECT_SNAPSHOTERROR=25 NETWORK_DISCONNECT_SNAPSHOTERROR value
     * @property {number} NETWORK_DISCONNECT_RELIABLEOVERFLOW=26 NETWORK_DISCONNECT_RELIABLEOVERFLOW value
     * @property {number} NETWORK_DISCONNECT_BADDELTATICK=27 NETWORK_DISCONNECT_BADDELTATICK value
     * @property {number} NETWORK_DISCONNECT_NOMORESPLITS=28 NETWORK_DISCONNECT_NOMORESPLITS value
     * @property {number} NETWORK_DISCONNECT_TIMEDOUT=29 NETWORK_DISCONNECT_TIMEDOUT value
     * @property {number} NETWORK_DISCONNECT_DISCONNECTED=30 NETWORK_DISCONNECT_DISCONNECTED value
     * @property {number} NETWORK_DISCONNECT_LEAVINGSPLIT=31 NETWORK_DISCONNECT_LEAVINGSPLIT value
     * @property {number} NETWORK_DISCONNECT_DIFFERENTCLASSTABLES=32 NETWORK_DISCONNECT_DIFFERENTCLASSTABLES value
     * @property {number} NETWORK_DISCONNECT_BADRELAYPASSWORD=33 NETWORK_DISCONNECT_BADRELAYPASSWORD value
     * @property {number} NETWORK_DISCONNECT_BADSPECTATORPASSWORD=34 NETWORK_DISCONNECT_BADSPECTATORPASSWORD value
     * @property {number} NETWORK_DISCONNECT_HLTVRESTRICTED=35 NETWORK_DISCONNECT_HLTVRESTRICTED value
     * @property {number} NETWORK_DISCONNECT_NOSPECTATORS=36 NETWORK_DISCONNECT_NOSPECTATORS value
     * @property {number} NETWORK_DISCONNECT_HLTVUNAVAILABLE=37 NETWORK_DISCONNECT_HLTVUNAVAILABLE value
     * @property {number} NETWORK_DISCONNECT_HLTVSTOP=38 NETWORK_DISCONNECT_HLTVSTOP value
     * @property {number} NETWORK_DISCONNECT_KICKED=39 NETWORK_DISCONNECT_KICKED value
     * @property {number} NETWORK_DISCONNECT_BANADDED=40 NETWORK_DISCONNECT_BANADDED value
     * @property {number} NETWORK_DISCONNECT_KICKBANADDED=41 NETWORK_DISCONNECT_KICKBANADDED value
     * @property {number} NETWORK_DISCONNECT_HLTVDIRECT=42 NETWORK_DISCONNECT_HLTVDIRECT value
     * @property {number} NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA=43 NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA value
     * @property {number} NETWORK_DISCONNECT_PURESERVER_MISMATCH=44 NETWORK_DISCONNECT_PURESERVER_MISMATCH value
     * @property {number} NETWORK_DISCONNECT_USERCMD=45 NETWORK_DISCONNECT_USERCMD value
     * @property {number} NETWORK_DISCONNECT_REJECTED_BY_GAME=46 NETWORK_DISCONNECT_REJECTED_BY_GAME value
     * @property {number} NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR=47 NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR value
     * @property {number} NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR=48 NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR value
     * @property {number} NETWORK_DISCONNECT_BAD_SERVER_PASSWORD=49 NETWORK_DISCONNECT_BAD_SERVER_PASSWORD value
     * @property {number} NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION=50 NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION value
     * @property {number} NETWORK_DISCONNECT_CONNECTION_FAILURE=51 NETWORK_DISCONNECT_CONNECTION_FAILURE value
     * @property {number} NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS=52 NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS value
     * @property {number} NETWORK_DISCONNECT_RECONNECTION=53 NETWORK_DISCONNECT_RECONNECTION value
     * @property {number} NETWORK_DISCONNECT_LOOPSHUTDOWN=54 NETWORK_DISCONNECT_LOOPSHUTDOWN value
     * @property {number} NETWORK_DISCONNECT_LOOPDEACTIVATE=55 NETWORK_DISCONNECT_LOOPDEACTIVATE value
     * @property {number} NETWORK_DISCONNECT_HOST_ENDGAME=56 NETWORK_DISCONNECT_HOST_ENDGAME value
     * @property {number} NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE=57 NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE value
     * @property {number} NETWORK_DISCONNECT_CREATE_SERVER_FAILED=58 NETWORK_DISCONNECT_CREATE_SERVER_FAILED value
     * @property {number} NETWORK_DISCONNECT_EXITING=59 NETWORK_DISCONNECT_EXITING value
     * @property {number} NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE=60 NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE value
     * @property {number} NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY=61 NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY value
     * @property {number} NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL=62 NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL value
     * @property {number} NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP=63 NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP value
     * @property {number} NETWORK_DISCONNECT_CLIENT_NO_MAP=64 NETWORK_DISCONNECT_CLIENT_NO_MAP value
     * @property {number} NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP=65 NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP value
     * @property {number} NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM=66 NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM value
     * @property {number} NETWORK_DISCONNECT_STEAM_DENY_MISC=67 NETWORK_DISCONNECT_STEAM_DENY_MISC value
     * @property {number} NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT=68 NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT value
     * @property {number} NETWORK_DISCONNECT_SERVER_SHUTDOWN=69 NETWORK_DISCONNECT_SERVER_SHUTDOWN value
     * @property {number} NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE=71 NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE value
     * @property {number} NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT=72 NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT value
     * @property {number} NETWORK_DISCONNECT_SERVER_INCOMPATIBLE=73 NETWORK_DISCONNECT_SERVER_INCOMPATIBLE value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS=74 NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY=75 NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG=76 NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG value
     * @property {number} NETWORK_DISCONNECT_LOCALPROBLEM_OTHER=77 NETWORK_DISCONNECT_LOCALPROBLEM_OTHER value
     * @property {number} NETWORK_DISCONNECT_REMOTE_TIMEOUT=79 NETWORK_DISCONNECT_REMOTE_TIMEOUT value
     * @property {number} NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING=80 NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING value
     * @property {number} NETWORK_DISCONNECT_REMOTE_OTHER=81 NETWORK_DISCONNECT_REMOTE_OTHER value
     * @property {number} NETWORK_DISCONNECT_REMOTE_BADCRYPT=82 NETWORK_DISCONNECT_REMOTE_BADCRYPT value
     * @property {number} NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED=83 NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED value
     * @property {number} NETWORK_DISCONNECT_UNUSUAL=84 NETWORK_DISCONNECT_UNUSUAL value
     * @property {number} NETWORK_DISCONNECT_INTERNAL_ERROR=85 NETWORK_DISCONNECT_INTERNAL_ERROR value
     * @property {number} NETWORK_DISCONNECT_REJECT_BADCHALLENGE=128 NETWORK_DISCONNECT_REJECT_BADCHALLENGE value
     * @property {number} NETWORK_DISCONNECT_REJECT_NOLOBBY=129 NETWORK_DISCONNECT_REJECT_NOLOBBY value
     * @property {number} NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP=130 NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP value
     * @property {number} NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER=131 NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER value
     * @property {number} NETWORK_DISCONNECT_REJECT_HIDDEN_GAME=132 NETWORK_DISCONNECT_REJECT_HIDDEN_GAME value
     * @property {number} NETWORK_DISCONNECT_REJECT_LANRESTRICT=133 NETWORK_DISCONNECT_REJECT_LANRESTRICT value
     * @property {number} NETWORK_DISCONNECT_REJECT_BADPASSWORD=134 NETWORK_DISCONNECT_REJECT_BADPASSWORD value
     * @property {number} NETWORK_DISCONNECT_REJECT_SERVERFULL=135 NETWORK_DISCONNECT_REJECT_SERVERFULL value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION=136 NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION value
     * @property {number} NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL=137 NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL value
     * @property {number} NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY=138 NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY value
     * @property {number} NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY=139 NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH=140 NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH value
     * @property {number} NETWORK_DISCONNECT_REJECT_OLDPROTOCOL=141 NETWORK_DISCONNECT_REJECT_OLDPROTOCOL value
     * @property {number} NETWORK_DISCONNECT_REJECT_NEWPROTOCOL=142 NETWORK_DISCONNECT_REJECT_NEWPROTOCOL value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION=143 NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN=144 NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN value
     * @property {number} NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN=145 NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN value
     * @property {number} NETWORK_DISCONNECT_REJECT_STEAM=146 NETWORK_DISCONNECT_REJECT_STEAM value
     * @property {number} NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED=147 NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED value
     * @property {number} NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID=148 NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID value
     * @property {number} NETWORK_DISCONNECT_REJECT_BANNED=149 NETWORK_DISCONNECT_REJECT_BANNED value
     * @property {number} NETWORK_DISCONNECT_KICKED_TEAMKILLING=150 NETWORK_DISCONNECT_KICKED_TEAMKILLING value
     * @property {number} NETWORK_DISCONNECT_KICKED_TK_START=151 NETWORK_DISCONNECT_KICKED_TK_START value
     * @property {number} NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT=152 NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT value
     * @property {number} NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT=153 NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT value
     * @property {number} NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN=154 NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN value
     * @property {number} NETWORK_DISCONNECT_KICKED_TEAMHURTING=155 NETWORK_DISCONNECT_KICKED_TEAMHURTING value
     * @property {number} NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING=156 NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING value
     * @property {number} NETWORK_DISCONNECT_KICKED_VOTEDOFF=157 NETWORK_DISCONNECT_KICKED_VOTEDOFF value
     * @property {number} NETWORK_DISCONNECT_KICKED_IDLE=158 NETWORK_DISCONNECT_KICKED_IDLE value
     * @property {number} NETWORK_DISCONNECT_KICKED_SUICIDE=159 NETWORK_DISCONNECT_KICKED_SUICIDE value
     * @property {number} NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN=160 NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN value
     * @property {number} NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET=161 NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET value
     */
    $root.ENetworkDisconnectionReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NETWORK_DISCONNECT_INVALID"] = 0;
        values[valuesById[1] = "NETWORK_DISCONNECT_SHUTDOWN"] = 1;
        values[valuesById[2] = "NETWORK_DISCONNECT_DISCONNECT_BY_USER"] = 2;
        values[valuesById[3] = "NETWORK_DISCONNECT_DISCONNECT_BY_SERVER"] = 3;
        values[valuesById[4] = "NETWORK_DISCONNECT_LOST"] = 4;
        values[valuesById[5] = "NETWORK_DISCONNECT_OVERFLOW"] = 5;
        values[valuesById[6] = "NETWORK_DISCONNECT_STEAM_BANNED"] = 6;
        values[valuesById[7] = "NETWORK_DISCONNECT_STEAM_INUSE"] = 7;
        values[valuesById[8] = "NETWORK_DISCONNECT_STEAM_TICKET"] = 8;
        values[valuesById[9] = "NETWORK_DISCONNECT_STEAM_LOGON"] = 9;
        values[valuesById[10] = "NETWORK_DISCONNECT_STEAM_AUTHCANCELLED"] = 10;
        values[valuesById[11] = "NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED"] = 11;
        values[valuesById[12] = "NETWORK_DISCONNECT_STEAM_AUTHINVALID"] = 12;
        values[valuesById[13] = "NETWORK_DISCONNECT_STEAM_VACBANSTATE"] = 13;
        values[valuesById[14] = "NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE"] = 14;
        values[valuesById[15] = "NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT"] = 15;
        values[valuesById[16] = "NETWORK_DISCONNECT_STEAM_DROPPED"] = 16;
        values[valuesById[17] = "NETWORK_DISCONNECT_STEAM_OWNERSHIP"] = 17;
        values[valuesById[18] = "NETWORK_DISCONNECT_SERVERINFO_OVERFLOW"] = 18;
        values[valuesById[19] = "NETWORK_DISCONNECT_TICKMSG_OVERFLOW"] = 19;
        values[valuesById[20] = "NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW"] = 20;
        values[valuesById[21] = "NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW"] = 21;
        values[valuesById[22] = "NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW"] = 22;
        values[valuesById[23] = "NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW"] = 23;
        values[valuesById[24] = "NETWORK_DISCONNECT_SNAPSHOTOVERFLOW"] = 24;
        values[valuesById[25] = "NETWORK_DISCONNECT_SNAPSHOTERROR"] = 25;
        values[valuesById[26] = "NETWORK_DISCONNECT_RELIABLEOVERFLOW"] = 26;
        values[valuesById[27] = "NETWORK_DISCONNECT_BADDELTATICK"] = 27;
        values[valuesById[28] = "NETWORK_DISCONNECT_NOMORESPLITS"] = 28;
        values[valuesById[29] = "NETWORK_DISCONNECT_TIMEDOUT"] = 29;
        values[valuesById[30] = "NETWORK_DISCONNECT_DISCONNECTED"] = 30;
        values[valuesById[31] = "NETWORK_DISCONNECT_LEAVINGSPLIT"] = 31;
        values[valuesById[32] = "NETWORK_DISCONNECT_DIFFERENTCLASSTABLES"] = 32;
        values[valuesById[33] = "NETWORK_DISCONNECT_BADRELAYPASSWORD"] = 33;
        values[valuesById[34] = "NETWORK_DISCONNECT_BADSPECTATORPASSWORD"] = 34;
        values[valuesById[35] = "NETWORK_DISCONNECT_HLTVRESTRICTED"] = 35;
        values[valuesById[36] = "NETWORK_DISCONNECT_NOSPECTATORS"] = 36;
        values[valuesById[37] = "NETWORK_DISCONNECT_HLTVUNAVAILABLE"] = 37;
        values[valuesById[38] = "NETWORK_DISCONNECT_HLTVSTOP"] = 38;
        values[valuesById[39] = "NETWORK_DISCONNECT_KICKED"] = 39;
        values[valuesById[40] = "NETWORK_DISCONNECT_BANADDED"] = 40;
        values[valuesById[41] = "NETWORK_DISCONNECT_KICKBANADDED"] = 41;
        values[valuesById[42] = "NETWORK_DISCONNECT_HLTVDIRECT"] = 42;
        values[valuesById[43] = "NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA"] = 43;
        values[valuesById[44] = "NETWORK_DISCONNECT_PURESERVER_MISMATCH"] = 44;
        values[valuesById[45] = "NETWORK_DISCONNECT_USERCMD"] = 45;
        values[valuesById[46] = "NETWORK_DISCONNECT_REJECTED_BY_GAME"] = 46;
        values[valuesById[47] = "NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR"] = 47;
        values[valuesById[48] = "NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR"] = 48;
        values[valuesById[49] = "NETWORK_DISCONNECT_BAD_SERVER_PASSWORD"] = 49;
        values[valuesById[50] = "NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION"] = 50;
        values[valuesById[51] = "NETWORK_DISCONNECT_CONNECTION_FAILURE"] = 51;
        values[valuesById[52] = "NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS"] = 52;
        values[valuesById[53] = "NETWORK_DISCONNECT_RECONNECTION"] = 53;
        values[valuesById[54] = "NETWORK_DISCONNECT_LOOPSHUTDOWN"] = 54;
        values[valuesById[55] = "NETWORK_DISCONNECT_LOOPDEACTIVATE"] = 55;
        values[valuesById[56] = "NETWORK_DISCONNECT_HOST_ENDGAME"] = 56;
        values[valuesById[57] = "NETWORK_DISCONNECT_LOOP_LEVELLOAD_ACTIVATE"] = 57;
        values[valuesById[58] = "NETWORK_DISCONNECT_CREATE_SERVER_FAILED"] = 58;
        values[valuesById[59] = "NETWORK_DISCONNECT_EXITING"] = 59;
        values[valuesById[60] = "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_IDLE"] = 60;
        values[valuesById[61] = "NETWORK_DISCONNECT_REQUEST_HOSTSTATE_HLTVRELAY"] = 61;
        values[valuesById[62] = "NETWORK_DISCONNECT_CLIENT_CONSISTENCY_FAIL"] = 62;
        values[valuesById[63] = "NETWORK_DISCONNECT_CLIENT_UNABLE_TO_CRC_MAP"] = 63;
        values[valuesById[64] = "NETWORK_DISCONNECT_CLIENT_NO_MAP"] = 64;
        values[valuesById[65] = "NETWORK_DISCONNECT_CLIENT_DIFFERENT_MAP"] = 65;
        values[valuesById[66] = "NETWORK_DISCONNECT_SERVER_REQUIRES_STEAM"] = 66;
        values[valuesById[67] = "NETWORK_DISCONNECT_STEAM_DENY_MISC"] = 67;
        values[valuesById[68] = "NETWORK_DISCONNECT_STEAM_DENY_BAD_ANTI_CHEAT"] = 68;
        values[valuesById[69] = "NETWORK_DISCONNECT_SERVER_SHUTDOWN"] = 69;
        values[valuesById[71] = "NETWORK_DISCONNECT_REPLAY_INCOMPATIBLE"] = 71;
        values[valuesById[72] = "NETWORK_DISCONNECT_CONNECT_REQUEST_TIMEDOUT"] = 72;
        values[valuesById[73] = "NETWORK_DISCONNECT_SERVER_INCOMPATIBLE"] = 73;
        values[valuesById[74] = "NETWORK_DISCONNECT_LOCALPROBLEM_MANYRELAYS"] = 74;
        values[valuesById[75] = "NETWORK_DISCONNECT_LOCALPROBLEM_HOSTEDSERVERPRIMARYRELAY"] = 75;
        values[valuesById[76] = "NETWORK_DISCONNECT_LOCALPROBLEM_NETWORKCONFIG"] = 76;
        values[valuesById[77] = "NETWORK_DISCONNECT_LOCALPROBLEM_OTHER"] = 77;
        values[valuesById[79] = "NETWORK_DISCONNECT_REMOTE_TIMEOUT"] = 79;
        values[valuesById[80] = "NETWORK_DISCONNECT_REMOTE_TIMEOUT_CONNECTING"] = 80;
        values[valuesById[81] = "NETWORK_DISCONNECT_REMOTE_OTHER"] = 81;
        values[valuesById[82] = "NETWORK_DISCONNECT_REMOTE_BADCRYPT"] = 82;
        values[valuesById[83] = "NETWORK_DISCONNECT_REMOTE_CERTNOTTRUSTED"] = 83;
        values[valuesById[84] = "NETWORK_DISCONNECT_UNUSUAL"] = 84;
        values[valuesById[85] = "NETWORK_DISCONNECT_INTERNAL_ERROR"] = 85;
        values[valuesById[128] = "NETWORK_DISCONNECT_REJECT_BADCHALLENGE"] = 128;
        values[valuesById[129] = "NETWORK_DISCONNECT_REJECT_NOLOBBY"] = 129;
        values[valuesById[130] = "NETWORK_DISCONNECT_REJECT_BACKGROUND_MAP"] = 130;
        values[valuesById[131] = "NETWORK_DISCONNECT_REJECT_SINGLE_PLAYER"] = 131;
        values[valuesById[132] = "NETWORK_DISCONNECT_REJECT_HIDDEN_GAME"] = 132;
        values[valuesById[133] = "NETWORK_DISCONNECT_REJECT_LANRESTRICT"] = 133;
        values[valuesById[134] = "NETWORK_DISCONNECT_REJECT_BADPASSWORD"] = 134;
        values[valuesById[135] = "NETWORK_DISCONNECT_REJECT_SERVERFULL"] = 135;
        values[valuesById[136] = "NETWORK_DISCONNECT_REJECT_INVALIDRESERVATION"] = 136;
        values[valuesById[137] = "NETWORK_DISCONNECT_REJECT_FAILEDCHANNEL"] = 137;
        values[valuesById[138] = "NETWORK_DISCONNECT_REJECT_CONNECT_FROM_LOBBY"] = 138;
        values[valuesById[139] = "NETWORK_DISCONNECT_REJECT_RESERVED_FOR_LOBBY"] = 139;
        values[valuesById[140] = "NETWORK_DISCONNECT_REJECT_INVALIDKEYLENGTH"] = 140;
        values[valuesById[141] = "NETWORK_DISCONNECT_REJECT_OLDPROTOCOL"] = 141;
        values[valuesById[142] = "NETWORK_DISCONNECT_REJECT_NEWPROTOCOL"] = 142;
        values[valuesById[143] = "NETWORK_DISCONNECT_REJECT_INVALIDCONNECTION"] = 143;
        values[valuesById[144] = "NETWORK_DISCONNECT_REJECT_INVALIDCERTLEN"] = 144;
        values[valuesById[145] = "NETWORK_DISCONNECT_REJECT_INVALIDSTEAMCERTLEN"] = 145;
        values[valuesById[146] = "NETWORK_DISCONNECT_REJECT_STEAM"] = 146;
        values[valuesById[147] = "NETWORK_DISCONNECT_REJECT_SERVERAUTHDISABLED"] = 147;
        values[valuesById[148] = "NETWORK_DISCONNECT_REJECT_SERVERCDKEYAUTHINVALID"] = 148;
        values[valuesById[149] = "NETWORK_DISCONNECT_REJECT_BANNED"] = 149;
        values[valuesById[150] = "NETWORK_DISCONNECT_KICKED_TEAMKILLING"] = 150;
        values[valuesById[151] = "NETWORK_DISCONNECT_KICKED_TK_START"] = 151;
        values[valuesById[152] = "NETWORK_DISCONNECT_KICKED_UNTRUSTEDACCOUNT"] = 152;
        values[valuesById[153] = "NETWORK_DISCONNECT_KICKED_CONVICTEDACCOUNT"] = 153;
        values[valuesById[154] = "NETWORK_DISCONNECT_KICKED_COMPETITIVECOOLDOWN"] = 154;
        values[valuesById[155] = "NETWORK_DISCONNECT_KICKED_TEAMHURTING"] = 155;
        values[valuesById[156] = "NETWORK_DISCONNECT_KICKED_HOSTAGEKILLING"] = 156;
        values[valuesById[157] = "NETWORK_DISCONNECT_KICKED_VOTEDOFF"] = 157;
        values[valuesById[158] = "NETWORK_DISCONNECT_KICKED_IDLE"] = 158;
        values[valuesById[159] = "NETWORK_DISCONNECT_KICKED_SUICIDE"] = 159;
        values[valuesById[160] = "NETWORK_DISCONNECT_KICKED_NOSTEAMLOGIN"] = 160;
        values[valuesById[161] = "NETWORK_DISCONNECT_KICKED_NOSTEAMTICKET"] = 161;
        return values;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.file && message.file.length))
                                    message.file = [];
                                message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
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
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorSet
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.message_type = [];
                    this.enum_type = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto message_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} message_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.message_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto source_code_info.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.source_code_info = null;
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.message_type != null && message.message_type.length)
                        for (var i = 0; i < message.message_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.source_code_info != null && Object.hasOwnProperty.call(message, "source_code_info"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message["package"] = reader.string();
                                break;
                            }
                        case 3: {
                                if (!(message.dependency && message.dependency.length))
                                    message.dependency = [];
                                message.dependency.push(reader.string());
                                break;
                            }
                        case 4: {
                                if (!(message.message_type && message.message_type.length))
                                    message.message_type = [];
                                message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.enum_type && message.enum_type.length))
                                    message.enum_type = [];
                                message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.service && message.service.length))
                                    message.service = [];
                                message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
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
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.message_type != null && message.hasOwnProperty("message_type")) {
                        if (!Array.isArray(message.message_type))
                            return "message_type: array expected";
                        for (var i = 0; i < message.message_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                            if (error)
                                return "message_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                        if (error)
                            return "source_code_info." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.message_type) {
                        if (!Array.isArray(object.message_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                        message.message_type = [];
                        for (var i = 0; i < object.message_type.length; ++i) {
                            if (typeof object.message_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                            message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.source_code_info != null) {
                        if (typeof object.source_code_info !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.message_type = [];
                        object.enum_type = [];
                        object.service = [];
                        object.extension = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.source_code_info = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.message_type && message.message_type.length) {
                        object.message_type = [];
                        for (var j = 0; j < message.message_type.length; ++j)
                            object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nested_type = [];
                    this.enum_type = [];
                    this.extension_range = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nested_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nested_type = $util.emptyArray;
    
                /**
                 * DescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * DescriptorProto extension_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension_range = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nested_type != null && message.nested_type.length)
                        for (var i = 0; i < message.nested_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extension_range != null && message.extension_range.length)
                        for (var i = 0; i < message.extension_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.field && message.field.length))
                                    message.field = [];
                                message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                if (!(message.nested_type && message.nested_type.length))
                                    message.nested_type = [];
                                message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                if (!(message.enum_type && message.enum_type.length))
                                    message.enum_type = [];
                                message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.extension_range && message.extension_range.length))
                                    message.extension_range = [];
                                message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
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
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                        if (!Array.isArray(message.nested_type))
                            return "nested_type: array expected";
                        for (var i = 0; i < message.nested_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                            if (error)
                                return "nested_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                        if (!Array.isArray(message.extension_range))
                            return "extension_range: array expected";
                        for (var i = 0; i < message.extension_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                            if (error)
                                return "extension_range." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nested_type) {
                        if (!Array.isArray(object.nested_type))
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                        message.nested_type = [];
                        for (var i = 0; i < object.nested_type.length; ++i) {
                            if (typeof object.nested_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                            message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.extension_range) {
                        if (!Array.isArray(object.extension_range))
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                        message.extension_range = [];
                        for (var i = 0; i < object.extension_range.length; ++i) {
                            if (typeof object.extension_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                            message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nested_type = [];
                        object.enum_type = [];
                        object.extension_range = [];
                        object.extension = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nested_type && message.nested_type.length) {
                        object.nested_type = [];
                        for (var j = 0; j < message.nested_type.length; ++j)
                            object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.extension_range && message.extension_range.length) {
                        object.extension_range = [];
                        for (var j = 0; j < message.extension_range.length; ++j)
                            object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto";
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
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
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ExtensionRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                    };
    
                    return ExtensionRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [type_name] FieldDescriptorProto type_name
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [default_value] FieldDescriptorProto default_value
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto type_name.
                 * @member {string} type_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type_name = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto default_value.
                 * @member {string} default_value
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.default_value = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.type_name != null && Object.hasOwnProperty.call(message, "type_name"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                    if (message.default_value != null && Object.hasOwnProperty.call(message, "default_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.number = reader.int32();
                                break;
                            }
                        case 4: {
                                message.label = reader.int32();
                                break;
                            }
                        case 5: {
                                message.type = reader.int32();
                                break;
                            }
                        case 6: {
                                message.type_name = reader.string();
                                break;
                            }
                        case 2: {
                                message.extendee = reader.string();
                                break;
                            }
                        case 7: {
                                message.default_value = reader.string();
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
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
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        if (!$util.isString(message.default_value))
                            return "default_value: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    default:
                        if (typeof object.label === "number") {
                            message.label = object.label;
                            break;
                        }
                        break;
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.type_name != null)
                        message.type_name = String(object.type_name);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.default_value != null)
                        message.default_value = String(object.default_value);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.type_name = "";
                        object.default_value = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        object.type_name = message.type_name;
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        object.default_value = message.default_value;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
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
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.number = reader.int32();
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
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
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.method && message.method.length))
                                    message.method = [];
                                message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
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
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [input_type] MethodDescriptorProto input_type
                 * @property {string|null} [output_type] MethodDescriptorProto output_type
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto input_type.
                 * @member {string} input_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.input_type = "";
    
                /**
                 * MethodDescriptorProto output_type.
                 * @member {string} output_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.output_type = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.input_type != null && Object.hasOwnProperty.call(message, "input_type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                    if (message.output_type != null && Object.hasOwnProperty.call(message, "output_type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.input_type = reader.string();
                                break;
                            }
                        case 3: {
                                message.output_type = reader.string();
                                break;
                            }
                        case 4: {
                                message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
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
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        if (!$util.isString(message.input_type))
                            return "input_type: string expected";
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        if (!$util.isString(message.output_type))
                            return "output_type: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.input_type != null)
                        message.input_type = String(object.input_type);
                    if (object.output_type != null)
                        message.output_type = String(object.output_type);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.input_type = "";
                        object.output_type = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [java_package] FileOptions java_package
                 * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
                 * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
                 * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
                 * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
                 * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
                 * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions java_package.
                 * @member {string} java_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_package = "";
    
                /**
                 * FileOptions java_outer_classname.
                 * @member {string} java_outer_classname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_outer_classname = "";
    
                /**
                 * FileOptions java_multiple_files.
                 * @member {boolean} java_multiple_files
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_multiple_files = false;
    
                /**
                 * FileOptions java_generate_equals_and_hash.
                 * @member {boolean} java_generate_equals_and_hash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generate_equals_and_hash = false;
    
                /**
                 * FileOptions optimize_for.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimize_for = 1;
    
                /**
                 * FileOptions cc_generic_services.
                 * @member {boolean} cc_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_generic_services = false;
    
                /**
                 * FileOptions java_generic_services.
                 * @member {boolean} java_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generic_services = false;
    
                /**
                 * FileOptions py_generic_services.
                 * @member {boolean} py_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.py_generic_services = false;
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.java_package != null && Object.hasOwnProperty.call(message, "java_package"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                    if (message.java_outer_classname != null && Object.hasOwnProperty.call(message, "java_outer_classname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                    if (message.optimize_for != null && Object.hasOwnProperty.call(message, "optimize_for"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                    if (message.java_multiple_files != null && Object.hasOwnProperty.call(message, "java_multiple_files"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                    if (message.cc_generic_services != null && Object.hasOwnProperty.call(message, "cc_generic_services"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                    if (message.java_generic_services != null && Object.hasOwnProperty.call(message, "java_generic_services"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                    if (message.py_generic_services != null && Object.hasOwnProperty.call(message, "py_generic_services"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                    if (message.java_generate_equals_and_hash != null && Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.java_package = reader.string();
                                break;
                            }
                        case 8: {
                                message.java_outer_classname = reader.string();
                                break;
                            }
                        case 10: {
                                message.java_multiple_files = reader.bool();
                                break;
                            }
                        case 20: {
                                message.java_generate_equals_and_hash = reader.bool();
                                break;
                            }
                        case 9: {
                                message.optimize_for = reader.int32();
                                break;
                            }
                        case 16: {
                                message.cc_generic_services = reader.bool();
                                break;
                            }
                        case 17: {
                                message.java_generic_services = reader.bool();
                                break;
                            }
                        case 18: {
                                message.py_generic_services = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        if (!$util.isString(message.java_package))
                            return "java_package: string expected";
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        if (!$util.isString(message.java_outer_classname))
                            return "java_outer_classname: string expected";
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        if (typeof message.java_multiple_files !== "boolean")
                            return "java_multiple_files: boolean expected";
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        if (typeof message.java_generate_equals_and_hash !== "boolean")
                            return "java_generate_equals_and_hash: boolean expected";
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        switch (message.optimize_for) {
                        default:
                            return "optimize_for: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        if (typeof message.cc_generic_services !== "boolean")
                            return "cc_generic_services: boolean expected";
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        if (typeof message.java_generic_services !== "boolean")
                            return "java_generic_services: boolean expected";
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        if (typeof message.py_generic_services !== "boolean")
                            return "py_generic_services: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.java_package != null)
                        message.java_package = String(object.java_package);
                    if (object.java_outer_classname != null)
                        message.java_outer_classname = String(object.java_outer_classname);
                    if (object.java_multiple_files != null)
                        message.java_multiple_files = Boolean(object.java_multiple_files);
                    if (object.java_generate_equals_and_hash != null)
                        message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                    switch (object.optimize_for) {
                    default:
                        if (typeof object.optimize_for === "number") {
                            message.optimize_for = object.optimize_for;
                            break;
                        }
                        break;
                    case "SPEED":
                    case 1:
                        message.optimize_for = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimize_for = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimize_for = 3;
                        break;
                    }
                    if (object.cc_generic_services != null)
                        message.cc_generic_services = Boolean(object.cc_generic_services);
                    if (object.java_generic_services != null)
                        message.java_generic_services = Boolean(object.java_generic_services);
                    if (object.py_generic_services != null)
                        message.py_generic_services = Boolean(object.py_generic_services);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.java_package = "";
                        object.java_outer_classname = "";
                        object.optimize_for = options.enums === String ? "SPEED" : 1;
                        object.java_multiple_files = false;
                        object.cc_generic_services = false;
                        object.java_generic_services = false;
                        object.py_generic_services = false;
                        object.java_generate_equals_and_hash = false;
                    }
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        object.java_package = message.java_package;
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        object.java_outer_classname = message.java_outer_classname;
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] === undefined ? message.optimize_for : $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        object.java_multiple_files = message.java_multiple_files;
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        object.cc_generic_services = message.cc_generic_services;
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        object.java_generic_services = message.java_generic_services;
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        object.py_generic_services = message.py_generic_services;
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileOptions";
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
                 * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions message_set_wire_format.
                 * @member {boolean} message_set_wire_format
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.message_set_wire_format = false;
    
                /**
                 * MessageOptions no_standard_descriptor_accessor.
                 * @member {boolean} no_standard_descriptor_accessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.no_standard_descriptor_accessor = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message_set_wire_format != null && Object.hasOwnProperty.call(message, "message_set_wire_format"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                    if (message.no_standard_descriptor_accessor != null && Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.message_set_wire_format = reader.bool();
                                break;
                            }
                        case 2: {
                                message.no_standard_descriptor_accessor = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        if (typeof message.message_set_wire_format !== "boolean")
                            return "message_set_wire_format: boolean expected";
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        if (typeof message.no_standard_descriptor_accessor !== "boolean")
                            return "no_standard_descriptor_accessor: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.message_set_wire_format != null)
                        message.message_set_wire_format = Boolean(object.message_set_wire_format);
                    if (object.no_standard_descriptor_accessor != null)
                        message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.message_set_wire_format = false;
                        object.no_standard_descriptor_accessor = false;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MessageOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MessageOptions";
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {string|null} [experimental_map_key] FieldOptions experimental_map_key
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions experimental_map_key.
                 * @member {string} experimental_map_key
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.experimental_map_key = "";
    
                /**
                 * FieldOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.experimental_map_key != null && Object.hasOwnProperty.call(message, "experimental_map_key"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.experimental_map_key);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ctype = reader.int32();
                                break;
                            }
                        case 2: {
                                message.packed = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 9: {
                                message.experimental_map_key = reader.string();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        if (!$util.isString(message.experimental_map_key))
                            return "experimental_map_key: string expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    default:
                        if (typeof object.ctype === "number") {
                            message.ctype = object.ctype;
                            break;
                        }
                        break;
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.experimental_map_key != null)
                        message.experimental_map_key = String(object.experimental_map_key);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.experimental_map_key = "";
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        object.experimental_map_key = message.experimental_map_key;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldOptions";
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumOptions";
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
                 * @property {string|null} [".network_connection_token"] EnumValueOptions .network_connection_token
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * EnumValueOptions .network_connection_token.
                 * @member {string} .network_connection_token
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype[".network_connection_token"] = "";
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".network_connection_token"] != null && Object.hasOwnProperty.call(message, ".network_connection_token"))
                        writer.uint32(/* id 50500, wireType 2 =*/404002).string(message[".network_connection_token"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 50500: {
                                message[".network_connection_token"] = reader.string();
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
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".network_connection_token"] != null && message.hasOwnProperty(".network_connection_token"))
                        if (!$util.isString(message[".network_connection_token"]))
                            return ".network_connection_token: string expected";
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".network_connection_token"] != null)
                        message[".network_connection_token"] = String(object[".network_connection_token"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object[".network_connection_token"] = "";
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".network_connection_token"] != null && message.hasOwnProperty(".network_connection_token"))
                        object[".network_connection_token"] = message[".network_connection_token"];
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceOptions";
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodOptions";
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifier_value] UninterpretedOption identifier_value
                 * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
                 * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
                 * @property {number|null} [double_value] UninterpretedOption double_value
                 * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
                 * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifier_value.
                 * @member {string} identifier_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifier_value = "";
    
                /**
                 * UninterpretedOption positive_int_value.
                 * @member {number|Long} positive_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negative_int_value.
                 * @member {number|Long} negative_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption double_value.
                 * @member {number} double_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.double_value = 0;
    
                /**
                 * UninterpretedOption string_value.
                 * @member {Uint8Array} string_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.string_value = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregate_value.
                 * @member {string} aggregate_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregate_value = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifier_value != null && Object.hasOwnProperty.call(message, "identifier_value"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                    if (message.positive_int_value != null && Object.hasOwnProperty.call(message, "positive_int_value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                    if (message.negative_int_value != null && Object.hasOwnProperty.call(message, "negative_int_value"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                    if (message.double_value != null && Object.hasOwnProperty.call(message, "double_value"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                    if (message.string_value != null && Object.hasOwnProperty.call(message, "string_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                    if (message.aggregate_value != null && Object.hasOwnProperty.call(message, "aggregate_value"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                if (!(message.name && message.name.length))
                                    message.name = [];
                                message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.identifier_value = reader.string();
                                break;
                            }
                        case 4: {
                                message.positive_int_value = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.negative_int_value = reader.int64();
                                break;
                            }
                        case 6: {
                                message.double_value = reader.double();
                                break;
                            }
                        case 7: {
                                message.string_value = reader.bytes();
                                break;
                            }
                        case 8: {
                                message.aggregate_value = reader.string();
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
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        if (!$util.isString(message.identifier_value))
                            return "identifier_value: string expected";
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                            return "positive_int_value: integer|Long expected";
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                            return "negative_int_value: integer|Long expected";
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        if (typeof message.double_value !== "number")
                            return "double_value: number expected";
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                            return "string_value: buffer expected";
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        if (!$util.isString(message.aggregate_value))
                            return "aggregate_value: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifier_value != null)
                        message.identifier_value = String(object.identifier_value);
                    if (object.positive_int_value != null)
                        if ($util.Long)
                            (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                        else if (typeof object.positive_int_value === "string")
                            message.positive_int_value = parseInt(object.positive_int_value, 10);
                        else if (typeof object.positive_int_value === "number")
                            message.positive_int_value = object.positive_int_value;
                        else if (typeof object.positive_int_value === "object")
                            message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                    if (object.negative_int_value != null)
                        if ($util.Long)
                            (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                        else if (typeof object.negative_int_value === "string")
                            message.negative_int_value = parseInt(object.negative_int_value, 10);
                        else if (typeof object.negative_int_value === "number")
                            message.negative_int_value = object.negative_int_value;
                        else if (typeof object.negative_int_value === "object")
                            message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                    if (object.double_value != null)
                        message.double_value = Number(object.double_value);
                    if (object.string_value != null)
                        if (typeof object.string_value === "string")
                            $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                        else if (object.string_value.length >= 0)
                            message.string_value = object.string_value;
                    if (object.aggregate_value != null)
                        message.aggregate_value = String(object.aggregate_value);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifier_value = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positive_int_value = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negative_int_value = options.longs === String ? "0" : 0;
                        object.double_value = 0;
                        if (options.bytes === String)
                            object.string_value = "";
                        else {
                            object.string_value = [];
                            if (options.bytes !== Array)
                                object.string_value = $util.newBuffer(object.string_value);
                        }
                        object.aggregate_value = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        object.identifier_value = message.identifier_value;
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (typeof message.positive_int_value === "number")
                            object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                        else
                            object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (typeof message.negative_int_value === "number")
                            object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                        else
                            object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        object.aggregate_value = message.aggregate_value;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for UninterpretedOption
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} name_part NamePart name_part
                     * @property {boolean} is_extension NamePart is_extension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart name_part.
                     * @member {string} name_part
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.name_part = "";
    
                    /**
                     * NamePart is_extension.
                     * @member {boolean} is_extension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.is_extension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.name_part = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.is_extension = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name_part"))
                            throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                        if (!message.hasOwnProperty("is_extension"))
                            throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.name_part))
                            return "name_part: string expected";
                        if (typeof message.is_extension !== "boolean")
                            return "is_extension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.name_part != null)
                            message.name_part = String(object.name_part);
                        if (object.is_extension != null)
                            message.is_extension = Boolean(object.is_extension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name_part = "";
                            object.is_extension = false;
                        }
                        if (message.name_part != null && message.hasOwnProperty("name_part"))
                            object.name_part = message.name_part;
                        if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                            object.is_extension = message.is_extension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for NamePart
                     * @function getTypeUrl
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
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
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for SourceCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.span && message.span.length))
                                        message.span = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.span.push(reader.int32());
                                    } else
                                        message.span.push(reader.int32());
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
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Location
                     * @function getTypeUrl
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
