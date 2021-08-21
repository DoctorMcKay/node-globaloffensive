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
    
    $root.CMsgKeyUp = (function() {
    
        /**
         * Properties of a CMsgKeyUp.
         * @exports ICMsgKeyUp
         * @interface ICMsgKeyUp
         * @property {number|null} [browser_handle] CMsgKeyUp browser_handle
         * @property {number|null} [keyCode] CMsgKeyUp keyCode
         * @property {number|null} [modifiers] CMsgKeyUp modifiers
         */
    
        /**
         * Constructs a new CMsgKeyUp.
         * @exports CMsgKeyUp
         * @classdesc Represents a CMsgKeyUp.
         * @implements ICMsgKeyUp
         * @constructor
         * @param {ICMsgKeyUp=} [properties] Properties to set
         */
        function CMsgKeyUp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgKeyUp browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgKeyUp
         * @instance
         */
        CMsgKeyUp.prototype.browser_handle = 0;
    
        /**
         * CMsgKeyUp keyCode.
         * @member {number} keyCode
         * @memberof CMsgKeyUp
         * @instance
         */
        CMsgKeyUp.prototype.keyCode = 0;
    
        /**
         * CMsgKeyUp modifiers.
         * @member {number} modifiers
         * @memberof CMsgKeyUp
         * @instance
         */
        CMsgKeyUp.prototype.modifiers = 0;
    
        /**
         * Creates a new CMsgKeyUp instance using the specified properties.
         * @function create
         * @memberof CMsgKeyUp
         * @static
         * @param {ICMsgKeyUp=} [properties] Properties to set
         * @returns {CMsgKeyUp} CMsgKeyUp instance
         */
        CMsgKeyUp.create = function create(properties) {
            return new CMsgKeyUp(properties);
        };
    
        /**
         * Encodes the specified CMsgKeyUp message. Does not implicitly {@link CMsgKeyUp.verify|verify} messages.
         * @function encode
         * @memberof CMsgKeyUp
         * @static
         * @param {ICMsgKeyUp} message CMsgKeyUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgKeyUp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.keyCode != null && Object.hasOwnProperty.call(message, "keyCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.keyCode);
            if (message.modifiers != null && Object.hasOwnProperty.call(message, "modifiers"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.modifiers);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgKeyUp message, length delimited. Does not implicitly {@link CMsgKeyUp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgKeyUp
         * @static
         * @param {ICMsgKeyUp} message CMsgKeyUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgKeyUp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgKeyUp message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgKeyUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgKeyUp} CMsgKeyUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgKeyUp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgKeyUp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.keyCode = reader.uint32();
                    break;
                case 3:
                    message.modifiers = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgKeyUp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgKeyUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgKeyUp} CMsgKeyUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgKeyUp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgKeyUp message.
         * @function verify
         * @memberof CMsgKeyUp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgKeyUp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.keyCode != null && message.hasOwnProperty("keyCode"))
                if (!$util.isInteger(message.keyCode))
                    return "keyCode: integer expected";
            if (message.modifiers != null && message.hasOwnProperty("modifiers"))
                if (!$util.isInteger(message.modifiers))
                    return "modifiers: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgKeyUp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgKeyUp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgKeyUp} CMsgKeyUp
         */
        CMsgKeyUp.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgKeyUp)
                return object;
            var message = new $root.CMsgKeyUp();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.keyCode != null)
                message.keyCode = object.keyCode >>> 0;
            if (object.modifiers != null)
                message.modifiers = object.modifiers >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgKeyUp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgKeyUp
         * @static
         * @param {CMsgKeyUp} message CMsgKeyUp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgKeyUp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.keyCode = 0;
                object.modifiers = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.keyCode != null && message.hasOwnProperty("keyCode"))
                object.keyCode = message.keyCode;
            if (message.modifiers != null && message.hasOwnProperty("modifiers"))
                object.modifiers = message.modifiers;
            return object;
        };
    
        /**
         * Converts this CMsgKeyUp to JSON.
         * @function toJSON
         * @memberof CMsgKeyUp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgKeyUp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgKeyUp;
    })();
    
    $root.CMsgKeyDown = (function() {
    
        /**
         * Properties of a CMsgKeyDown.
         * @exports ICMsgKeyDown
         * @interface ICMsgKeyDown
         * @property {number|null} [browser_handle] CMsgKeyDown browser_handle
         * @property {number|null} [keyCode] CMsgKeyDown keyCode
         * @property {number|null} [modifiers] CMsgKeyDown modifiers
         */
    
        /**
         * Constructs a new CMsgKeyDown.
         * @exports CMsgKeyDown
         * @classdesc Represents a CMsgKeyDown.
         * @implements ICMsgKeyDown
         * @constructor
         * @param {ICMsgKeyDown=} [properties] Properties to set
         */
        function CMsgKeyDown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgKeyDown browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgKeyDown
         * @instance
         */
        CMsgKeyDown.prototype.browser_handle = 0;
    
        /**
         * CMsgKeyDown keyCode.
         * @member {number} keyCode
         * @memberof CMsgKeyDown
         * @instance
         */
        CMsgKeyDown.prototype.keyCode = 0;
    
        /**
         * CMsgKeyDown modifiers.
         * @member {number} modifiers
         * @memberof CMsgKeyDown
         * @instance
         */
        CMsgKeyDown.prototype.modifiers = 0;
    
        /**
         * Creates a new CMsgKeyDown instance using the specified properties.
         * @function create
         * @memberof CMsgKeyDown
         * @static
         * @param {ICMsgKeyDown=} [properties] Properties to set
         * @returns {CMsgKeyDown} CMsgKeyDown instance
         */
        CMsgKeyDown.create = function create(properties) {
            return new CMsgKeyDown(properties);
        };
    
        /**
         * Encodes the specified CMsgKeyDown message. Does not implicitly {@link CMsgKeyDown.verify|verify} messages.
         * @function encode
         * @memberof CMsgKeyDown
         * @static
         * @param {ICMsgKeyDown} message CMsgKeyDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgKeyDown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.keyCode != null && Object.hasOwnProperty.call(message, "keyCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.keyCode);
            if (message.modifiers != null && Object.hasOwnProperty.call(message, "modifiers"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.modifiers);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgKeyDown message, length delimited. Does not implicitly {@link CMsgKeyDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgKeyDown
         * @static
         * @param {ICMsgKeyDown} message CMsgKeyDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgKeyDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgKeyDown message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgKeyDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgKeyDown} CMsgKeyDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgKeyDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgKeyDown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.keyCode = reader.uint32();
                    break;
                case 3:
                    message.modifiers = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgKeyDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgKeyDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgKeyDown} CMsgKeyDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgKeyDown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgKeyDown message.
         * @function verify
         * @memberof CMsgKeyDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgKeyDown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.keyCode != null && message.hasOwnProperty("keyCode"))
                if (!$util.isInteger(message.keyCode))
                    return "keyCode: integer expected";
            if (message.modifiers != null && message.hasOwnProperty("modifiers"))
                if (!$util.isInteger(message.modifiers))
                    return "modifiers: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgKeyDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgKeyDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgKeyDown} CMsgKeyDown
         */
        CMsgKeyDown.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgKeyDown)
                return object;
            var message = new $root.CMsgKeyDown();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.keyCode != null)
                message.keyCode = object.keyCode >>> 0;
            if (object.modifiers != null)
                message.modifiers = object.modifiers >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgKeyDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgKeyDown
         * @static
         * @param {CMsgKeyDown} message CMsgKeyDown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgKeyDown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.keyCode = 0;
                object.modifiers = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.keyCode != null && message.hasOwnProperty("keyCode"))
                object.keyCode = message.keyCode;
            if (message.modifiers != null && message.hasOwnProperty("modifiers"))
                object.modifiers = message.modifiers;
            return object;
        };
    
        /**
         * Converts this CMsgKeyDown to JSON.
         * @function toJSON
         * @memberof CMsgKeyDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgKeyDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgKeyDown;
    })();
    
    $root.CMsgKeyChar = (function() {
    
        /**
         * Properties of a CMsgKeyChar.
         * @exports ICMsgKeyChar
         * @interface ICMsgKeyChar
         * @property {number|null} [browser_handle] CMsgKeyChar browser_handle
         * @property {number|null} [unichar] CMsgKeyChar unichar
         */
    
        /**
         * Constructs a new CMsgKeyChar.
         * @exports CMsgKeyChar
         * @classdesc Represents a CMsgKeyChar.
         * @implements ICMsgKeyChar
         * @constructor
         * @param {ICMsgKeyChar=} [properties] Properties to set
         */
        function CMsgKeyChar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgKeyChar browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgKeyChar
         * @instance
         */
        CMsgKeyChar.prototype.browser_handle = 0;
    
        /**
         * CMsgKeyChar unichar.
         * @member {number} unichar
         * @memberof CMsgKeyChar
         * @instance
         */
        CMsgKeyChar.prototype.unichar = 0;
    
        /**
         * Creates a new CMsgKeyChar instance using the specified properties.
         * @function create
         * @memberof CMsgKeyChar
         * @static
         * @param {ICMsgKeyChar=} [properties] Properties to set
         * @returns {CMsgKeyChar} CMsgKeyChar instance
         */
        CMsgKeyChar.create = function create(properties) {
            return new CMsgKeyChar(properties);
        };
    
        /**
         * Encodes the specified CMsgKeyChar message. Does not implicitly {@link CMsgKeyChar.verify|verify} messages.
         * @function encode
         * @memberof CMsgKeyChar
         * @static
         * @param {ICMsgKeyChar} message CMsgKeyChar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgKeyChar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.unichar != null && Object.hasOwnProperty.call(message, "unichar"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.unichar);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgKeyChar message, length delimited. Does not implicitly {@link CMsgKeyChar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgKeyChar
         * @static
         * @param {ICMsgKeyChar} message CMsgKeyChar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgKeyChar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgKeyChar message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgKeyChar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgKeyChar} CMsgKeyChar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgKeyChar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgKeyChar();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.unichar = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgKeyChar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgKeyChar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgKeyChar} CMsgKeyChar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgKeyChar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgKeyChar message.
         * @function verify
         * @memberof CMsgKeyChar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgKeyChar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.unichar != null && message.hasOwnProperty("unichar"))
                if (!$util.isInteger(message.unichar))
                    return "unichar: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgKeyChar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgKeyChar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgKeyChar} CMsgKeyChar
         */
        CMsgKeyChar.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgKeyChar)
                return object;
            var message = new $root.CMsgKeyChar();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.unichar != null)
                message.unichar = object.unichar >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgKeyChar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgKeyChar
         * @static
         * @param {CMsgKeyChar} message CMsgKeyChar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgKeyChar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.unichar = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.unichar != null && message.hasOwnProperty("unichar"))
                object.unichar = message.unichar;
            return object;
        };
    
        /**
         * Converts this CMsgKeyChar to JSON.
         * @function toJSON
         * @memberof CMsgKeyChar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgKeyChar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgKeyChar;
    })();
    
    $root.CMsgMouseDown = (function() {
    
        /**
         * Properties of a CMsgMouseDown.
         * @exports ICMsgMouseDown
         * @interface ICMsgMouseDown
         * @property {number|null} [browser_handle] CMsgMouseDown browser_handle
         * @property {number|null} [mouse_button] CMsgMouseDown mouse_button
         */
    
        /**
         * Constructs a new CMsgMouseDown.
         * @exports CMsgMouseDown
         * @classdesc Represents a CMsgMouseDown.
         * @implements ICMsgMouseDown
         * @constructor
         * @param {ICMsgMouseDown=} [properties] Properties to set
         */
        function CMsgMouseDown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMouseDown browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgMouseDown
         * @instance
         */
        CMsgMouseDown.prototype.browser_handle = 0;
    
        /**
         * CMsgMouseDown mouse_button.
         * @member {number} mouse_button
         * @memberof CMsgMouseDown
         * @instance
         */
        CMsgMouseDown.prototype.mouse_button = 0;
    
        /**
         * Creates a new CMsgMouseDown instance using the specified properties.
         * @function create
         * @memberof CMsgMouseDown
         * @static
         * @param {ICMsgMouseDown=} [properties] Properties to set
         * @returns {CMsgMouseDown} CMsgMouseDown instance
         */
        CMsgMouseDown.create = function create(properties) {
            return new CMsgMouseDown(properties);
        };
    
        /**
         * Encodes the specified CMsgMouseDown message. Does not implicitly {@link CMsgMouseDown.verify|verify} messages.
         * @function encode
         * @memberof CMsgMouseDown
         * @static
         * @param {ICMsgMouseDown} message CMsgMouseDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseDown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.mouse_button != null && Object.hasOwnProperty.call(message, "mouse_button"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mouse_button);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMouseDown message, length delimited. Does not implicitly {@link CMsgMouseDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMouseDown
         * @static
         * @param {ICMsgMouseDown} message CMsgMouseDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMouseDown message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMouseDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMouseDown} CMsgMouseDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMouseDown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.mouse_button = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMouseDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMouseDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMouseDown} CMsgMouseDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseDown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMouseDown message.
         * @function verify
         * @memberof CMsgMouseDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMouseDown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.mouse_button != null && message.hasOwnProperty("mouse_button"))
                if (!$util.isInteger(message.mouse_button))
                    return "mouse_button: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMouseDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMouseDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMouseDown} CMsgMouseDown
         */
        CMsgMouseDown.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMouseDown)
                return object;
            var message = new $root.CMsgMouseDown();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.mouse_button != null)
                message.mouse_button = object.mouse_button >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMouseDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMouseDown
         * @static
         * @param {CMsgMouseDown} message CMsgMouseDown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMouseDown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.mouse_button = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.mouse_button != null && message.hasOwnProperty("mouse_button"))
                object.mouse_button = message.mouse_button;
            return object;
        };
    
        /**
         * Converts this CMsgMouseDown to JSON.
         * @function toJSON
         * @memberof CMsgMouseDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMouseDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMouseDown;
    })();
    
    $root.CMsgMouseUp = (function() {
    
        /**
         * Properties of a CMsgMouseUp.
         * @exports ICMsgMouseUp
         * @interface ICMsgMouseUp
         * @property {number|null} [browser_handle] CMsgMouseUp browser_handle
         * @property {number|null} [mouse_button] CMsgMouseUp mouse_button
         */
    
        /**
         * Constructs a new CMsgMouseUp.
         * @exports CMsgMouseUp
         * @classdesc Represents a CMsgMouseUp.
         * @implements ICMsgMouseUp
         * @constructor
         * @param {ICMsgMouseUp=} [properties] Properties to set
         */
        function CMsgMouseUp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMouseUp browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgMouseUp
         * @instance
         */
        CMsgMouseUp.prototype.browser_handle = 0;
    
        /**
         * CMsgMouseUp mouse_button.
         * @member {number} mouse_button
         * @memberof CMsgMouseUp
         * @instance
         */
        CMsgMouseUp.prototype.mouse_button = 0;
    
        /**
         * Creates a new CMsgMouseUp instance using the specified properties.
         * @function create
         * @memberof CMsgMouseUp
         * @static
         * @param {ICMsgMouseUp=} [properties] Properties to set
         * @returns {CMsgMouseUp} CMsgMouseUp instance
         */
        CMsgMouseUp.create = function create(properties) {
            return new CMsgMouseUp(properties);
        };
    
        /**
         * Encodes the specified CMsgMouseUp message. Does not implicitly {@link CMsgMouseUp.verify|verify} messages.
         * @function encode
         * @memberof CMsgMouseUp
         * @static
         * @param {ICMsgMouseUp} message CMsgMouseUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseUp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.mouse_button != null && Object.hasOwnProperty.call(message, "mouse_button"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mouse_button);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMouseUp message, length delimited. Does not implicitly {@link CMsgMouseUp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMouseUp
         * @static
         * @param {ICMsgMouseUp} message CMsgMouseUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseUp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMouseUp message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMouseUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMouseUp} CMsgMouseUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseUp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMouseUp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.mouse_button = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMouseUp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMouseUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMouseUp} CMsgMouseUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseUp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMouseUp message.
         * @function verify
         * @memberof CMsgMouseUp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMouseUp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.mouse_button != null && message.hasOwnProperty("mouse_button"))
                if (!$util.isInteger(message.mouse_button))
                    return "mouse_button: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMouseUp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMouseUp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMouseUp} CMsgMouseUp
         */
        CMsgMouseUp.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMouseUp)
                return object;
            var message = new $root.CMsgMouseUp();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.mouse_button != null)
                message.mouse_button = object.mouse_button >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMouseUp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMouseUp
         * @static
         * @param {CMsgMouseUp} message CMsgMouseUp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMouseUp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.mouse_button = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.mouse_button != null && message.hasOwnProperty("mouse_button"))
                object.mouse_button = message.mouse_button;
            return object;
        };
    
        /**
         * Converts this CMsgMouseUp to JSON.
         * @function toJSON
         * @memberof CMsgMouseUp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMouseUp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMouseUp;
    })();
    
    $root.CMsgMouseDblClick = (function() {
    
        /**
         * Properties of a CMsgMouseDblClick.
         * @exports ICMsgMouseDblClick
         * @interface ICMsgMouseDblClick
         * @property {number|null} [browser_handle] CMsgMouseDblClick browser_handle
         * @property {number|null} [mouse_button] CMsgMouseDblClick mouse_button
         */
    
        /**
         * Constructs a new CMsgMouseDblClick.
         * @exports CMsgMouseDblClick
         * @classdesc Represents a CMsgMouseDblClick.
         * @implements ICMsgMouseDblClick
         * @constructor
         * @param {ICMsgMouseDblClick=} [properties] Properties to set
         */
        function CMsgMouseDblClick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMouseDblClick browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgMouseDblClick
         * @instance
         */
        CMsgMouseDblClick.prototype.browser_handle = 0;
    
        /**
         * CMsgMouseDblClick mouse_button.
         * @member {number} mouse_button
         * @memberof CMsgMouseDblClick
         * @instance
         */
        CMsgMouseDblClick.prototype.mouse_button = 0;
    
        /**
         * Creates a new CMsgMouseDblClick instance using the specified properties.
         * @function create
         * @memberof CMsgMouseDblClick
         * @static
         * @param {ICMsgMouseDblClick=} [properties] Properties to set
         * @returns {CMsgMouseDblClick} CMsgMouseDblClick instance
         */
        CMsgMouseDblClick.create = function create(properties) {
            return new CMsgMouseDblClick(properties);
        };
    
        /**
         * Encodes the specified CMsgMouseDblClick message. Does not implicitly {@link CMsgMouseDblClick.verify|verify} messages.
         * @function encode
         * @memberof CMsgMouseDblClick
         * @static
         * @param {ICMsgMouseDblClick} message CMsgMouseDblClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseDblClick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.mouse_button != null && Object.hasOwnProperty.call(message, "mouse_button"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mouse_button);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMouseDblClick message, length delimited. Does not implicitly {@link CMsgMouseDblClick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMouseDblClick
         * @static
         * @param {ICMsgMouseDblClick} message CMsgMouseDblClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseDblClick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMouseDblClick message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMouseDblClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMouseDblClick} CMsgMouseDblClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseDblClick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMouseDblClick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.mouse_button = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMouseDblClick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMouseDblClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMouseDblClick} CMsgMouseDblClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseDblClick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMouseDblClick message.
         * @function verify
         * @memberof CMsgMouseDblClick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMouseDblClick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.mouse_button != null && message.hasOwnProperty("mouse_button"))
                if (!$util.isInteger(message.mouse_button))
                    return "mouse_button: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMouseDblClick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMouseDblClick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMouseDblClick} CMsgMouseDblClick
         */
        CMsgMouseDblClick.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMouseDblClick)
                return object;
            var message = new $root.CMsgMouseDblClick();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.mouse_button != null)
                message.mouse_button = object.mouse_button >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMouseDblClick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMouseDblClick
         * @static
         * @param {CMsgMouseDblClick} message CMsgMouseDblClick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMouseDblClick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.mouse_button = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.mouse_button != null && message.hasOwnProperty("mouse_button"))
                object.mouse_button = message.mouse_button;
            return object;
        };
    
        /**
         * Converts this CMsgMouseDblClick to JSON.
         * @function toJSON
         * @memberof CMsgMouseDblClick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMouseDblClick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMouseDblClick;
    })();
    
    $root.CMsgMouseWheel = (function() {
    
        /**
         * Properties of a CMsgMouseWheel.
         * @exports ICMsgMouseWheel
         * @interface ICMsgMouseWheel
         * @property {number|null} [browser_handle] CMsgMouseWheel browser_handle
         * @property {number|null} [delta] CMsgMouseWheel delta
         */
    
        /**
         * Constructs a new CMsgMouseWheel.
         * @exports CMsgMouseWheel
         * @classdesc Represents a CMsgMouseWheel.
         * @implements ICMsgMouseWheel
         * @constructor
         * @param {ICMsgMouseWheel=} [properties] Properties to set
         */
        function CMsgMouseWheel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMouseWheel browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgMouseWheel
         * @instance
         */
        CMsgMouseWheel.prototype.browser_handle = 0;
    
        /**
         * CMsgMouseWheel delta.
         * @member {number} delta
         * @memberof CMsgMouseWheel
         * @instance
         */
        CMsgMouseWheel.prototype.delta = 0;
    
        /**
         * Creates a new CMsgMouseWheel instance using the specified properties.
         * @function create
         * @memberof CMsgMouseWheel
         * @static
         * @param {ICMsgMouseWheel=} [properties] Properties to set
         * @returns {CMsgMouseWheel} CMsgMouseWheel instance
         */
        CMsgMouseWheel.create = function create(properties) {
            return new CMsgMouseWheel(properties);
        };
    
        /**
         * Encodes the specified CMsgMouseWheel message. Does not implicitly {@link CMsgMouseWheel.verify|verify} messages.
         * @function encode
         * @memberof CMsgMouseWheel
         * @static
         * @param {ICMsgMouseWheel} message CMsgMouseWheel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseWheel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.delta != null && Object.hasOwnProperty.call(message, "delta"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.delta);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMouseWheel message, length delimited. Does not implicitly {@link CMsgMouseWheel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMouseWheel
         * @static
         * @param {ICMsgMouseWheel} message CMsgMouseWheel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseWheel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMouseWheel message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMouseWheel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMouseWheel} CMsgMouseWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseWheel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMouseWheel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.delta = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMouseWheel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMouseWheel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMouseWheel} CMsgMouseWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseWheel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMouseWheel message.
         * @function verify
         * @memberof CMsgMouseWheel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMouseWheel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.delta != null && message.hasOwnProperty("delta"))
                if (!$util.isInteger(message.delta))
                    return "delta: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMouseWheel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMouseWheel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMouseWheel} CMsgMouseWheel
         */
        CMsgMouseWheel.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMouseWheel)
                return object;
            var message = new $root.CMsgMouseWheel();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.delta != null)
                message.delta = object.delta | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMouseWheel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMouseWheel
         * @static
         * @param {CMsgMouseWheel} message CMsgMouseWheel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMouseWheel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.delta = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.delta != null && message.hasOwnProperty("delta"))
                object.delta = message.delta;
            return object;
        };
    
        /**
         * Converts this CMsgMouseWheel to JSON.
         * @function toJSON
         * @memberof CMsgMouseWheel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMouseWheel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMouseWheel;
    })();
    
    $root.CMsgMouseMove = (function() {
    
        /**
         * Properties of a CMsgMouseMove.
         * @exports ICMsgMouseMove
         * @interface ICMsgMouseMove
         * @property {number|null} [browser_handle] CMsgMouseMove browser_handle
         * @property {number|null} [x] CMsgMouseMove x
         * @property {number|null} [y] CMsgMouseMove y
         */
    
        /**
         * Constructs a new CMsgMouseMove.
         * @exports CMsgMouseMove
         * @classdesc Represents a CMsgMouseMove.
         * @implements ICMsgMouseMove
         * @constructor
         * @param {ICMsgMouseMove=} [properties] Properties to set
         */
        function CMsgMouseMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMouseMove browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgMouseMove
         * @instance
         */
        CMsgMouseMove.prototype.browser_handle = 0;
    
        /**
         * CMsgMouseMove x.
         * @member {number} x
         * @memberof CMsgMouseMove
         * @instance
         */
        CMsgMouseMove.prototype.x = 0;
    
        /**
         * CMsgMouseMove y.
         * @member {number} y
         * @memberof CMsgMouseMove
         * @instance
         */
        CMsgMouseMove.prototype.y = 0;
    
        /**
         * Creates a new CMsgMouseMove instance using the specified properties.
         * @function create
         * @memberof CMsgMouseMove
         * @static
         * @param {ICMsgMouseMove=} [properties] Properties to set
         * @returns {CMsgMouseMove} CMsgMouseMove instance
         */
        CMsgMouseMove.create = function create(properties) {
            return new CMsgMouseMove(properties);
        };
    
        /**
         * Encodes the specified CMsgMouseMove message. Does not implicitly {@link CMsgMouseMove.verify|verify} messages.
         * @function encode
         * @memberof CMsgMouseMove
         * @static
         * @param {ICMsgMouseMove} message CMsgMouseMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMouseMove message, length delimited. Does not implicitly {@link CMsgMouseMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMouseMove
         * @static
         * @param {ICMsgMouseMove} message CMsgMouseMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMouseMove message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMouseMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMouseMove} CMsgMouseMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMouseMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.int32();
                    break;
                case 3:
                    message.y = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMouseMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMouseMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMouseMove} CMsgMouseMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMouseMove message.
         * @function verify
         * @memberof CMsgMouseMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMouseMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMouseMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMouseMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMouseMove} CMsgMouseMove
         */
        CMsgMouseMove.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMouseMove)
                return object;
            var message = new $root.CMsgMouseMove();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMouseMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMouseMove
         * @static
         * @param {CMsgMouseMove} message CMsgMouseMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMouseMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };
    
        /**
         * Converts this CMsgMouseMove to JSON.
         * @function toJSON
         * @memberof CMsgMouseMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMouseMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMouseMove;
    })();
    
    $root.CMsgMouseLeave = (function() {
    
        /**
         * Properties of a CMsgMouseLeave.
         * @exports ICMsgMouseLeave
         * @interface ICMsgMouseLeave
         * @property {number|null} [browser_handle] CMsgMouseLeave browser_handle
         */
    
        /**
         * Constructs a new CMsgMouseLeave.
         * @exports CMsgMouseLeave
         * @classdesc Represents a CMsgMouseLeave.
         * @implements ICMsgMouseLeave
         * @constructor
         * @param {ICMsgMouseLeave=} [properties] Properties to set
         */
        function CMsgMouseLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMouseLeave browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgMouseLeave
         * @instance
         */
        CMsgMouseLeave.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgMouseLeave instance using the specified properties.
         * @function create
         * @memberof CMsgMouseLeave
         * @static
         * @param {ICMsgMouseLeave=} [properties] Properties to set
         * @returns {CMsgMouseLeave} CMsgMouseLeave instance
         */
        CMsgMouseLeave.create = function create(properties) {
            return new CMsgMouseLeave(properties);
        };
    
        /**
         * Encodes the specified CMsgMouseLeave message. Does not implicitly {@link CMsgMouseLeave.verify|verify} messages.
         * @function encode
         * @memberof CMsgMouseLeave
         * @static
         * @param {ICMsgMouseLeave} message CMsgMouseLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMouseLeave message, length delimited. Does not implicitly {@link CMsgMouseLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMouseLeave
         * @static
         * @param {ICMsgMouseLeave} message CMsgMouseLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMouseLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMouseLeave message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMouseLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMouseLeave} CMsgMouseLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMouseLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMouseLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMouseLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMouseLeave} CMsgMouseLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMouseLeave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMouseLeave message.
         * @function verify
         * @memberof CMsgMouseLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMouseLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMouseLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMouseLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMouseLeave} CMsgMouseLeave
         */
        CMsgMouseLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMouseLeave)
                return object;
            var message = new $root.CMsgMouseLeave();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMouseLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMouseLeave
         * @static
         * @param {CMsgMouseLeave} message CMsgMouseLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMouseLeave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgMouseLeave to JSON.
         * @function toJSON
         * @memberof CMsgMouseLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMouseLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMouseLeave;
    })();
    
    $root.CMsgBrowserCreate = (function() {
    
        /**
         * Properties of a CMsgBrowserCreate.
         * @exports ICMsgBrowserCreate
         * @interface ICMsgBrowserCreate
         * @property {number|null} [request_id] CMsgBrowserCreate request_id
         * @property {boolean|null} [popup] CMsgBrowserCreate popup
         * @property {string|null} [useragent] CMsgBrowserCreate useragent
         * @property {boolean|null} [webkit_scrollbars] CMsgBrowserCreate webkit_scrollbars
         * @property {string|null} [user_css] CMsgBrowserCreate user_css
         */
    
        /**
         * Constructs a new CMsgBrowserCreate.
         * @exports CMsgBrowserCreate
         * @classdesc Represents a CMsgBrowserCreate.
         * @implements ICMsgBrowserCreate
         * @constructor
         * @param {ICMsgBrowserCreate=} [properties] Properties to set
         */
        function CMsgBrowserCreate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgBrowserCreate request_id.
         * @member {number} request_id
         * @memberof CMsgBrowserCreate
         * @instance
         */
        CMsgBrowserCreate.prototype.request_id = 0;
    
        /**
         * CMsgBrowserCreate popup.
         * @member {boolean} popup
         * @memberof CMsgBrowserCreate
         * @instance
         */
        CMsgBrowserCreate.prototype.popup = false;
    
        /**
         * CMsgBrowserCreate useragent.
         * @member {string} useragent
         * @memberof CMsgBrowserCreate
         * @instance
         */
        CMsgBrowserCreate.prototype.useragent = "";
    
        /**
         * CMsgBrowserCreate webkit_scrollbars.
         * @member {boolean} webkit_scrollbars
         * @memberof CMsgBrowserCreate
         * @instance
         */
        CMsgBrowserCreate.prototype.webkit_scrollbars = false;
    
        /**
         * CMsgBrowserCreate user_css.
         * @member {string} user_css
         * @memberof CMsgBrowserCreate
         * @instance
         */
        CMsgBrowserCreate.prototype.user_css = "";
    
        /**
         * Creates a new CMsgBrowserCreate instance using the specified properties.
         * @function create
         * @memberof CMsgBrowserCreate
         * @static
         * @param {ICMsgBrowserCreate=} [properties] Properties to set
         * @returns {CMsgBrowserCreate} CMsgBrowserCreate instance
         */
        CMsgBrowserCreate.create = function create(properties) {
            return new CMsgBrowserCreate(properties);
        };
    
        /**
         * Encodes the specified CMsgBrowserCreate message. Does not implicitly {@link CMsgBrowserCreate.verify|verify} messages.
         * @function encode
         * @memberof CMsgBrowserCreate
         * @static
         * @param {ICMsgBrowserCreate} message CMsgBrowserCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.request_id != null && Object.hasOwnProperty.call(message, "request_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.request_id);
            if (message.popup != null && Object.hasOwnProperty.call(message, "popup"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.popup);
            if (message.useragent != null && Object.hasOwnProperty.call(message, "useragent"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.useragent);
            if (message.webkit_scrollbars != null && Object.hasOwnProperty.call(message, "webkit_scrollbars"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.webkit_scrollbars);
            if (message.user_css != null && Object.hasOwnProperty.call(message, "user_css"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.user_css);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgBrowserCreate message, length delimited. Does not implicitly {@link CMsgBrowserCreate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgBrowserCreate
         * @static
         * @param {ICMsgBrowserCreate} message CMsgBrowserCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserCreate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgBrowserCreate message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgBrowserCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgBrowserCreate} CMsgBrowserCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgBrowserCreate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.request_id = reader.uint32();
                    break;
                case 2:
                    message.popup = reader.bool();
                    break;
                case 3:
                    message.useragent = reader.string();
                    break;
                case 4:
                    message.webkit_scrollbars = reader.bool();
                    break;
                case 5:
                    message.user_css = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgBrowserCreate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgBrowserCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgBrowserCreate} CMsgBrowserCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserCreate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgBrowserCreate message.
         * @function verify
         * @memberof CMsgBrowserCreate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgBrowserCreate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                if (!$util.isInteger(message.request_id))
                    return "request_id: integer expected";
            if (message.popup != null && message.hasOwnProperty("popup"))
                if (typeof message.popup !== "boolean")
                    return "popup: boolean expected";
            if (message.useragent != null && message.hasOwnProperty("useragent"))
                if (!$util.isString(message.useragent))
                    return "useragent: string expected";
            if (message.webkit_scrollbars != null && message.hasOwnProperty("webkit_scrollbars"))
                if (typeof message.webkit_scrollbars !== "boolean")
                    return "webkit_scrollbars: boolean expected";
            if (message.user_css != null && message.hasOwnProperty("user_css"))
                if (!$util.isString(message.user_css))
                    return "user_css: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgBrowserCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgBrowserCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgBrowserCreate} CMsgBrowserCreate
         */
        CMsgBrowserCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgBrowserCreate)
                return object;
            var message = new $root.CMsgBrowserCreate();
            if (object.request_id != null)
                message.request_id = object.request_id >>> 0;
            if (object.popup != null)
                message.popup = Boolean(object.popup);
            if (object.useragent != null)
                message.useragent = String(object.useragent);
            if (object.webkit_scrollbars != null)
                message.webkit_scrollbars = Boolean(object.webkit_scrollbars);
            if (object.user_css != null)
                message.user_css = String(object.user_css);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgBrowserCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgBrowserCreate
         * @static
         * @param {CMsgBrowserCreate} message CMsgBrowserCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgBrowserCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.request_id = 0;
                object.popup = false;
                object.useragent = "";
                object.webkit_scrollbars = false;
                object.user_css = "";
            }
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = message.request_id;
            if (message.popup != null && message.hasOwnProperty("popup"))
                object.popup = message.popup;
            if (message.useragent != null && message.hasOwnProperty("useragent"))
                object.useragent = message.useragent;
            if (message.webkit_scrollbars != null && message.hasOwnProperty("webkit_scrollbars"))
                object.webkit_scrollbars = message.webkit_scrollbars;
            if (message.user_css != null && message.hasOwnProperty("user_css"))
                object.user_css = message.user_css;
            return object;
        };
    
        /**
         * Converts this CMsgBrowserCreate to JSON.
         * @function toJSON
         * @memberof CMsgBrowserCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgBrowserCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgBrowserCreate;
    })();
    
    $root.CMsgBrowserCreateResponse = (function() {
    
        /**
         * Properties of a CMsgBrowserCreateResponse.
         * @exports ICMsgBrowserCreateResponse
         * @interface ICMsgBrowserCreateResponse
         * @property {number|null} [browser_handle] CMsgBrowserCreateResponse browser_handle
         * @property {number|null} [request_id] CMsgBrowserCreateResponse request_id
         */
    
        /**
         * Constructs a new CMsgBrowserCreateResponse.
         * @exports CMsgBrowserCreateResponse
         * @classdesc Represents a CMsgBrowserCreateResponse.
         * @implements ICMsgBrowserCreateResponse
         * @constructor
         * @param {ICMsgBrowserCreateResponse=} [properties] Properties to set
         */
        function CMsgBrowserCreateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgBrowserCreateResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgBrowserCreateResponse
         * @instance
         */
        CMsgBrowserCreateResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgBrowserCreateResponse request_id.
         * @member {number} request_id
         * @memberof CMsgBrowserCreateResponse
         * @instance
         */
        CMsgBrowserCreateResponse.prototype.request_id = 0;
    
        /**
         * Creates a new CMsgBrowserCreateResponse instance using the specified properties.
         * @function create
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {ICMsgBrowserCreateResponse=} [properties] Properties to set
         * @returns {CMsgBrowserCreateResponse} CMsgBrowserCreateResponse instance
         */
        CMsgBrowserCreateResponse.create = function create(properties) {
            return new CMsgBrowserCreateResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgBrowserCreateResponse message. Does not implicitly {@link CMsgBrowserCreateResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {ICMsgBrowserCreateResponse} message CMsgBrowserCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserCreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.request_id != null && Object.hasOwnProperty.call(message, "request_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.request_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgBrowserCreateResponse message, length delimited. Does not implicitly {@link CMsgBrowserCreateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {ICMsgBrowserCreateResponse} message CMsgBrowserCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserCreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgBrowserCreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgBrowserCreateResponse} CMsgBrowserCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserCreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgBrowserCreateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.request_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgBrowserCreateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgBrowserCreateResponse} CMsgBrowserCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserCreateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgBrowserCreateResponse message.
         * @function verify
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgBrowserCreateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                if (!$util.isInteger(message.request_id))
                    return "request_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgBrowserCreateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgBrowserCreateResponse} CMsgBrowserCreateResponse
         */
        CMsgBrowserCreateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgBrowserCreateResponse)
                return object;
            var message = new $root.CMsgBrowserCreateResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.request_id != null)
                message.request_id = object.request_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgBrowserCreateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgBrowserCreateResponse
         * @static
         * @param {CMsgBrowserCreateResponse} message CMsgBrowserCreateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgBrowserCreateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.request_id = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = message.request_id;
            return object;
        };
    
        /**
         * Converts this CMsgBrowserCreateResponse to JSON.
         * @function toJSON
         * @memberof CMsgBrowserCreateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgBrowserCreateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgBrowserCreateResponse;
    })();
    
    $root.CMsgBrowserRemove = (function() {
    
        /**
         * Properties of a CMsgBrowserRemove.
         * @exports ICMsgBrowserRemove
         * @interface ICMsgBrowserRemove
         * @property {number|null} [browser_handle] CMsgBrowserRemove browser_handle
         */
    
        /**
         * Constructs a new CMsgBrowserRemove.
         * @exports CMsgBrowserRemove
         * @classdesc Represents a CMsgBrowserRemove.
         * @implements ICMsgBrowserRemove
         * @constructor
         * @param {ICMsgBrowserRemove=} [properties] Properties to set
         */
        function CMsgBrowserRemove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgBrowserRemove browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgBrowserRemove
         * @instance
         */
        CMsgBrowserRemove.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgBrowserRemove instance using the specified properties.
         * @function create
         * @memberof CMsgBrowserRemove
         * @static
         * @param {ICMsgBrowserRemove=} [properties] Properties to set
         * @returns {CMsgBrowserRemove} CMsgBrowserRemove instance
         */
        CMsgBrowserRemove.create = function create(properties) {
            return new CMsgBrowserRemove(properties);
        };
    
        /**
         * Encodes the specified CMsgBrowserRemove message. Does not implicitly {@link CMsgBrowserRemove.verify|verify} messages.
         * @function encode
         * @memberof CMsgBrowserRemove
         * @static
         * @param {ICMsgBrowserRemove} message CMsgBrowserRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserRemove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgBrowserRemove message, length delimited. Does not implicitly {@link CMsgBrowserRemove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgBrowserRemove
         * @static
         * @param {ICMsgBrowserRemove} message CMsgBrowserRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserRemove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgBrowserRemove message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgBrowserRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgBrowserRemove} CMsgBrowserRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserRemove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgBrowserRemove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgBrowserRemove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgBrowserRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgBrowserRemove} CMsgBrowserRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserRemove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgBrowserRemove message.
         * @function verify
         * @memberof CMsgBrowserRemove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgBrowserRemove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgBrowserRemove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgBrowserRemove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgBrowserRemove} CMsgBrowserRemove
         */
        CMsgBrowserRemove.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgBrowserRemove)
                return object;
            var message = new $root.CMsgBrowserRemove();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgBrowserRemove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgBrowserRemove
         * @static
         * @param {CMsgBrowserRemove} message CMsgBrowserRemove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgBrowserRemove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgBrowserRemove to JSON.
         * @function toJSON
         * @memberof CMsgBrowserRemove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgBrowserRemove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgBrowserRemove;
    })();
    
    $root.CMsgBrowserErrorStrings = (function() {
    
        /**
         * Properties of a CMsgBrowserErrorStrings.
         * @exports ICMsgBrowserErrorStrings
         * @interface ICMsgBrowserErrorStrings
         * @property {number|null} [browser_handle] CMsgBrowserErrorStrings browser_handle
         * @property {string|null} [title] CMsgBrowserErrorStrings title
         * @property {string|null} [header] CMsgBrowserErrorStrings header
         * @property {string|null} [cache_miss] CMsgBrowserErrorStrings cache_miss
         * @property {string|null} [bad_url] CMsgBrowserErrorStrings bad_url
         * @property {string|null} [connection_problem] CMsgBrowserErrorStrings connection_problem
         * @property {string|null} [proxy_problem] CMsgBrowserErrorStrings proxy_problem
         * @property {string|null} [unknown] CMsgBrowserErrorStrings unknown
         */
    
        /**
         * Constructs a new CMsgBrowserErrorStrings.
         * @exports CMsgBrowserErrorStrings
         * @classdesc Represents a CMsgBrowserErrorStrings.
         * @implements ICMsgBrowserErrorStrings
         * @constructor
         * @param {ICMsgBrowserErrorStrings=} [properties] Properties to set
         */
        function CMsgBrowserErrorStrings(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgBrowserErrorStrings browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.browser_handle = 0;
    
        /**
         * CMsgBrowserErrorStrings title.
         * @member {string} title
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.title = "";
    
        /**
         * CMsgBrowserErrorStrings header.
         * @member {string} header
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.header = "";
    
        /**
         * CMsgBrowserErrorStrings cache_miss.
         * @member {string} cache_miss
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.cache_miss = "";
    
        /**
         * CMsgBrowserErrorStrings bad_url.
         * @member {string} bad_url
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.bad_url = "";
    
        /**
         * CMsgBrowserErrorStrings connection_problem.
         * @member {string} connection_problem
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.connection_problem = "";
    
        /**
         * CMsgBrowserErrorStrings proxy_problem.
         * @member {string} proxy_problem
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.proxy_problem = "";
    
        /**
         * CMsgBrowserErrorStrings unknown.
         * @member {string} unknown
         * @memberof CMsgBrowserErrorStrings
         * @instance
         */
        CMsgBrowserErrorStrings.prototype.unknown = "";
    
        /**
         * Creates a new CMsgBrowserErrorStrings instance using the specified properties.
         * @function create
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {ICMsgBrowserErrorStrings=} [properties] Properties to set
         * @returns {CMsgBrowserErrorStrings} CMsgBrowserErrorStrings instance
         */
        CMsgBrowserErrorStrings.create = function create(properties) {
            return new CMsgBrowserErrorStrings(properties);
        };
    
        /**
         * Encodes the specified CMsgBrowserErrorStrings message. Does not implicitly {@link CMsgBrowserErrorStrings.verify|verify} messages.
         * @function encode
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {ICMsgBrowserErrorStrings} message CMsgBrowserErrorStrings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserErrorStrings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.header);
            if (message.cache_miss != null && Object.hasOwnProperty.call(message, "cache_miss"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.cache_miss);
            if (message.bad_url != null && Object.hasOwnProperty.call(message, "bad_url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.bad_url);
            if (message.connection_problem != null && Object.hasOwnProperty.call(message, "connection_problem"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.connection_problem);
            if (message.proxy_problem != null && Object.hasOwnProperty.call(message, "proxy_problem"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.proxy_problem);
            if (message.unknown != null && Object.hasOwnProperty.call(message, "unknown"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.unknown);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgBrowserErrorStrings message, length delimited. Does not implicitly {@link CMsgBrowserErrorStrings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {ICMsgBrowserErrorStrings} message CMsgBrowserErrorStrings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserErrorStrings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgBrowserErrorStrings message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgBrowserErrorStrings} CMsgBrowserErrorStrings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserErrorStrings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgBrowserErrorStrings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.header = reader.string();
                    break;
                case 4:
                    message.cache_miss = reader.string();
                    break;
                case 5:
                    message.bad_url = reader.string();
                    break;
                case 6:
                    message.connection_problem = reader.string();
                    break;
                case 7:
                    message.proxy_problem = reader.string();
                    break;
                case 8:
                    message.unknown = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgBrowserErrorStrings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgBrowserErrorStrings} CMsgBrowserErrorStrings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserErrorStrings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgBrowserErrorStrings message.
         * @function verify
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgBrowserErrorStrings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.header != null && message.hasOwnProperty("header"))
                if (!$util.isString(message.header))
                    return "header: string expected";
            if (message.cache_miss != null && message.hasOwnProperty("cache_miss"))
                if (!$util.isString(message.cache_miss))
                    return "cache_miss: string expected";
            if (message.bad_url != null && message.hasOwnProperty("bad_url"))
                if (!$util.isString(message.bad_url))
                    return "bad_url: string expected";
            if (message.connection_problem != null && message.hasOwnProperty("connection_problem"))
                if (!$util.isString(message.connection_problem))
                    return "connection_problem: string expected";
            if (message.proxy_problem != null && message.hasOwnProperty("proxy_problem"))
                if (!$util.isString(message.proxy_problem))
                    return "proxy_problem: string expected";
            if (message.unknown != null && message.hasOwnProperty("unknown"))
                if (!$util.isString(message.unknown))
                    return "unknown: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgBrowserErrorStrings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgBrowserErrorStrings} CMsgBrowserErrorStrings
         */
        CMsgBrowserErrorStrings.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgBrowserErrorStrings)
                return object;
            var message = new $root.CMsgBrowserErrorStrings();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.header != null)
                message.header = String(object.header);
            if (object.cache_miss != null)
                message.cache_miss = String(object.cache_miss);
            if (object.bad_url != null)
                message.bad_url = String(object.bad_url);
            if (object.connection_problem != null)
                message.connection_problem = String(object.connection_problem);
            if (object.proxy_problem != null)
                message.proxy_problem = String(object.proxy_problem);
            if (object.unknown != null)
                message.unknown = String(object.unknown);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgBrowserErrorStrings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgBrowserErrorStrings
         * @static
         * @param {CMsgBrowserErrorStrings} message CMsgBrowserErrorStrings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgBrowserErrorStrings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.title = "";
                object.header = "";
                object.cache_miss = "";
                object.bad_url = "";
                object.connection_problem = "";
                object.proxy_problem = "";
                object.unknown = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = message.header;
            if (message.cache_miss != null && message.hasOwnProperty("cache_miss"))
                object.cache_miss = message.cache_miss;
            if (message.bad_url != null && message.hasOwnProperty("bad_url"))
                object.bad_url = message.bad_url;
            if (message.connection_problem != null && message.hasOwnProperty("connection_problem"))
                object.connection_problem = message.connection_problem;
            if (message.proxy_problem != null && message.hasOwnProperty("proxy_problem"))
                object.proxy_problem = message.proxy_problem;
            if (message.unknown != null && message.hasOwnProperty("unknown"))
                object.unknown = message.unknown;
            return object;
        };
    
        /**
         * Converts this CMsgBrowserErrorStrings to JSON.
         * @function toJSON
         * @memberof CMsgBrowserErrorStrings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgBrowserErrorStrings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgBrowserErrorStrings;
    })();
    
    $root.CMsgBrowserSize = (function() {
    
        /**
         * Properties of a CMsgBrowserSize.
         * @exports ICMsgBrowserSize
         * @interface ICMsgBrowserSize
         * @property {number|null} [browser_handle] CMsgBrowserSize browser_handle
         * @property {number|null} [width] CMsgBrowserSize width
         * @property {number|null} [height] CMsgBrowserSize height
         */
    
        /**
         * Constructs a new CMsgBrowserSize.
         * @exports CMsgBrowserSize
         * @classdesc Represents a CMsgBrowserSize.
         * @implements ICMsgBrowserSize
         * @constructor
         * @param {ICMsgBrowserSize=} [properties] Properties to set
         */
        function CMsgBrowserSize(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgBrowserSize browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgBrowserSize
         * @instance
         */
        CMsgBrowserSize.prototype.browser_handle = 0;
    
        /**
         * CMsgBrowserSize width.
         * @member {number} width
         * @memberof CMsgBrowserSize
         * @instance
         */
        CMsgBrowserSize.prototype.width = 0;
    
        /**
         * CMsgBrowserSize height.
         * @member {number} height
         * @memberof CMsgBrowserSize
         * @instance
         */
        CMsgBrowserSize.prototype.height = 0;
    
        /**
         * Creates a new CMsgBrowserSize instance using the specified properties.
         * @function create
         * @memberof CMsgBrowserSize
         * @static
         * @param {ICMsgBrowserSize=} [properties] Properties to set
         * @returns {CMsgBrowserSize} CMsgBrowserSize instance
         */
        CMsgBrowserSize.create = function create(properties) {
            return new CMsgBrowserSize(properties);
        };
    
        /**
         * Encodes the specified CMsgBrowserSize message. Does not implicitly {@link CMsgBrowserSize.verify|verify} messages.
         * @function encode
         * @memberof CMsgBrowserSize
         * @static
         * @param {ICMsgBrowserSize} message CMsgBrowserSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserSize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.height);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgBrowserSize message, length delimited. Does not implicitly {@link CMsgBrowserSize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgBrowserSize
         * @static
         * @param {ICMsgBrowserSize} message CMsgBrowserSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserSize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgBrowserSize message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgBrowserSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgBrowserSize} CMsgBrowserSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserSize.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgBrowserSize();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.width = reader.uint32();
                    break;
                case 3:
                    message.height = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgBrowserSize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgBrowserSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgBrowserSize} CMsgBrowserSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserSize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgBrowserSize message.
         * @function verify
         * @memberof CMsgBrowserSize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgBrowserSize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgBrowserSize message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgBrowserSize
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgBrowserSize} CMsgBrowserSize
         */
        CMsgBrowserSize.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgBrowserSize)
                return object;
            var message = new $root.CMsgBrowserSize();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgBrowserSize message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgBrowserSize
         * @static
         * @param {CMsgBrowserSize} message CMsgBrowserSize
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgBrowserSize.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.width = 0;
                object.height = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };
    
        /**
         * Converts this CMsgBrowserSize to JSON.
         * @function toJSON
         * @memberof CMsgBrowserSize
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgBrowserSize.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgBrowserSize;
    })();
    
    $root.CMsgBrowserPosition = (function() {
    
        /**
         * Properties of a CMsgBrowserPosition.
         * @exports ICMsgBrowserPosition
         * @interface ICMsgBrowserPosition
         * @property {number|null} [browser_handle] CMsgBrowserPosition browser_handle
         * @property {number|null} [x] CMsgBrowserPosition x
         * @property {number|null} [y] CMsgBrowserPosition y
         */
    
        /**
         * Constructs a new CMsgBrowserPosition.
         * @exports CMsgBrowserPosition
         * @classdesc Represents a CMsgBrowserPosition.
         * @implements ICMsgBrowserPosition
         * @constructor
         * @param {ICMsgBrowserPosition=} [properties] Properties to set
         */
        function CMsgBrowserPosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgBrowserPosition browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgBrowserPosition
         * @instance
         */
        CMsgBrowserPosition.prototype.browser_handle = 0;
    
        /**
         * CMsgBrowserPosition x.
         * @member {number} x
         * @memberof CMsgBrowserPosition
         * @instance
         */
        CMsgBrowserPosition.prototype.x = 0;
    
        /**
         * CMsgBrowserPosition y.
         * @member {number} y
         * @memberof CMsgBrowserPosition
         * @instance
         */
        CMsgBrowserPosition.prototype.y = 0;
    
        /**
         * Creates a new CMsgBrowserPosition instance using the specified properties.
         * @function create
         * @memberof CMsgBrowserPosition
         * @static
         * @param {ICMsgBrowserPosition=} [properties] Properties to set
         * @returns {CMsgBrowserPosition} CMsgBrowserPosition instance
         */
        CMsgBrowserPosition.create = function create(properties) {
            return new CMsgBrowserPosition(properties);
        };
    
        /**
         * Encodes the specified CMsgBrowserPosition message. Does not implicitly {@link CMsgBrowserPosition.verify|verify} messages.
         * @function encode
         * @memberof CMsgBrowserPosition
         * @static
         * @param {ICMsgBrowserPosition} message CMsgBrowserPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgBrowserPosition message, length delimited. Does not implicitly {@link CMsgBrowserPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgBrowserPosition
         * @static
         * @param {ICMsgBrowserPosition} message CMsgBrowserPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgBrowserPosition message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgBrowserPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgBrowserPosition} CMsgBrowserPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgBrowserPosition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.uint32();
                    break;
                case 3:
                    message.y = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgBrowserPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgBrowserPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgBrowserPosition} CMsgBrowserPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgBrowserPosition message.
         * @function verify
         * @memberof CMsgBrowserPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgBrowserPosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgBrowserPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgBrowserPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgBrowserPosition} CMsgBrowserPosition
         */
        CMsgBrowserPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgBrowserPosition)
                return object;
            var message = new $root.CMsgBrowserPosition();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgBrowserPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgBrowserPosition
         * @static
         * @param {CMsgBrowserPosition} message CMsgBrowserPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgBrowserPosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };
    
        /**
         * Converts this CMsgBrowserPosition to JSON.
         * @function toJSON
         * @memberof CMsgBrowserPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgBrowserPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgBrowserPosition;
    })();
    
    $root.CMsgPostURL = (function() {
    
        /**
         * Properties of a CMsgPostURL.
         * @exports ICMsgPostURL
         * @interface ICMsgPostURL
         * @property {number|null} [browser_handle] CMsgPostURL browser_handle
         * @property {string|null} [url] CMsgPostURL url
         * @property {string|null} [post] CMsgPostURL post
         * @property {number|null} [pageserial] CMsgPostURL pageserial
         */
    
        /**
         * Constructs a new CMsgPostURL.
         * @exports CMsgPostURL
         * @classdesc Represents a CMsgPostURL.
         * @implements ICMsgPostURL
         * @constructor
         * @param {ICMsgPostURL=} [properties] Properties to set
         */
        function CMsgPostURL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPostURL browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgPostURL
         * @instance
         */
        CMsgPostURL.prototype.browser_handle = 0;
    
        /**
         * CMsgPostURL url.
         * @member {string} url
         * @memberof CMsgPostURL
         * @instance
         */
        CMsgPostURL.prototype.url = "";
    
        /**
         * CMsgPostURL post.
         * @member {string} post
         * @memberof CMsgPostURL
         * @instance
         */
        CMsgPostURL.prototype.post = "";
    
        /**
         * CMsgPostURL pageserial.
         * @member {number} pageserial
         * @memberof CMsgPostURL
         * @instance
         */
        CMsgPostURL.prototype.pageserial = 0;
    
        /**
         * Creates a new CMsgPostURL instance using the specified properties.
         * @function create
         * @memberof CMsgPostURL
         * @static
         * @param {ICMsgPostURL=} [properties] Properties to set
         * @returns {CMsgPostURL} CMsgPostURL instance
         */
        CMsgPostURL.create = function create(properties) {
            return new CMsgPostURL(properties);
        };
    
        /**
         * Encodes the specified CMsgPostURL message. Does not implicitly {@link CMsgPostURL.verify|verify} messages.
         * @function encode
         * @memberof CMsgPostURL
         * @static
         * @param {ICMsgPostURL} message CMsgPostURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPostURL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.post);
            if (message.pageserial != null && Object.hasOwnProperty.call(message, "pageserial"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pageserial);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPostURL message, length delimited. Does not implicitly {@link CMsgPostURL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPostURL
         * @static
         * @param {ICMsgPostURL} message CMsgPostURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPostURL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPostURL message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPostURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPostURL} CMsgPostURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPostURL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPostURL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.post = reader.string();
                    break;
                case 4:
                    message.pageserial = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgPostURL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPostURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPostURL} CMsgPostURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPostURL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPostURL message.
         * @function verify
         * @memberof CMsgPostURL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPostURL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.post != null && message.hasOwnProperty("post"))
                if (!$util.isString(message.post))
                    return "post: string expected";
            if (message.pageserial != null && message.hasOwnProperty("pageserial"))
                if (!$util.isInteger(message.pageserial))
                    return "pageserial: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgPostURL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPostURL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPostURL} CMsgPostURL
         */
        CMsgPostURL.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPostURL)
                return object;
            var message = new $root.CMsgPostURL();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.post != null)
                message.post = String(object.post);
            if (object.pageserial != null)
                message.pageserial = object.pageserial >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPostURL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPostURL
         * @static
         * @param {CMsgPostURL} message CMsgPostURL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPostURL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.post = "";
                object.pageserial = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.post != null && message.hasOwnProperty("post"))
                object.post = message.post;
            if (message.pageserial != null && message.hasOwnProperty("pageserial"))
                object.pageserial = message.pageserial;
            return object;
        };
    
        /**
         * Converts this CMsgPostURL to JSON.
         * @function toJSON
         * @memberof CMsgPostURL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPostURL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgPostURL;
    })();
    
    $root.CMsgAddHeader = (function() {
    
        /**
         * Properties of a CMsgAddHeader.
         * @exports ICMsgAddHeader
         * @interface ICMsgAddHeader
         * @property {number|null} [browser_handle] CMsgAddHeader browser_handle
         * @property {string|null} [key] CMsgAddHeader key
         * @property {string|null} [value] CMsgAddHeader value
         */
    
        /**
         * Constructs a new CMsgAddHeader.
         * @exports CMsgAddHeader
         * @classdesc Represents a CMsgAddHeader.
         * @implements ICMsgAddHeader
         * @constructor
         * @param {ICMsgAddHeader=} [properties] Properties to set
         */
        function CMsgAddHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAddHeader browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgAddHeader
         * @instance
         */
        CMsgAddHeader.prototype.browser_handle = 0;
    
        /**
         * CMsgAddHeader key.
         * @member {string} key
         * @memberof CMsgAddHeader
         * @instance
         */
        CMsgAddHeader.prototype.key = "";
    
        /**
         * CMsgAddHeader value.
         * @member {string} value
         * @memberof CMsgAddHeader
         * @instance
         */
        CMsgAddHeader.prototype.value = "";
    
        /**
         * Creates a new CMsgAddHeader instance using the specified properties.
         * @function create
         * @memberof CMsgAddHeader
         * @static
         * @param {ICMsgAddHeader=} [properties] Properties to set
         * @returns {CMsgAddHeader} CMsgAddHeader instance
         */
        CMsgAddHeader.create = function create(properties) {
            return new CMsgAddHeader(properties);
        };
    
        /**
         * Encodes the specified CMsgAddHeader message. Does not implicitly {@link CMsgAddHeader.verify|verify} messages.
         * @function encode
         * @memberof CMsgAddHeader
         * @static
         * @param {ICMsgAddHeader} message CMsgAddHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAddHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAddHeader message, length delimited. Does not implicitly {@link CMsgAddHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAddHeader
         * @static
         * @param {ICMsgAddHeader} message CMsgAddHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAddHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAddHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAddHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAddHeader} CMsgAddHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAddHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAddHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAddHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAddHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAddHeader} CMsgAddHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAddHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAddHeader message.
         * @function verify
         * @memberof CMsgAddHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAddHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgAddHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAddHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAddHeader} CMsgAddHeader
         */
        CMsgAddHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAddHeader)
                return object;
            var message = new $root.CMsgAddHeader();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAddHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAddHeader
         * @static
         * @param {CMsgAddHeader} message CMsgAddHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAddHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.key = "";
                object.value = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
    
        /**
         * Converts this CMsgAddHeader to JSON.
         * @function toJSON
         * @memberof CMsgAddHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAddHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAddHeader;
    })();
    
    $root.CMsgStopLoad = (function() {
    
        /**
         * Properties of a CMsgStopLoad.
         * @exports ICMsgStopLoad
         * @interface ICMsgStopLoad
         * @property {number|null} [browser_handle] CMsgStopLoad browser_handle
         */
    
        /**
         * Constructs a new CMsgStopLoad.
         * @exports CMsgStopLoad
         * @classdesc Represents a CMsgStopLoad.
         * @implements ICMsgStopLoad
         * @constructor
         * @param {ICMsgStopLoad=} [properties] Properties to set
         */
        function CMsgStopLoad(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgStopLoad browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgStopLoad
         * @instance
         */
        CMsgStopLoad.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgStopLoad instance using the specified properties.
         * @function create
         * @memberof CMsgStopLoad
         * @static
         * @param {ICMsgStopLoad=} [properties] Properties to set
         * @returns {CMsgStopLoad} CMsgStopLoad instance
         */
        CMsgStopLoad.create = function create(properties) {
            return new CMsgStopLoad(properties);
        };
    
        /**
         * Encodes the specified CMsgStopLoad message. Does not implicitly {@link CMsgStopLoad.verify|verify} messages.
         * @function encode
         * @memberof CMsgStopLoad
         * @static
         * @param {ICMsgStopLoad} message CMsgStopLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStopLoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgStopLoad message, length delimited. Does not implicitly {@link CMsgStopLoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgStopLoad
         * @static
         * @param {ICMsgStopLoad} message CMsgStopLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStopLoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgStopLoad message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgStopLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgStopLoad} CMsgStopLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStopLoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgStopLoad();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgStopLoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgStopLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgStopLoad} CMsgStopLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStopLoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgStopLoad message.
         * @function verify
         * @memberof CMsgStopLoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgStopLoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgStopLoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgStopLoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgStopLoad} CMsgStopLoad
         */
        CMsgStopLoad.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgStopLoad)
                return object;
            var message = new $root.CMsgStopLoad();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgStopLoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgStopLoad
         * @static
         * @param {CMsgStopLoad} message CMsgStopLoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgStopLoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgStopLoad to JSON.
         * @function toJSON
         * @memberof CMsgStopLoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgStopLoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgStopLoad;
    })();
    
    $root.CMsgReload = (function() {
    
        /**
         * Properties of a CMsgReload.
         * @exports ICMsgReload
         * @interface ICMsgReload
         * @property {number|null} [browser_handle] CMsgReload browser_handle
         */
    
        /**
         * Constructs a new CMsgReload.
         * @exports CMsgReload
         * @classdesc Represents a CMsgReload.
         * @implements ICMsgReload
         * @constructor
         * @param {ICMsgReload=} [properties] Properties to set
         */
        function CMsgReload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgReload browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgReload
         * @instance
         */
        CMsgReload.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgReload instance using the specified properties.
         * @function create
         * @memberof CMsgReload
         * @static
         * @param {ICMsgReload=} [properties] Properties to set
         * @returns {CMsgReload} CMsgReload instance
         */
        CMsgReload.create = function create(properties) {
            return new CMsgReload(properties);
        };
    
        /**
         * Encodes the specified CMsgReload message. Does not implicitly {@link CMsgReload.verify|verify} messages.
         * @function encode
         * @memberof CMsgReload
         * @static
         * @param {ICMsgReload} message CMsgReload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgReload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgReload message, length delimited. Does not implicitly {@link CMsgReload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgReload
         * @static
         * @param {ICMsgReload} message CMsgReload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgReload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgReload message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgReload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgReload} CMsgReload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgReload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgReload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgReload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgReload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgReload} CMsgReload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgReload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgReload message.
         * @function verify
         * @memberof CMsgReload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgReload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgReload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgReload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgReload} CMsgReload
         */
        CMsgReload.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgReload)
                return object;
            var message = new $root.CMsgReload();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgReload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgReload
         * @static
         * @param {CMsgReload} message CMsgReload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgReload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgReload to JSON.
         * @function toJSON
         * @memberof CMsgReload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgReload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgReload;
    })();
    
    $root.CMsgGoForward = (function() {
    
        /**
         * Properties of a CMsgGoForward.
         * @exports ICMsgGoForward
         * @interface ICMsgGoForward
         * @property {number|null} [browser_handle] CMsgGoForward browser_handle
         */
    
        /**
         * Constructs a new CMsgGoForward.
         * @exports CMsgGoForward
         * @classdesc Represents a CMsgGoForward.
         * @implements ICMsgGoForward
         * @constructor
         * @param {ICMsgGoForward=} [properties] Properties to set
         */
        function CMsgGoForward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGoForward browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgGoForward
         * @instance
         */
        CMsgGoForward.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgGoForward instance using the specified properties.
         * @function create
         * @memberof CMsgGoForward
         * @static
         * @param {ICMsgGoForward=} [properties] Properties to set
         * @returns {CMsgGoForward} CMsgGoForward instance
         */
        CMsgGoForward.create = function create(properties) {
            return new CMsgGoForward(properties);
        };
    
        /**
         * Encodes the specified CMsgGoForward message. Does not implicitly {@link CMsgGoForward.verify|verify} messages.
         * @function encode
         * @memberof CMsgGoForward
         * @static
         * @param {ICMsgGoForward} message CMsgGoForward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGoForward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGoForward message, length delimited. Does not implicitly {@link CMsgGoForward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGoForward
         * @static
         * @param {ICMsgGoForward} message CMsgGoForward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGoForward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGoForward message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGoForward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGoForward} CMsgGoForward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGoForward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGoForward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGoForward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGoForward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGoForward} CMsgGoForward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGoForward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGoForward message.
         * @function verify
         * @memberof CMsgGoForward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGoForward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGoForward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGoForward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGoForward} CMsgGoForward
         */
        CMsgGoForward.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGoForward)
                return object;
            var message = new $root.CMsgGoForward();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGoForward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGoForward
         * @static
         * @param {CMsgGoForward} message CMsgGoForward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGoForward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgGoForward to JSON.
         * @function toJSON
         * @memberof CMsgGoForward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGoForward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGoForward;
    })();
    
    $root.CMsgGoBack = (function() {
    
        /**
         * Properties of a CMsgGoBack.
         * @exports ICMsgGoBack
         * @interface ICMsgGoBack
         * @property {number|null} [browser_handle] CMsgGoBack browser_handle
         */
    
        /**
         * Constructs a new CMsgGoBack.
         * @exports CMsgGoBack
         * @classdesc Represents a CMsgGoBack.
         * @implements ICMsgGoBack
         * @constructor
         * @param {ICMsgGoBack=} [properties] Properties to set
         */
        function CMsgGoBack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGoBack browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgGoBack
         * @instance
         */
        CMsgGoBack.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgGoBack instance using the specified properties.
         * @function create
         * @memberof CMsgGoBack
         * @static
         * @param {ICMsgGoBack=} [properties] Properties to set
         * @returns {CMsgGoBack} CMsgGoBack instance
         */
        CMsgGoBack.create = function create(properties) {
            return new CMsgGoBack(properties);
        };
    
        /**
         * Encodes the specified CMsgGoBack message. Does not implicitly {@link CMsgGoBack.verify|verify} messages.
         * @function encode
         * @memberof CMsgGoBack
         * @static
         * @param {ICMsgGoBack} message CMsgGoBack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGoBack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGoBack message, length delimited. Does not implicitly {@link CMsgGoBack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGoBack
         * @static
         * @param {ICMsgGoBack} message CMsgGoBack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGoBack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGoBack message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGoBack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGoBack} CMsgGoBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGoBack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGoBack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGoBack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGoBack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGoBack} CMsgGoBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGoBack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGoBack message.
         * @function verify
         * @memberof CMsgGoBack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGoBack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGoBack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGoBack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGoBack} CMsgGoBack
         */
        CMsgGoBack.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGoBack)
                return object;
            var message = new $root.CMsgGoBack();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGoBack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGoBack
         * @static
         * @param {CMsgGoBack} message CMsgGoBack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGoBack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgGoBack to JSON.
         * @function toJSON
         * @memberof CMsgGoBack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGoBack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGoBack;
    })();
    
    $root.CMsgClearHistory = (function() {
    
        /**
         * Properties of a CMsgClearHistory.
         * @exports ICMsgClearHistory
         * @interface ICMsgClearHistory
         * @property {number|null} [browser_handle] CMsgClearHistory browser_handle
         */
    
        /**
         * Constructs a new CMsgClearHistory.
         * @exports CMsgClearHistory
         * @classdesc Represents a CMsgClearHistory.
         * @implements ICMsgClearHistory
         * @constructor
         * @param {ICMsgClearHistory=} [properties] Properties to set
         */
        function CMsgClearHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClearHistory browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgClearHistory
         * @instance
         */
        CMsgClearHistory.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgClearHistory instance using the specified properties.
         * @function create
         * @memberof CMsgClearHistory
         * @static
         * @param {ICMsgClearHistory=} [properties] Properties to set
         * @returns {CMsgClearHistory} CMsgClearHistory instance
         */
        CMsgClearHistory.create = function create(properties) {
            return new CMsgClearHistory(properties);
        };
    
        /**
         * Encodes the specified CMsgClearHistory message. Does not implicitly {@link CMsgClearHistory.verify|verify} messages.
         * @function encode
         * @memberof CMsgClearHistory
         * @static
         * @param {ICMsgClearHistory} message CMsgClearHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClearHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClearHistory message, length delimited. Does not implicitly {@link CMsgClearHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClearHistory
         * @static
         * @param {ICMsgClearHistory} message CMsgClearHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClearHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClearHistory message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClearHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClearHistory} CMsgClearHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClearHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClearHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClearHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClearHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClearHistory} CMsgClearHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClearHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClearHistory message.
         * @function verify
         * @memberof CMsgClearHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClearHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClearHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClearHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClearHistory} CMsgClearHistory
         */
        CMsgClearHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClearHistory)
                return object;
            var message = new $root.CMsgClearHistory();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClearHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClearHistory
         * @static
         * @param {CMsgClearHistory} message CMsgClearHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClearHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgClearHistory to JSON.
         * @function toJSON
         * @memberof CMsgClearHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClearHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClearHistory;
    })();
    
    $root.CMsgCopy = (function() {
    
        /**
         * Properties of a CMsgCopy.
         * @exports ICMsgCopy
         * @interface ICMsgCopy
         * @property {number|null} [browser_handle] CMsgCopy browser_handle
         */
    
        /**
         * Constructs a new CMsgCopy.
         * @exports CMsgCopy
         * @classdesc Represents a CMsgCopy.
         * @implements ICMsgCopy
         * @constructor
         * @param {ICMsgCopy=} [properties] Properties to set
         */
        function CMsgCopy(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgCopy browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgCopy
         * @instance
         */
        CMsgCopy.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgCopy instance using the specified properties.
         * @function create
         * @memberof CMsgCopy
         * @static
         * @param {ICMsgCopy=} [properties] Properties to set
         * @returns {CMsgCopy} CMsgCopy instance
         */
        CMsgCopy.create = function create(properties) {
            return new CMsgCopy(properties);
        };
    
        /**
         * Encodes the specified CMsgCopy message. Does not implicitly {@link CMsgCopy.verify|verify} messages.
         * @function encode
         * @memberof CMsgCopy
         * @static
         * @param {ICMsgCopy} message CMsgCopy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCopy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgCopy message, length delimited. Does not implicitly {@link CMsgCopy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgCopy
         * @static
         * @param {ICMsgCopy} message CMsgCopy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCopy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgCopy message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgCopy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgCopy} CMsgCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCopy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgCopy();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgCopy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgCopy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgCopy} CMsgCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCopy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgCopy message.
         * @function verify
         * @memberof CMsgCopy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgCopy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgCopy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgCopy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgCopy} CMsgCopy
         */
        CMsgCopy.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgCopy)
                return object;
            var message = new $root.CMsgCopy();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgCopy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgCopy
         * @static
         * @param {CMsgCopy} message CMsgCopy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgCopy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgCopy to JSON.
         * @function toJSON
         * @memberof CMsgCopy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgCopy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgCopy;
    })();
    
    $root.CMsgPaste = (function() {
    
        /**
         * Properties of a CMsgPaste.
         * @exports ICMsgPaste
         * @interface ICMsgPaste
         * @property {number|null} [browser_handle] CMsgPaste browser_handle
         */
    
        /**
         * Constructs a new CMsgPaste.
         * @exports CMsgPaste
         * @classdesc Represents a CMsgPaste.
         * @implements ICMsgPaste
         * @constructor
         * @param {ICMsgPaste=} [properties] Properties to set
         */
        function CMsgPaste(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPaste browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgPaste
         * @instance
         */
        CMsgPaste.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgPaste instance using the specified properties.
         * @function create
         * @memberof CMsgPaste
         * @static
         * @param {ICMsgPaste=} [properties] Properties to set
         * @returns {CMsgPaste} CMsgPaste instance
         */
        CMsgPaste.create = function create(properties) {
            return new CMsgPaste(properties);
        };
    
        /**
         * Encodes the specified CMsgPaste message. Does not implicitly {@link CMsgPaste.verify|verify} messages.
         * @function encode
         * @memberof CMsgPaste
         * @static
         * @param {ICMsgPaste} message CMsgPaste message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPaste.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPaste message, length delimited. Does not implicitly {@link CMsgPaste.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPaste
         * @static
         * @param {ICMsgPaste} message CMsgPaste message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPaste.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPaste message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPaste
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPaste} CMsgPaste
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPaste.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPaste();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgPaste message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPaste
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPaste} CMsgPaste
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPaste.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPaste message.
         * @function verify
         * @memberof CMsgPaste
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPaste.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgPaste message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPaste
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPaste} CMsgPaste
         */
        CMsgPaste.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPaste)
                return object;
            var message = new $root.CMsgPaste();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPaste message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPaste
         * @static
         * @param {CMsgPaste} message CMsgPaste
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPaste.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgPaste to JSON.
         * @function toJSON
         * @memberof CMsgPaste
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPaste.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgPaste;
    })();
    
    $root.CMsgExecuteJavaScript = (function() {
    
        /**
         * Properties of a CMsgExecuteJavaScript.
         * @exports ICMsgExecuteJavaScript
         * @interface ICMsgExecuteJavaScript
         * @property {number|null} [browser_handle] CMsgExecuteJavaScript browser_handle
         * @property {string|null} [script] CMsgExecuteJavaScript script
         */
    
        /**
         * Constructs a new CMsgExecuteJavaScript.
         * @exports CMsgExecuteJavaScript
         * @classdesc Represents a CMsgExecuteJavaScript.
         * @implements ICMsgExecuteJavaScript
         * @constructor
         * @param {ICMsgExecuteJavaScript=} [properties] Properties to set
         */
        function CMsgExecuteJavaScript(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgExecuteJavaScript browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgExecuteJavaScript
         * @instance
         */
        CMsgExecuteJavaScript.prototype.browser_handle = 0;
    
        /**
         * CMsgExecuteJavaScript script.
         * @member {string} script
         * @memberof CMsgExecuteJavaScript
         * @instance
         */
        CMsgExecuteJavaScript.prototype.script = "";
    
        /**
         * Creates a new CMsgExecuteJavaScript instance using the specified properties.
         * @function create
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {ICMsgExecuteJavaScript=} [properties] Properties to set
         * @returns {CMsgExecuteJavaScript} CMsgExecuteJavaScript instance
         */
        CMsgExecuteJavaScript.create = function create(properties) {
            return new CMsgExecuteJavaScript(properties);
        };
    
        /**
         * Encodes the specified CMsgExecuteJavaScript message. Does not implicitly {@link CMsgExecuteJavaScript.verify|verify} messages.
         * @function encode
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {ICMsgExecuteJavaScript} message CMsgExecuteJavaScript message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgExecuteJavaScript.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.script != null && Object.hasOwnProperty.call(message, "script"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.script);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgExecuteJavaScript message, length delimited. Does not implicitly {@link CMsgExecuteJavaScript.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {ICMsgExecuteJavaScript} message CMsgExecuteJavaScript message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgExecuteJavaScript.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgExecuteJavaScript message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgExecuteJavaScript} CMsgExecuteJavaScript
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgExecuteJavaScript.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgExecuteJavaScript();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.script = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgExecuteJavaScript message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgExecuteJavaScript} CMsgExecuteJavaScript
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgExecuteJavaScript.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgExecuteJavaScript message.
         * @function verify
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgExecuteJavaScript.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.script != null && message.hasOwnProperty("script"))
                if (!$util.isString(message.script))
                    return "script: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgExecuteJavaScript message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgExecuteJavaScript} CMsgExecuteJavaScript
         */
        CMsgExecuteJavaScript.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgExecuteJavaScript)
                return object;
            var message = new $root.CMsgExecuteJavaScript();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.script != null)
                message.script = String(object.script);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgExecuteJavaScript message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgExecuteJavaScript
         * @static
         * @param {CMsgExecuteJavaScript} message CMsgExecuteJavaScript
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgExecuteJavaScript.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.script = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.script != null && message.hasOwnProperty("script"))
                object.script = message.script;
            return object;
        };
    
        /**
         * Converts this CMsgExecuteJavaScript to JSON.
         * @function toJSON
         * @memberof CMsgExecuteJavaScript
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgExecuteJavaScript.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgExecuteJavaScript;
    })();
    
    $root.CMsgSetFocus = (function() {
    
        /**
         * Properties of a CMsgSetFocus.
         * @exports ICMsgSetFocus
         * @interface ICMsgSetFocus
         * @property {number|null} [browser_handle] CMsgSetFocus browser_handle
         * @property {boolean|null} [focus] CMsgSetFocus focus
         */
    
        /**
         * Constructs a new CMsgSetFocus.
         * @exports CMsgSetFocus
         * @classdesc Represents a CMsgSetFocus.
         * @implements ICMsgSetFocus
         * @constructor
         * @param {ICMsgSetFocus=} [properties] Properties to set
         */
        function CMsgSetFocus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetFocus browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSetFocus
         * @instance
         */
        CMsgSetFocus.prototype.browser_handle = 0;
    
        /**
         * CMsgSetFocus focus.
         * @member {boolean} focus
         * @memberof CMsgSetFocus
         * @instance
         */
        CMsgSetFocus.prototype.focus = false;
    
        /**
         * Creates a new CMsgSetFocus instance using the specified properties.
         * @function create
         * @memberof CMsgSetFocus
         * @static
         * @param {ICMsgSetFocus=} [properties] Properties to set
         * @returns {CMsgSetFocus} CMsgSetFocus instance
         */
        CMsgSetFocus.create = function create(properties) {
            return new CMsgSetFocus(properties);
        };
    
        /**
         * Encodes the specified CMsgSetFocus message. Does not implicitly {@link CMsgSetFocus.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetFocus
         * @static
         * @param {ICMsgSetFocus} message CMsgSetFocus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetFocus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.focus != null && Object.hasOwnProperty.call(message, "focus"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.focus);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetFocus message, length delimited. Does not implicitly {@link CMsgSetFocus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetFocus
         * @static
         * @param {ICMsgSetFocus} message CMsgSetFocus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetFocus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetFocus message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetFocus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetFocus} CMsgSetFocus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetFocus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetFocus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.focus = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetFocus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetFocus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetFocus} CMsgSetFocus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetFocus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetFocus message.
         * @function verify
         * @memberof CMsgSetFocus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetFocus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.focus != null && message.hasOwnProperty("focus"))
                if (typeof message.focus !== "boolean")
                    return "focus: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetFocus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetFocus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetFocus} CMsgSetFocus
         */
        CMsgSetFocus.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetFocus)
                return object;
            var message = new $root.CMsgSetFocus();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.focus != null)
                message.focus = Boolean(object.focus);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetFocus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetFocus
         * @static
         * @param {CMsgSetFocus} message CMsgSetFocus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetFocus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.focus = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.focus != null && message.hasOwnProperty("focus"))
                object.focus = message.focus;
            return object;
        };
    
        /**
         * Converts this CMsgSetFocus to JSON.
         * @function toJSON
         * @memberof CMsgSetFocus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetFocus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetFocus;
    })();
    
    $root.CMsgHorizontalScrollBarSize = (function() {
    
        /**
         * Properties of a CMsgHorizontalScrollBarSize.
         * @exports ICMsgHorizontalScrollBarSize
         * @interface ICMsgHorizontalScrollBarSize
         * @property {number|null} [browser_handle] CMsgHorizontalScrollBarSize browser_handle
         */
    
        /**
         * Constructs a new CMsgHorizontalScrollBarSize.
         * @exports CMsgHorizontalScrollBarSize
         * @classdesc Represents a CMsgHorizontalScrollBarSize.
         * @implements ICMsgHorizontalScrollBarSize
         * @constructor
         * @param {ICMsgHorizontalScrollBarSize=} [properties] Properties to set
         */
        function CMsgHorizontalScrollBarSize(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgHorizontalScrollBarSize browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgHorizontalScrollBarSize
         * @instance
         */
        CMsgHorizontalScrollBarSize.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgHorizontalScrollBarSize instance using the specified properties.
         * @function create
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {ICMsgHorizontalScrollBarSize=} [properties] Properties to set
         * @returns {CMsgHorizontalScrollBarSize} CMsgHorizontalScrollBarSize instance
         */
        CMsgHorizontalScrollBarSize.create = function create(properties) {
            return new CMsgHorizontalScrollBarSize(properties);
        };
    
        /**
         * Encodes the specified CMsgHorizontalScrollBarSize message. Does not implicitly {@link CMsgHorizontalScrollBarSize.verify|verify} messages.
         * @function encode
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {ICMsgHorizontalScrollBarSize} message CMsgHorizontalScrollBarSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHorizontalScrollBarSize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgHorizontalScrollBarSize message, length delimited. Does not implicitly {@link CMsgHorizontalScrollBarSize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {ICMsgHorizontalScrollBarSize} message CMsgHorizontalScrollBarSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHorizontalScrollBarSize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgHorizontalScrollBarSize message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgHorizontalScrollBarSize} CMsgHorizontalScrollBarSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHorizontalScrollBarSize.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgHorizontalScrollBarSize();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgHorizontalScrollBarSize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgHorizontalScrollBarSize} CMsgHorizontalScrollBarSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHorizontalScrollBarSize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgHorizontalScrollBarSize message.
         * @function verify
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgHorizontalScrollBarSize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgHorizontalScrollBarSize message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgHorizontalScrollBarSize} CMsgHorizontalScrollBarSize
         */
        CMsgHorizontalScrollBarSize.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgHorizontalScrollBarSize)
                return object;
            var message = new $root.CMsgHorizontalScrollBarSize();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgHorizontalScrollBarSize message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgHorizontalScrollBarSize
         * @static
         * @param {CMsgHorizontalScrollBarSize} message CMsgHorizontalScrollBarSize
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgHorizontalScrollBarSize.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgHorizontalScrollBarSize to JSON.
         * @function toJSON
         * @memberof CMsgHorizontalScrollBarSize
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgHorizontalScrollBarSize.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgHorizontalScrollBarSize;
    })();
    
    $root.CMsgHorizontalScrollBarSizeResponse = (function() {
    
        /**
         * Properties of a CMsgHorizontalScrollBarSizeResponse.
         * @exports ICMsgHorizontalScrollBarSizeResponse
         * @interface ICMsgHorizontalScrollBarSizeResponse
         * @property {number|null} [browser_handle] CMsgHorizontalScrollBarSizeResponse browser_handle
         * @property {number|null} [x] CMsgHorizontalScrollBarSizeResponse x
         * @property {number|null} [y] CMsgHorizontalScrollBarSizeResponse y
         * @property {number|null} [wide] CMsgHorizontalScrollBarSizeResponse wide
         * @property {number|null} [tall] CMsgHorizontalScrollBarSizeResponse tall
         * @property {number|null} [scroll_max] CMsgHorizontalScrollBarSizeResponse scroll_max
         * @property {number|null} [scroll] CMsgHorizontalScrollBarSizeResponse scroll
         * @property {number|null} [zoom] CMsgHorizontalScrollBarSizeResponse zoom
         * @property {boolean|null} [visible] CMsgHorizontalScrollBarSizeResponse visible
         */
    
        /**
         * Constructs a new CMsgHorizontalScrollBarSizeResponse.
         * @exports CMsgHorizontalScrollBarSizeResponse
         * @classdesc Represents a CMsgHorizontalScrollBarSizeResponse.
         * @implements ICMsgHorizontalScrollBarSizeResponse
         * @constructor
         * @param {ICMsgHorizontalScrollBarSizeResponse=} [properties] Properties to set
         */
        function CMsgHorizontalScrollBarSizeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgHorizontalScrollBarSizeResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse x.
         * @member {number} x
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.x = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse y.
         * @member {number} y
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.y = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse wide.
         * @member {number} wide
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.wide = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse tall.
         * @member {number} tall
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.tall = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse scroll_max.
         * @member {number} scroll_max
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.scroll_max = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse scroll.
         * @member {number} scroll
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.scroll = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse zoom.
         * @member {number} zoom
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.zoom = 0;
    
        /**
         * CMsgHorizontalScrollBarSizeResponse visible.
         * @member {boolean} visible
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.visible = false;
    
        /**
         * Creates a new CMsgHorizontalScrollBarSizeResponse instance using the specified properties.
         * @function create
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {ICMsgHorizontalScrollBarSizeResponse=} [properties] Properties to set
         * @returns {CMsgHorizontalScrollBarSizeResponse} CMsgHorizontalScrollBarSizeResponse instance
         */
        CMsgHorizontalScrollBarSizeResponse.create = function create(properties) {
            return new CMsgHorizontalScrollBarSizeResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgHorizontalScrollBarSizeResponse message. Does not implicitly {@link CMsgHorizontalScrollBarSizeResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {ICMsgHorizontalScrollBarSizeResponse} message CMsgHorizontalScrollBarSizeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHorizontalScrollBarSizeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y);
            if (message.wide != null && Object.hasOwnProperty.call(message, "wide"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.wide);
            if (message.tall != null && Object.hasOwnProperty.call(message, "tall"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.tall);
            if (message.scroll_max != null && Object.hasOwnProperty.call(message, "scroll_max"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.scroll_max);
            if (message.scroll != null && Object.hasOwnProperty.call(message, "scroll"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.scroll);
            if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.zoom);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.visible);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgHorizontalScrollBarSizeResponse message, length delimited. Does not implicitly {@link CMsgHorizontalScrollBarSizeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {ICMsgHorizontalScrollBarSizeResponse} message CMsgHorizontalScrollBarSizeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHorizontalScrollBarSizeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgHorizontalScrollBarSizeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgHorizontalScrollBarSizeResponse} CMsgHorizontalScrollBarSizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHorizontalScrollBarSizeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgHorizontalScrollBarSizeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.uint32();
                    break;
                case 3:
                    message.y = reader.uint32();
                    break;
                case 4:
                    message.wide = reader.uint32();
                    break;
                case 5:
                    message.tall = reader.uint32();
                    break;
                case 6:
                    message.scroll_max = reader.uint32();
                    break;
                case 7:
                    message.scroll = reader.uint32();
                    break;
                case 8:
                    message.zoom = reader.float();
                    break;
                case 9:
                    message.visible = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgHorizontalScrollBarSizeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgHorizontalScrollBarSizeResponse} CMsgHorizontalScrollBarSizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHorizontalScrollBarSizeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgHorizontalScrollBarSizeResponse message.
         * @function verify
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgHorizontalScrollBarSizeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.wide != null && message.hasOwnProperty("wide"))
                if (!$util.isInteger(message.wide))
                    return "wide: integer expected";
            if (message.tall != null && message.hasOwnProperty("tall"))
                if (!$util.isInteger(message.tall))
                    return "tall: integer expected";
            if (message.scroll_max != null && message.hasOwnProperty("scroll_max"))
                if (!$util.isInteger(message.scroll_max))
                    return "scroll_max: integer expected";
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                if (!$util.isInteger(message.scroll))
                    return "scroll: integer expected";
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                if (typeof message.zoom !== "number")
                    return "zoom: number expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgHorizontalScrollBarSizeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgHorizontalScrollBarSizeResponse} CMsgHorizontalScrollBarSizeResponse
         */
        CMsgHorizontalScrollBarSizeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgHorizontalScrollBarSizeResponse)
                return object;
            var message = new $root.CMsgHorizontalScrollBarSizeResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            if (object.wide != null)
                message.wide = object.wide >>> 0;
            if (object.tall != null)
                message.tall = object.tall >>> 0;
            if (object.scroll_max != null)
                message.scroll_max = object.scroll_max >>> 0;
            if (object.scroll != null)
                message.scroll = object.scroll >>> 0;
            if (object.zoom != null)
                message.zoom = Number(object.zoom);
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgHorizontalScrollBarSizeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @static
         * @param {CMsgHorizontalScrollBarSizeResponse} message CMsgHorizontalScrollBarSizeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgHorizontalScrollBarSizeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
                object.wide = 0;
                object.tall = 0;
                object.scroll_max = 0;
                object.scroll = 0;
                object.zoom = 0;
                object.visible = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.wide != null && message.hasOwnProperty("wide"))
                object.wide = message.wide;
            if (message.tall != null && message.hasOwnProperty("tall"))
                object.tall = message.tall;
            if (message.scroll_max != null && message.hasOwnProperty("scroll_max"))
                object.scroll_max = message.scroll_max;
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                object.scroll = message.scroll;
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                object.zoom = options.json && !isFinite(message.zoom) ? String(message.zoom) : message.zoom;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            return object;
        };
    
        /**
         * Converts this CMsgHorizontalScrollBarSizeResponse to JSON.
         * @function toJSON
         * @memberof CMsgHorizontalScrollBarSizeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgHorizontalScrollBarSizeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgHorizontalScrollBarSizeResponse;
    })();
    
    $root.CMsgVerticalScrollBarSize = (function() {
    
        /**
         * Properties of a CMsgVerticalScrollBarSize.
         * @exports ICMsgVerticalScrollBarSize
         * @interface ICMsgVerticalScrollBarSize
         * @property {number|null} [browser_handle] CMsgVerticalScrollBarSize browser_handle
         */
    
        /**
         * Constructs a new CMsgVerticalScrollBarSize.
         * @exports CMsgVerticalScrollBarSize
         * @classdesc Represents a CMsgVerticalScrollBarSize.
         * @implements ICMsgVerticalScrollBarSize
         * @constructor
         * @param {ICMsgVerticalScrollBarSize=} [properties] Properties to set
         */
        function CMsgVerticalScrollBarSize(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgVerticalScrollBarSize browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgVerticalScrollBarSize
         * @instance
         */
        CMsgVerticalScrollBarSize.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgVerticalScrollBarSize instance using the specified properties.
         * @function create
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {ICMsgVerticalScrollBarSize=} [properties] Properties to set
         * @returns {CMsgVerticalScrollBarSize} CMsgVerticalScrollBarSize instance
         */
        CMsgVerticalScrollBarSize.create = function create(properties) {
            return new CMsgVerticalScrollBarSize(properties);
        };
    
        /**
         * Encodes the specified CMsgVerticalScrollBarSize message. Does not implicitly {@link CMsgVerticalScrollBarSize.verify|verify} messages.
         * @function encode
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {ICMsgVerticalScrollBarSize} message CMsgVerticalScrollBarSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVerticalScrollBarSize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgVerticalScrollBarSize message, length delimited. Does not implicitly {@link CMsgVerticalScrollBarSize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {ICMsgVerticalScrollBarSize} message CMsgVerticalScrollBarSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVerticalScrollBarSize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgVerticalScrollBarSize message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgVerticalScrollBarSize} CMsgVerticalScrollBarSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVerticalScrollBarSize.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVerticalScrollBarSize();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgVerticalScrollBarSize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgVerticalScrollBarSize} CMsgVerticalScrollBarSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVerticalScrollBarSize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgVerticalScrollBarSize message.
         * @function verify
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgVerticalScrollBarSize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgVerticalScrollBarSize message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgVerticalScrollBarSize} CMsgVerticalScrollBarSize
         */
        CMsgVerticalScrollBarSize.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgVerticalScrollBarSize)
                return object;
            var message = new $root.CMsgVerticalScrollBarSize();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgVerticalScrollBarSize message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgVerticalScrollBarSize
         * @static
         * @param {CMsgVerticalScrollBarSize} message CMsgVerticalScrollBarSize
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgVerticalScrollBarSize.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgVerticalScrollBarSize to JSON.
         * @function toJSON
         * @memberof CMsgVerticalScrollBarSize
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgVerticalScrollBarSize.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgVerticalScrollBarSize;
    })();
    
    $root.CMsgVerticalScrollBarSizeResponse = (function() {
    
        /**
         * Properties of a CMsgVerticalScrollBarSizeResponse.
         * @exports ICMsgVerticalScrollBarSizeResponse
         * @interface ICMsgVerticalScrollBarSizeResponse
         * @property {number|null} [browser_handle] CMsgVerticalScrollBarSizeResponse browser_handle
         * @property {number|null} [x] CMsgVerticalScrollBarSizeResponse x
         * @property {number|null} [y] CMsgVerticalScrollBarSizeResponse y
         * @property {number|null} [wide] CMsgVerticalScrollBarSizeResponse wide
         * @property {number|null} [tall] CMsgVerticalScrollBarSizeResponse tall
         * @property {number|null} [scroll_max] CMsgVerticalScrollBarSizeResponse scroll_max
         * @property {number|null} [scroll] CMsgVerticalScrollBarSizeResponse scroll
         * @property {number|null} [zoom] CMsgVerticalScrollBarSizeResponse zoom
         * @property {boolean|null} [visible] CMsgVerticalScrollBarSizeResponse visible
         */
    
        /**
         * Constructs a new CMsgVerticalScrollBarSizeResponse.
         * @exports CMsgVerticalScrollBarSizeResponse
         * @classdesc Represents a CMsgVerticalScrollBarSizeResponse.
         * @implements ICMsgVerticalScrollBarSizeResponse
         * @constructor
         * @param {ICMsgVerticalScrollBarSizeResponse=} [properties] Properties to set
         */
        function CMsgVerticalScrollBarSizeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgVerticalScrollBarSizeResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse x.
         * @member {number} x
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.x = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse y.
         * @member {number} y
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.y = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse wide.
         * @member {number} wide
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.wide = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse tall.
         * @member {number} tall
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.tall = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse scroll_max.
         * @member {number} scroll_max
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.scroll_max = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse scroll.
         * @member {number} scroll
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.scroll = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse zoom.
         * @member {number} zoom
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.zoom = 0;
    
        /**
         * CMsgVerticalScrollBarSizeResponse visible.
         * @member {boolean} visible
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         */
        CMsgVerticalScrollBarSizeResponse.prototype.visible = false;
    
        /**
         * Creates a new CMsgVerticalScrollBarSizeResponse instance using the specified properties.
         * @function create
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {ICMsgVerticalScrollBarSizeResponse=} [properties] Properties to set
         * @returns {CMsgVerticalScrollBarSizeResponse} CMsgVerticalScrollBarSizeResponse instance
         */
        CMsgVerticalScrollBarSizeResponse.create = function create(properties) {
            return new CMsgVerticalScrollBarSizeResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgVerticalScrollBarSizeResponse message. Does not implicitly {@link CMsgVerticalScrollBarSizeResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {ICMsgVerticalScrollBarSizeResponse} message CMsgVerticalScrollBarSizeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVerticalScrollBarSizeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y);
            if (message.wide != null && Object.hasOwnProperty.call(message, "wide"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.wide);
            if (message.tall != null && Object.hasOwnProperty.call(message, "tall"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.tall);
            if (message.scroll_max != null && Object.hasOwnProperty.call(message, "scroll_max"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.scroll_max);
            if (message.scroll != null && Object.hasOwnProperty.call(message, "scroll"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.scroll);
            if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.zoom);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.visible);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgVerticalScrollBarSizeResponse message, length delimited. Does not implicitly {@link CMsgVerticalScrollBarSizeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {ICMsgVerticalScrollBarSizeResponse} message CMsgVerticalScrollBarSizeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgVerticalScrollBarSizeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgVerticalScrollBarSizeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgVerticalScrollBarSizeResponse} CMsgVerticalScrollBarSizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVerticalScrollBarSizeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgVerticalScrollBarSizeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.uint32();
                    break;
                case 3:
                    message.y = reader.uint32();
                    break;
                case 4:
                    message.wide = reader.uint32();
                    break;
                case 5:
                    message.tall = reader.uint32();
                    break;
                case 6:
                    message.scroll_max = reader.uint32();
                    break;
                case 7:
                    message.scroll = reader.uint32();
                    break;
                case 8:
                    message.zoom = reader.float();
                    break;
                case 9:
                    message.visible = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgVerticalScrollBarSizeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgVerticalScrollBarSizeResponse} CMsgVerticalScrollBarSizeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgVerticalScrollBarSizeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgVerticalScrollBarSizeResponse message.
         * @function verify
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgVerticalScrollBarSizeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.wide != null && message.hasOwnProperty("wide"))
                if (!$util.isInteger(message.wide))
                    return "wide: integer expected";
            if (message.tall != null && message.hasOwnProperty("tall"))
                if (!$util.isInteger(message.tall))
                    return "tall: integer expected";
            if (message.scroll_max != null && message.hasOwnProperty("scroll_max"))
                if (!$util.isInteger(message.scroll_max))
                    return "scroll_max: integer expected";
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                if (!$util.isInteger(message.scroll))
                    return "scroll: integer expected";
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                if (typeof message.zoom !== "number")
                    return "zoom: number expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgVerticalScrollBarSizeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgVerticalScrollBarSizeResponse} CMsgVerticalScrollBarSizeResponse
         */
        CMsgVerticalScrollBarSizeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgVerticalScrollBarSizeResponse)
                return object;
            var message = new $root.CMsgVerticalScrollBarSizeResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            if (object.wide != null)
                message.wide = object.wide >>> 0;
            if (object.tall != null)
                message.tall = object.tall >>> 0;
            if (object.scroll_max != null)
                message.scroll_max = object.scroll_max >>> 0;
            if (object.scroll != null)
                message.scroll = object.scroll >>> 0;
            if (object.zoom != null)
                message.zoom = Number(object.zoom);
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgVerticalScrollBarSizeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @static
         * @param {CMsgVerticalScrollBarSizeResponse} message CMsgVerticalScrollBarSizeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgVerticalScrollBarSizeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
                object.wide = 0;
                object.tall = 0;
                object.scroll_max = 0;
                object.scroll = 0;
                object.zoom = 0;
                object.visible = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.wide != null && message.hasOwnProperty("wide"))
                object.wide = message.wide;
            if (message.tall != null && message.hasOwnProperty("tall"))
                object.tall = message.tall;
            if (message.scroll_max != null && message.hasOwnProperty("scroll_max"))
                object.scroll_max = message.scroll_max;
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                object.scroll = message.scroll;
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                object.zoom = options.json && !isFinite(message.zoom) ? String(message.zoom) : message.zoom;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            return object;
        };
    
        /**
         * Converts this CMsgVerticalScrollBarSizeResponse to JSON.
         * @function toJSON
         * @memberof CMsgVerticalScrollBarSizeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgVerticalScrollBarSizeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgVerticalScrollBarSizeResponse;
    })();
    
    $root.CMsgFind = (function() {
    
        /**
         * Properties of a CMsgFind.
         * @exports ICMsgFind
         * @interface ICMsgFind
         * @property {number|null} [browser_handle] CMsgFind browser_handle
         * @property {string|null} [find] CMsgFind find
         * @property {boolean|null} [infind] CMsgFind infind
         * @property {boolean|null} [reverse] CMsgFind reverse
         */
    
        /**
         * Constructs a new CMsgFind.
         * @exports CMsgFind
         * @classdesc Represents a CMsgFind.
         * @implements ICMsgFind
         * @constructor
         * @param {ICMsgFind=} [properties] Properties to set
         */
        function CMsgFind(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFind browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgFind
         * @instance
         */
        CMsgFind.prototype.browser_handle = 0;
    
        /**
         * CMsgFind find.
         * @member {string} find
         * @memberof CMsgFind
         * @instance
         */
        CMsgFind.prototype.find = "";
    
        /**
         * CMsgFind infind.
         * @member {boolean} infind
         * @memberof CMsgFind
         * @instance
         */
        CMsgFind.prototype.infind = false;
    
        /**
         * CMsgFind reverse.
         * @member {boolean} reverse
         * @memberof CMsgFind
         * @instance
         */
        CMsgFind.prototype.reverse = false;
    
        /**
         * Creates a new CMsgFind instance using the specified properties.
         * @function create
         * @memberof CMsgFind
         * @static
         * @param {ICMsgFind=} [properties] Properties to set
         * @returns {CMsgFind} CMsgFind instance
         */
        CMsgFind.create = function create(properties) {
            return new CMsgFind(properties);
        };
    
        /**
         * Encodes the specified CMsgFind message. Does not implicitly {@link CMsgFind.verify|verify} messages.
         * @function encode
         * @memberof CMsgFind
         * @static
         * @param {ICMsgFind} message CMsgFind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFind.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.find != null && Object.hasOwnProperty.call(message, "find"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.find);
            if (message.infind != null && Object.hasOwnProperty.call(message, "infind"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.infind);
            if (message.reverse != null && Object.hasOwnProperty.call(message, "reverse"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.reverse);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFind message, length delimited. Does not implicitly {@link CMsgFind.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFind
         * @static
         * @param {ICMsgFind} message CMsgFind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFind.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFind message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFind} CMsgFind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFind.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFind();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.find = reader.string();
                    break;
                case 3:
                    message.infind = reader.bool();
                    break;
                case 4:
                    message.reverse = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFind message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFind} CMsgFind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFind.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFind message.
         * @function verify
         * @memberof CMsgFind
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFind.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.find != null && message.hasOwnProperty("find"))
                if (!$util.isString(message.find))
                    return "find: string expected";
            if (message.infind != null && message.hasOwnProperty("infind"))
                if (typeof message.infind !== "boolean")
                    return "infind: boolean expected";
            if (message.reverse != null && message.hasOwnProperty("reverse"))
                if (typeof message.reverse !== "boolean")
                    return "reverse: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgFind message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFind
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFind} CMsgFind
         */
        CMsgFind.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFind)
                return object;
            var message = new $root.CMsgFind();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.find != null)
                message.find = String(object.find);
            if (object.infind != null)
                message.infind = Boolean(object.infind);
            if (object.reverse != null)
                message.reverse = Boolean(object.reverse);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFind message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFind
         * @static
         * @param {CMsgFind} message CMsgFind
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFind.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.find = "";
                object.infind = false;
                object.reverse = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.find != null && message.hasOwnProperty("find"))
                object.find = message.find;
            if (message.infind != null && message.hasOwnProperty("infind"))
                object.infind = message.infind;
            if (message.reverse != null && message.hasOwnProperty("reverse"))
                object.reverse = message.reverse;
            return object;
        };
    
        /**
         * Converts this CMsgFind to JSON.
         * @function toJSON
         * @memberof CMsgFind
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFind.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgFind;
    })();
    
    $root.CMsgStopFind = (function() {
    
        /**
         * Properties of a CMsgStopFind.
         * @exports ICMsgStopFind
         * @interface ICMsgStopFind
         * @property {number|null} [browser_handle] CMsgStopFind browser_handle
         */
    
        /**
         * Constructs a new CMsgStopFind.
         * @exports CMsgStopFind
         * @classdesc Represents a CMsgStopFind.
         * @implements ICMsgStopFind
         * @constructor
         * @param {ICMsgStopFind=} [properties] Properties to set
         */
        function CMsgStopFind(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgStopFind browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgStopFind
         * @instance
         */
        CMsgStopFind.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgStopFind instance using the specified properties.
         * @function create
         * @memberof CMsgStopFind
         * @static
         * @param {ICMsgStopFind=} [properties] Properties to set
         * @returns {CMsgStopFind} CMsgStopFind instance
         */
        CMsgStopFind.create = function create(properties) {
            return new CMsgStopFind(properties);
        };
    
        /**
         * Encodes the specified CMsgStopFind message. Does not implicitly {@link CMsgStopFind.verify|verify} messages.
         * @function encode
         * @memberof CMsgStopFind
         * @static
         * @param {ICMsgStopFind} message CMsgStopFind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStopFind.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgStopFind message, length delimited. Does not implicitly {@link CMsgStopFind.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgStopFind
         * @static
         * @param {ICMsgStopFind} message CMsgStopFind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStopFind.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgStopFind message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgStopFind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgStopFind} CMsgStopFind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStopFind.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgStopFind();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgStopFind message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgStopFind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgStopFind} CMsgStopFind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStopFind.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgStopFind message.
         * @function verify
         * @memberof CMsgStopFind
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgStopFind.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgStopFind message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgStopFind
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgStopFind} CMsgStopFind
         */
        CMsgStopFind.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgStopFind)
                return object;
            var message = new $root.CMsgStopFind();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgStopFind message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgStopFind
         * @static
         * @param {CMsgStopFind} message CMsgStopFind
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgStopFind.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgStopFind to JSON.
         * @function toJSON
         * @memberof CMsgStopFind
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgStopFind.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgStopFind;
    })();
    
    $root.CMsgSetHorizontalScroll = (function() {
    
        /**
         * Properties of a CMsgSetHorizontalScroll.
         * @exports ICMsgSetHorizontalScroll
         * @interface ICMsgSetHorizontalScroll
         * @property {number|null} [browser_handle] CMsgSetHorizontalScroll browser_handle
         * @property {number|null} [scroll] CMsgSetHorizontalScroll scroll
         */
    
        /**
         * Constructs a new CMsgSetHorizontalScroll.
         * @exports CMsgSetHorizontalScroll
         * @classdesc Represents a CMsgSetHorizontalScroll.
         * @implements ICMsgSetHorizontalScroll
         * @constructor
         * @param {ICMsgSetHorizontalScroll=} [properties] Properties to set
         */
        function CMsgSetHorizontalScroll(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetHorizontalScroll browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSetHorizontalScroll
         * @instance
         */
        CMsgSetHorizontalScroll.prototype.browser_handle = 0;
    
        /**
         * CMsgSetHorizontalScroll scroll.
         * @member {number} scroll
         * @memberof CMsgSetHorizontalScroll
         * @instance
         */
        CMsgSetHorizontalScroll.prototype.scroll = 0;
    
        /**
         * Creates a new CMsgSetHorizontalScroll instance using the specified properties.
         * @function create
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {ICMsgSetHorizontalScroll=} [properties] Properties to set
         * @returns {CMsgSetHorizontalScroll} CMsgSetHorizontalScroll instance
         */
        CMsgSetHorizontalScroll.create = function create(properties) {
            return new CMsgSetHorizontalScroll(properties);
        };
    
        /**
         * Encodes the specified CMsgSetHorizontalScroll message. Does not implicitly {@link CMsgSetHorizontalScroll.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {ICMsgSetHorizontalScroll} message CMsgSetHorizontalScroll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetHorizontalScroll.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.scroll != null && Object.hasOwnProperty.call(message, "scroll"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.scroll);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetHorizontalScroll message, length delimited. Does not implicitly {@link CMsgSetHorizontalScroll.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {ICMsgSetHorizontalScroll} message CMsgSetHorizontalScroll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetHorizontalScroll.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetHorizontalScroll message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetHorizontalScroll} CMsgSetHorizontalScroll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetHorizontalScroll.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetHorizontalScroll();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.scroll = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetHorizontalScroll message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetHorizontalScroll} CMsgSetHorizontalScroll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetHorizontalScroll.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetHorizontalScroll message.
         * @function verify
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetHorizontalScroll.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                if (!$util.isInteger(message.scroll))
                    return "scroll: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetHorizontalScroll message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetHorizontalScroll} CMsgSetHorizontalScroll
         */
        CMsgSetHorizontalScroll.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetHorizontalScroll)
                return object;
            var message = new $root.CMsgSetHorizontalScroll();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.scroll != null)
                message.scroll = object.scroll >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetHorizontalScroll message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetHorizontalScroll
         * @static
         * @param {CMsgSetHorizontalScroll} message CMsgSetHorizontalScroll
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetHorizontalScroll.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.scroll = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                object.scroll = message.scroll;
            return object;
        };
    
        /**
         * Converts this CMsgSetHorizontalScroll to JSON.
         * @function toJSON
         * @memberof CMsgSetHorizontalScroll
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetHorizontalScroll.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetHorizontalScroll;
    })();
    
    $root.CMsgSetVerticalScroll = (function() {
    
        /**
         * Properties of a CMsgSetVerticalScroll.
         * @exports ICMsgSetVerticalScroll
         * @interface ICMsgSetVerticalScroll
         * @property {number|null} [browser_handle] CMsgSetVerticalScroll browser_handle
         * @property {number|null} [scroll] CMsgSetVerticalScroll scroll
         */
    
        /**
         * Constructs a new CMsgSetVerticalScroll.
         * @exports CMsgSetVerticalScroll
         * @classdesc Represents a CMsgSetVerticalScroll.
         * @implements ICMsgSetVerticalScroll
         * @constructor
         * @param {ICMsgSetVerticalScroll=} [properties] Properties to set
         */
        function CMsgSetVerticalScroll(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetVerticalScroll browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSetVerticalScroll
         * @instance
         */
        CMsgSetVerticalScroll.prototype.browser_handle = 0;
    
        /**
         * CMsgSetVerticalScroll scroll.
         * @member {number} scroll
         * @memberof CMsgSetVerticalScroll
         * @instance
         */
        CMsgSetVerticalScroll.prototype.scroll = 0;
    
        /**
         * Creates a new CMsgSetVerticalScroll instance using the specified properties.
         * @function create
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {ICMsgSetVerticalScroll=} [properties] Properties to set
         * @returns {CMsgSetVerticalScroll} CMsgSetVerticalScroll instance
         */
        CMsgSetVerticalScroll.create = function create(properties) {
            return new CMsgSetVerticalScroll(properties);
        };
    
        /**
         * Encodes the specified CMsgSetVerticalScroll message. Does not implicitly {@link CMsgSetVerticalScroll.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {ICMsgSetVerticalScroll} message CMsgSetVerticalScroll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetVerticalScroll.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.scroll != null && Object.hasOwnProperty.call(message, "scroll"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.scroll);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetVerticalScroll message, length delimited. Does not implicitly {@link CMsgSetVerticalScroll.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {ICMsgSetVerticalScroll} message CMsgSetVerticalScroll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetVerticalScroll.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetVerticalScroll message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetVerticalScroll} CMsgSetVerticalScroll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetVerticalScroll.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetVerticalScroll();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.scroll = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetVerticalScroll message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetVerticalScroll} CMsgSetVerticalScroll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetVerticalScroll.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetVerticalScroll message.
         * @function verify
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetVerticalScroll.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                if (!$util.isInteger(message.scroll))
                    return "scroll: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetVerticalScroll message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetVerticalScroll} CMsgSetVerticalScroll
         */
        CMsgSetVerticalScroll.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetVerticalScroll)
                return object;
            var message = new $root.CMsgSetVerticalScroll();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.scroll != null)
                message.scroll = object.scroll >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetVerticalScroll message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetVerticalScroll
         * @static
         * @param {CMsgSetVerticalScroll} message CMsgSetVerticalScroll
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetVerticalScroll.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.scroll = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.scroll != null && message.hasOwnProperty("scroll"))
                object.scroll = message.scroll;
            return object;
        };
    
        /**
         * Converts this CMsgSetVerticalScroll to JSON.
         * @function toJSON
         * @memberof CMsgSetVerticalScroll
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetVerticalScroll.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetVerticalScroll;
    })();
    
    $root.CMsgSetZoomLevel = (function() {
    
        /**
         * Properties of a CMsgSetZoomLevel.
         * @exports ICMsgSetZoomLevel
         * @interface ICMsgSetZoomLevel
         * @property {number|null} [browser_handle] CMsgSetZoomLevel browser_handle
         * @property {number|null} [zoom] CMsgSetZoomLevel zoom
         */
    
        /**
         * Constructs a new CMsgSetZoomLevel.
         * @exports CMsgSetZoomLevel
         * @classdesc Represents a CMsgSetZoomLevel.
         * @implements ICMsgSetZoomLevel
         * @constructor
         * @param {ICMsgSetZoomLevel=} [properties] Properties to set
         */
        function CMsgSetZoomLevel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetZoomLevel browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSetZoomLevel
         * @instance
         */
        CMsgSetZoomLevel.prototype.browser_handle = 0;
    
        /**
         * CMsgSetZoomLevel zoom.
         * @member {number} zoom
         * @memberof CMsgSetZoomLevel
         * @instance
         */
        CMsgSetZoomLevel.prototype.zoom = 0;
    
        /**
         * Creates a new CMsgSetZoomLevel instance using the specified properties.
         * @function create
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {ICMsgSetZoomLevel=} [properties] Properties to set
         * @returns {CMsgSetZoomLevel} CMsgSetZoomLevel instance
         */
        CMsgSetZoomLevel.create = function create(properties) {
            return new CMsgSetZoomLevel(properties);
        };
    
        /**
         * Encodes the specified CMsgSetZoomLevel message. Does not implicitly {@link CMsgSetZoomLevel.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {ICMsgSetZoomLevel} message CMsgSetZoomLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetZoomLevel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.zoom);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetZoomLevel message, length delimited. Does not implicitly {@link CMsgSetZoomLevel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {ICMsgSetZoomLevel} message CMsgSetZoomLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetZoomLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetZoomLevel message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetZoomLevel} CMsgSetZoomLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetZoomLevel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetZoomLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.zoom = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetZoomLevel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetZoomLevel} CMsgSetZoomLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetZoomLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetZoomLevel message.
         * @function verify
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetZoomLevel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                if (typeof message.zoom !== "number")
                    return "zoom: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetZoomLevel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetZoomLevel} CMsgSetZoomLevel
         */
        CMsgSetZoomLevel.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetZoomLevel)
                return object;
            var message = new $root.CMsgSetZoomLevel();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.zoom != null)
                message.zoom = Number(object.zoom);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetZoomLevel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetZoomLevel
         * @static
         * @param {CMsgSetZoomLevel} message CMsgSetZoomLevel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetZoomLevel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.zoom = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                object.zoom = options.json && !isFinite(message.zoom) ? String(message.zoom) : message.zoom;
            return object;
        };
    
        /**
         * Converts this CMsgSetZoomLevel to JSON.
         * @function toJSON
         * @memberof CMsgSetZoomLevel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetZoomLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetZoomLevel;
    })();
    
    $root.CMsgViewSource = (function() {
    
        /**
         * Properties of a CMsgViewSource.
         * @exports ICMsgViewSource
         * @interface ICMsgViewSource
         * @property {number|null} [browser_handle] CMsgViewSource browser_handle
         */
    
        /**
         * Constructs a new CMsgViewSource.
         * @exports CMsgViewSource
         * @classdesc Represents a CMsgViewSource.
         * @implements ICMsgViewSource
         * @constructor
         * @param {ICMsgViewSource=} [properties] Properties to set
         */
        function CMsgViewSource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgViewSource browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgViewSource
         * @instance
         */
        CMsgViewSource.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgViewSource instance using the specified properties.
         * @function create
         * @memberof CMsgViewSource
         * @static
         * @param {ICMsgViewSource=} [properties] Properties to set
         * @returns {CMsgViewSource} CMsgViewSource instance
         */
        CMsgViewSource.create = function create(properties) {
            return new CMsgViewSource(properties);
        };
    
        /**
         * Encodes the specified CMsgViewSource message. Does not implicitly {@link CMsgViewSource.verify|verify} messages.
         * @function encode
         * @memberof CMsgViewSource
         * @static
         * @param {ICMsgViewSource} message CMsgViewSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgViewSource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgViewSource message, length delimited. Does not implicitly {@link CMsgViewSource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgViewSource
         * @static
         * @param {ICMsgViewSource} message CMsgViewSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgViewSource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgViewSource message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgViewSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgViewSource} CMsgViewSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgViewSource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgViewSource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgViewSource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgViewSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgViewSource} CMsgViewSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgViewSource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgViewSource message.
         * @function verify
         * @memberof CMsgViewSource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgViewSource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgViewSource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgViewSource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgViewSource} CMsgViewSource
         */
        CMsgViewSource.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgViewSource)
                return object;
            var message = new $root.CMsgViewSource();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgViewSource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgViewSource
         * @static
         * @param {CMsgViewSource} message CMsgViewSource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgViewSource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgViewSource to JSON.
         * @function toJSON
         * @memberof CMsgViewSource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgViewSource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgViewSource;
    })();
    
    $root.CMsgBrowserReady = (function() {
    
        /**
         * Properties of a CMsgBrowserReady.
         * @exports ICMsgBrowserReady
         * @interface ICMsgBrowserReady
         * @property {number|null} [browser_handle] CMsgBrowserReady browser_handle
         */
    
        /**
         * Constructs a new CMsgBrowserReady.
         * @exports CMsgBrowserReady
         * @classdesc Represents a CMsgBrowserReady.
         * @implements ICMsgBrowserReady
         * @constructor
         * @param {ICMsgBrowserReady=} [properties] Properties to set
         */
        function CMsgBrowserReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgBrowserReady browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgBrowserReady
         * @instance
         */
        CMsgBrowserReady.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgBrowserReady instance using the specified properties.
         * @function create
         * @memberof CMsgBrowserReady
         * @static
         * @param {ICMsgBrowserReady=} [properties] Properties to set
         * @returns {CMsgBrowserReady} CMsgBrowserReady instance
         */
        CMsgBrowserReady.create = function create(properties) {
            return new CMsgBrowserReady(properties);
        };
    
        /**
         * Encodes the specified CMsgBrowserReady message. Does not implicitly {@link CMsgBrowserReady.verify|verify} messages.
         * @function encode
         * @memberof CMsgBrowserReady
         * @static
         * @param {ICMsgBrowserReady} message CMsgBrowserReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgBrowserReady message, length delimited. Does not implicitly {@link CMsgBrowserReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgBrowserReady
         * @static
         * @param {ICMsgBrowserReady} message CMsgBrowserReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgBrowserReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgBrowserReady message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgBrowserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgBrowserReady} CMsgBrowserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgBrowserReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgBrowserReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgBrowserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgBrowserReady} CMsgBrowserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgBrowserReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgBrowserReady message.
         * @function verify
         * @memberof CMsgBrowserReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgBrowserReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgBrowserReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgBrowserReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgBrowserReady} CMsgBrowserReady
         */
        CMsgBrowserReady.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgBrowserReady)
                return object;
            var message = new $root.CMsgBrowserReady();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgBrowserReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgBrowserReady
         * @static
         * @param {CMsgBrowserReady} message CMsgBrowserReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgBrowserReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgBrowserReady to JSON.
         * @function toJSON
         * @memberof CMsgBrowserReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgBrowserReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgBrowserReady;
    })();
    
    $root.CMsgURLChanged = (function() {
    
        /**
         * Properties of a CMsgURLChanged.
         * @exports ICMsgURLChanged
         * @interface ICMsgURLChanged
         * @property {number|null} [browser_handle] CMsgURLChanged browser_handle
         * @property {string|null} [url] CMsgURLChanged url
         * @property {string|null} [postData] CMsgURLChanged postData
         * @property {boolean|null} [bIsRedirect] CMsgURLChanged bIsRedirect
         * @property {string|null} [pagetitle] CMsgURLChanged pagetitle
         * @property {boolean|null} [bNewNavigation] CMsgURLChanged bNewNavigation
         */
    
        /**
         * Constructs a new CMsgURLChanged.
         * @exports CMsgURLChanged
         * @classdesc Represents a CMsgURLChanged.
         * @implements ICMsgURLChanged
         * @constructor
         * @param {ICMsgURLChanged=} [properties] Properties to set
         */
        function CMsgURLChanged(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgURLChanged browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgURLChanged
         * @instance
         */
        CMsgURLChanged.prototype.browser_handle = 0;
    
        /**
         * CMsgURLChanged url.
         * @member {string} url
         * @memberof CMsgURLChanged
         * @instance
         */
        CMsgURLChanged.prototype.url = "";
    
        /**
         * CMsgURLChanged postData.
         * @member {string} postData
         * @memberof CMsgURLChanged
         * @instance
         */
        CMsgURLChanged.prototype.postData = "";
    
        /**
         * CMsgURLChanged bIsRedirect.
         * @member {boolean} bIsRedirect
         * @memberof CMsgURLChanged
         * @instance
         */
        CMsgURLChanged.prototype.bIsRedirect = false;
    
        /**
         * CMsgURLChanged pagetitle.
         * @member {string} pagetitle
         * @memberof CMsgURLChanged
         * @instance
         */
        CMsgURLChanged.prototype.pagetitle = "";
    
        /**
         * CMsgURLChanged bNewNavigation.
         * @member {boolean} bNewNavigation
         * @memberof CMsgURLChanged
         * @instance
         */
        CMsgURLChanged.prototype.bNewNavigation = false;
    
        /**
         * Creates a new CMsgURLChanged instance using the specified properties.
         * @function create
         * @memberof CMsgURLChanged
         * @static
         * @param {ICMsgURLChanged=} [properties] Properties to set
         * @returns {CMsgURLChanged} CMsgURLChanged instance
         */
        CMsgURLChanged.create = function create(properties) {
            return new CMsgURLChanged(properties);
        };
    
        /**
         * Encodes the specified CMsgURLChanged message. Does not implicitly {@link CMsgURLChanged.verify|verify} messages.
         * @function encode
         * @memberof CMsgURLChanged
         * @static
         * @param {ICMsgURLChanged} message CMsgURLChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgURLChanged.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.postData != null && Object.hasOwnProperty.call(message, "postData"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.postData);
            if (message.bIsRedirect != null && Object.hasOwnProperty.call(message, "bIsRedirect"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.bIsRedirect);
            if (message.pagetitle != null && Object.hasOwnProperty.call(message, "pagetitle"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.pagetitle);
            if (message.bNewNavigation != null && Object.hasOwnProperty.call(message, "bNewNavigation"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.bNewNavigation);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgURLChanged message, length delimited. Does not implicitly {@link CMsgURLChanged.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgURLChanged
         * @static
         * @param {ICMsgURLChanged} message CMsgURLChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgURLChanged.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgURLChanged message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgURLChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgURLChanged} CMsgURLChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgURLChanged.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgURLChanged();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.postData = reader.string();
                    break;
                case 4:
                    message.bIsRedirect = reader.bool();
                    break;
                case 5:
                    message.pagetitle = reader.string();
                    break;
                case 6:
                    message.bNewNavigation = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgURLChanged message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgURLChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgURLChanged} CMsgURLChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgURLChanged.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgURLChanged message.
         * @function verify
         * @memberof CMsgURLChanged
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgURLChanged.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.postData != null && message.hasOwnProperty("postData"))
                if (!$util.isString(message.postData))
                    return "postData: string expected";
            if (message.bIsRedirect != null && message.hasOwnProperty("bIsRedirect"))
                if (typeof message.bIsRedirect !== "boolean")
                    return "bIsRedirect: boolean expected";
            if (message.pagetitle != null && message.hasOwnProperty("pagetitle"))
                if (!$util.isString(message.pagetitle))
                    return "pagetitle: string expected";
            if (message.bNewNavigation != null && message.hasOwnProperty("bNewNavigation"))
                if (typeof message.bNewNavigation !== "boolean")
                    return "bNewNavigation: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgURLChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgURLChanged
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgURLChanged} CMsgURLChanged
         */
        CMsgURLChanged.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgURLChanged)
                return object;
            var message = new $root.CMsgURLChanged();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.postData != null)
                message.postData = String(object.postData);
            if (object.bIsRedirect != null)
                message.bIsRedirect = Boolean(object.bIsRedirect);
            if (object.pagetitle != null)
                message.pagetitle = String(object.pagetitle);
            if (object.bNewNavigation != null)
                message.bNewNavigation = Boolean(object.bNewNavigation);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgURLChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgURLChanged
         * @static
         * @param {CMsgURLChanged} message CMsgURLChanged
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgURLChanged.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.postData = "";
                object.bIsRedirect = false;
                object.pagetitle = "";
                object.bNewNavigation = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.postData != null && message.hasOwnProperty("postData"))
                object.postData = message.postData;
            if (message.bIsRedirect != null && message.hasOwnProperty("bIsRedirect"))
                object.bIsRedirect = message.bIsRedirect;
            if (message.pagetitle != null && message.hasOwnProperty("pagetitle"))
                object.pagetitle = message.pagetitle;
            if (message.bNewNavigation != null && message.hasOwnProperty("bNewNavigation"))
                object.bNewNavigation = message.bNewNavigation;
            return object;
        };
    
        /**
         * Converts this CMsgURLChanged to JSON.
         * @function toJSON
         * @memberof CMsgURLChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgURLChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgURLChanged;
    })();
    
    $root.CHTMLHeader = (function() {
    
        /**
         * Properties of a CHTMLHeader.
         * @exports ICHTMLHeader
         * @interface ICHTMLHeader
         * @property {string|null} [key] CHTMLHeader key
         * @property {string|null} [value] CHTMLHeader value
         */
    
        /**
         * Constructs a new CHTMLHeader.
         * @exports CHTMLHeader
         * @classdesc Represents a CHTMLHeader.
         * @implements ICHTMLHeader
         * @constructor
         * @param {ICHTMLHeader=} [properties] Properties to set
         */
        function CHTMLHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CHTMLHeader key.
         * @member {string} key
         * @memberof CHTMLHeader
         * @instance
         */
        CHTMLHeader.prototype.key = "";
    
        /**
         * CHTMLHeader value.
         * @member {string} value
         * @memberof CHTMLHeader
         * @instance
         */
        CHTMLHeader.prototype.value = "";
    
        /**
         * Creates a new CHTMLHeader instance using the specified properties.
         * @function create
         * @memberof CHTMLHeader
         * @static
         * @param {ICHTMLHeader=} [properties] Properties to set
         * @returns {CHTMLHeader} CHTMLHeader instance
         */
        CHTMLHeader.create = function create(properties) {
            return new CHTMLHeader(properties);
        };
    
        /**
         * Encodes the specified CHTMLHeader message. Does not implicitly {@link CHTMLHeader.verify|verify} messages.
         * @function encode
         * @memberof CHTMLHeader
         * @static
         * @param {ICHTMLHeader} message CHTMLHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHTMLHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified CHTMLHeader message, length delimited. Does not implicitly {@link CHTMLHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHTMLHeader
         * @static
         * @param {ICHTMLHeader} message CHTMLHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHTMLHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CHTMLHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CHTMLHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHTMLHeader} CHTMLHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHTMLHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHTMLHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CHTMLHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CHTMLHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHTMLHeader} CHTMLHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHTMLHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CHTMLHeader message.
         * @function verify
         * @memberof CHTMLHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CHTMLHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };
    
        /**
         * Creates a CHTMLHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHTMLHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHTMLHeader} CHTMLHeader
         */
        CHTMLHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CHTMLHeader)
                return object;
            var message = new $root.CHTMLHeader();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a CHTMLHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHTMLHeader
         * @static
         * @param {CHTMLHeader} message CHTMLHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CHTMLHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
    
        /**
         * Converts this CHTMLHeader to JSON.
         * @function toJSON
         * @memberof CHTMLHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CHTMLHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CHTMLHeader;
    })();
    
    $root.CHTMLPageSecurityInfo = (function() {
    
        /**
         * Properties of a CHTMLPageSecurityInfo.
         * @exports ICHTMLPageSecurityInfo
         * @interface ICHTMLPageSecurityInfo
         * @property {boolean|null} [bIsSecure] CHTMLPageSecurityInfo bIsSecure
         * @property {boolean|null} [bHasCertError] CHTMLPageSecurityInfo bHasCertError
         * @property {string|null} [issuerName] CHTMLPageSecurityInfo issuerName
         * @property {string|null} [certName] CHTMLPageSecurityInfo certName
         * @property {number|null} [certExpiry] CHTMLPageSecurityInfo certExpiry
         * @property {number|null} [nCertBits] CHTMLPageSecurityInfo nCertBits
         * @property {boolean|null} [bIsEVCert] CHTMLPageSecurityInfo bIsEVCert
         */
    
        /**
         * Constructs a new CHTMLPageSecurityInfo.
         * @exports CHTMLPageSecurityInfo
         * @classdesc Represents a CHTMLPageSecurityInfo.
         * @implements ICHTMLPageSecurityInfo
         * @constructor
         * @param {ICHTMLPageSecurityInfo=} [properties] Properties to set
         */
        function CHTMLPageSecurityInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CHTMLPageSecurityInfo bIsSecure.
         * @member {boolean} bIsSecure
         * @memberof CHTMLPageSecurityInfo
         * @instance
         */
        CHTMLPageSecurityInfo.prototype.bIsSecure = false;
    
        /**
         * CHTMLPageSecurityInfo bHasCertError.
         * @member {boolean} bHasCertError
         * @memberof CHTMLPageSecurityInfo
         * @instance
         */
        CHTMLPageSecurityInfo.prototype.bHasCertError = false;
    
        /**
         * CHTMLPageSecurityInfo issuerName.
         * @member {string} issuerName
         * @memberof CHTMLPageSecurityInfo
         * @instance
         */
        CHTMLPageSecurityInfo.prototype.issuerName = "";
    
        /**
         * CHTMLPageSecurityInfo certName.
         * @member {string} certName
         * @memberof CHTMLPageSecurityInfo
         * @instance
         */
        CHTMLPageSecurityInfo.prototype.certName = "";
    
        /**
         * CHTMLPageSecurityInfo certExpiry.
         * @member {number} certExpiry
         * @memberof CHTMLPageSecurityInfo
         * @instance
         */
        CHTMLPageSecurityInfo.prototype.certExpiry = 0;
    
        /**
         * CHTMLPageSecurityInfo nCertBits.
         * @member {number} nCertBits
         * @memberof CHTMLPageSecurityInfo
         * @instance
         */
        CHTMLPageSecurityInfo.prototype.nCertBits = 0;
    
        /**
         * CHTMLPageSecurityInfo bIsEVCert.
         * @member {boolean} bIsEVCert
         * @memberof CHTMLPageSecurityInfo
         * @instance
         */
        CHTMLPageSecurityInfo.prototype.bIsEVCert = false;
    
        /**
         * Creates a new CHTMLPageSecurityInfo instance using the specified properties.
         * @function create
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {ICHTMLPageSecurityInfo=} [properties] Properties to set
         * @returns {CHTMLPageSecurityInfo} CHTMLPageSecurityInfo instance
         */
        CHTMLPageSecurityInfo.create = function create(properties) {
            return new CHTMLPageSecurityInfo(properties);
        };
    
        /**
         * Encodes the specified CHTMLPageSecurityInfo message. Does not implicitly {@link CHTMLPageSecurityInfo.verify|verify} messages.
         * @function encode
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {ICHTMLPageSecurityInfo} message CHTMLPageSecurityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHTMLPageSecurityInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bIsSecure != null && Object.hasOwnProperty.call(message, "bIsSecure"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.bIsSecure);
            if (message.bHasCertError != null && Object.hasOwnProperty.call(message, "bHasCertError"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bHasCertError);
            if (message.issuerName != null && Object.hasOwnProperty.call(message, "issuerName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.issuerName);
            if (message.certName != null && Object.hasOwnProperty.call(message, "certName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.certName);
            if (message.certExpiry != null && Object.hasOwnProperty.call(message, "certExpiry"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.certExpiry);
            if (message.nCertBits != null && Object.hasOwnProperty.call(message, "nCertBits"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nCertBits);
            if (message.bIsEVCert != null && Object.hasOwnProperty.call(message, "bIsEVCert"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.bIsEVCert);
            return writer;
        };
    
        /**
         * Encodes the specified CHTMLPageSecurityInfo message, length delimited. Does not implicitly {@link CHTMLPageSecurityInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {ICHTMLPageSecurityInfo} message CHTMLPageSecurityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHTMLPageSecurityInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CHTMLPageSecurityInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHTMLPageSecurityInfo} CHTMLPageSecurityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHTMLPageSecurityInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHTMLPageSecurityInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bIsSecure = reader.bool();
                    break;
                case 2:
                    message.bHasCertError = reader.bool();
                    break;
                case 3:
                    message.issuerName = reader.string();
                    break;
                case 4:
                    message.certName = reader.string();
                    break;
                case 5:
                    message.certExpiry = reader.int32();
                    break;
                case 6:
                    message.nCertBits = reader.int32();
                    break;
                case 7:
                    message.bIsEVCert = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CHTMLPageSecurityInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHTMLPageSecurityInfo} CHTMLPageSecurityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHTMLPageSecurityInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CHTMLPageSecurityInfo message.
         * @function verify
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CHTMLPageSecurityInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bIsSecure != null && message.hasOwnProperty("bIsSecure"))
                if (typeof message.bIsSecure !== "boolean")
                    return "bIsSecure: boolean expected";
            if (message.bHasCertError != null && message.hasOwnProperty("bHasCertError"))
                if (typeof message.bHasCertError !== "boolean")
                    return "bHasCertError: boolean expected";
            if (message.issuerName != null && message.hasOwnProperty("issuerName"))
                if (!$util.isString(message.issuerName))
                    return "issuerName: string expected";
            if (message.certName != null && message.hasOwnProperty("certName"))
                if (!$util.isString(message.certName))
                    return "certName: string expected";
            if (message.certExpiry != null && message.hasOwnProperty("certExpiry"))
                if (!$util.isInteger(message.certExpiry))
                    return "certExpiry: integer expected";
            if (message.nCertBits != null && message.hasOwnProperty("nCertBits"))
                if (!$util.isInteger(message.nCertBits))
                    return "nCertBits: integer expected";
            if (message.bIsEVCert != null && message.hasOwnProperty("bIsEVCert"))
                if (typeof message.bIsEVCert !== "boolean")
                    return "bIsEVCert: boolean expected";
            return null;
        };
    
        /**
         * Creates a CHTMLPageSecurityInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHTMLPageSecurityInfo} CHTMLPageSecurityInfo
         */
        CHTMLPageSecurityInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CHTMLPageSecurityInfo)
                return object;
            var message = new $root.CHTMLPageSecurityInfo();
            if (object.bIsSecure != null)
                message.bIsSecure = Boolean(object.bIsSecure);
            if (object.bHasCertError != null)
                message.bHasCertError = Boolean(object.bHasCertError);
            if (object.issuerName != null)
                message.issuerName = String(object.issuerName);
            if (object.certName != null)
                message.certName = String(object.certName);
            if (object.certExpiry != null)
                message.certExpiry = object.certExpiry | 0;
            if (object.nCertBits != null)
                message.nCertBits = object.nCertBits | 0;
            if (object.bIsEVCert != null)
                message.bIsEVCert = Boolean(object.bIsEVCert);
            return message;
        };
    
        /**
         * Creates a plain object from a CHTMLPageSecurityInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHTMLPageSecurityInfo
         * @static
         * @param {CHTMLPageSecurityInfo} message CHTMLPageSecurityInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CHTMLPageSecurityInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.bIsSecure = false;
                object.bHasCertError = false;
                object.issuerName = "";
                object.certName = "";
                object.certExpiry = 0;
                object.nCertBits = 0;
                object.bIsEVCert = false;
            }
            if (message.bIsSecure != null && message.hasOwnProperty("bIsSecure"))
                object.bIsSecure = message.bIsSecure;
            if (message.bHasCertError != null && message.hasOwnProperty("bHasCertError"))
                object.bHasCertError = message.bHasCertError;
            if (message.issuerName != null && message.hasOwnProperty("issuerName"))
                object.issuerName = message.issuerName;
            if (message.certName != null && message.hasOwnProperty("certName"))
                object.certName = message.certName;
            if (message.certExpiry != null && message.hasOwnProperty("certExpiry"))
                object.certExpiry = message.certExpiry;
            if (message.nCertBits != null && message.hasOwnProperty("nCertBits"))
                object.nCertBits = message.nCertBits;
            if (message.bIsEVCert != null && message.hasOwnProperty("bIsEVCert"))
                object.bIsEVCert = message.bIsEVCert;
            return object;
        };
    
        /**
         * Converts this CHTMLPageSecurityInfo to JSON.
         * @function toJSON
         * @memberof CHTMLPageSecurityInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CHTMLPageSecurityInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CHTMLPageSecurityInfo;
    })();
    
    $root.CMsgFinishedRequest = (function() {
    
        /**
         * Properties of a CMsgFinishedRequest.
         * @exports ICMsgFinishedRequest
         * @interface ICMsgFinishedRequest
         * @property {number|null} [browser_handle] CMsgFinishedRequest browser_handle
         * @property {string|null} [url] CMsgFinishedRequest url
         * @property {string|null} [pageTitle] CMsgFinishedRequest pageTitle
         * @property {ICHTMLPageSecurityInfo|null} [security_info] CMsgFinishedRequest security_info
         * @property {Array.<ICHTMLHeader>|null} [headers] CMsgFinishedRequest headers
         */
    
        /**
         * Constructs a new CMsgFinishedRequest.
         * @exports CMsgFinishedRequest
         * @classdesc Represents a CMsgFinishedRequest.
         * @implements ICMsgFinishedRequest
         * @constructor
         * @param {ICMsgFinishedRequest=} [properties] Properties to set
         */
        function CMsgFinishedRequest(properties) {
            this.headers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFinishedRequest browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgFinishedRequest
         * @instance
         */
        CMsgFinishedRequest.prototype.browser_handle = 0;
    
        /**
         * CMsgFinishedRequest url.
         * @member {string} url
         * @memberof CMsgFinishedRequest
         * @instance
         */
        CMsgFinishedRequest.prototype.url = "";
    
        /**
         * CMsgFinishedRequest pageTitle.
         * @member {string} pageTitle
         * @memberof CMsgFinishedRequest
         * @instance
         */
        CMsgFinishedRequest.prototype.pageTitle = "";
    
        /**
         * CMsgFinishedRequest security_info.
         * @member {ICHTMLPageSecurityInfo|null|undefined} security_info
         * @memberof CMsgFinishedRequest
         * @instance
         */
        CMsgFinishedRequest.prototype.security_info = null;
    
        /**
         * CMsgFinishedRequest headers.
         * @member {Array.<ICHTMLHeader>} headers
         * @memberof CMsgFinishedRequest
         * @instance
         */
        CMsgFinishedRequest.prototype.headers = $util.emptyArray;
    
        /**
         * Creates a new CMsgFinishedRequest instance using the specified properties.
         * @function create
         * @memberof CMsgFinishedRequest
         * @static
         * @param {ICMsgFinishedRequest=} [properties] Properties to set
         * @returns {CMsgFinishedRequest} CMsgFinishedRequest instance
         */
        CMsgFinishedRequest.create = function create(properties) {
            return new CMsgFinishedRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgFinishedRequest message. Does not implicitly {@link CMsgFinishedRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgFinishedRequest
         * @static
         * @param {ICMsgFinishedRequest} message CMsgFinishedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFinishedRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.pageTitle != null && Object.hasOwnProperty.call(message, "pageTitle"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageTitle);
            if (message.security_info != null && Object.hasOwnProperty.call(message, "security_info"))
                $root.CHTMLPageSecurityInfo.encode(message.security_info, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.headers != null && message.headers.length)
                for (var i = 0; i < message.headers.length; ++i)
                    $root.CHTMLHeader.encode(message.headers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFinishedRequest message, length delimited. Does not implicitly {@link CMsgFinishedRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFinishedRequest
         * @static
         * @param {ICMsgFinishedRequest} message CMsgFinishedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFinishedRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFinishedRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFinishedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFinishedRequest} CMsgFinishedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFinishedRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFinishedRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.pageTitle = reader.string();
                    break;
                case 4:
                    message.security_info = $root.CHTMLPageSecurityInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.headers && message.headers.length))
                        message.headers = [];
                    message.headers.push($root.CHTMLHeader.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFinishedRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFinishedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFinishedRequest} CMsgFinishedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFinishedRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFinishedRequest message.
         * @function verify
         * @memberof CMsgFinishedRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFinishedRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.pageTitle != null && message.hasOwnProperty("pageTitle"))
                if (!$util.isString(message.pageTitle))
                    return "pageTitle: string expected";
            if (message.security_info != null && message.hasOwnProperty("security_info")) {
                var error = $root.CHTMLPageSecurityInfo.verify(message.security_info);
                if (error)
                    return "security_info." + error;
            }
            if (message.headers != null && message.hasOwnProperty("headers")) {
                if (!Array.isArray(message.headers))
                    return "headers: array expected";
                for (var i = 0; i < message.headers.length; ++i) {
                    var error = $root.CHTMLHeader.verify(message.headers[i]);
                    if (error)
                        return "headers." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgFinishedRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFinishedRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFinishedRequest} CMsgFinishedRequest
         */
        CMsgFinishedRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFinishedRequest)
                return object;
            var message = new $root.CMsgFinishedRequest();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.pageTitle != null)
                message.pageTitle = String(object.pageTitle);
            if (object.security_info != null) {
                if (typeof object.security_info !== "object")
                    throw TypeError(".CMsgFinishedRequest.security_info: object expected");
                message.security_info = $root.CHTMLPageSecurityInfo.fromObject(object.security_info);
            }
            if (object.headers) {
                if (!Array.isArray(object.headers))
                    throw TypeError(".CMsgFinishedRequest.headers: array expected");
                message.headers = [];
                for (var i = 0; i < object.headers.length; ++i) {
                    if (typeof object.headers[i] !== "object")
                        throw TypeError(".CMsgFinishedRequest.headers: object expected");
                    message.headers[i] = $root.CHTMLHeader.fromObject(object.headers[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFinishedRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFinishedRequest
         * @static
         * @param {CMsgFinishedRequest} message CMsgFinishedRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFinishedRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.headers = [];
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.pageTitle = "";
                object.security_info = null;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.pageTitle != null && message.hasOwnProperty("pageTitle"))
                object.pageTitle = message.pageTitle;
            if (message.security_info != null && message.hasOwnProperty("security_info"))
                object.security_info = $root.CHTMLPageSecurityInfo.toObject(message.security_info, options);
            if (message.headers && message.headers.length) {
                object.headers = [];
                for (var j = 0; j < message.headers.length; ++j)
                    object.headers[j] = $root.CHTMLHeader.toObject(message.headers[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgFinishedRequest to JSON.
         * @function toJSON
         * @memberof CMsgFinishedRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFinishedRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgFinishedRequest;
    })();
    
    $root.CMsgStartRequest = (function() {
    
        /**
         * Properties of a CMsgStartRequest.
         * @exports ICMsgStartRequest
         * @interface ICMsgStartRequest
         * @property {number|null} [browser_handle] CMsgStartRequest browser_handle
         * @property {string|null} [url] CMsgStartRequest url
         * @property {string|null} [target] CMsgStartRequest target
         * @property {string|null} [postData] CMsgStartRequest postData
         * @property {boolean|null} [bIsRedirect] CMsgStartRequest bIsRedirect
         */
    
        /**
         * Constructs a new CMsgStartRequest.
         * @exports CMsgStartRequest
         * @classdesc Represents a CMsgStartRequest.
         * @implements ICMsgStartRequest
         * @constructor
         * @param {ICMsgStartRequest=} [properties] Properties to set
         */
        function CMsgStartRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgStartRequest browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgStartRequest
         * @instance
         */
        CMsgStartRequest.prototype.browser_handle = 0;
    
        /**
         * CMsgStartRequest url.
         * @member {string} url
         * @memberof CMsgStartRequest
         * @instance
         */
        CMsgStartRequest.prototype.url = "";
    
        /**
         * CMsgStartRequest target.
         * @member {string} target
         * @memberof CMsgStartRequest
         * @instance
         */
        CMsgStartRequest.prototype.target = "";
    
        /**
         * CMsgStartRequest postData.
         * @member {string} postData
         * @memberof CMsgStartRequest
         * @instance
         */
        CMsgStartRequest.prototype.postData = "";
    
        /**
         * CMsgStartRequest bIsRedirect.
         * @member {boolean} bIsRedirect
         * @memberof CMsgStartRequest
         * @instance
         */
        CMsgStartRequest.prototype.bIsRedirect = false;
    
        /**
         * Creates a new CMsgStartRequest instance using the specified properties.
         * @function create
         * @memberof CMsgStartRequest
         * @static
         * @param {ICMsgStartRequest=} [properties] Properties to set
         * @returns {CMsgStartRequest} CMsgStartRequest instance
         */
        CMsgStartRequest.create = function create(properties) {
            return new CMsgStartRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgStartRequest message. Does not implicitly {@link CMsgStartRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgStartRequest
         * @static
         * @param {ICMsgStartRequest} message CMsgStartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStartRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.target);
            if (message.postData != null && Object.hasOwnProperty.call(message, "postData"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.postData);
            if (message.bIsRedirect != null && Object.hasOwnProperty.call(message, "bIsRedirect"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.bIsRedirect);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgStartRequest message, length delimited. Does not implicitly {@link CMsgStartRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgStartRequest
         * @static
         * @param {ICMsgStartRequest} message CMsgStartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStartRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgStartRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgStartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgStartRequest} CMsgStartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStartRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgStartRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.target = reader.string();
                    break;
                case 4:
                    message.postData = reader.string();
                    break;
                case 5:
                    message.bIsRedirect = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgStartRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgStartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgStartRequest} CMsgStartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStartRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgStartRequest message.
         * @function verify
         * @memberof CMsgStartRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgStartRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isString(message.target))
                    return "target: string expected";
            if (message.postData != null && message.hasOwnProperty("postData"))
                if (!$util.isString(message.postData))
                    return "postData: string expected";
            if (message.bIsRedirect != null && message.hasOwnProperty("bIsRedirect"))
                if (typeof message.bIsRedirect !== "boolean")
                    return "bIsRedirect: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgStartRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgStartRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgStartRequest} CMsgStartRequest
         */
        CMsgStartRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgStartRequest)
                return object;
            var message = new $root.CMsgStartRequest();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.target != null)
                message.target = String(object.target);
            if (object.postData != null)
                message.postData = String(object.postData);
            if (object.bIsRedirect != null)
                message.bIsRedirect = Boolean(object.bIsRedirect);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgStartRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgStartRequest
         * @static
         * @param {CMsgStartRequest} message CMsgStartRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgStartRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.target = "";
                object.postData = "";
                object.bIsRedirect = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = message.target;
            if (message.postData != null && message.hasOwnProperty("postData"))
                object.postData = message.postData;
            if (message.bIsRedirect != null && message.hasOwnProperty("bIsRedirect"))
                object.bIsRedirect = message.bIsRedirect;
            return object;
        };
    
        /**
         * Converts this CMsgStartRequest to JSON.
         * @function toJSON
         * @memberof CMsgStartRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgStartRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgStartRequest;
    })();
    
    $root.CMsgStartRequestResponse = (function() {
    
        /**
         * Properties of a CMsgStartRequestResponse.
         * @exports ICMsgStartRequestResponse
         * @interface ICMsgStartRequestResponse
         * @property {number|null} [browser_handle] CMsgStartRequestResponse browser_handle
         * @property {boolean|null} [bAllow] CMsgStartRequestResponse bAllow
         */
    
        /**
         * Constructs a new CMsgStartRequestResponse.
         * @exports CMsgStartRequestResponse
         * @classdesc Represents a CMsgStartRequestResponse.
         * @implements ICMsgStartRequestResponse
         * @constructor
         * @param {ICMsgStartRequestResponse=} [properties] Properties to set
         */
        function CMsgStartRequestResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgStartRequestResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgStartRequestResponse
         * @instance
         */
        CMsgStartRequestResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgStartRequestResponse bAllow.
         * @member {boolean} bAllow
         * @memberof CMsgStartRequestResponse
         * @instance
         */
        CMsgStartRequestResponse.prototype.bAllow = false;
    
        /**
         * Creates a new CMsgStartRequestResponse instance using the specified properties.
         * @function create
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {ICMsgStartRequestResponse=} [properties] Properties to set
         * @returns {CMsgStartRequestResponse} CMsgStartRequestResponse instance
         */
        CMsgStartRequestResponse.create = function create(properties) {
            return new CMsgStartRequestResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgStartRequestResponse message. Does not implicitly {@link CMsgStartRequestResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {ICMsgStartRequestResponse} message CMsgStartRequestResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStartRequestResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.bAllow != null && Object.hasOwnProperty.call(message, "bAllow"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bAllow);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgStartRequestResponse message, length delimited. Does not implicitly {@link CMsgStartRequestResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {ICMsgStartRequestResponse} message CMsgStartRequestResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStartRequestResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgStartRequestResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgStartRequestResponse} CMsgStartRequestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStartRequestResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgStartRequestResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.bAllow = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgStartRequestResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgStartRequestResponse} CMsgStartRequestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStartRequestResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgStartRequestResponse message.
         * @function verify
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgStartRequestResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.bAllow != null && message.hasOwnProperty("bAllow"))
                if (typeof message.bAllow !== "boolean")
                    return "bAllow: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgStartRequestResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgStartRequestResponse} CMsgStartRequestResponse
         */
        CMsgStartRequestResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgStartRequestResponse)
                return object;
            var message = new $root.CMsgStartRequestResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.bAllow != null)
                message.bAllow = Boolean(object.bAllow);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgStartRequestResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgStartRequestResponse
         * @static
         * @param {CMsgStartRequestResponse} message CMsgStartRequestResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgStartRequestResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.bAllow = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.bAllow != null && message.hasOwnProperty("bAllow"))
                object.bAllow = message.bAllow;
            return object;
        };
    
        /**
         * Converts this CMsgStartRequestResponse to JSON.
         * @function toJSON
         * @memberof CMsgStartRequestResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgStartRequestResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgStartRequestResponse;
    })();
    
    $root.CMsgShowPopup = (function() {
    
        /**
         * Properties of a CMsgShowPopup.
         * @exports ICMsgShowPopup
         * @interface ICMsgShowPopup
         * @property {number|null} [browser_handle] CMsgShowPopup browser_handle
         */
    
        /**
         * Constructs a new CMsgShowPopup.
         * @exports CMsgShowPopup
         * @classdesc Represents a CMsgShowPopup.
         * @implements ICMsgShowPopup
         * @constructor
         * @param {ICMsgShowPopup=} [properties] Properties to set
         */
        function CMsgShowPopup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgShowPopup browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgShowPopup
         * @instance
         */
        CMsgShowPopup.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgShowPopup instance using the specified properties.
         * @function create
         * @memberof CMsgShowPopup
         * @static
         * @param {ICMsgShowPopup=} [properties] Properties to set
         * @returns {CMsgShowPopup} CMsgShowPopup instance
         */
        CMsgShowPopup.create = function create(properties) {
            return new CMsgShowPopup(properties);
        };
    
        /**
         * Encodes the specified CMsgShowPopup message. Does not implicitly {@link CMsgShowPopup.verify|verify} messages.
         * @function encode
         * @memberof CMsgShowPopup
         * @static
         * @param {ICMsgShowPopup} message CMsgShowPopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgShowPopup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgShowPopup message, length delimited. Does not implicitly {@link CMsgShowPopup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgShowPopup
         * @static
         * @param {ICMsgShowPopup} message CMsgShowPopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgShowPopup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgShowPopup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgShowPopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgShowPopup} CMsgShowPopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgShowPopup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgShowPopup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgShowPopup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgShowPopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgShowPopup} CMsgShowPopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgShowPopup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgShowPopup message.
         * @function verify
         * @memberof CMsgShowPopup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgShowPopup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgShowPopup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgShowPopup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgShowPopup} CMsgShowPopup
         */
        CMsgShowPopup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgShowPopup)
                return object;
            var message = new $root.CMsgShowPopup();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgShowPopup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgShowPopup
         * @static
         * @param {CMsgShowPopup} message CMsgShowPopup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgShowPopup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgShowPopup to JSON.
         * @function toJSON
         * @memberof CMsgShowPopup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgShowPopup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgShowPopup;
    })();
    
    $root.CMsgHidePopup = (function() {
    
        /**
         * Properties of a CMsgHidePopup.
         * @exports ICMsgHidePopup
         * @interface ICMsgHidePopup
         * @property {number|null} [browser_handle] CMsgHidePopup browser_handle
         */
    
        /**
         * Constructs a new CMsgHidePopup.
         * @exports CMsgHidePopup
         * @classdesc Represents a CMsgHidePopup.
         * @implements ICMsgHidePopup
         * @constructor
         * @param {ICMsgHidePopup=} [properties] Properties to set
         */
        function CMsgHidePopup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgHidePopup browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgHidePopup
         * @instance
         */
        CMsgHidePopup.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgHidePopup instance using the specified properties.
         * @function create
         * @memberof CMsgHidePopup
         * @static
         * @param {ICMsgHidePopup=} [properties] Properties to set
         * @returns {CMsgHidePopup} CMsgHidePopup instance
         */
        CMsgHidePopup.create = function create(properties) {
            return new CMsgHidePopup(properties);
        };
    
        /**
         * Encodes the specified CMsgHidePopup message. Does not implicitly {@link CMsgHidePopup.verify|verify} messages.
         * @function encode
         * @memberof CMsgHidePopup
         * @static
         * @param {ICMsgHidePopup} message CMsgHidePopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHidePopup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgHidePopup message, length delimited. Does not implicitly {@link CMsgHidePopup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgHidePopup
         * @static
         * @param {ICMsgHidePopup} message CMsgHidePopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHidePopup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgHidePopup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgHidePopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgHidePopup} CMsgHidePopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHidePopup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgHidePopup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgHidePopup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgHidePopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgHidePopup} CMsgHidePopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHidePopup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgHidePopup message.
         * @function verify
         * @memberof CMsgHidePopup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgHidePopup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgHidePopup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgHidePopup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgHidePopup} CMsgHidePopup
         */
        CMsgHidePopup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgHidePopup)
                return object;
            var message = new $root.CMsgHidePopup();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgHidePopup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgHidePopup
         * @static
         * @param {CMsgHidePopup} message CMsgHidePopup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgHidePopup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgHidePopup to JSON.
         * @function toJSON
         * @memberof CMsgHidePopup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgHidePopup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgHidePopup;
    })();
    
    $root.CMsgSizePopup = (function() {
    
        /**
         * Properties of a CMsgSizePopup.
         * @exports ICMsgSizePopup
         * @interface ICMsgSizePopup
         * @property {number|null} [browser_handle] CMsgSizePopup browser_handle
         * @property {number|null} [x] CMsgSizePopup x
         * @property {number|null} [y] CMsgSizePopup y
         * @property {number|null} [wide] CMsgSizePopup wide
         * @property {number|null} [tall] CMsgSizePopup tall
         */
    
        /**
         * Constructs a new CMsgSizePopup.
         * @exports CMsgSizePopup
         * @classdesc Represents a CMsgSizePopup.
         * @implements ICMsgSizePopup
         * @constructor
         * @param {ICMsgSizePopup=} [properties] Properties to set
         */
        function CMsgSizePopup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSizePopup browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSizePopup
         * @instance
         */
        CMsgSizePopup.prototype.browser_handle = 0;
    
        /**
         * CMsgSizePopup x.
         * @member {number} x
         * @memberof CMsgSizePopup
         * @instance
         */
        CMsgSizePopup.prototype.x = 0;
    
        /**
         * CMsgSizePopup y.
         * @member {number} y
         * @memberof CMsgSizePopup
         * @instance
         */
        CMsgSizePopup.prototype.y = 0;
    
        /**
         * CMsgSizePopup wide.
         * @member {number} wide
         * @memberof CMsgSizePopup
         * @instance
         */
        CMsgSizePopup.prototype.wide = 0;
    
        /**
         * CMsgSizePopup tall.
         * @member {number} tall
         * @memberof CMsgSizePopup
         * @instance
         */
        CMsgSizePopup.prototype.tall = 0;
    
        /**
         * Creates a new CMsgSizePopup instance using the specified properties.
         * @function create
         * @memberof CMsgSizePopup
         * @static
         * @param {ICMsgSizePopup=} [properties] Properties to set
         * @returns {CMsgSizePopup} CMsgSizePopup instance
         */
        CMsgSizePopup.create = function create(properties) {
            return new CMsgSizePopup(properties);
        };
    
        /**
         * Encodes the specified CMsgSizePopup message. Does not implicitly {@link CMsgSizePopup.verify|verify} messages.
         * @function encode
         * @memberof CMsgSizePopup
         * @static
         * @param {ICMsgSizePopup} message CMsgSizePopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSizePopup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y);
            if (message.wide != null && Object.hasOwnProperty.call(message, "wide"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.wide);
            if (message.tall != null && Object.hasOwnProperty.call(message, "tall"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.tall);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSizePopup message, length delimited. Does not implicitly {@link CMsgSizePopup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSizePopup
         * @static
         * @param {ICMsgSizePopup} message CMsgSizePopup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSizePopup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSizePopup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSizePopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSizePopup} CMsgSizePopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSizePopup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSizePopup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.uint32();
                    break;
                case 3:
                    message.y = reader.uint32();
                    break;
                case 4:
                    message.wide = reader.uint32();
                    break;
                case 5:
                    message.tall = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSizePopup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSizePopup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSizePopup} CMsgSizePopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSizePopup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSizePopup message.
         * @function verify
         * @memberof CMsgSizePopup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSizePopup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.wide != null && message.hasOwnProperty("wide"))
                if (!$util.isInteger(message.wide))
                    return "wide: integer expected";
            if (message.tall != null && message.hasOwnProperty("tall"))
                if (!$util.isInteger(message.tall))
                    return "tall: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSizePopup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSizePopup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSizePopup} CMsgSizePopup
         */
        CMsgSizePopup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSizePopup)
                return object;
            var message = new $root.CMsgSizePopup();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            if (object.wide != null)
                message.wide = object.wide >>> 0;
            if (object.tall != null)
                message.tall = object.tall >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSizePopup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSizePopup
         * @static
         * @param {CMsgSizePopup} message CMsgSizePopup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSizePopup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
                object.wide = 0;
                object.tall = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.wide != null && message.hasOwnProperty("wide"))
                object.wide = message.wide;
            if (message.tall != null && message.hasOwnProperty("tall"))
                object.tall = message.tall;
            return object;
        };
    
        /**
         * Converts this CMsgSizePopup to JSON.
         * @function toJSON
         * @memberof CMsgSizePopup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSizePopup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSizePopup;
    })();
    
    $root.CMsgOpenNewTab = (function() {
    
        /**
         * Properties of a CMsgOpenNewTab.
         * @exports ICMsgOpenNewTab
         * @interface ICMsgOpenNewTab
         * @property {number|null} [browser_handle] CMsgOpenNewTab browser_handle
         * @property {string|null} [url] CMsgOpenNewTab url
         * @property {boolean|null} [bForeground] CMsgOpenNewTab bForeground
         */
    
        /**
         * Constructs a new CMsgOpenNewTab.
         * @exports CMsgOpenNewTab
         * @classdesc Represents a CMsgOpenNewTab.
         * @implements ICMsgOpenNewTab
         * @constructor
         * @param {ICMsgOpenNewTab=} [properties] Properties to set
         */
        function CMsgOpenNewTab(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgOpenNewTab browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgOpenNewTab
         * @instance
         */
        CMsgOpenNewTab.prototype.browser_handle = 0;
    
        /**
         * CMsgOpenNewTab url.
         * @member {string} url
         * @memberof CMsgOpenNewTab
         * @instance
         */
        CMsgOpenNewTab.prototype.url = "";
    
        /**
         * CMsgOpenNewTab bForeground.
         * @member {boolean} bForeground
         * @memberof CMsgOpenNewTab
         * @instance
         */
        CMsgOpenNewTab.prototype.bForeground = false;
    
        /**
         * Creates a new CMsgOpenNewTab instance using the specified properties.
         * @function create
         * @memberof CMsgOpenNewTab
         * @static
         * @param {ICMsgOpenNewTab=} [properties] Properties to set
         * @returns {CMsgOpenNewTab} CMsgOpenNewTab instance
         */
        CMsgOpenNewTab.create = function create(properties) {
            return new CMsgOpenNewTab(properties);
        };
    
        /**
         * Encodes the specified CMsgOpenNewTab message. Does not implicitly {@link CMsgOpenNewTab.verify|verify} messages.
         * @function encode
         * @memberof CMsgOpenNewTab
         * @static
         * @param {ICMsgOpenNewTab} message CMsgOpenNewTab message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgOpenNewTab.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.bForeground != null && Object.hasOwnProperty.call(message, "bForeground"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bForeground);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgOpenNewTab message, length delimited. Does not implicitly {@link CMsgOpenNewTab.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgOpenNewTab
         * @static
         * @param {ICMsgOpenNewTab} message CMsgOpenNewTab message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgOpenNewTab.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgOpenNewTab message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgOpenNewTab
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgOpenNewTab} CMsgOpenNewTab
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgOpenNewTab.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgOpenNewTab();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.bForeground = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgOpenNewTab message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgOpenNewTab
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgOpenNewTab} CMsgOpenNewTab
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgOpenNewTab.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgOpenNewTab message.
         * @function verify
         * @memberof CMsgOpenNewTab
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgOpenNewTab.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.bForeground != null && message.hasOwnProperty("bForeground"))
                if (typeof message.bForeground !== "boolean")
                    return "bForeground: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgOpenNewTab message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgOpenNewTab
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgOpenNewTab} CMsgOpenNewTab
         */
        CMsgOpenNewTab.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgOpenNewTab)
                return object;
            var message = new $root.CMsgOpenNewTab();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.bForeground != null)
                message.bForeground = Boolean(object.bForeground);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgOpenNewTab message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgOpenNewTab
         * @static
         * @param {CMsgOpenNewTab} message CMsgOpenNewTab
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgOpenNewTab.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.bForeground = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.bForeground != null && message.hasOwnProperty("bForeground"))
                object.bForeground = message.bForeground;
            return object;
        };
    
        /**
         * Converts this CMsgOpenNewTab to JSON.
         * @function toJSON
         * @memberof CMsgOpenNewTab
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgOpenNewTab.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgOpenNewTab;
    })();
    
    $root.CMsgOpenNewTabResponse = (function() {
    
        /**
         * Properties of a CMsgOpenNewTabResponse.
         * @exports ICMsgOpenNewTabResponse
         * @interface ICMsgOpenNewTabResponse
         * @property {number|null} [browser_handle] CMsgOpenNewTabResponse browser_handle
         * @property {boolean|null} [bAllow] CMsgOpenNewTabResponse bAllow
         */
    
        /**
         * Constructs a new CMsgOpenNewTabResponse.
         * @exports CMsgOpenNewTabResponse
         * @classdesc Represents a CMsgOpenNewTabResponse.
         * @implements ICMsgOpenNewTabResponse
         * @constructor
         * @param {ICMsgOpenNewTabResponse=} [properties] Properties to set
         */
        function CMsgOpenNewTabResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgOpenNewTabResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgOpenNewTabResponse
         * @instance
         */
        CMsgOpenNewTabResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgOpenNewTabResponse bAllow.
         * @member {boolean} bAllow
         * @memberof CMsgOpenNewTabResponse
         * @instance
         */
        CMsgOpenNewTabResponse.prototype.bAllow = false;
    
        /**
         * Creates a new CMsgOpenNewTabResponse instance using the specified properties.
         * @function create
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {ICMsgOpenNewTabResponse=} [properties] Properties to set
         * @returns {CMsgOpenNewTabResponse} CMsgOpenNewTabResponse instance
         */
        CMsgOpenNewTabResponse.create = function create(properties) {
            return new CMsgOpenNewTabResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgOpenNewTabResponse message. Does not implicitly {@link CMsgOpenNewTabResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {ICMsgOpenNewTabResponse} message CMsgOpenNewTabResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgOpenNewTabResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.bAllow != null && Object.hasOwnProperty.call(message, "bAllow"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bAllow);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgOpenNewTabResponse message, length delimited. Does not implicitly {@link CMsgOpenNewTabResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {ICMsgOpenNewTabResponse} message CMsgOpenNewTabResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgOpenNewTabResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgOpenNewTabResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgOpenNewTabResponse} CMsgOpenNewTabResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgOpenNewTabResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgOpenNewTabResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.bAllow = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgOpenNewTabResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgOpenNewTabResponse} CMsgOpenNewTabResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgOpenNewTabResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgOpenNewTabResponse message.
         * @function verify
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgOpenNewTabResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.bAllow != null && message.hasOwnProperty("bAllow"))
                if (typeof message.bAllow !== "boolean")
                    return "bAllow: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgOpenNewTabResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgOpenNewTabResponse} CMsgOpenNewTabResponse
         */
        CMsgOpenNewTabResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgOpenNewTabResponse)
                return object;
            var message = new $root.CMsgOpenNewTabResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.bAllow != null)
                message.bAllow = Boolean(object.bAllow);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgOpenNewTabResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgOpenNewTabResponse
         * @static
         * @param {CMsgOpenNewTabResponse} message CMsgOpenNewTabResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgOpenNewTabResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.bAllow = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.bAllow != null && message.hasOwnProperty("bAllow"))
                object.bAllow = message.bAllow;
            return object;
        };
    
        /**
         * Converts this CMsgOpenNewTabResponse to JSON.
         * @function toJSON
         * @memberof CMsgOpenNewTabResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgOpenNewTabResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgOpenNewTabResponse;
    })();
    
    $root.CMsgPopupHTMLWindow = (function() {
    
        /**
         * Properties of a CMsgPopupHTMLWindow.
         * @exports ICMsgPopupHTMLWindow
         * @interface ICMsgPopupHTMLWindow
         * @property {number|null} [browser_handle] CMsgPopupHTMLWindow browser_handle
         * @property {string|null} [url] CMsgPopupHTMLWindow url
         * @property {number|null} [x] CMsgPopupHTMLWindow x
         * @property {number|null} [y] CMsgPopupHTMLWindow y
         * @property {number|null} [wide] CMsgPopupHTMLWindow wide
         * @property {number|null} [tall] CMsgPopupHTMLWindow tall
         */
    
        /**
         * Constructs a new CMsgPopupHTMLWindow.
         * @exports CMsgPopupHTMLWindow
         * @classdesc Represents a CMsgPopupHTMLWindow.
         * @implements ICMsgPopupHTMLWindow
         * @constructor
         * @param {ICMsgPopupHTMLWindow=} [properties] Properties to set
         */
        function CMsgPopupHTMLWindow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPopupHTMLWindow browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgPopupHTMLWindow
         * @instance
         */
        CMsgPopupHTMLWindow.prototype.browser_handle = 0;
    
        /**
         * CMsgPopupHTMLWindow url.
         * @member {string} url
         * @memberof CMsgPopupHTMLWindow
         * @instance
         */
        CMsgPopupHTMLWindow.prototype.url = "";
    
        /**
         * CMsgPopupHTMLWindow x.
         * @member {number} x
         * @memberof CMsgPopupHTMLWindow
         * @instance
         */
        CMsgPopupHTMLWindow.prototype.x = 0;
    
        /**
         * CMsgPopupHTMLWindow y.
         * @member {number} y
         * @memberof CMsgPopupHTMLWindow
         * @instance
         */
        CMsgPopupHTMLWindow.prototype.y = 0;
    
        /**
         * CMsgPopupHTMLWindow wide.
         * @member {number} wide
         * @memberof CMsgPopupHTMLWindow
         * @instance
         */
        CMsgPopupHTMLWindow.prototype.wide = 0;
    
        /**
         * CMsgPopupHTMLWindow tall.
         * @member {number} tall
         * @memberof CMsgPopupHTMLWindow
         * @instance
         */
        CMsgPopupHTMLWindow.prototype.tall = 0;
    
        /**
         * Creates a new CMsgPopupHTMLWindow instance using the specified properties.
         * @function create
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {ICMsgPopupHTMLWindow=} [properties] Properties to set
         * @returns {CMsgPopupHTMLWindow} CMsgPopupHTMLWindow instance
         */
        CMsgPopupHTMLWindow.create = function create(properties) {
            return new CMsgPopupHTMLWindow(properties);
        };
    
        /**
         * Encodes the specified CMsgPopupHTMLWindow message. Does not implicitly {@link CMsgPopupHTMLWindow.verify|verify} messages.
         * @function encode
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {ICMsgPopupHTMLWindow} message CMsgPopupHTMLWindow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPopupHTMLWindow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.y);
            if (message.wide != null && Object.hasOwnProperty.call(message, "wide"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.wide);
            if (message.tall != null && Object.hasOwnProperty.call(message, "tall"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.tall);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPopupHTMLWindow message, length delimited. Does not implicitly {@link CMsgPopupHTMLWindow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {ICMsgPopupHTMLWindow} message CMsgPopupHTMLWindow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPopupHTMLWindow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPopupHTMLWindow message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPopupHTMLWindow} CMsgPopupHTMLWindow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPopupHTMLWindow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPopupHTMLWindow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.x = reader.uint32();
                    break;
                case 4:
                    message.y = reader.uint32();
                    break;
                case 5:
                    message.wide = reader.uint32();
                    break;
                case 6:
                    message.tall = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgPopupHTMLWindow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPopupHTMLWindow} CMsgPopupHTMLWindow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPopupHTMLWindow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPopupHTMLWindow message.
         * @function verify
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPopupHTMLWindow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.wide != null && message.hasOwnProperty("wide"))
                if (!$util.isInteger(message.wide))
                    return "wide: integer expected";
            if (message.tall != null && message.hasOwnProperty("tall"))
                if (!$util.isInteger(message.tall))
                    return "tall: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgPopupHTMLWindow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPopupHTMLWindow} CMsgPopupHTMLWindow
         */
        CMsgPopupHTMLWindow.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPopupHTMLWindow)
                return object;
            var message = new $root.CMsgPopupHTMLWindow();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            if (object.wide != null)
                message.wide = object.wide >>> 0;
            if (object.tall != null)
                message.tall = object.tall >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPopupHTMLWindow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPopupHTMLWindow
         * @static
         * @param {CMsgPopupHTMLWindow} message CMsgPopupHTMLWindow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPopupHTMLWindow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.x = 0;
                object.y = 0;
                object.wide = 0;
                object.tall = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.wide != null && message.hasOwnProperty("wide"))
                object.wide = message.wide;
            if (message.tall != null && message.hasOwnProperty("tall"))
                object.tall = message.tall;
            return object;
        };
    
        /**
         * Converts this CMsgPopupHTMLWindow to JSON.
         * @function toJSON
         * @memberof CMsgPopupHTMLWindow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPopupHTMLWindow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgPopupHTMLWindow;
    })();
    
    $root.CMsgPopupHTMLWindowResponse = (function() {
    
        /**
         * Properties of a CMsgPopupHTMLWindowResponse.
         * @exports ICMsgPopupHTMLWindowResponse
         * @interface ICMsgPopupHTMLWindowResponse
         * @property {number|null} [browser_handle] CMsgPopupHTMLWindowResponse browser_handle
         * @property {boolean|null} [bAllow] CMsgPopupHTMLWindowResponse bAllow
         */
    
        /**
         * Constructs a new CMsgPopupHTMLWindowResponse.
         * @exports CMsgPopupHTMLWindowResponse
         * @classdesc Represents a CMsgPopupHTMLWindowResponse.
         * @implements ICMsgPopupHTMLWindowResponse
         * @constructor
         * @param {ICMsgPopupHTMLWindowResponse=} [properties] Properties to set
         */
        function CMsgPopupHTMLWindowResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPopupHTMLWindowResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgPopupHTMLWindowResponse
         * @instance
         */
        CMsgPopupHTMLWindowResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgPopupHTMLWindowResponse bAllow.
         * @member {boolean} bAllow
         * @memberof CMsgPopupHTMLWindowResponse
         * @instance
         */
        CMsgPopupHTMLWindowResponse.prototype.bAllow = false;
    
        /**
         * Creates a new CMsgPopupHTMLWindowResponse instance using the specified properties.
         * @function create
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {ICMsgPopupHTMLWindowResponse=} [properties] Properties to set
         * @returns {CMsgPopupHTMLWindowResponse} CMsgPopupHTMLWindowResponse instance
         */
        CMsgPopupHTMLWindowResponse.create = function create(properties) {
            return new CMsgPopupHTMLWindowResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgPopupHTMLWindowResponse message. Does not implicitly {@link CMsgPopupHTMLWindowResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {ICMsgPopupHTMLWindowResponse} message CMsgPopupHTMLWindowResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPopupHTMLWindowResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.bAllow != null && Object.hasOwnProperty.call(message, "bAllow"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bAllow);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPopupHTMLWindowResponse message, length delimited. Does not implicitly {@link CMsgPopupHTMLWindowResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {ICMsgPopupHTMLWindowResponse} message CMsgPopupHTMLWindowResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPopupHTMLWindowResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPopupHTMLWindowResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPopupHTMLWindowResponse} CMsgPopupHTMLWindowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPopupHTMLWindowResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPopupHTMLWindowResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.bAllow = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgPopupHTMLWindowResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPopupHTMLWindowResponse} CMsgPopupHTMLWindowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPopupHTMLWindowResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPopupHTMLWindowResponse message.
         * @function verify
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPopupHTMLWindowResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.bAllow != null && message.hasOwnProperty("bAllow"))
                if (typeof message.bAllow !== "boolean")
                    return "bAllow: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgPopupHTMLWindowResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPopupHTMLWindowResponse} CMsgPopupHTMLWindowResponse
         */
        CMsgPopupHTMLWindowResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPopupHTMLWindowResponse)
                return object;
            var message = new $root.CMsgPopupHTMLWindowResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.bAllow != null)
                message.bAllow = Boolean(object.bAllow);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPopupHTMLWindowResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPopupHTMLWindowResponse
         * @static
         * @param {CMsgPopupHTMLWindowResponse} message CMsgPopupHTMLWindowResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPopupHTMLWindowResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.bAllow = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.bAllow != null && message.hasOwnProperty("bAllow"))
                object.bAllow = message.bAllow;
            return object;
        };
    
        /**
         * Converts this CMsgPopupHTMLWindowResponse to JSON.
         * @function toJSON
         * @memberof CMsgPopupHTMLWindowResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPopupHTMLWindowResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgPopupHTMLWindowResponse;
    })();
    
    $root.CMsgSetHTMLTitle = (function() {
    
        /**
         * Properties of a CMsgSetHTMLTitle.
         * @exports ICMsgSetHTMLTitle
         * @interface ICMsgSetHTMLTitle
         * @property {number|null} [browser_handle] CMsgSetHTMLTitle browser_handle
         * @property {string|null} [title] CMsgSetHTMLTitle title
         */
    
        /**
         * Constructs a new CMsgSetHTMLTitle.
         * @exports CMsgSetHTMLTitle
         * @classdesc Represents a CMsgSetHTMLTitle.
         * @implements ICMsgSetHTMLTitle
         * @constructor
         * @param {ICMsgSetHTMLTitle=} [properties] Properties to set
         */
        function CMsgSetHTMLTitle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetHTMLTitle browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSetHTMLTitle
         * @instance
         */
        CMsgSetHTMLTitle.prototype.browser_handle = 0;
    
        /**
         * CMsgSetHTMLTitle title.
         * @member {string} title
         * @memberof CMsgSetHTMLTitle
         * @instance
         */
        CMsgSetHTMLTitle.prototype.title = "";
    
        /**
         * Creates a new CMsgSetHTMLTitle instance using the specified properties.
         * @function create
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {ICMsgSetHTMLTitle=} [properties] Properties to set
         * @returns {CMsgSetHTMLTitle} CMsgSetHTMLTitle instance
         */
        CMsgSetHTMLTitle.create = function create(properties) {
            return new CMsgSetHTMLTitle(properties);
        };
    
        /**
         * Encodes the specified CMsgSetHTMLTitle message. Does not implicitly {@link CMsgSetHTMLTitle.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {ICMsgSetHTMLTitle} message CMsgSetHTMLTitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetHTMLTitle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetHTMLTitle message, length delimited. Does not implicitly {@link CMsgSetHTMLTitle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {ICMsgSetHTMLTitle} message CMsgSetHTMLTitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetHTMLTitle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetHTMLTitle message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetHTMLTitle} CMsgSetHTMLTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetHTMLTitle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetHTMLTitle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetHTMLTitle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetHTMLTitle} CMsgSetHTMLTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetHTMLTitle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetHTMLTitle message.
         * @function verify
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetHTMLTitle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetHTMLTitle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetHTMLTitle} CMsgSetHTMLTitle
         */
        CMsgSetHTMLTitle.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetHTMLTitle)
                return object;
            var message = new $root.CMsgSetHTMLTitle();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.title != null)
                message.title = String(object.title);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetHTMLTitle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetHTMLTitle
         * @static
         * @param {CMsgSetHTMLTitle} message CMsgSetHTMLTitle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetHTMLTitle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.title = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            return object;
        };
    
        /**
         * Converts this CMsgSetHTMLTitle to JSON.
         * @function toJSON
         * @memberof CMsgSetHTMLTitle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetHTMLTitle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetHTMLTitle;
    })();
    
    $root.CMsgLoadingResource = (function() {
    
        /**
         * Properties of a CMsgLoadingResource.
         * @exports ICMsgLoadingResource
         * @interface ICMsgLoadingResource
         * @property {number|null} [browser_handle] CMsgLoadingResource browser_handle
         * @property {string|null} [url] CMsgLoadingResource url
         */
    
        /**
         * Constructs a new CMsgLoadingResource.
         * @exports CMsgLoadingResource
         * @classdesc Represents a CMsgLoadingResource.
         * @implements ICMsgLoadingResource
         * @constructor
         * @param {ICMsgLoadingResource=} [properties] Properties to set
         */
        function CMsgLoadingResource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgLoadingResource browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgLoadingResource
         * @instance
         */
        CMsgLoadingResource.prototype.browser_handle = 0;
    
        /**
         * CMsgLoadingResource url.
         * @member {string} url
         * @memberof CMsgLoadingResource
         * @instance
         */
        CMsgLoadingResource.prototype.url = "";
    
        /**
         * Creates a new CMsgLoadingResource instance using the specified properties.
         * @function create
         * @memberof CMsgLoadingResource
         * @static
         * @param {ICMsgLoadingResource=} [properties] Properties to set
         * @returns {CMsgLoadingResource} CMsgLoadingResource instance
         */
        CMsgLoadingResource.create = function create(properties) {
            return new CMsgLoadingResource(properties);
        };
    
        /**
         * Encodes the specified CMsgLoadingResource message. Does not implicitly {@link CMsgLoadingResource.verify|verify} messages.
         * @function encode
         * @memberof CMsgLoadingResource
         * @static
         * @param {ICMsgLoadingResource} message CMsgLoadingResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgLoadingResource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgLoadingResource message, length delimited. Does not implicitly {@link CMsgLoadingResource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgLoadingResource
         * @static
         * @param {ICMsgLoadingResource} message CMsgLoadingResource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgLoadingResource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgLoadingResource message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgLoadingResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgLoadingResource} CMsgLoadingResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgLoadingResource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgLoadingResource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgLoadingResource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgLoadingResource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgLoadingResource} CMsgLoadingResource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgLoadingResource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgLoadingResource message.
         * @function verify
         * @memberof CMsgLoadingResource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgLoadingResource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgLoadingResource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgLoadingResource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgLoadingResource} CMsgLoadingResource
         */
        CMsgLoadingResource.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgLoadingResource)
                return object;
            var message = new $root.CMsgLoadingResource();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgLoadingResource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgLoadingResource
         * @static
         * @param {CMsgLoadingResource} message CMsgLoadingResource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgLoadingResource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };
    
        /**
         * Converts this CMsgLoadingResource to JSON.
         * @function toJSON
         * @memberof CMsgLoadingResource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgLoadingResource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgLoadingResource;
    })();
    
    $root.CMsgStatusText = (function() {
    
        /**
         * Properties of a CMsgStatusText.
         * @exports ICMsgStatusText
         * @interface ICMsgStatusText
         * @property {number|null} [browser_handle] CMsgStatusText browser_handle
         * @property {string|null} [text] CMsgStatusText text
         */
    
        /**
         * Constructs a new CMsgStatusText.
         * @exports CMsgStatusText
         * @classdesc Represents a CMsgStatusText.
         * @implements ICMsgStatusText
         * @constructor
         * @param {ICMsgStatusText=} [properties] Properties to set
         */
        function CMsgStatusText(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgStatusText browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgStatusText
         * @instance
         */
        CMsgStatusText.prototype.browser_handle = 0;
    
        /**
         * CMsgStatusText text.
         * @member {string} text
         * @memberof CMsgStatusText
         * @instance
         */
        CMsgStatusText.prototype.text = "";
    
        /**
         * Creates a new CMsgStatusText instance using the specified properties.
         * @function create
         * @memberof CMsgStatusText
         * @static
         * @param {ICMsgStatusText=} [properties] Properties to set
         * @returns {CMsgStatusText} CMsgStatusText instance
         */
        CMsgStatusText.create = function create(properties) {
            return new CMsgStatusText(properties);
        };
    
        /**
         * Encodes the specified CMsgStatusText message. Does not implicitly {@link CMsgStatusText.verify|verify} messages.
         * @function encode
         * @memberof CMsgStatusText
         * @static
         * @param {ICMsgStatusText} message CMsgStatusText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStatusText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgStatusText message, length delimited. Does not implicitly {@link CMsgStatusText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgStatusText
         * @static
         * @param {ICMsgStatusText} message CMsgStatusText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgStatusText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgStatusText message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgStatusText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgStatusText} CMsgStatusText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStatusText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgStatusText();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgStatusText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgStatusText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgStatusText} CMsgStatusText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgStatusText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgStatusText message.
         * @function verify
         * @memberof CMsgStatusText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgStatusText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgStatusText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgStatusText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgStatusText} CMsgStatusText
         */
        CMsgStatusText.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgStatusText)
                return object;
            var message = new $root.CMsgStatusText();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgStatusText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgStatusText
         * @static
         * @param {CMsgStatusText} message CMsgStatusText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgStatusText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.text = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this CMsgStatusText to JSON.
         * @function toJSON
         * @memberof CMsgStatusText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgStatusText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgStatusText;
    })();
    
    $root.CMsgSetCursor = (function() {
    
        /**
         * Properties of a CMsgSetCursor.
         * @exports ICMsgSetCursor
         * @interface ICMsgSetCursor
         * @property {number|null} [browser_handle] CMsgSetCursor browser_handle
         * @property {number|null} [cursor] CMsgSetCursor cursor
         * @property {Uint8Array|null} [custom_data] CMsgSetCursor custom_data
         * @property {number|null} [wide] CMsgSetCursor wide
         * @property {number|null} [tall] CMsgSetCursor tall
         * @property {number|null} [xhotspot] CMsgSetCursor xhotspot
         * @property {number|null} [yhotspot] CMsgSetCursor yhotspot
         */
    
        /**
         * Constructs a new CMsgSetCursor.
         * @exports CMsgSetCursor
         * @classdesc Represents a CMsgSetCursor.
         * @implements ICMsgSetCursor
         * @constructor
         * @param {ICMsgSetCursor=} [properties] Properties to set
         */
        function CMsgSetCursor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetCursor browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSetCursor
         * @instance
         */
        CMsgSetCursor.prototype.browser_handle = 0;
    
        /**
         * CMsgSetCursor cursor.
         * @member {number} cursor
         * @memberof CMsgSetCursor
         * @instance
         */
        CMsgSetCursor.prototype.cursor = 0;
    
        /**
         * CMsgSetCursor custom_data.
         * @member {Uint8Array} custom_data
         * @memberof CMsgSetCursor
         * @instance
         */
        CMsgSetCursor.prototype.custom_data = $util.newBuffer([]);
    
        /**
         * CMsgSetCursor wide.
         * @member {number} wide
         * @memberof CMsgSetCursor
         * @instance
         */
        CMsgSetCursor.prototype.wide = 0;
    
        /**
         * CMsgSetCursor tall.
         * @member {number} tall
         * @memberof CMsgSetCursor
         * @instance
         */
        CMsgSetCursor.prototype.tall = 0;
    
        /**
         * CMsgSetCursor xhotspot.
         * @member {number} xhotspot
         * @memberof CMsgSetCursor
         * @instance
         */
        CMsgSetCursor.prototype.xhotspot = 0;
    
        /**
         * CMsgSetCursor yhotspot.
         * @member {number} yhotspot
         * @memberof CMsgSetCursor
         * @instance
         */
        CMsgSetCursor.prototype.yhotspot = 0;
    
        /**
         * Creates a new CMsgSetCursor instance using the specified properties.
         * @function create
         * @memberof CMsgSetCursor
         * @static
         * @param {ICMsgSetCursor=} [properties] Properties to set
         * @returns {CMsgSetCursor} CMsgSetCursor instance
         */
        CMsgSetCursor.create = function create(properties) {
            return new CMsgSetCursor(properties);
        };
    
        /**
         * Encodes the specified CMsgSetCursor message. Does not implicitly {@link CMsgSetCursor.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetCursor
         * @static
         * @param {ICMsgSetCursor} message CMsgSetCursor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetCursor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cursor);
            if (message.custom_data != null && Object.hasOwnProperty.call(message, "custom_data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.custom_data);
            if (message.wide != null && Object.hasOwnProperty.call(message, "wide"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.wide);
            if (message.tall != null && Object.hasOwnProperty.call(message, "tall"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.tall);
            if (message.xhotspot != null && Object.hasOwnProperty.call(message, "xhotspot"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.xhotspot);
            if (message.yhotspot != null && Object.hasOwnProperty.call(message, "yhotspot"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.yhotspot);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetCursor message, length delimited. Does not implicitly {@link CMsgSetCursor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetCursor
         * @static
         * @param {ICMsgSetCursor} message CMsgSetCursor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetCursor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetCursor message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetCursor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetCursor} CMsgSetCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetCursor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetCursor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.cursor = reader.uint32();
                    break;
                case 3:
                    message.custom_data = reader.bytes();
                    break;
                case 4:
                    message.wide = reader.uint32();
                    break;
                case 5:
                    message.tall = reader.uint32();
                    break;
                case 6:
                    message.xhotspot = reader.uint32();
                    break;
                case 7:
                    message.yhotspot = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetCursor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetCursor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetCursor} CMsgSetCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetCursor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetCursor message.
         * @function verify
         * @memberof CMsgSetCursor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetCursor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (!$util.isInteger(message.cursor))
                    return "cursor: integer expected";
            if (message.custom_data != null && message.hasOwnProperty("custom_data"))
                if (!(message.custom_data && typeof message.custom_data.length === "number" || $util.isString(message.custom_data)))
                    return "custom_data: buffer expected";
            if (message.wide != null && message.hasOwnProperty("wide"))
                if (!$util.isInteger(message.wide))
                    return "wide: integer expected";
            if (message.tall != null && message.hasOwnProperty("tall"))
                if (!$util.isInteger(message.tall))
                    return "tall: integer expected";
            if (message.xhotspot != null && message.hasOwnProperty("xhotspot"))
                if (!$util.isInteger(message.xhotspot))
                    return "xhotspot: integer expected";
            if (message.yhotspot != null && message.hasOwnProperty("yhotspot"))
                if (!$util.isInteger(message.yhotspot))
                    return "yhotspot: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetCursor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetCursor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetCursor} CMsgSetCursor
         */
        CMsgSetCursor.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetCursor)
                return object;
            var message = new $root.CMsgSetCursor();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.cursor != null)
                message.cursor = object.cursor >>> 0;
            if (object.custom_data != null)
                if (typeof object.custom_data === "string")
                    $util.base64.decode(object.custom_data, message.custom_data = $util.newBuffer($util.base64.length(object.custom_data)), 0);
                else if (object.custom_data.length)
                    message.custom_data = object.custom_data;
            if (object.wide != null)
                message.wide = object.wide >>> 0;
            if (object.tall != null)
                message.tall = object.tall >>> 0;
            if (object.xhotspot != null)
                message.xhotspot = object.xhotspot >>> 0;
            if (object.yhotspot != null)
                message.yhotspot = object.yhotspot >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetCursor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetCursor
         * @static
         * @param {CMsgSetCursor} message CMsgSetCursor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetCursor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.cursor = 0;
                if (options.bytes === String)
                    object.custom_data = "";
                else {
                    object.custom_data = [];
                    if (options.bytes !== Array)
                        object.custom_data = $util.newBuffer(object.custom_data);
                }
                object.wide = 0;
                object.tall = 0;
                object.xhotspot = 0;
                object.yhotspot = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                object.cursor = message.cursor;
            if (message.custom_data != null && message.hasOwnProperty("custom_data"))
                object.custom_data = options.bytes === String ? $util.base64.encode(message.custom_data, 0, message.custom_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.custom_data) : message.custom_data;
            if (message.wide != null && message.hasOwnProperty("wide"))
                object.wide = message.wide;
            if (message.tall != null && message.hasOwnProperty("tall"))
                object.tall = message.tall;
            if (message.xhotspot != null && message.hasOwnProperty("xhotspot"))
                object.xhotspot = message.xhotspot;
            if (message.yhotspot != null && message.hasOwnProperty("yhotspot"))
                object.yhotspot = message.yhotspot;
            return object;
        };
    
        /**
         * Converts this CMsgSetCursor to JSON.
         * @function toJSON
         * @memberof CMsgSetCursor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetCursor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetCursor;
    })();
    
    $root.CMsgFileLoadDialog = (function() {
    
        /**
         * Properties of a CMsgFileLoadDialog.
         * @exports ICMsgFileLoadDialog
         * @interface ICMsgFileLoadDialog
         * @property {number|null} [browser_handle] CMsgFileLoadDialog browser_handle
         * @property {string|null} [title] CMsgFileLoadDialog title
         * @property {string|null} [initialFile] CMsgFileLoadDialog initialFile
         */
    
        /**
         * Constructs a new CMsgFileLoadDialog.
         * @exports CMsgFileLoadDialog
         * @classdesc Represents a CMsgFileLoadDialog.
         * @implements ICMsgFileLoadDialog
         * @constructor
         * @param {ICMsgFileLoadDialog=} [properties] Properties to set
         */
        function CMsgFileLoadDialog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFileLoadDialog browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgFileLoadDialog
         * @instance
         */
        CMsgFileLoadDialog.prototype.browser_handle = 0;
    
        /**
         * CMsgFileLoadDialog title.
         * @member {string} title
         * @memberof CMsgFileLoadDialog
         * @instance
         */
        CMsgFileLoadDialog.prototype.title = "";
    
        /**
         * CMsgFileLoadDialog initialFile.
         * @member {string} initialFile
         * @memberof CMsgFileLoadDialog
         * @instance
         */
        CMsgFileLoadDialog.prototype.initialFile = "";
    
        /**
         * Creates a new CMsgFileLoadDialog instance using the specified properties.
         * @function create
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {ICMsgFileLoadDialog=} [properties] Properties to set
         * @returns {CMsgFileLoadDialog} CMsgFileLoadDialog instance
         */
        CMsgFileLoadDialog.create = function create(properties) {
            return new CMsgFileLoadDialog(properties);
        };
    
        /**
         * Encodes the specified CMsgFileLoadDialog message. Does not implicitly {@link CMsgFileLoadDialog.verify|verify} messages.
         * @function encode
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {ICMsgFileLoadDialog} message CMsgFileLoadDialog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFileLoadDialog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.initialFile != null && Object.hasOwnProperty.call(message, "initialFile"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.initialFile);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFileLoadDialog message, length delimited. Does not implicitly {@link CMsgFileLoadDialog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {ICMsgFileLoadDialog} message CMsgFileLoadDialog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFileLoadDialog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFileLoadDialog message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFileLoadDialog} CMsgFileLoadDialog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFileLoadDialog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFileLoadDialog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.initialFile = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFileLoadDialog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFileLoadDialog} CMsgFileLoadDialog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFileLoadDialog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFileLoadDialog message.
         * @function verify
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFileLoadDialog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.initialFile != null && message.hasOwnProperty("initialFile"))
                if (!$util.isString(message.initialFile))
                    return "initialFile: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgFileLoadDialog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFileLoadDialog} CMsgFileLoadDialog
         */
        CMsgFileLoadDialog.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFileLoadDialog)
                return object;
            var message = new $root.CMsgFileLoadDialog();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.initialFile != null)
                message.initialFile = String(object.initialFile);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFileLoadDialog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFileLoadDialog
         * @static
         * @param {CMsgFileLoadDialog} message CMsgFileLoadDialog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFileLoadDialog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.title = "";
                object.initialFile = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.initialFile != null && message.hasOwnProperty("initialFile"))
                object.initialFile = message.initialFile;
            return object;
        };
    
        /**
         * Converts this CMsgFileLoadDialog to JSON.
         * @function toJSON
         * @memberof CMsgFileLoadDialog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFileLoadDialog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgFileLoadDialog;
    })();
    
    $root.CMsgFileLoadDialogResponse = (function() {
    
        /**
         * Properties of a CMsgFileLoadDialogResponse.
         * @exports ICMsgFileLoadDialogResponse
         * @interface ICMsgFileLoadDialogResponse
         * @property {number|null} [browser_handle] CMsgFileLoadDialogResponse browser_handle
         * @property {Array.<string>|null} [files] CMsgFileLoadDialogResponse files
         */
    
        /**
         * Constructs a new CMsgFileLoadDialogResponse.
         * @exports CMsgFileLoadDialogResponse
         * @classdesc Represents a CMsgFileLoadDialogResponse.
         * @implements ICMsgFileLoadDialogResponse
         * @constructor
         * @param {ICMsgFileLoadDialogResponse=} [properties] Properties to set
         */
        function CMsgFileLoadDialogResponse(properties) {
            this.files = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFileLoadDialogResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgFileLoadDialogResponse
         * @instance
         */
        CMsgFileLoadDialogResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgFileLoadDialogResponse files.
         * @member {Array.<string>} files
         * @memberof CMsgFileLoadDialogResponse
         * @instance
         */
        CMsgFileLoadDialogResponse.prototype.files = $util.emptyArray;
    
        /**
         * Creates a new CMsgFileLoadDialogResponse instance using the specified properties.
         * @function create
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {ICMsgFileLoadDialogResponse=} [properties] Properties to set
         * @returns {CMsgFileLoadDialogResponse} CMsgFileLoadDialogResponse instance
         */
        CMsgFileLoadDialogResponse.create = function create(properties) {
            return new CMsgFileLoadDialogResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgFileLoadDialogResponse message. Does not implicitly {@link CMsgFileLoadDialogResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {ICMsgFileLoadDialogResponse} message CMsgFileLoadDialogResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFileLoadDialogResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.files != null && message.files.length)
                for (var i = 0; i < message.files.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.files[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFileLoadDialogResponse message, length delimited. Does not implicitly {@link CMsgFileLoadDialogResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {ICMsgFileLoadDialogResponse} message CMsgFileLoadDialogResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFileLoadDialogResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFileLoadDialogResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFileLoadDialogResponse} CMsgFileLoadDialogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFileLoadDialogResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFileLoadDialogResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    if (!(message.files && message.files.length))
                        message.files = [];
                    message.files.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFileLoadDialogResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFileLoadDialogResponse} CMsgFileLoadDialogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFileLoadDialogResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFileLoadDialogResponse message.
         * @function verify
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFileLoadDialogResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.files != null && message.hasOwnProperty("files")) {
                if (!Array.isArray(message.files))
                    return "files: array expected";
                for (var i = 0; i < message.files.length; ++i)
                    if (!$util.isString(message.files[i]))
                        return "files: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgFileLoadDialogResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFileLoadDialogResponse} CMsgFileLoadDialogResponse
         */
        CMsgFileLoadDialogResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFileLoadDialogResponse)
                return object;
            var message = new $root.CMsgFileLoadDialogResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.files) {
                if (!Array.isArray(object.files))
                    throw TypeError(".CMsgFileLoadDialogResponse.files: array expected");
                message.files = [];
                for (var i = 0; i < object.files.length; ++i)
                    message.files[i] = String(object.files[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFileLoadDialogResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFileLoadDialogResponse
         * @static
         * @param {CMsgFileLoadDialogResponse} message CMsgFileLoadDialogResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFileLoadDialogResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.files = [];
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.files && message.files.length) {
                object.files = [];
                for (var j = 0; j < message.files.length; ++j)
                    object.files[j] = message.files[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgFileLoadDialogResponse to JSON.
         * @function toJSON
         * @memberof CMsgFileLoadDialogResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFileLoadDialogResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgFileLoadDialogResponse;
    })();
    
    $root.CMsgShowToolTip = (function() {
    
        /**
         * Properties of a CMsgShowToolTip.
         * @exports ICMsgShowToolTip
         * @interface ICMsgShowToolTip
         * @property {number|null} [browser_handle] CMsgShowToolTip browser_handle
         * @property {string|null} [text] CMsgShowToolTip text
         */
    
        /**
         * Constructs a new CMsgShowToolTip.
         * @exports CMsgShowToolTip
         * @classdesc Represents a CMsgShowToolTip.
         * @implements ICMsgShowToolTip
         * @constructor
         * @param {ICMsgShowToolTip=} [properties] Properties to set
         */
        function CMsgShowToolTip(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgShowToolTip browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgShowToolTip
         * @instance
         */
        CMsgShowToolTip.prototype.browser_handle = 0;
    
        /**
         * CMsgShowToolTip text.
         * @member {string} text
         * @memberof CMsgShowToolTip
         * @instance
         */
        CMsgShowToolTip.prototype.text = "";
    
        /**
         * Creates a new CMsgShowToolTip instance using the specified properties.
         * @function create
         * @memberof CMsgShowToolTip
         * @static
         * @param {ICMsgShowToolTip=} [properties] Properties to set
         * @returns {CMsgShowToolTip} CMsgShowToolTip instance
         */
        CMsgShowToolTip.create = function create(properties) {
            return new CMsgShowToolTip(properties);
        };
    
        /**
         * Encodes the specified CMsgShowToolTip message. Does not implicitly {@link CMsgShowToolTip.verify|verify} messages.
         * @function encode
         * @memberof CMsgShowToolTip
         * @static
         * @param {ICMsgShowToolTip} message CMsgShowToolTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgShowToolTip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgShowToolTip message, length delimited. Does not implicitly {@link CMsgShowToolTip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgShowToolTip
         * @static
         * @param {ICMsgShowToolTip} message CMsgShowToolTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgShowToolTip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgShowToolTip message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgShowToolTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgShowToolTip} CMsgShowToolTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgShowToolTip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgShowToolTip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgShowToolTip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgShowToolTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgShowToolTip} CMsgShowToolTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgShowToolTip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgShowToolTip message.
         * @function verify
         * @memberof CMsgShowToolTip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgShowToolTip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgShowToolTip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgShowToolTip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgShowToolTip} CMsgShowToolTip
         */
        CMsgShowToolTip.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgShowToolTip)
                return object;
            var message = new $root.CMsgShowToolTip();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgShowToolTip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgShowToolTip
         * @static
         * @param {CMsgShowToolTip} message CMsgShowToolTip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgShowToolTip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.text = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this CMsgShowToolTip to JSON.
         * @function toJSON
         * @memberof CMsgShowToolTip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgShowToolTip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgShowToolTip;
    })();
    
    $root.CMsgUpdateToolTip = (function() {
    
        /**
         * Properties of a CMsgUpdateToolTip.
         * @exports ICMsgUpdateToolTip
         * @interface ICMsgUpdateToolTip
         * @property {number|null} [browser_handle] CMsgUpdateToolTip browser_handle
         * @property {string|null} [text] CMsgUpdateToolTip text
         */
    
        /**
         * Constructs a new CMsgUpdateToolTip.
         * @exports CMsgUpdateToolTip
         * @classdesc Represents a CMsgUpdateToolTip.
         * @implements ICMsgUpdateToolTip
         * @constructor
         * @param {ICMsgUpdateToolTip=} [properties] Properties to set
         */
        function CMsgUpdateToolTip(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgUpdateToolTip browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgUpdateToolTip
         * @instance
         */
        CMsgUpdateToolTip.prototype.browser_handle = 0;
    
        /**
         * CMsgUpdateToolTip text.
         * @member {string} text
         * @memberof CMsgUpdateToolTip
         * @instance
         */
        CMsgUpdateToolTip.prototype.text = "";
    
        /**
         * Creates a new CMsgUpdateToolTip instance using the specified properties.
         * @function create
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {ICMsgUpdateToolTip=} [properties] Properties to set
         * @returns {CMsgUpdateToolTip} CMsgUpdateToolTip instance
         */
        CMsgUpdateToolTip.create = function create(properties) {
            return new CMsgUpdateToolTip(properties);
        };
    
        /**
         * Encodes the specified CMsgUpdateToolTip message. Does not implicitly {@link CMsgUpdateToolTip.verify|verify} messages.
         * @function encode
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {ICMsgUpdateToolTip} message CMsgUpdateToolTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgUpdateToolTip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgUpdateToolTip message, length delimited. Does not implicitly {@link CMsgUpdateToolTip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {ICMsgUpdateToolTip} message CMsgUpdateToolTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgUpdateToolTip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgUpdateToolTip message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgUpdateToolTip} CMsgUpdateToolTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgUpdateToolTip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgUpdateToolTip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgUpdateToolTip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgUpdateToolTip} CMsgUpdateToolTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgUpdateToolTip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgUpdateToolTip message.
         * @function verify
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgUpdateToolTip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgUpdateToolTip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgUpdateToolTip} CMsgUpdateToolTip
         */
        CMsgUpdateToolTip.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgUpdateToolTip)
                return object;
            var message = new $root.CMsgUpdateToolTip();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgUpdateToolTip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgUpdateToolTip
         * @static
         * @param {CMsgUpdateToolTip} message CMsgUpdateToolTip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgUpdateToolTip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.text = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this CMsgUpdateToolTip to JSON.
         * @function toJSON
         * @memberof CMsgUpdateToolTip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgUpdateToolTip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgUpdateToolTip;
    })();
    
    $root.CMsgHideToolTip = (function() {
    
        /**
         * Properties of a CMsgHideToolTip.
         * @exports ICMsgHideToolTip
         * @interface ICMsgHideToolTip
         * @property {number|null} [browser_handle] CMsgHideToolTip browser_handle
         */
    
        /**
         * Constructs a new CMsgHideToolTip.
         * @exports CMsgHideToolTip
         * @classdesc Represents a CMsgHideToolTip.
         * @implements ICMsgHideToolTip
         * @constructor
         * @param {ICMsgHideToolTip=} [properties] Properties to set
         */
        function CMsgHideToolTip(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgHideToolTip browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgHideToolTip
         * @instance
         */
        CMsgHideToolTip.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgHideToolTip instance using the specified properties.
         * @function create
         * @memberof CMsgHideToolTip
         * @static
         * @param {ICMsgHideToolTip=} [properties] Properties to set
         * @returns {CMsgHideToolTip} CMsgHideToolTip instance
         */
        CMsgHideToolTip.create = function create(properties) {
            return new CMsgHideToolTip(properties);
        };
    
        /**
         * Encodes the specified CMsgHideToolTip message. Does not implicitly {@link CMsgHideToolTip.verify|verify} messages.
         * @function encode
         * @memberof CMsgHideToolTip
         * @static
         * @param {ICMsgHideToolTip} message CMsgHideToolTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHideToolTip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgHideToolTip message, length delimited. Does not implicitly {@link CMsgHideToolTip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgHideToolTip
         * @static
         * @param {ICMsgHideToolTip} message CMsgHideToolTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgHideToolTip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgHideToolTip message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgHideToolTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgHideToolTip} CMsgHideToolTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHideToolTip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgHideToolTip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgHideToolTip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgHideToolTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgHideToolTip} CMsgHideToolTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgHideToolTip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgHideToolTip message.
         * @function verify
         * @memberof CMsgHideToolTip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgHideToolTip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgHideToolTip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgHideToolTip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgHideToolTip} CMsgHideToolTip
         */
        CMsgHideToolTip.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgHideToolTip)
                return object;
            var message = new $root.CMsgHideToolTip();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgHideToolTip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgHideToolTip
         * @static
         * @param {CMsgHideToolTip} message CMsgHideToolTip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgHideToolTip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgHideToolTip to JSON.
         * @function toJSON
         * @memberof CMsgHideToolTip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgHideToolTip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgHideToolTip;
    })();
    
    $root.CMsgSearchResults = (function() {
    
        /**
         * Properties of a CMsgSearchResults.
         * @exports ICMsgSearchResults
         * @interface ICMsgSearchResults
         * @property {number|null} [browser_handle] CMsgSearchResults browser_handle
         * @property {number|null} [activeMatch] CMsgSearchResults activeMatch
         * @property {number|null} [results] CMsgSearchResults results
         */
    
        /**
         * Constructs a new CMsgSearchResults.
         * @exports CMsgSearchResults
         * @classdesc Represents a CMsgSearchResults.
         * @implements ICMsgSearchResults
         * @constructor
         * @param {ICMsgSearchResults=} [properties] Properties to set
         */
        function CMsgSearchResults(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSearchResults browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSearchResults
         * @instance
         */
        CMsgSearchResults.prototype.browser_handle = 0;
    
        /**
         * CMsgSearchResults activeMatch.
         * @member {number} activeMatch
         * @memberof CMsgSearchResults
         * @instance
         */
        CMsgSearchResults.prototype.activeMatch = 0;
    
        /**
         * CMsgSearchResults results.
         * @member {number} results
         * @memberof CMsgSearchResults
         * @instance
         */
        CMsgSearchResults.prototype.results = 0;
    
        /**
         * Creates a new CMsgSearchResults instance using the specified properties.
         * @function create
         * @memberof CMsgSearchResults
         * @static
         * @param {ICMsgSearchResults=} [properties] Properties to set
         * @returns {CMsgSearchResults} CMsgSearchResults instance
         */
        CMsgSearchResults.create = function create(properties) {
            return new CMsgSearchResults(properties);
        };
    
        /**
         * Encodes the specified CMsgSearchResults message. Does not implicitly {@link CMsgSearchResults.verify|verify} messages.
         * @function encode
         * @memberof CMsgSearchResults
         * @static
         * @param {ICMsgSearchResults} message CMsgSearchResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSearchResults.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.activeMatch != null && Object.hasOwnProperty.call(message, "activeMatch"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.activeMatch);
            if (message.results != null && Object.hasOwnProperty.call(message, "results"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.results);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSearchResults message, length delimited. Does not implicitly {@link CMsgSearchResults.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSearchResults
         * @static
         * @param {ICMsgSearchResults} message CMsgSearchResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSearchResults.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSearchResults message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSearchResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSearchResults} CMsgSearchResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSearchResults.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSearchResults();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.activeMatch = reader.int32();
                    break;
                case 3:
                    message.results = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSearchResults message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSearchResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSearchResults} CMsgSearchResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSearchResults.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSearchResults message.
         * @function verify
         * @memberof CMsgSearchResults
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSearchResults.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.activeMatch != null && message.hasOwnProperty("activeMatch"))
                if (!$util.isInteger(message.activeMatch))
                    return "activeMatch: integer expected";
            if (message.results != null && message.hasOwnProperty("results"))
                if (!$util.isInteger(message.results))
                    return "results: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSearchResults message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSearchResults
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSearchResults} CMsgSearchResults
         */
        CMsgSearchResults.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSearchResults)
                return object;
            var message = new $root.CMsgSearchResults();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.activeMatch != null)
                message.activeMatch = object.activeMatch | 0;
            if (object.results != null)
                message.results = object.results | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSearchResults message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSearchResults
         * @static
         * @param {CMsgSearchResults} message CMsgSearchResults
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSearchResults.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.activeMatch = 0;
                object.results = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.activeMatch != null && message.hasOwnProperty("activeMatch"))
                object.activeMatch = message.activeMatch;
            if (message.results != null && message.hasOwnProperty("results"))
                object.results = message.results;
            return object;
        };
    
        /**
         * Converts this CMsgSearchResults to JSON.
         * @function toJSON
         * @memberof CMsgSearchResults
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSearchResults.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSearchResults;
    })();
    
    $root.CMsgClose = (function() {
    
        /**
         * Properties of a CMsgClose.
         * @exports ICMsgClose
         * @interface ICMsgClose
         * @property {number|null} [browser_handle] CMsgClose browser_handle
         */
    
        /**
         * Constructs a new CMsgClose.
         * @exports CMsgClose
         * @classdesc Represents a CMsgClose.
         * @implements ICMsgClose
         * @constructor
         * @param {ICMsgClose=} [properties] Properties to set
         */
        function CMsgClose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClose browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgClose
         * @instance
         */
        CMsgClose.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgClose instance using the specified properties.
         * @function create
         * @memberof CMsgClose
         * @static
         * @param {ICMsgClose=} [properties] Properties to set
         * @returns {CMsgClose} CMsgClose instance
         */
        CMsgClose.create = function create(properties) {
            return new CMsgClose(properties);
        };
    
        /**
         * Encodes the specified CMsgClose message. Does not implicitly {@link CMsgClose.verify|verify} messages.
         * @function encode
         * @memberof CMsgClose
         * @static
         * @param {ICMsgClose} message CMsgClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClose message, length delimited. Does not implicitly {@link CMsgClose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClose
         * @static
         * @param {ICMsgClose} message CMsgClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClose message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClose} CMsgClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClose} CMsgClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClose message.
         * @function verify
         * @memberof CMsgClose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClose} CMsgClose
         */
        CMsgClose.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClose)
                return object;
            var message = new $root.CMsgClose();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClose
         * @static
         * @param {CMsgClose} message CMsgClose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgClose to JSON.
         * @function toJSON
         * @memberof CMsgClose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClose;
    })();
    
    $root.CMsgNeedsPaint = (function() {
    
        /**
         * Properties of a CMsgNeedsPaint.
         * @exports ICMsgNeedsPaint
         * @interface ICMsgNeedsPaint
         * @property {number|null} [browser_handle] CMsgNeedsPaint browser_handle
         * @property {number|Long|null} [rgba] CMsgNeedsPaint rgba
         * @property {number|null} [wide] CMsgNeedsPaint wide
         * @property {number|null} [tall] CMsgNeedsPaint tall
         * @property {number|null} [textureid] CMsgNeedsPaint textureid
         * @property {number|null} [updatex] CMsgNeedsPaint updatex
         * @property {number|null} [updatey] CMsgNeedsPaint updatey
         * @property {number|null} [updatewide] CMsgNeedsPaint updatewide
         * @property {number|null} [updatetall] CMsgNeedsPaint updatetall
         * @property {number|null} [scrollx] CMsgNeedsPaint scrollx
         * @property {number|null} [scrolly] CMsgNeedsPaint scrolly
         * @property {number|Long|null} [combobox_rgba] CMsgNeedsPaint combobox_rgba
         * @property {number|null} [combobox_wide] CMsgNeedsPaint combobox_wide
         * @property {number|null} [combobox_tall] CMsgNeedsPaint combobox_tall
         * @property {number|null} [pageserial] CMsgNeedsPaint pageserial
         */
    
        /**
         * Constructs a new CMsgNeedsPaint.
         * @exports CMsgNeedsPaint
         * @classdesc Represents a CMsgNeedsPaint.
         * @implements ICMsgNeedsPaint
         * @constructor
         * @param {ICMsgNeedsPaint=} [properties] Properties to set
         */
        function CMsgNeedsPaint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgNeedsPaint browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.browser_handle = 0;
    
        /**
         * CMsgNeedsPaint rgba.
         * @member {number|Long} rgba
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.rgba = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgNeedsPaint wide.
         * @member {number} wide
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.wide = 0;
    
        /**
         * CMsgNeedsPaint tall.
         * @member {number} tall
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.tall = 0;
    
        /**
         * CMsgNeedsPaint textureid.
         * @member {number} textureid
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.textureid = 0;
    
        /**
         * CMsgNeedsPaint updatex.
         * @member {number} updatex
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.updatex = 0;
    
        /**
         * CMsgNeedsPaint updatey.
         * @member {number} updatey
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.updatey = 0;
    
        /**
         * CMsgNeedsPaint updatewide.
         * @member {number} updatewide
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.updatewide = 0;
    
        /**
         * CMsgNeedsPaint updatetall.
         * @member {number} updatetall
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.updatetall = 0;
    
        /**
         * CMsgNeedsPaint scrollx.
         * @member {number} scrollx
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.scrollx = 0;
    
        /**
         * CMsgNeedsPaint scrolly.
         * @member {number} scrolly
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.scrolly = 0;
    
        /**
         * CMsgNeedsPaint combobox_rgba.
         * @member {number|Long} combobox_rgba
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.combobox_rgba = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgNeedsPaint combobox_wide.
         * @member {number} combobox_wide
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.combobox_wide = 0;
    
        /**
         * CMsgNeedsPaint combobox_tall.
         * @member {number} combobox_tall
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.combobox_tall = 0;
    
        /**
         * CMsgNeedsPaint pageserial.
         * @member {number} pageserial
         * @memberof CMsgNeedsPaint
         * @instance
         */
        CMsgNeedsPaint.prototype.pageserial = 0;
    
        /**
         * Creates a new CMsgNeedsPaint instance using the specified properties.
         * @function create
         * @memberof CMsgNeedsPaint
         * @static
         * @param {ICMsgNeedsPaint=} [properties] Properties to set
         * @returns {CMsgNeedsPaint} CMsgNeedsPaint instance
         */
        CMsgNeedsPaint.create = function create(properties) {
            return new CMsgNeedsPaint(properties);
        };
    
        /**
         * Encodes the specified CMsgNeedsPaint message. Does not implicitly {@link CMsgNeedsPaint.verify|verify} messages.
         * @function encode
         * @memberof CMsgNeedsPaint
         * @static
         * @param {ICMsgNeedsPaint} message CMsgNeedsPaint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgNeedsPaint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.rgba != null && Object.hasOwnProperty.call(message, "rgba"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.rgba);
            if (message.wide != null && Object.hasOwnProperty.call(message, "wide"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.wide);
            if (message.tall != null && Object.hasOwnProperty.call(message, "tall"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.tall);
            if (message.textureid != null && Object.hasOwnProperty.call(message, "textureid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.textureid);
            if (message.updatex != null && Object.hasOwnProperty.call(message, "updatex"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.updatex);
            if (message.updatey != null && Object.hasOwnProperty.call(message, "updatey"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.updatey);
            if (message.updatewide != null && Object.hasOwnProperty.call(message, "updatewide"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.updatewide);
            if (message.updatetall != null && Object.hasOwnProperty.call(message, "updatetall"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.updatetall);
            if (message.scrollx != null && Object.hasOwnProperty.call(message, "scrollx"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.scrollx);
            if (message.scrolly != null && Object.hasOwnProperty.call(message, "scrolly"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.scrolly);
            if (message.combobox_rgba != null && Object.hasOwnProperty.call(message, "combobox_rgba"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.combobox_rgba);
            if (message.combobox_wide != null && Object.hasOwnProperty.call(message, "combobox_wide"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.combobox_wide);
            if (message.combobox_tall != null && Object.hasOwnProperty.call(message, "combobox_tall"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.combobox_tall);
            if (message.pageserial != null && Object.hasOwnProperty.call(message, "pageserial"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.pageserial);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgNeedsPaint message, length delimited. Does not implicitly {@link CMsgNeedsPaint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgNeedsPaint
         * @static
         * @param {ICMsgNeedsPaint} message CMsgNeedsPaint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgNeedsPaint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgNeedsPaint message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgNeedsPaint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgNeedsPaint} CMsgNeedsPaint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgNeedsPaint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgNeedsPaint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.rgba = reader.uint64();
                    break;
                case 3:
                    message.wide = reader.uint32();
                    break;
                case 4:
                    message.tall = reader.uint32();
                    break;
                case 5:
                    message.textureid = reader.uint32();
                    break;
                case 6:
                    message.updatex = reader.uint32();
                    break;
                case 7:
                    message.updatey = reader.uint32();
                    break;
                case 8:
                    message.updatewide = reader.uint32();
                    break;
                case 9:
                    message.updatetall = reader.uint32();
                    break;
                case 10:
                    message.scrollx = reader.uint32();
                    break;
                case 11:
                    message.scrolly = reader.uint32();
                    break;
                case 12:
                    message.combobox_rgba = reader.uint64();
                    break;
                case 13:
                    message.combobox_wide = reader.uint32();
                    break;
                case 14:
                    message.combobox_tall = reader.uint32();
                    break;
                case 15:
                    message.pageserial = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgNeedsPaint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgNeedsPaint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgNeedsPaint} CMsgNeedsPaint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgNeedsPaint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgNeedsPaint message.
         * @function verify
         * @memberof CMsgNeedsPaint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgNeedsPaint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.rgba != null && message.hasOwnProperty("rgba"))
                if (!$util.isInteger(message.rgba) && !(message.rgba && $util.isInteger(message.rgba.low) && $util.isInteger(message.rgba.high)))
                    return "rgba: integer|Long expected";
            if (message.wide != null && message.hasOwnProperty("wide"))
                if (!$util.isInteger(message.wide))
                    return "wide: integer expected";
            if (message.tall != null && message.hasOwnProperty("tall"))
                if (!$util.isInteger(message.tall))
                    return "tall: integer expected";
            if (message.textureid != null && message.hasOwnProperty("textureid"))
                if (!$util.isInteger(message.textureid))
                    return "textureid: integer expected";
            if (message.updatex != null && message.hasOwnProperty("updatex"))
                if (!$util.isInteger(message.updatex))
                    return "updatex: integer expected";
            if (message.updatey != null && message.hasOwnProperty("updatey"))
                if (!$util.isInteger(message.updatey))
                    return "updatey: integer expected";
            if (message.updatewide != null && message.hasOwnProperty("updatewide"))
                if (!$util.isInteger(message.updatewide))
                    return "updatewide: integer expected";
            if (message.updatetall != null && message.hasOwnProperty("updatetall"))
                if (!$util.isInteger(message.updatetall))
                    return "updatetall: integer expected";
            if (message.scrollx != null && message.hasOwnProperty("scrollx"))
                if (!$util.isInteger(message.scrollx))
                    return "scrollx: integer expected";
            if (message.scrolly != null && message.hasOwnProperty("scrolly"))
                if (!$util.isInteger(message.scrolly))
                    return "scrolly: integer expected";
            if (message.combobox_rgba != null && message.hasOwnProperty("combobox_rgba"))
                if (!$util.isInteger(message.combobox_rgba) && !(message.combobox_rgba && $util.isInteger(message.combobox_rgba.low) && $util.isInteger(message.combobox_rgba.high)))
                    return "combobox_rgba: integer|Long expected";
            if (message.combobox_wide != null && message.hasOwnProperty("combobox_wide"))
                if (!$util.isInteger(message.combobox_wide))
                    return "combobox_wide: integer expected";
            if (message.combobox_tall != null && message.hasOwnProperty("combobox_tall"))
                if (!$util.isInteger(message.combobox_tall))
                    return "combobox_tall: integer expected";
            if (message.pageserial != null && message.hasOwnProperty("pageserial"))
                if (!$util.isInteger(message.pageserial))
                    return "pageserial: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgNeedsPaint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgNeedsPaint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgNeedsPaint} CMsgNeedsPaint
         */
        CMsgNeedsPaint.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgNeedsPaint)
                return object;
            var message = new $root.CMsgNeedsPaint();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.rgba != null)
                if ($util.Long)
                    (message.rgba = $util.Long.fromValue(object.rgba)).unsigned = true;
                else if (typeof object.rgba === "string")
                    message.rgba = parseInt(object.rgba, 10);
                else if (typeof object.rgba === "number")
                    message.rgba = object.rgba;
                else if (typeof object.rgba === "object")
                    message.rgba = new $util.LongBits(object.rgba.low >>> 0, object.rgba.high >>> 0).toNumber(true);
            if (object.wide != null)
                message.wide = object.wide >>> 0;
            if (object.tall != null)
                message.tall = object.tall >>> 0;
            if (object.textureid != null)
                message.textureid = object.textureid >>> 0;
            if (object.updatex != null)
                message.updatex = object.updatex >>> 0;
            if (object.updatey != null)
                message.updatey = object.updatey >>> 0;
            if (object.updatewide != null)
                message.updatewide = object.updatewide >>> 0;
            if (object.updatetall != null)
                message.updatetall = object.updatetall >>> 0;
            if (object.scrollx != null)
                message.scrollx = object.scrollx >>> 0;
            if (object.scrolly != null)
                message.scrolly = object.scrolly >>> 0;
            if (object.combobox_rgba != null)
                if ($util.Long)
                    (message.combobox_rgba = $util.Long.fromValue(object.combobox_rgba)).unsigned = true;
                else if (typeof object.combobox_rgba === "string")
                    message.combobox_rgba = parseInt(object.combobox_rgba, 10);
                else if (typeof object.combobox_rgba === "number")
                    message.combobox_rgba = object.combobox_rgba;
                else if (typeof object.combobox_rgba === "object")
                    message.combobox_rgba = new $util.LongBits(object.combobox_rgba.low >>> 0, object.combobox_rgba.high >>> 0).toNumber(true);
            if (object.combobox_wide != null)
                message.combobox_wide = object.combobox_wide >>> 0;
            if (object.combobox_tall != null)
                message.combobox_tall = object.combobox_tall >>> 0;
            if (object.pageserial != null)
                message.pageserial = object.pageserial >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgNeedsPaint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgNeedsPaint
         * @static
         * @param {CMsgNeedsPaint} message CMsgNeedsPaint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgNeedsPaint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.rgba = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rgba = options.longs === String ? "0" : 0;
                object.wide = 0;
                object.tall = 0;
                object.textureid = 0;
                object.updatex = 0;
                object.updatey = 0;
                object.updatewide = 0;
                object.updatetall = 0;
                object.scrollx = 0;
                object.scrolly = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.combobox_rgba = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.combobox_rgba = options.longs === String ? "0" : 0;
                object.combobox_wide = 0;
                object.combobox_tall = 0;
                object.pageserial = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.rgba != null && message.hasOwnProperty("rgba"))
                if (typeof message.rgba === "number")
                    object.rgba = options.longs === String ? String(message.rgba) : message.rgba;
                else
                    object.rgba = options.longs === String ? $util.Long.prototype.toString.call(message.rgba) : options.longs === Number ? new $util.LongBits(message.rgba.low >>> 0, message.rgba.high >>> 0).toNumber(true) : message.rgba;
            if (message.wide != null && message.hasOwnProperty("wide"))
                object.wide = message.wide;
            if (message.tall != null && message.hasOwnProperty("tall"))
                object.tall = message.tall;
            if (message.textureid != null && message.hasOwnProperty("textureid"))
                object.textureid = message.textureid;
            if (message.updatex != null && message.hasOwnProperty("updatex"))
                object.updatex = message.updatex;
            if (message.updatey != null && message.hasOwnProperty("updatey"))
                object.updatey = message.updatey;
            if (message.updatewide != null && message.hasOwnProperty("updatewide"))
                object.updatewide = message.updatewide;
            if (message.updatetall != null && message.hasOwnProperty("updatetall"))
                object.updatetall = message.updatetall;
            if (message.scrollx != null && message.hasOwnProperty("scrollx"))
                object.scrollx = message.scrollx;
            if (message.scrolly != null && message.hasOwnProperty("scrolly"))
                object.scrolly = message.scrolly;
            if (message.combobox_rgba != null && message.hasOwnProperty("combobox_rgba"))
                if (typeof message.combobox_rgba === "number")
                    object.combobox_rgba = options.longs === String ? String(message.combobox_rgba) : message.combobox_rgba;
                else
                    object.combobox_rgba = options.longs === String ? $util.Long.prototype.toString.call(message.combobox_rgba) : options.longs === Number ? new $util.LongBits(message.combobox_rgba.low >>> 0, message.combobox_rgba.high >>> 0).toNumber(true) : message.combobox_rgba;
            if (message.combobox_wide != null && message.hasOwnProperty("combobox_wide"))
                object.combobox_wide = message.combobox_wide;
            if (message.combobox_tall != null && message.hasOwnProperty("combobox_tall"))
                object.combobox_tall = message.combobox_tall;
            if (message.pageserial != null && message.hasOwnProperty("pageserial"))
                object.pageserial = message.pageserial;
            return object;
        };
    
        /**
         * Converts this CMsgNeedsPaint to JSON.
         * @function toJSON
         * @memberof CMsgNeedsPaint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgNeedsPaint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgNeedsPaint;
    })();
    
    $root.CMsgNeedsPaintResponse = (function() {
    
        /**
         * Properties of a CMsgNeedsPaintResponse.
         * @exports ICMsgNeedsPaintResponse
         * @interface ICMsgNeedsPaintResponse
         * @property {number|null} [browser_handle] CMsgNeedsPaintResponse browser_handle
         * @property {number|null} [textureid] CMsgNeedsPaintResponse textureid
         */
    
        /**
         * Constructs a new CMsgNeedsPaintResponse.
         * @exports CMsgNeedsPaintResponse
         * @classdesc Represents a CMsgNeedsPaintResponse.
         * @implements ICMsgNeedsPaintResponse
         * @constructor
         * @param {ICMsgNeedsPaintResponse=} [properties] Properties to set
         */
        function CMsgNeedsPaintResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgNeedsPaintResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgNeedsPaintResponse
         * @instance
         */
        CMsgNeedsPaintResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgNeedsPaintResponse textureid.
         * @member {number} textureid
         * @memberof CMsgNeedsPaintResponse
         * @instance
         */
        CMsgNeedsPaintResponse.prototype.textureid = 0;
    
        /**
         * Creates a new CMsgNeedsPaintResponse instance using the specified properties.
         * @function create
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {ICMsgNeedsPaintResponse=} [properties] Properties to set
         * @returns {CMsgNeedsPaintResponse} CMsgNeedsPaintResponse instance
         */
        CMsgNeedsPaintResponse.create = function create(properties) {
            return new CMsgNeedsPaintResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgNeedsPaintResponse message. Does not implicitly {@link CMsgNeedsPaintResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {ICMsgNeedsPaintResponse} message CMsgNeedsPaintResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgNeedsPaintResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.textureid != null && Object.hasOwnProperty.call(message, "textureid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.textureid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgNeedsPaintResponse message, length delimited. Does not implicitly {@link CMsgNeedsPaintResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {ICMsgNeedsPaintResponse} message CMsgNeedsPaintResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgNeedsPaintResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgNeedsPaintResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgNeedsPaintResponse} CMsgNeedsPaintResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgNeedsPaintResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgNeedsPaintResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.textureid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgNeedsPaintResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgNeedsPaintResponse} CMsgNeedsPaintResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgNeedsPaintResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgNeedsPaintResponse message.
         * @function verify
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgNeedsPaintResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.textureid != null && message.hasOwnProperty("textureid"))
                if (!$util.isInteger(message.textureid))
                    return "textureid: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgNeedsPaintResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgNeedsPaintResponse} CMsgNeedsPaintResponse
         */
        CMsgNeedsPaintResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgNeedsPaintResponse)
                return object;
            var message = new $root.CMsgNeedsPaintResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.textureid != null)
                message.textureid = object.textureid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgNeedsPaintResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgNeedsPaintResponse
         * @static
         * @param {CMsgNeedsPaintResponse} message CMsgNeedsPaintResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgNeedsPaintResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.textureid = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.textureid != null && message.hasOwnProperty("textureid"))
                object.textureid = message.textureid;
            return object;
        };
    
        /**
         * Converts this CMsgNeedsPaintResponse to JSON.
         * @function toJSON
         * @memberof CMsgNeedsPaintResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgNeedsPaintResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgNeedsPaintResponse;
    })();
    
    $root.CMsgGetZoom = (function() {
    
        /**
         * Properties of a CMsgGetZoom.
         * @exports ICMsgGetZoom
         * @interface ICMsgGetZoom
         * @property {number|null} [browser_handle] CMsgGetZoom browser_handle
         */
    
        /**
         * Constructs a new CMsgGetZoom.
         * @exports CMsgGetZoom
         * @classdesc Represents a CMsgGetZoom.
         * @implements ICMsgGetZoom
         * @constructor
         * @param {ICMsgGetZoom=} [properties] Properties to set
         */
        function CMsgGetZoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGetZoom browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgGetZoom
         * @instance
         */
        CMsgGetZoom.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgGetZoom instance using the specified properties.
         * @function create
         * @memberof CMsgGetZoom
         * @static
         * @param {ICMsgGetZoom=} [properties] Properties to set
         * @returns {CMsgGetZoom} CMsgGetZoom instance
         */
        CMsgGetZoom.create = function create(properties) {
            return new CMsgGetZoom(properties);
        };
    
        /**
         * Encodes the specified CMsgGetZoom message. Does not implicitly {@link CMsgGetZoom.verify|verify} messages.
         * @function encode
         * @memberof CMsgGetZoom
         * @static
         * @param {ICMsgGetZoom} message CMsgGetZoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetZoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGetZoom message, length delimited. Does not implicitly {@link CMsgGetZoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGetZoom
         * @static
         * @param {ICMsgGetZoom} message CMsgGetZoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetZoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGetZoom message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGetZoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGetZoom} CMsgGetZoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetZoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGetZoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGetZoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGetZoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGetZoom} CMsgGetZoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetZoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGetZoom message.
         * @function verify
         * @memberof CMsgGetZoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGetZoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGetZoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGetZoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGetZoom} CMsgGetZoom
         */
        CMsgGetZoom.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGetZoom)
                return object;
            var message = new $root.CMsgGetZoom();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGetZoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGetZoom
         * @static
         * @param {CMsgGetZoom} message CMsgGetZoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGetZoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgGetZoom to JSON.
         * @function toJSON
         * @memberof CMsgGetZoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGetZoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGetZoom;
    })();
    
    $root.CMsgGetZoomResponse = (function() {
    
        /**
         * Properties of a CMsgGetZoomResponse.
         * @exports ICMsgGetZoomResponse
         * @interface ICMsgGetZoomResponse
         * @property {number|null} [browser_handle] CMsgGetZoomResponse browser_handle
         * @property {number|null} [zoom] CMsgGetZoomResponse zoom
         */
    
        /**
         * Constructs a new CMsgGetZoomResponse.
         * @exports CMsgGetZoomResponse
         * @classdesc Represents a CMsgGetZoomResponse.
         * @implements ICMsgGetZoomResponse
         * @constructor
         * @param {ICMsgGetZoomResponse=} [properties] Properties to set
         */
        function CMsgGetZoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGetZoomResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgGetZoomResponse
         * @instance
         */
        CMsgGetZoomResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgGetZoomResponse zoom.
         * @member {number} zoom
         * @memberof CMsgGetZoomResponse
         * @instance
         */
        CMsgGetZoomResponse.prototype.zoom = 0;
    
        /**
         * Creates a new CMsgGetZoomResponse instance using the specified properties.
         * @function create
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {ICMsgGetZoomResponse=} [properties] Properties to set
         * @returns {CMsgGetZoomResponse} CMsgGetZoomResponse instance
         */
        CMsgGetZoomResponse.create = function create(properties) {
            return new CMsgGetZoomResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgGetZoomResponse message. Does not implicitly {@link CMsgGetZoomResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {ICMsgGetZoomResponse} message CMsgGetZoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetZoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.zoom);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGetZoomResponse message, length delimited. Does not implicitly {@link CMsgGetZoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {ICMsgGetZoomResponse} message CMsgGetZoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetZoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGetZoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGetZoomResponse} CMsgGetZoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetZoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGetZoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.zoom = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGetZoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGetZoomResponse} CMsgGetZoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetZoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGetZoomResponse message.
         * @function verify
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGetZoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                if (typeof message.zoom !== "number")
                    return "zoom: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgGetZoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGetZoomResponse} CMsgGetZoomResponse
         */
        CMsgGetZoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGetZoomResponse)
                return object;
            var message = new $root.CMsgGetZoomResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.zoom != null)
                message.zoom = Number(object.zoom);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGetZoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGetZoomResponse
         * @static
         * @param {CMsgGetZoomResponse} message CMsgGetZoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGetZoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.zoom = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                object.zoom = options.json && !isFinite(message.zoom) ? String(message.zoom) : message.zoom;
            return object;
        };
    
        /**
         * Converts this CMsgGetZoomResponse to JSON.
         * @function toJSON
         * @memberof CMsgGetZoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGetZoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGetZoomResponse;
    })();
    
    $root.CMsgLinkAtPosition = (function() {
    
        /**
         * Properties of a CMsgLinkAtPosition.
         * @exports ICMsgLinkAtPosition
         * @interface ICMsgLinkAtPosition
         * @property {number|null} [browser_handle] CMsgLinkAtPosition browser_handle
         * @property {number|null} [x] CMsgLinkAtPosition x
         * @property {number|null} [y] CMsgLinkAtPosition y
         */
    
        /**
         * Constructs a new CMsgLinkAtPosition.
         * @exports CMsgLinkAtPosition
         * @classdesc Represents a CMsgLinkAtPosition.
         * @implements ICMsgLinkAtPosition
         * @constructor
         * @param {ICMsgLinkAtPosition=} [properties] Properties to set
         */
        function CMsgLinkAtPosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgLinkAtPosition browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgLinkAtPosition
         * @instance
         */
        CMsgLinkAtPosition.prototype.browser_handle = 0;
    
        /**
         * CMsgLinkAtPosition x.
         * @member {number} x
         * @memberof CMsgLinkAtPosition
         * @instance
         */
        CMsgLinkAtPosition.prototype.x = 0;
    
        /**
         * CMsgLinkAtPosition y.
         * @member {number} y
         * @memberof CMsgLinkAtPosition
         * @instance
         */
        CMsgLinkAtPosition.prototype.y = 0;
    
        /**
         * Creates a new CMsgLinkAtPosition instance using the specified properties.
         * @function create
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {ICMsgLinkAtPosition=} [properties] Properties to set
         * @returns {CMsgLinkAtPosition} CMsgLinkAtPosition instance
         */
        CMsgLinkAtPosition.create = function create(properties) {
            return new CMsgLinkAtPosition(properties);
        };
    
        /**
         * Encodes the specified CMsgLinkAtPosition message. Does not implicitly {@link CMsgLinkAtPosition.verify|verify} messages.
         * @function encode
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {ICMsgLinkAtPosition} message CMsgLinkAtPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgLinkAtPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgLinkAtPosition message, length delimited. Does not implicitly {@link CMsgLinkAtPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {ICMsgLinkAtPosition} message CMsgLinkAtPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgLinkAtPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgLinkAtPosition message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgLinkAtPosition} CMsgLinkAtPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgLinkAtPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgLinkAtPosition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.uint32();
                    break;
                case 3:
                    message.y = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgLinkAtPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgLinkAtPosition} CMsgLinkAtPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgLinkAtPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgLinkAtPosition message.
         * @function verify
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgLinkAtPosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgLinkAtPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgLinkAtPosition} CMsgLinkAtPosition
         */
        CMsgLinkAtPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgLinkAtPosition)
                return object;
            var message = new $root.CMsgLinkAtPosition();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgLinkAtPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgLinkAtPosition
         * @static
         * @param {CMsgLinkAtPosition} message CMsgLinkAtPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgLinkAtPosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };
    
        /**
         * Converts this CMsgLinkAtPosition to JSON.
         * @function toJSON
         * @memberof CMsgLinkAtPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgLinkAtPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgLinkAtPosition;
    })();
    
    $root.CMsgLinkAtPositionResponse = (function() {
    
        /**
         * Properties of a CMsgLinkAtPositionResponse.
         * @exports ICMsgLinkAtPositionResponse
         * @interface ICMsgLinkAtPositionResponse
         * @property {number|null} [browser_handle] CMsgLinkAtPositionResponse browser_handle
         * @property {number|null} [x] CMsgLinkAtPositionResponse x
         * @property {number|null} [y] CMsgLinkAtPositionResponse y
         * @property {string|null} [url] CMsgLinkAtPositionResponse url
         * @property {boolean|null} [blivelink] CMsgLinkAtPositionResponse blivelink
         * @property {boolean|null} [binput] CMsgLinkAtPositionResponse binput
         */
    
        /**
         * Constructs a new CMsgLinkAtPositionResponse.
         * @exports CMsgLinkAtPositionResponse
         * @classdesc Represents a CMsgLinkAtPositionResponse.
         * @implements ICMsgLinkAtPositionResponse
         * @constructor
         * @param {ICMsgLinkAtPositionResponse=} [properties] Properties to set
         */
        function CMsgLinkAtPositionResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgLinkAtPositionResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgLinkAtPositionResponse
         * @instance
         */
        CMsgLinkAtPositionResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgLinkAtPositionResponse x.
         * @member {number} x
         * @memberof CMsgLinkAtPositionResponse
         * @instance
         */
        CMsgLinkAtPositionResponse.prototype.x = 0;
    
        /**
         * CMsgLinkAtPositionResponse y.
         * @member {number} y
         * @memberof CMsgLinkAtPositionResponse
         * @instance
         */
        CMsgLinkAtPositionResponse.prototype.y = 0;
    
        /**
         * CMsgLinkAtPositionResponse url.
         * @member {string} url
         * @memberof CMsgLinkAtPositionResponse
         * @instance
         */
        CMsgLinkAtPositionResponse.prototype.url = "";
    
        /**
         * CMsgLinkAtPositionResponse blivelink.
         * @member {boolean} blivelink
         * @memberof CMsgLinkAtPositionResponse
         * @instance
         */
        CMsgLinkAtPositionResponse.prototype.blivelink = false;
    
        /**
         * CMsgLinkAtPositionResponse binput.
         * @member {boolean} binput
         * @memberof CMsgLinkAtPositionResponse
         * @instance
         */
        CMsgLinkAtPositionResponse.prototype.binput = false;
    
        /**
         * Creates a new CMsgLinkAtPositionResponse instance using the specified properties.
         * @function create
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {ICMsgLinkAtPositionResponse=} [properties] Properties to set
         * @returns {CMsgLinkAtPositionResponse} CMsgLinkAtPositionResponse instance
         */
        CMsgLinkAtPositionResponse.create = function create(properties) {
            return new CMsgLinkAtPositionResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgLinkAtPositionResponse message. Does not implicitly {@link CMsgLinkAtPositionResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {ICMsgLinkAtPositionResponse} message CMsgLinkAtPositionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgLinkAtPositionResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            if (message.blivelink != null && Object.hasOwnProperty.call(message, "blivelink"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.blivelink);
            if (message.binput != null && Object.hasOwnProperty.call(message, "binput"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.binput);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgLinkAtPositionResponse message, length delimited. Does not implicitly {@link CMsgLinkAtPositionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {ICMsgLinkAtPositionResponse} message CMsgLinkAtPositionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgLinkAtPositionResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgLinkAtPositionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgLinkAtPositionResponse} CMsgLinkAtPositionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgLinkAtPositionResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgLinkAtPositionResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.uint32();
                    break;
                case 3:
                    message.y = reader.uint32();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.blivelink = reader.bool();
                    break;
                case 6:
                    message.binput = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgLinkAtPositionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgLinkAtPositionResponse} CMsgLinkAtPositionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgLinkAtPositionResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgLinkAtPositionResponse message.
         * @function verify
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgLinkAtPositionResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.blivelink != null && message.hasOwnProperty("blivelink"))
                if (typeof message.blivelink !== "boolean")
                    return "blivelink: boolean expected";
            if (message.binput != null && message.hasOwnProperty("binput"))
                if (typeof message.binput !== "boolean")
                    return "binput: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgLinkAtPositionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgLinkAtPositionResponse} CMsgLinkAtPositionResponse
         */
        CMsgLinkAtPositionResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgLinkAtPositionResponse)
                return object;
            var message = new $root.CMsgLinkAtPositionResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.blivelink != null)
                message.blivelink = Boolean(object.blivelink);
            if (object.binput != null)
                message.binput = Boolean(object.binput);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgLinkAtPositionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgLinkAtPositionResponse
         * @static
         * @param {CMsgLinkAtPositionResponse} message CMsgLinkAtPositionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgLinkAtPositionResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
                object.url = "";
                object.blivelink = false;
                object.binput = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.blivelink != null && message.hasOwnProperty("blivelink"))
                object.blivelink = message.blivelink;
            if (message.binput != null && message.hasOwnProperty("binput"))
                object.binput = message.binput;
            return object;
        };
    
        /**
         * Converts this CMsgLinkAtPositionResponse to JSON.
         * @function toJSON
         * @memberof CMsgLinkAtPositionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgLinkAtPositionResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgLinkAtPositionResponse;
    })();
    
    $root.CMsgZoomToElementAtPosition = (function() {
    
        /**
         * Properties of a CMsgZoomToElementAtPosition.
         * @exports ICMsgZoomToElementAtPosition
         * @interface ICMsgZoomToElementAtPosition
         * @property {number|null} [browser_handle] CMsgZoomToElementAtPosition browser_handle
         * @property {number|null} [x] CMsgZoomToElementAtPosition x
         * @property {number|null} [y] CMsgZoomToElementAtPosition y
         */
    
        /**
         * Constructs a new CMsgZoomToElementAtPosition.
         * @exports CMsgZoomToElementAtPosition
         * @classdesc Represents a CMsgZoomToElementAtPosition.
         * @implements ICMsgZoomToElementAtPosition
         * @constructor
         * @param {ICMsgZoomToElementAtPosition=} [properties] Properties to set
         */
        function CMsgZoomToElementAtPosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgZoomToElementAtPosition browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgZoomToElementAtPosition
         * @instance
         */
        CMsgZoomToElementAtPosition.prototype.browser_handle = 0;
    
        /**
         * CMsgZoomToElementAtPosition x.
         * @member {number} x
         * @memberof CMsgZoomToElementAtPosition
         * @instance
         */
        CMsgZoomToElementAtPosition.prototype.x = 0;
    
        /**
         * CMsgZoomToElementAtPosition y.
         * @member {number} y
         * @memberof CMsgZoomToElementAtPosition
         * @instance
         */
        CMsgZoomToElementAtPosition.prototype.y = 0;
    
        /**
         * Creates a new CMsgZoomToElementAtPosition instance using the specified properties.
         * @function create
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {ICMsgZoomToElementAtPosition=} [properties] Properties to set
         * @returns {CMsgZoomToElementAtPosition} CMsgZoomToElementAtPosition instance
         */
        CMsgZoomToElementAtPosition.create = function create(properties) {
            return new CMsgZoomToElementAtPosition(properties);
        };
    
        /**
         * Encodes the specified CMsgZoomToElementAtPosition message. Does not implicitly {@link CMsgZoomToElementAtPosition.verify|verify} messages.
         * @function encode
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {ICMsgZoomToElementAtPosition} message CMsgZoomToElementAtPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgZoomToElementAtPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgZoomToElementAtPosition message, length delimited. Does not implicitly {@link CMsgZoomToElementAtPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {ICMsgZoomToElementAtPosition} message CMsgZoomToElementAtPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgZoomToElementAtPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgZoomToElementAtPosition message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgZoomToElementAtPosition} CMsgZoomToElementAtPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgZoomToElementAtPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgZoomToElementAtPosition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.x = reader.uint32();
                    break;
                case 3:
                    message.y = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgZoomToElementAtPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgZoomToElementAtPosition} CMsgZoomToElementAtPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgZoomToElementAtPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgZoomToElementAtPosition message.
         * @function verify
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgZoomToElementAtPosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgZoomToElementAtPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgZoomToElementAtPosition} CMsgZoomToElementAtPosition
         */
        CMsgZoomToElementAtPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgZoomToElementAtPosition)
                return object;
            var message = new $root.CMsgZoomToElementAtPosition();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgZoomToElementAtPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgZoomToElementAtPosition
         * @static
         * @param {CMsgZoomToElementAtPosition} message CMsgZoomToElementAtPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgZoomToElementAtPosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };
    
        /**
         * Converts this CMsgZoomToElementAtPosition to JSON.
         * @function toJSON
         * @memberof CMsgZoomToElementAtPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgZoomToElementAtPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgZoomToElementAtPosition;
    })();
    
    $root.CMsgZoomToElementAtPositionResponse = (function() {
    
        /**
         * Properties of a CMsgZoomToElementAtPositionResponse.
         * @exports ICMsgZoomToElementAtPositionResponse
         * @interface ICMsgZoomToElementAtPositionResponse
         * @property {number|null} [browser_handle] CMsgZoomToElementAtPositionResponse browser_handle
         * @property {number|null} [initial_x] CMsgZoomToElementAtPositionResponse initial_x
         * @property {number|null} [initial_y] CMsgZoomToElementAtPositionResponse initial_y
         * @property {number|null} [initial_width] CMsgZoomToElementAtPositionResponse initial_width
         * @property {number|null} [initial_height] CMsgZoomToElementAtPositionResponse initial_height
         * @property {number|null} [final_x] CMsgZoomToElementAtPositionResponse final_x
         * @property {number|null} [final_y] CMsgZoomToElementAtPositionResponse final_y
         * @property {number|null} [final_width] CMsgZoomToElementAtPositionResponse final_width
         * @property {number|null} [final_height] CMsgZoomToElementAtPositionResponse final_height
         * @property {number|null} [zoom] CMsgZoomToElementAtPositionResponse zoom
         */
    
        /**
         * Constructs a new CMsgZoomToElementAtPositionResponse.
         * @exports CMsgZoomToElementAtPositionResponse
         * @classdesc Represents a CMsgZoomToElementAtPositionResponse.
         * @implements ICMsgZoomToElementAtPositionResponse
         * @constructor
         * @param {ICMsgZoomToElementAtPositionResponse=} [properties] Properties to set
         */
        function CMsgZoomToElementAtPositionResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgZoomToElementAtPositionResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse initial_x.
         * @member {number} initial_x
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.initial_x = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse initial_y.
         * @member {number} initial_y
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.initial_y = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse initial_width.
         * @member {number} initial_width
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.initial_width = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse initial_height.
         * @member {number} initial_height
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.initial_height = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse final_x.
         * @member {number} final_x
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.final_x = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse final_y.
         * @member {number} final_y
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.final_y = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse final_width.
         * @member {number} final_width
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.final_width = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse final_height.
         * @member {number} final_height
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.final_height = 0;
    
        /**
         * CMsgZoomToElementAtPositionResponse zoom.
         * @member {number} zoom
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         */
        CMsgZoomToElementAtPositionResponse.prototype.zoom = 0;
    
        /**
         * Creates a new CMsgZoomToElementAtPositionResponse instance using the specified properties.
         * @function create
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {ICMsgZoomToElementAtPositionResponse=} [properties] Properties to set
         * @returns {CMsgZoomToElementAtPositionResponse} CMsgZoomToElementAtPositionResponse instance
         */
        CMsgZoomToElementAtPositionResponse.create = function create(properties) {
            return new CMsgZoomToElementAtPositionResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgZoomToElementAtPositionResponse message. Does not implicitly {@link CMsgZoomToElementAtPositionResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {ICMsgZoomToElementAtPositionResponse} message CMsgZoomToElementAtPositionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgZoomToElementAtPositionResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.initial_x != null && Object.hasOwnProperty.call(message, "initial_x"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.initial_x);
            if (message.initial_y != null && Object.hasOwnProperty.call(message, "initial_y"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.initial_y);
            if (message.initial_width != null && Object.hasOwnProperty.call(message, "initial_width"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.initial_width);
            if (message.initial_height != null && Object.hasOwnProperty.call(message, "initial_height"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.initial_height);
            if (message.final_x != null && Object.hasOwnProperty.call(message, "final_x"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.final_x);
            if (message.final_y != null && Object.hasOwnProperty.call(message, "final_y"))
                writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.final_y);
            if (message.final_width != null && Object.hasOwnProperty.call(message, "final_width"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.final_width);
            if (message.final_height != null && Object.hasOwnProperty.call(message, "final_height"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.final_height);
            if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.zoom);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgZoomToElementAtPositionResponse message, length delimited. Does not implicitly {@link CMsgZoomToElementAtPositionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {ICMsgZoomToElementAtPositionResponse} message CMsgZoomToElementAtPositionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgZoomToElementAtPositionResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgZoomToElementAtPositionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgZoomToElementAtPositionResponse} CMsgZoomToElementAtPositionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgZoomToElementAtPositionResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgZoomToElementAtPositionResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.initial_x = reader.sint32();
                    break;
                case 3:
                    message.initial_y = reader.sint32();
                    break;
                case 4:
                    message.initial_width = reader.uint32();
                    break;
                case 5:
                    message.initial_height = reader.uint32();
                    break;
                case 6:
                    message.final_x = reader.sint32();
                    break;
                case 7:
                    message.final_y = reader.sint32();
                    break;
                case 8:
                    message.final_width = reader.uint32();
                    break;
                case 9:
                    message.final_height = reader.uint32();
                    break;
                case 10:
                    message.zoom = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgZoomToElementAtPositionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgZoomToElementAtPositionResponse} CMsgZoomToElementAtPositionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgZoomToElementAtPositionResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgZoomToElementAtPositionResponse message.
         * @function verify
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgZoomToElementAtPositionResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.initial_x != null && message.hasOwnProperty("initial_x"))
                if (!$util.isInteger(message.initial_x))
                    return "initial_x: integer expected";
            if (message.initial_y != null && message.hasOwnProperty("initial_y"))
                if (!$util.isInteger(message.initial_y))
                    return "initial_y: integer expected";
            if (message.initial_width != null && message.hasOwnProperty("initial_width"))
                if (!$util.isInteger(message.initial_width))
                    return "initial_width: integer expected";
            if (message.initial_height != null && message.hasOwnProperty("initial_height"))
                if (!$util.isInteger(message.initial_height))
                    return "initial_height: integer expected";
            if (message.final_x != null && message.hasOwnProperty("final_x"))
                if (!$util.isInteger(message.final_x))
                    return "final_x: integer expected";
            if (message.final_y != null && message.hasOwnProperty("final_y"))
                if (!$util.isInteger(message.final_y))
                    return "final_y: integer expected";
            if (message.final_width != null && message.hasOwnProperty("final_width"))
                if (!$util.isInteger(message.final_width))
                    return "final_width: integer expected";
            if (message.final_height != null && message.hasOwnProperty("final_height"))
                if (!$util.isInteger(message.final_height))
                    return "final_height: integer expected";
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                if (typeof message.zoom !== "number")
                    return "zoom: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgZoomToElementAtPositionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgZoomToElementAtPositionResponse} CMsgZoomToElementAtPositionResponse
         */
        CMsgZoomToElementAtPositionResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgZoomToElementAtPositionResponse)
                return object;
            var message = new $root.CMsgZoomToElementAtPositionResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.initial_x != null)
                message.initial_x = object.initial_x | 0;
            if (object.initial_y != null)
                message.initial_y = object.initial_y | 0;
            if (object.initial_width != null)
                message.initial_width = object.initial_width >>> 0;
            if (object.initial_height != null)
                message.initial_height = object.initial_height >>> 0;
            if (object.final_x != null)
                message.final_x = object.final_x | 0;
            if (object.final_y != null)
                message.final_y = object.final_y | 0;
            if (object.final_width != null)
                message.final_width = object.final_width >>> 0;
            if (object.final_height != null)
                message.final_height = object.final_height >>> 0;
            if (object.zoom != null)
                message.zoom = Number(object.zoom);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgZoomToElementAtPositionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgZoomToElementAtPositionResponse
         * @static
         * @param {CMsgZoomToElementAtPositionResponse} message CMsgZoomToElementAtPositionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgZoomToElementAtPositionResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.initial_x = 0;
                object.initial_y = 0;
                object.initial_width = 0;
                object.initial_height = 0;
                object.final_x = 0;
                object.final_y = 0;
                object.final_width = 0;
                object.final_height = 0;
                object.zoom = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.initial_x != null && message.hasOwnProperty("initial_x"))
                object.initial_x = message.initial_x;
            if (message.initial_y != null && message.hasOwnProperty("initial_y"))
                object.initial_y = message.initial_y;
            if (message.initial_width != null && message.hasOwnProperty("initial_width"))
                object.initial_width = message.initial_width;
            if (message.initial_height != null && message.hasOwnProperty("initial_height"))
                object.initial_height = message.initial_height;
            if (message.final_x != null && message.hasOwnProperty("final_x"))
                object.final_x = message.final_x;
            if (message.final_y != null && message.hasOwnProperty("final_y"))
                object.final_y = message.final_y;
            if (message.final_width != null && message.hasOwnProperty("final_width"))
                object.final_width = message.final_width;
            if (message.final_height != null && message.hasOwnProperty("final_height"))
                object.final_height = message.final_height;
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                object.zoom = options.json && !isFinite(message.zoom) ? String(message.zoom) : message.zoom;
            return object;
        };
    
        /**
         * Converts this CMsgZoomToElementAtPositionResponse to JSON.
         * @function toJSON
         * @memberof CMsgZoomToElementAtPositionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgZoomToElementAtPositionResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgZoomToElementAtPositionResponse;
    })();
    
    $root.CMsgScalePageToValue = (function() {
    
        /**
         * Properties of a CMsgScalePageToValue.
         * @exports ICMsgScalePageToValue
         * @interface ICMsgScalePageToValue
         * @property {number|null} [browser_handle] CMsgScalePageToValue browser_handle
         * @property {number|null} [scale] CMsgScalePageToValue scale
         * @property {number|null} [x] CMsgScalePageToValue x
         * @property {number|null} [y] CMsgScalePageToValue y
         */
    
        /**
         * Constructs a new CMsgScalePageToValue.
         * @exports CMsgScalePageToValue
         * @classdesc Represents a CMsgScalePageToValue.
         * @implements ICMsgScalePageToValue
         * @constructor
         * @param {ICMsgScalePageToValue=} [properties] Properties to set
         */
        function CMsgScalePageToValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgScalePageToValue browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgScalePageToValue
         * @instance
         */
        CMsgScalePageToValue.prototype.browser_handle = 0;
    
        /**
         * CMsgScalePageToValue scale.
         * @member {number} scale
         * @memberof CMsgScalePageToValue
         * @instance
         */
        CMsgScalePageToValue.prototype.scale = 0;
    
        /**
         * CMsgScalePageToValue x.
         * @member {number} x
         * @memberof CMsgScalePageToValue
         * @instance
         */
        CMsgScalePageToValue.prototype.x = 0;
    
        /**
         * CMsgScalePageToValue y.
         * @member {number} y
         * @memberof CMsgScalePageToValue
         * @instance
         */
        CMsgScalePageToValue.prototype.y = 0;
    
        /**
         * Creates a new CMsgScalePageToValue instance using the specified properties.
         * @function create
         * @memberof CMsgScalePageToValue
         * @static
         * @param {ICMsgScalePageToValue=} [properties] Properties to set
         * @returns {CMsgScalePageToValue} CMsgScalePageToValue instance
         */
        CMsgScalePageToValue.create = function create(properties) {
            return new CMsgScalePageToValue(properties);
        };
    
        /**
         * Encodes the specified CMsgScalePageToValue message. Does not implicitly {@link CMsgScalePageToValue.verify|verify} messages.
         * @function encode
         * @memberof CMsgScalePageToValue
         * @static
         * @param {ICMsgScalePageToValue} message CMsgScalePageToValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgScalePageToValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.scale);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgScalePageToValue message, length delimited. Does not implicitly {@link CMsgScalePageToValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgScalePageToValue
         * @static
         * @param {ICMsgScalePageToValue} message CMsgScalePageToValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgScalePageToValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgScalePageToValue message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgScalePageToValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgScalePageToValue} CMsgScalePageToValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgScalePageToValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgScalePageToValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.scale = reader.float();
                    break;
                case 3:
                    message.x = reader.float();
                    break;
                case 4:
                    message.y = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgScalePageToValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgScalePageToValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgScalePageToValue} CMsgScalePageToValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgScalePageToValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgScalePageToValue message.
         * @function verify
         * @memberof CMsgScalePageToValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgScalePageToValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.scale != null && message.hasOwnProperty("scale"))
                if (typeof message.scale !== "number")
                    return "scale: number expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgScalePageToValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgScalePageToValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgScalePageToValue} CMsgScalePageToValue
         */
        CMsgScalePageToValue.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgScalePageToValue)
                return object;
            var message = new $root.CMsgScalePageToValue();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.scale != null)
                message.scale = Number(object.scale);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgScalePageToValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgScalePageToValue
         * @static
         * @param {CMsgScalePageToValue} message CMsgScalePageToValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgScalePageToValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.scale = 0;
                object.x = 0;
                object.y = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };
    
        /**
         * Converts this CMsgScalePageToValue to JSON.
         * @function toJSON
         * @memberof CMsgScalePageToValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgScalePageToValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgScalePageToValue;
    })();
    
    $root.CMsgScalePageToValueResponse = (function() {
    
        /**
         * Properties of a CMsgScalePageToValueResponse.
         * @exports ICMsgScalePageToValueResponse
         * @interface ICMsgScalePageToValueResponse
         * @property {number|null} [browser_handle] CMsgScalePageToValueResponse browser_handle
         * @property {number|null} [zoom] CMsgScalePageToValueResponse zoom
         * @property {number|null} [width_delta] CMsgScalePageToValueResponse width_delta
         * @property {number|null} [height_delta] CMsgScalePageToValueResponse height_delta
         */
    
        /**
         * Constructs a new CMsgScalePageToValueResponse.
         * @exports CMsgScalePageToValueResponse
         * @classdesc Represents a CMsgScalePageToValueResponse.
         * @implements ICMsgScalePageToValueResponse
         * @constructor
         * @param {ICMsgScalePageToValueResponse=} [properties] Properties to set
         */
        function CMsgScalePageToValueResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgScalePageToValueResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgScalePageToValueResponse
         * @instance
         */
        CMsgScalePageToValueResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgScalePageToValueResponse zoom.
         * @member {number} zoom
         * @memberof CMsgScalePageToValueResponse
         * @instance
         */
        CMsgScalePageToValueResponse.prototype.zoom = 0;
    
        /**
         * CMsgScalePageToValueResponse width_delta.
         * @member {number} width_delta
         * @memberof CMsgScalePageToValueResponse
         * @instance
         */
        CMsgScalePageToValueResponse.prototype.width_delta = 0;
    
        /**
         * CMsgScalePageToValueResponse height_delta.
         * @member {number} height_delta
         * @memberof CMsgScalePageToValueResponse
         * @instance
         */
        CMsgScalePageToValueResponse.prototype.height_delta = 0;
    
        /**
         * Creates a new CMsgScalePageToValueResponse instance using the specified properties.
         * @function create
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {ICMsgScalePageToValueResponse=} [properties] Properties to set
         * @returns {CMsgScalePageToValueResponse} CMsgScalePageToValueResponse instance
         */
        CMsgScalePageToValueResponse.create = function create(properties) {
            return new CMsgScalePageToValueResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgScalePageToValueResponse message. Does not implicitly {@link CMsgScalePageToValueResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {ICMsgScalePageToValueResponse} message CMsgScalePageToValueResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgScalePageToValueResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.zoom);
            if (message.width_delta != null && Object.hasOwnProperty.call(message, "width_delta"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.width_delta);
            if (message.height_delta != null && Object.hasOwnProperty.call(message, "height_delta"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.height_delta);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgScalePageToValueResponse message, length delimited. Does not implicitly {@link CMsgScalePageToValueResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {ICMsgScalePageToValueResponse} message CMsgScalePageToValueResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgScalePageToValueResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgScalePageToValueResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgScalePageToValueResponse} CMsgScalePageToValueResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgScalePageToValueResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgScalePageToValueResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.zoom = reader.float();
                    break;
                case 3:
                    message.width_delta = reader.int32();
                    break;
                case 4:
                    message.height_delta = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgScalePageToValueResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgScalePageToValueResponse} CMsgScalePageToValueResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgScalePageToValueResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgScalePageToValueResponse message.
         * @function verify
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgScalePageToValueResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                if (typeof message.zoom !== "number")
                    return "zoom: number expected";
            if (message.width_delta != null && message.hasOwnProperty("width_delta"))
                if (!$util.isInteger(message.width_delta))
                    return "width_delta: integer expected";
            if (message.height_delta != null && message.hasOwnProperty("height_delta"))
                if (!$util.isInteger(message.height_delta))
                    return "height_delta: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgScalePageToValueResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgScalePageToValueResponse} CMsgScalePageToValueResponse
         */
        CMsgScalePageToValueResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgScalePageToValueResponse)
                return object;
            var message = new $root.CMsgScalePageToValueResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.zoom != null)
                message.zoom = Number(object.zoom);
            if (object.width_delta != null)
                message.width_delta = object.width_delta | 0;
            if (object.height_delta != null)
                message.height_delta = object.height_delta | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgScalePageToValueResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgScalePageToValueResponse
         * @static
         * @param {CMsgScalePageToValueResponse} message CMsgScalePageToValueResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgScalePageToValueResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.zoom = 0;
                object.width_delta = 0;
                object.height_delta = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.zoom != null && message.hasOwnProperty("zoom"))
                object.zoom = options.json && !isFinite(message.zoom) ? String(message.zoom) : message.zoom;
            if (message.width_delta != null && message.hasOwnProperty("width_delta"))
                object.width_delta = message.width_delta;
            if (message.height_delta != null && message.hasOwnProperty("height_delta"))
                object.height_delta = message.height_delta;
            return object;
        };
    
        /**
         * Converts this CMsgScalePageToValueResponse to JSON.
         * @function toJSON
         * @memberof CMsgScalePageToValueResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgScalePageToValueResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgScalePageToValueResponse;
    })();
    
    $root.CMsgSavePageToJPEG = (function() {
    
        /**
         * Properties of a CMsgSavePageToJPEG.
         * @exports ICMsgSavePageToJPEG
         * @interface ICMsgSavePageToJPEG
         * @property {number|null} [browser_handle] CMsgSavePageToJPEG browser_handle
         * @property {string|null} [url] CMsgSavePageToJPEG url
         * @property {string|null} [filename] CMsgSavePageToJPEG filename
         * @property {number|null} [width] CMsgSavePageToJPEG width
         * @property {number|null} [height] CMsgSavePageToJPEG height
         */
    
        /**
         * Constructs a new CMsgSavePageToJPEG.
         * @exports CMsgSavePageToJPEG
         * @classdesc Represents a CMsgSavePageToJPEG.
         * @implements ICMsgSavePageToJPEG
         * @constructor
         * @param {ICMsgSavePageToJPEG=} [properties] Properties to set
         */
        function CMsgSavePageToJPEG(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSavePageToJPEG browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSavePageToJPEG
         * @instance
         */
        CMsgSavePageToJPEG.prototype.browser_handle = 0;
    
        /**
         * CMsgSavePageToJPEG url.
         * @member {string} url
         * @memberof CMsgSavePageToJPEG
         * @instance
         */
        CMsgSavePageToJPEG.prototype.url = "";
    
        /**
         * CMsgSavePageToJPEG filename.
         * @member {string} filename
         * @memberof CMsgSavePageToJPEG
         * @instance
         */
        CMsgSavePageToJPEG.prototype.filename = "";
    
        /**
         * CMsgSavePageToJPEG width.
         * @member {number} width
         * @memberof CMsgSavePageToJPEG
         * @instance
         */
        CMsgSavePageToJPEG.prototype.width = 0;
    
        /**
         * CMsgSavePageToJPEG height.
         * @member {number} height
         * @memberof CMsgSavePageToJPEG
         * @instance
         */
        CMsgSavePageToJPEG.prototype.height = 0;
    
        /**
         * Creates a new CMsgSavePageToJPEG instance using the specified properties.
         * @function create
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {ICMsgSavePageToJPEG=} [properties] Properties to set
         * @returns {CMsgSavePageToJPEG} CMsgSavePageToJPEG instance
         */
        CMsgSavePageToJPEG.create = function create(properties) {
            return new CMsgSavePageToJPEG(properties);
        };
    
        /**
         * Encodes the specified CMsgSavePageToJPEG message. Does not implicitly {@link CMsgSavePageToJPEG.verify|verify} messages.
         * @function encode
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {ICMsgSavePageToJPEG} message CMsgSavePageToJPEG message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSavePageToJPEG.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.filename);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.height);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSavePageToJPEG message, length delimited. Does not implicitly {@link CMsgSavePageToJPEG.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {ICMsgSavePageToJPEG} message CMsgSavePageToJPEG message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSavePageToJPEG.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSavePageToJPEG message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSavePageToJPEG} CMsgSavePageToJPEG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSavePageToJPEG.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSavePageToJPEG();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.filename = reader.string();
                    break;
                case 4:
                    message.width = reader.uint32();
                    break;
                case 5:
                    message.height = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSavePageToJPEG message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSavePageToJPEG} CMsgSavePageToJPEG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSavePageToJPEG.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSavePageToJPEG message.
         * @function verify
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSavePageToJPEG.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSavePageToJPEG message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSavePageToJPEG} CMsgSavePageToJPEG
         */
        CMsgSavePageToJPEG.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSavePageToJPEG)
                return object;
            var message = new $root.CMsgSavePageToJPEG();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSavePageToJPEG message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSavePageToJPEG
         * @static
         * @param {CMsgSavePageToJPEG} message CMsgSavePageToJPEG
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSavePageToJPEG.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.filename = "";
                object.width = 0;
                object.height = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };
    
        /**
         * Converts this CMsgSavePageToJPEG to JSON.
         * @function toJSON
         * @memberof CMsgSavePageToJPEG
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSavePageToJPEG.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSavePageToJPEG;
    })();
    
    $root.CMsgSavePageToJPEGResponse = (function() {
    
        /**
         * Properties of a CMsgSavePageToJPEGResponse.
         * @exports ICMsgSavePageToJPEGResponse
         * @interface ICMsgSavePageToJPEGResponse
         * @property {number|null} [browser_handle] CMsgSavePageToJPEGResponse browser_handle
         * @property {string|null} [url] CMsgSavePageToJPEGResponse url
         * @property {string|null} [filename] CMsgSavePageToJPEGResponse filename
         */
    
        /**
         * Constructs a new CMsgSavePageToJPEGResponse.
         * @exports CMsgSavePageToJPEGResponse
         * @classdesc Represents a CMsgSavePageToJPEGResponse.
         * @implements ICMsgSavePageToJPEGResponse
         * @constructor
         * @param {ICMsgSavePageToJPEGResponse=} [properties] Properties to set
         */
        function CMsgSavePageToJPEGResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSavePageToJPEGResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgSavePageToJPEGResponse
         * @instance
         */
        CMsgSavePageToJPEGResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgSavePageToJPEGResponse url.
         * @member {string} url
         * @memberof CMsgSavePageToJPEGResponse
         * @instance
         */
        CMsgSavePageToJPEGResponse.prototype.url = "";
    
        /**
         * CMsgSavePageToJPEGResponse filename.
         * @member {string} filename
         * @memberof CMsgSavePageToJPEGResponse
         * @instance
         */
        CMsgSavePageToJPEGResponse.prototype.filename = "";
    
        /**
         * Creates a new CMsgSavePageToJPEGResponse instance using the specified properties.
         * @function create
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {ICMsgSavePageToJPEGResponse=} [properties] Properties to set
         * @returns {CMsgSavePageToJPEGResponse} CMsgSavePageToJPEGResponse instance
         */
        CMsgSavePageToJPEGResponse.create = function create(properties) {
            return new CMsgSavePageToJPEGResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgSavePageToJPEGResponse message. Does not implicitly {@link CMsgSavePageToJPEGResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {ICMsgSavePageToJPEGResponse} message CMsgSavePageToJPEGResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSavePageToJPEGResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.filename);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSavePageToJPEGResponse message, length delimited. Does not implicitly {@link CMsgSavePageToJPEGResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {ICMsgSavePageToJPEGResponse} message CMsgSavePageToJPEGResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSavePageToJPEGResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSavePageToJPEGResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSavePageToJPEGResponse} CMsgSavePageToJPEGResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSavePageToJPEGResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSavePageToJPEGResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.filename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSavePageToJPEGResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSavePageToJPEGResponse} CMsgSavePageToJPEGResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSavePageToJPEGResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSavePageToJPEGResponse message.
         * @function verify
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSavePageToJPEGResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgSavePageToJPEGResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSavePageToJPEGResponse} CMsgSavePageToJPEGResponse
         */
        CMsgSavePageToJPEGResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSavePageToJPEGResponse)
                return object;
            var message = new $root.CMsgSavePageToJPEGResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.filename != null)
                message.filename = String(object.filename);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSavePageToJPEGResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSavePageToJPEGResponse
         * @static
         * @param {CMsgSavePageToJPEGResponse} message CMsgSavePageToJPEGResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSavePageToJPEGResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
                object.filename = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            return object;
        };
    
        /**
         * Converts this CMsgSavePageToJPEGResponse to JSON.
         * @function toJSON
         * @memberof CMsgSavePageToJPEGResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSavePageToJPEGResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSavePageToJPEGResponse;
    })();
    
    $root.CMsgJSAlert = (function() {
    
        /**
         * Properties of a CMsgJSAlert.
         * @exports ICMsgJSAlert
         * @interface ICMsgJSAlert
         * @property {number|null} [browser_handle] CMsgJSAlert browser_handle
         * @property {string|null} [message] CMsgJSAlert message
         */
    
        /**
         * Constructs a new CMsgJSAlert.
         * @exports CMsgJSAlert
         * @classdesc Represents a CMsgJSAlert.
         * @implements ICMsgJSAlert
         * @constructor
         * @param {ICMsgJSAlert=} [properties] Properties to set
         */
        function CMsgJSAlert(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgJSAlert browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgJSAlert
         * @instance
         */
        CMsgJSAlert.prototype.browser_handle = 0;
    
        /**
         * CMsgJSAlert message.
         * @member {string} message
         * @memberof CMsgJSAlert
         * @instance
         */
        CMsgJSAlert.prototype.message = "";
    
        /**
         * Creates a new CMsgJSAlert instance using the specified properties.
         * @function create
         * @memberof CMsgJSAlert
         * @static
         * @param {ICMsgJSAlert=} [properties] Properties to set
         * @returns {CMsgJSAlert} CMsgJSAlert instance
         */
        CMsgJSAlert.create = function create(properties) {
            return new CMsgJSAlert(properties);
        };
    
        /**
         * Encodes the specified CMsgJSAlert message. Does not implicitly {@link CMsgJSAlert.verify|verify} messages.
         * @function encode
         * @memberof CMsgJSAlert
         * @static
         * @param {ICMsgJSAlert} message CMsgJSAlert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgJSAlert.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgJSAlert message, length delimited. Does not implicitly {@link CMsgJSAlert.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgJSAlert
         * @static
         * @param {ICMsgJSAlert} message CMsgJSAlert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgJSAlert.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgJSAlert message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgJSAlert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgJSAlert} CMsgJSAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgJSAlert.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgJSAlert();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgJSAlert message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgJSAlert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgJSAlert} CMsgJSAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgJSAlert.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgJSAlert message.
         * @function verify
         * @memberof CMsgJSAlert
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgJSAlert.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgJSAlert message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgJSAlert
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgJSAlert} CMsgJSAlert
         */
        CMsgJSAlert.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgJSAlert)
                return object;
            var message = new $root.CMsgJSAlert();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgJSAlert message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgJSAlert
         * @static
         * @param {CMsgJSAlert} message CMsgJSAlert
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgJSAlert.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.message = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this CMsgJSAlert to JSON.
         * @function toJSON
         * @memberof CMsgJSAlert
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgJSAlert.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgJSAlert;
    })();
    
    $root.CMsgJSConfirm = (function() {
    
        /**
         * Properties of a CMsgJSConfirm.
         * @exports ICMsgJSConfirm
         * @interface ICMsgJSConfirm
         * @property {number|null} [browser_handle] CMsgJSConfirm browser_handle
         * @property {string|null} [message] CMsgJSConfirm message
         */
    
        /**
         * Constructs a new CMsgJSConfirm.
         * @exports CMsgJSConfirm
         * @classdesc Represents a CMsgJSConfirm.
         * @implements ICMsgJSConfirm
         * @constructor
         * @param {ICMsgJSConfirm=} [properties] Properties to set
         */
        function CMsgJSConfirm(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgJSConfirm browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgJSConfirm
         * @instance
         */
        CMsgJSConfirm.prototype.browser_handle = 0;
    
        /**
         * CMsgJSConfirm message.
         * @member {string} message
         * @memberof CMsgJSConfirm
         * @instance
         */
        CMsgJSConfirm.prototype.message = "";
    
        /**
         * Creates a new CMsgJSConfirm instance using the specified properties.
         * @function create
         * @memberof CMsgJSConfirm
         * @static
         * @param {ICMsgJSConfirm=} [properties] Properties to set
         * @returns {CMsgJSConfirm} CMsgJSConfirm instance
         */
        CMsgJSConfirm.create = function create(properties) {
            return new CMsgJSConfirm(properties);
        };
    
        /**
         * Encodes the specified CMsgJSConfirm message. Does not implicitly {@link CMsgJSConfirm.verify|verify} messages.
         * @function encode
         * @memberof CMsgJSConfirm
         * @static
         * @param {ICMsgJSConfirm} message CMsgJSConfirm message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgJSConfirm.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgJSConfirm message, length delimited. Does not implicitly {@link CMsgJSConfirm.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgJSConfirm
         * @static
         * @param {ICMsgJSConfirm} message CMsgJSConfirm message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgJSConfirm.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgJSConfirm message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgJSConfirm
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgJSConfirm} CMsgJSConfirm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgJSConfirm.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgJSConfirm();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgJSConfirm message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgJSConfirm
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgJSConfirm} CMsgJSConfirm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgJSConfirm.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgJSConfirm message.
         * @function verify
         * @memberof CMsgJSConfirm
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgJSConfirm.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgJSConfirm message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgJSConfirm
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgJSConfirm} CMsgJSConfirm
         */
        CMsgJSConfirm.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgJSConfirm)
                return object;
            var message = new $root.CMsgJSConfirm();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgJSConfirm message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgJSConfirm
         * @static
         * @param {CMsgJSConfirm} message CMsgJSConfirm
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgJSConfirm.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.message = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this CMsgJSConfirm to JSON.
         * @function toJSON
         * @memberof CMsgJSConfirm
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgJSConfirm.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgJSConfirm;
    })();
    
    $root.CMsgJSDialogResponse = (function() {
    
        /**
         * Properties of a CMsgJSDialogResponse.
         * @exports ICMsgJSDialogResponse
         * @interface ICMsgJSDialogResponse
         * @property {number|null} [browser_handle] CMsgJSDialogResponse browser_handle
         * @property {boolean|null} [result] CMsgJSDialogResponse result
         */
    
        /**
         * Constructs a new CMsgJSDialogResponse.
         * @exports CMsgJSDialogResponse
         * @classdesc Represents a CMsgJSDialogResponse.
         * @implements ICMsgJSDialogResponse
         * @constructor
         * @param {ICMsgJSDialogResponse=} [properties] Properties to set
         */
        function CMsgJSDialogResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgJSDialogResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgJSDialogResponse
         * @instance
         */
        CMsgJSDialogResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgJSDialogResponse result.
         * @member {boolean} result
         * @memberof CMsgJSDialogResponse
         * @instance
         */
        CMsgJSDialogResponse.prototype.result = false;
    
        /**
         * Creates a new CMsgJSDialogResponse instance using the specified properties.
         * @function create
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {ICMsgJSDialogResponse=} [properties] Properties to set
         * @returns {CMsgJSDialogResponse} CMsgJSDialogResponse instance
         */
        CMsgJSDialogResponse.create = function create(properties) {
            return new CMsgJSDialogResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgJSDialogResponse message. Does not implicitly {@link CMsgJSDialogResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {ICMsgJSDialogResponse} message CMsgJSDialogResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgJSDialogResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgJSDialogResponse message, length delimited. Does not implicitly {@link CMsgJSDialogResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {ICMsgJSDialogResponse} message CMsgJSDialogResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgJSDialogResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgJSDialogResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgJSDialogResponse} CMsgJSDialogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgJSDialogResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgJSDialogResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.result = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgJSDialogResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgJSDialogResponse} CMsgJSDialogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgJSDialogResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgJSDialogResponse message.
         * @function verify
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgJSDialogResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result !== "boolean")
                    return "result: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgJSDialogResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgJSDialogResponse} CMsgJSDialogResponse
         */
        CMsgJSDialogResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgJSDialogResponse)
                return object;
            var message = new $root.CMsgJSDialogResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.result != null)
                message.result = Boolean(object.result);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgJSDialogResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgJSDialogResponse
         * @static
         * @param {CMsgJSDialogResponse} message CMsgJSDialogResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgJSDialogResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.result = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };
    
        /**
         * Converts this CMsgJSDialogResponse to JSON.
         * @function toJSON
         * @memberof CMsgJSDialogResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgJSDialogResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgJSDialogResponse;
    })();
    
    $root.CMsgCanGoBackAndForward = (function() {
    
        /**
         * Properties of a CMsgCanGoBackAndForward.
         * @exports ICMsgCanGoBackAndForward
         * @interface ICMsgCanGoBackAndForward
         * @property {number|null} [browser_handle] CMsgCanGoBackAndForward browser_handle
         * @property {boolean|null} [bgoback] CMsgCanGoBackAndForward bgoback
         * @property {boolean|null} [bgoforward] CMsgCanGoBackAndForward bgoforward
         */
    
        /**
         * Constructs a new CMsgCanGoBackAndForward.
         * @exports CMsgCanGoBackAndForward
         * @classdesc Represents a CMsgCanGoBackAndForward.
         * @implements ICMsgCanGoBackAndForward
         * @constructor
         * @param {ICMsgCanGoBackAndForward=} [properties] Properties to set
         */
        function CMsgCanGoBackAndForward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgCanGoBackAndForward browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgCanGoBackAndForward
         * @instance
         */
        CMsgCanGoBackAndForward.prototype.browser_handle = 0;
    
        /**
         * CMsgCanGoBackAndForward bgoback.
         * @member {boolean} bgoback
         * @memberof CMsgCanGoBackAndForward
         * @instance
         */
        CMsgCanGoBackAndForward.prototype.bgoback = false;
    
        /**
         * CMsgCanGoBackAndForward bgoforward.
         * @member {boolean} bgoforward
         * @memberof CMsgCanGoBackAndForward
         * @instance
         */
        CMsgCanGoBackAndForward.prototype.bgoforward = false;
    
        /**
         * Creates a new CMsgCanGoBackAndForward instance using the specified properties.
         * @function create
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {ICMsgCanGoBackAndForward=} [properties] Properties to set
         * @returns {CMsgCanGoBackAndForward} CMsgCanGoBackAndForward instance
         */
        CMsgCanGoBackAndForward.create = function create(properties) {
            return new CMsgCanGoBackAndForward(properties);
        };
    
        /**
         * Encodes the specified CMsgCanGoBackAndForward message. Does not implicitly {@link CMsgCanGoBackAndForward.verify|verify} messages.
         * @function encode
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {ICMsgCanGoBackAndForward} message CMsgCanGoBackAndForward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCanGoBackAndForward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.bgoback != null && Object.hasOwnProperty.call(message, "bgoback"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bgoback);
            if (message.bgoforward != null && Object.hasOwnProperty.call(message, "bgoforward"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bgoforward);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgCanGoBackAndForward message, length delimited. Does not implicitly {@link CMsgCanGoBackAndForward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {ICMsgCanGoBackAndForward} message CMsgCanGoBackAndForward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCanGoBackAndForward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgCanGoBackAndForward message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgCanGoBackAndForward} CMsgCanGoBackAndForward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCanGoBackAndForward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgCanGoBackAndForward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.bgoback = reader.bool();
                    break;
                case 3:
                    message.bgoforward = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgCanGoBackAndForward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgCanGoBackAndForward} CMsgCanGoBackAndForward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCanGoBackAndForward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgCanGoBackAndForward message.
         * @function verify
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgCanGoBackAndForward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.bgoback != null && message.hasOwnProperty("bgoback"))
                if (typeof message.bgoback !== "boolean")
                    return "bgoback: boolean expected";
            if (message.bgoforward != null && message.hasOwnProperty("bgoforward"))
                if (typeof message.bgoforward !== "boolean")
                    return "bgoforward: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgCanGoBackAndForward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgCanGoBackAndForward} CMsgCanGoBackAndForward
         */
        CMsgCanGoBackAndForward.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgCanGoBackAndForward)
                return object;
            var message = new $root.CMsgCanGoBackAndForward();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.bgoback != null)
                message.bgoback = Boolean(object.bgoback);
            if (object.bgoforward != null)
                message.bgoforward = Boolean(object.bgoforward);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgCanGoBackAndForward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgCanGoBackAndForward
         * @static
         * @param {CMsgCanGoBackAndForward} message CMsgCanGoBackAndForward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgCanGoBackAndForward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.bgoback = false;
                object.bgoforward = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.bgoback != null && message.hasOwnProperty("bgoback"))
                object.bgoback = message.bgoback;
            if (message.bgoforward != null && message.hasOwnProperty("bgoforward"))
                object.bgoforward = message.bgoforward;
            return object;
        };
    
        /**
         * Converts this CMsgCanGoBackAndForward to JSON.
         * @function toJSON
         * @memberof CMsgCanGoBackAndForward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgCanGoBackAndForward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgCanGoBackAndForward;
    })();
    
    $root.CMsgOpenSteamURL = (function() {
    
        /**
         * Properties of a CMsgOpenSteamURL.
         * @exports ICMsgOpenSteamURL
         * @interface ICMsgOpenSteamURL
         * @property {number|null} [browser_handle] CMsgOpenSteamURL browser_handle
         * @property {string|null} [url] CMsgOpenSteamURL url
         */
    
        /**
         * Constructs a new CMsgOpenSteamURL.
         * @exports CMsgOpenSteamURL
         * @classdesc Represents a CMsgOpenSteamURL.
         * @implements ICMsgOpenSteamURL
         * @constructor
         * @param {ICMsgOpenSteamURL=} [properties] Properties to set
         */
        function CMsgOpenSteamURL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgOpenSteamURL browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgOpenSteamURL
         * @instance
         */
        CMsgOpenSteamURL.prototype.browser_handle = 0;
    
        /**
         * CMsgOpenSteamURL url.
         * @member {string} url
         * @memberof CMsgOpenSteamURL
         * @instance
         */
        CMsgOpenSteamURL.prototype.url = "";
    
        /**
         * Creates a new CMsgOpenSteamURL instance using the specified properties.
         * @function create
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {ICMsgOpenSteamURL=} [properties] Properties to set
         * @returns {CMsgOpenSteamURL} CMsgOpenSteamURL instance
         */
        CMsgOpenSteamURL.create = function create(properties) {
            return new CMsgOpenSteamURL(properties);
        };
    
        /**
         * Encodes the specified CMsgOpenSteamURL message. Does not implicitly {@link CMsgOpenSteamURL.verify|verify} messages.
         * @function encode
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {ICMsgOpenSteamURL} message CMsgOpenSteamURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgOpenSteamURL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgOpenSteamURL message, length delimited. Does not implicitly {@link CMsgOpenSteamURL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {ICMsgOpenSteamURL} message CMsgOpenSteamURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgOpenSteamURL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgOpenSteamURL message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgOpenSteamURL} CMsgOpenSteamURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgOpenSteamURL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgOpenSteamURL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgOpenSteamURL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgOpenSteamURL} CMsgOpenSteamURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgOpenSteamURL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgOpenSteamURL message.
         * @function verify
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgOpenSteamURL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgOpenSteamURL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgOpenSteamURL} CMsgOpenSteamURL
         */
        CMsgOpenSteamURL.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgOpenSteamURL)
                return object;
            var message = new $root.CMsgOpenSteamURL();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgOpenSteamURL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgOpenSteamURL
         * @static
         * @param {CMsgOpenSteamURL} message CMsgOpenSteamURL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgOpenSteamURL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };
    
        /**
         * Converts this CMsgOpenSteamURL to JSON.
         * @function toJSON
         * @memberof CMsgOpenSteamURL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgOpenSteamURL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgOpenSteamURL;
    })();
    
    $root.CMsgSetCookie = (function() {
    
        /**
         * Properties of a CMsgSetCookie.
         * @exports ICMsgSetCookie
         * @interface ICMsgSetCookie
         * @property {string|null} [key] CMsgSetCookie key
         * @property {string|null} [value] CMsgSetCookie value
         * @property {string|null} [path] CMsgSetCookie path
         * @property {string|null} [host] CMsgSetCookie host
         * @property {number|null} [expires] CMsgSetCookie expires
         */
    
        /**
         * Constructs a new CMsgSetCookie.
         * @exports CMsgSetCookie
         * @classdesc Represents a CMsgSetCookie.
         * @implements ICMsgSetCookie
         * @constructor
         * @param {ICMsgSetCookie=} [properties] Properties to set
         */
        function CMsgSetCookie(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetCookie key.
         * @member {string} key
         * @memberof CMsgSetCookie
         * @instance
         */
        CMsgSetCookie.prototype.key = "";
    
        /**
         * CMsgSetCookie value.
         * @member {string} value
         * @memberof CMsgSetCookie
         * @instance
         */
        CMsgSetCookie.prototype.value = "";
    
        /**
         * CMsgSetCookie path.
         * @member {string} path
         * @memberof CMsgSetCookie
         * @instance
         */
        CMsgSetCookie.prototype.path = "";
    
        /**
         * CMsgSetCookie host.
         * @member {string} host
         * @memberof CMsgSetCookie
         * @instance
         */
        CMsgSetCookie.prototype.host = "";
    
        /**
         * CMsgSetCookie expires.
         * @member {number} expires
         * @memberof CMsgSetCookie
         * @instance
         */
        CMsgSetCookie.prototype.expires = 0;
    
        /**
         * Creates a new CMsgSetCookie instance using the specified properties.
         * @function create
         * @memberof CMsgSetCookie
         * @static
         * @param {ICMsgSetCookie=} [properties] Properties to set
         * @returns {CMsgSetCookie} CMsgSetCookie instance
         */
        CMsgSetCookie.create = function create(properties) {
            return new CMsgSetCookie(properties);
        };
    
        /**
         * Encodes the specified CMsgSetCookie message. Does not implicitly {@link CMsgSetCookie.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetCookie
         * @static
         * @param {ICMsgSetCookie} message CMsgSetCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetCookie.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.path);
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.host);
            if (message.expires != null && Object.hasOwnProperty.call(message, "expires"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.expires);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetCookie message, length delimited. Does not implicitly {@link CMsgSetCookie.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetCookie
         * @static
         * @param {ICMsgSetCookie} message CMsgSetCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetCookie.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetCookie message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetCookie} CMsgSetCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetCookie.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetCookie();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
                    break;
                case 4:
                    message.host = reader.string();
                    break;
                case 5:
                    message.expires = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetCookie message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetCookie} CMsgSetCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetCookie.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetCookie message.
         * @function verify
         * @memberof CMsgSetCookie
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetCookie.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.expires != null && message.hasOwnProperty("expires"))
                if (!$util.isInteger(message.expires))
                    return "expires: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetCookie message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetCookie
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetCookie} CMsgSetCookie
         */
        CMsgSetCookie.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetCookie)
                return object;
            var message = new $root.CMsgSetCookie();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            if (object.path != null)
                message.path = String(object.path);
            if (object.host != null)
                message.host = String(object.host);
            if (object.expires != null)
                message.expires = object.expires >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetCookie message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetCookie
         * @static
         * @param {CMsgSetCookie} message CMsgSetCookie
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetCookie.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
                object.path = "";
                object.host = "";
                object.expires = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.expires != null && message.hasOwnProperty("expires"))
                object.expires = message.expires;
            return object;
        };
    
        /**
         * Converts this CMsgSetCookie to JSON.
         * @function toJSON
         * @memberof CMsgSetCookie
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetCookie.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetCookie;
    })();
    
    $root.CMsgSetTargetFrameRate = (function() {
    
        /**
         * Properties of a CMsgSetTargetFrameRate.
         * @exports ICMsgSetTargetFrameRate
         * @interface ICMsgSetTargetFrameRate
         * @property {number|null} [nTargetFrameRate] CMsgSetTargetFrameRate nTargetFrameRate
         */
    
        /**
         * Constructs a new CMsgSetTargetFrameRate.
         * @exports CMsgSetTargetFrameRate
         * @classdesc Represents a CMsgSetTargetFrameRate.
         * @implements ICMsgSetTargetFrameRate
         * @constructor
         * @param {ICMsgSetTargetFrameRate=} [properties] Properties to set
         */
        function CMsgSetTargetFrameRate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSetTargetFrameRate nTargetFrameRate.
         * @member {number} nTargetFrameRate
         * @memberof CMsgSetTargetFrameRate
         * @instance
         */
        CMsgSetTargetFrameRate.prototype.nTargetFrameRate = 0;
    
        /**
         * Creates a new CMsgSetTargetFrameRate instance using the specified properties.
         * @function create
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {ICMsgSetTargetFrameRate=} [properties] Properties to set
         * @returns {CMsgSetTargetFrameRate} CMsgSetTargetFrameRate instance
         */
        CMsgSetTargetFrameRate.create = function create(properties) {
            return new CMsgSetTargetFrameRate(properties);
        };
    
        /**
         * Encodes the specified CMsgSetTargetFrameRate message. Does not implicitly {@link CMsgSetTargetFrameRate.verify|verify} messages.
         * @function encode
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {ICMsgSetTargetFrameRate} message CMsgSetTargetFrameRate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetTargetFrameRate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nTargetFrameRate != null && Object.hasOwnProperty.call(message, "nTargetFrameRate"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nTargetFrameRate);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSetTargetFrameRate message, length delimited. Does not implicitly {@link CMsgSetTargetFrameRate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {ICMsgSetTargetFrameRate} message CMsgSetTargetFrameRate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSetTargetFrameRate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSetTargetFrameRate message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSetTargetFrameRate} CMsgSetTargetFrameRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetTargetFrameRate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSetTargetFrameRate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nTargetFrameRate = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSetTargetFrameRate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSetTargetFrameRate} CMsgSetTargetFrameRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSetTargetFrameRate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSetTargetFrameRate message.
         * @function verify
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSetTargetFrameRate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nTargetFrameRate != null && message.hasOwnProperty("nTargetFrameRate"))
                if (!$util.isInteger(message.nTargetFrameRate))
                    return "nTargetFrameRate: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSetTargetFrameRate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSetTargetFrameRate} CMsgSetTargetFrameRate
         */
        CMsgSetTargetFrameRate.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSetTargetFrameRate)
                return object;
            var message = new $root.CMsgSetTargetFrameRate();
            if (object.nTargetFrameRate != null)
                message.nTargetFrameRate = object.nTargetFrameRate >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSetTargetFrameRate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSetTargetFrameRate
         * @static
         * @param {CMsgSetTargetFrameRate} message CMsgSetTargetFrameRate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSetTargetFrameRate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.nTargetFrameRate = 0;
            if (message.nTargetFrameRate != null && message.hasOwnProperty("nTargetFrameRate"))
                object.nTargetFrameRate = message.nTargetFrameRate;
            return object;
        };
    
        /**
         * Converts this CMsgSetTargetFrameRate to JSON.
         * @function toJSON
         * @memberof CMsgSetTargetFrameRate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSetTargetFrameRate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSetTargetFrameRate;
    })();
    
    $root.CMsgFullRepaint = (function() {
    
        /**
         * Properties of a CMsgFullRepaint.
         * @exports ICMsgFullRepaint
         * @interface ICMsgFullRepaint
         * @property {number|null} [browser_handle] CMsgFullRepaint browser_handle
         */
    
        /**
         * Constructs a new CMsgFullRepaint.
         * @exports CMsgFullRepaint
         * @classdesc Represents a CMsgFullRepaint.
         * @implements ICMsgFullRepaint
         * @constructor
         * @param {ICMsgFullRepaint=} [properties] Properties to set
         */
        function CMsgFullRepaint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFullRepaint browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgFullRepaint
         * @instance
         */
        CMsgFullRepaint.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgFullRepaint instance using the specified properties.
         * @function create
         * @memberof CMsgFullRepaint
         * @static
         * @param {ICMsgFullRepaint=} [properties] Properties to set
         * @returns {CMsgFullRepaint} CMsgFullRepaint instance
         */
        CMsgFullRepaint.create = function create(properties) {
            return new CMsgFullRepaint(properties);
        };
    
        /**
         * Encodes the specified CMsgFullRepaint message. Does not implicitly {@link CMsgFullRepaint.verify|verify} messages.
         * @function encode
         * @memberof CMsgFullRepaint
         * @static
         * @param {ICMsgFullRepaint} message CMsgFullRepaint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFullRepaint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFullRepaint message, length delimited. Does not implicitly {@link CMsgFullRepaint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFullRepaint
         * @static
         * @param {ICMsgFullRepaint} message CMsgFullRepaint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFullRepaint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFullRepaint message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFullRepaint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFullRepaint} CMsgFullRepaint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFullRepaint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFullRepaint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFullRepaint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFullRepaint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFullRepaint} CMsgFullRepaint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFullRepaint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFullRepaint message.
         * @function verify
         * @memberof CMsgFullRepaint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFullRepaint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgFullRepaint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFullRepaint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFullRepaint} CMsgFullRepaint
         */
        CMsgFullRepaint.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFullRepaint)
                return object;
            var message = new $root.CMsgFullRepaint();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFullRepaint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFullRepaint
         * @static
         * @param {CMsgFullRepaint} message CMsgFullRepaint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFullRepaint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgFullRepaint to JSON.
         * @function toJSON
         * @memberof CMsgFullRepaint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFullRepaint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgFullRepaint;
    })();
    
    $root.CMsgRequestFullScreen = (function() {
    
        /**
         * Properties of a CMsgRequestFullScreen.
         * @exports ICMsgRequestFullScreen
         * @interface ICMsgRequestFullScreen
         * @property {number|null} [browser_handle] CMsgRequestFullScreen browser_handle
         */
    
        /**
         * Constructs a new CMsgRequestFullScreen.
         * @exports CMsgRequestFullScreen
         * @classdesc Represents a CMsgRequestFullScreen.
         * @implements ICMsgRequestFullScreen
         * @constructor
         * @param {ICMsgRequestFullScreen=} [properties] Properties to set
         */
        function CMsgRequestFullScreen(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRequestFullScreen browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgRequestFullScreen
         * @instance
         */
        CMsgRequestFullScreen.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgRequestFullScreen instance using the specified properties.
         * @function create
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {ICMsgRequestFullScreen=} [properties] Properties to set
         * @returns {CMsgRequestFullScreen} CMsgRequestFullScreen instance
         */
        CMsgRequestFullScreen.create = function create(properties) {
            return new CMsgRequestFullScreen(properties);
        };
    
        /**
         * Encodes the specified CMsgRequestFullScreen message. Does not implicitly {@link CMsgRequestFullScreen.verify|verify} messages.
         * @function encode
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {ICMsgRequestFullScreen} message CMsgRequestFullScreen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRequestFullScreen.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRequestFullScreen message, length delimited. Does not implicitly {@link CMsgRequestFullScreen.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {ICMsgRequestFullScreen} message CMsgRequestFullScreen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRequestFullScreen.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRequestFullScreen message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRequestFullScreen} CMsgRequestFullScreen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRequestFullScreen.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRequestFullScreen();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgRequestFullScreen message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRequestFullScreen} CMsgRequestFullScreen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRequestFullScreen.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRequestFullScreen message.
         * @function verify
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRequestFullScreen.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRequestFullScreen message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRequestFullScreen} CMsgRequestFullScreen
         */
        CMsgRequestFullScreen.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRequestFullScreen)
                return object;
            var message = new $root.CMsgRequestFullScreen();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRequestFullScreen message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRequestFullScreen
         * @static
         * @param {CMsgRequestFullScreen} message CMsgRequestFullScreen
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRequestFullScreen.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgRequestFullScreen to JSON.
         * @function toJSON
         * @memberof CMsgRequestFullScreen
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRequestFullScreen.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRequestFullScreen;
    })();
    
    $root.CMsgRequestFullScreenResponse = (function() {
    
        /**
         * Properties of a CMsgRequestFullScreenResponse.
         * @exports ICMsgRequestFullScreenResponse
         * @interface ICMsgRequestFullScreenResponse
         * @property {number|null} [browser_handle] CMsgRequestFullScreenResponse browser_handle
         * @property {boolean|null} [ballow] CMsgRequestFullScreenResponse ballow
         */
    
        /**
         * Constructs a new CMsgRequestFullScreenResponse.
         * @exports CMsgRequestFullScreenResponse
         * @classdesc Represents a CMsgRequestFullScreenResponse.
         * @implements ICMsgRequestFullScreenResponse
         * @constructor
         * @param {ICMsgRequestFullScreenResponse=} [properties] Properties to set
         */
        function CMsgRequestFullScreenResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRequestFullScreenResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgRequestFullScreenResponse
         * @instance
         */
        CMsgRequestFullScreenResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgRequestFullScreenResponse ballow.
         * @member {boolean} ballow
         * @memberof CMsgRequestFullScreenResponse
         * @instance
         */
        CMsgRequestFullScreenResponse.prototype.ballow = false;
    
        /**
         * Creates a new CMsgRequestFullScreenResponse instance using the specified properties.
         * @function create
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {ICMsgRequestFullScreenResponse=} [properties] Properties to set
         * @returns {CMsgRequestFullScreenResponse} CMsgRequestFullScreenResponse instance
         */
        CMsgRequestFullScreenResponse.create = function create(properties) {
            return new CMsgRequestFullScreenResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgRequestFullScreenResponse message. Does not implicitly {@link CMsgRequestFullScreenResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {ICMsgRequestFullScreenResponse} message CMsgRequestFullScreenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRequestFullScreenResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.ballow != null && Object.hasOwnProperty.call(message, "ballow"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ballow);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRequestFullScreenResponse message, length delimited. Does not implicitly {@link CMsgRequestFullScreenResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {ICMsgRequestFullScreenResponse} message CMsgRequestFullScreenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRequestFullScreenResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRequestFullScreenResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRequestFullScreenResponse} CMsgRequestFullScreenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRequestFullScreenResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRequestFullScreenResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.ballow = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgRequestFullScreenResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRequestFullScreenResponse} CMsgRequestFullScreenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRequestFullScreenResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRequestFullScreenResponse message.
         * @function verify
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRequestFullScreenResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.ballow != null && message.hasOwnProperty("ballow"))
                if (typeof message.ballow !== "boolean")
                    return "ballow: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgRequestFullScreenResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRequestFullScreenResponse} CMsgRequestFullScreenResponse
         */
        CMsgRequestFullScreenResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRequestFullScreenResponse)
                return object;
            var message = new $root.CMsgRequestFullScreenResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.ballow != null)
                message.ballow = Boolean(object.ballow);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRequestFullScreenResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRequestFullScreenResponse
         * @static
         * @param {CMsgRequestFullScreenResponse} message CMsgRequestFullScreenResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRequestFullScreenResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.ballow = false;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.ballow != null && message.hasOwnProperty("ballow"))
                object.ballow = message.ballow;
            return object;
        };
    
        /**
         * Converts this CMsgRequestFullScreenResponse to JSON.
         * @function toJSON
         * @memberof CMsgRequestFullScreenResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRequestFullScreenResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRequestFullScreenResponse;
    })();
    
    $root.CMsgExitFullScreen = (function() {
    
        /**
         * Properties of a CMsgExitFullScreen.
         * @exports ICMsgExitFullScreen
         * @interface ICMsgExitFullScreen
         * @property {number|null} [browser_handle] CMsgExitFullScreen browser_handle
         */
    
        /**
         * Constructs a new CMsgExitFullScreen.
         * @exports CMsgExitFullScreen
         * @classdesc Represents a CMsgExitFullScreen.
         * @implements ICMsgExitFullScreen
         * @constructor
         * @param {ICMsgExitFullScreen=} [properties] Properties to set
         */
        function CMsgExitFullScreen(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgExitFullScreen browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgExitFullScreen
         * @instance
         */
        CMsgExitFullScreen.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgExitFullScreen instance using the specified properties.
         * @function create
         * @memberof CMsgExitFullScreen
         * @static
         * @param {ICMsgExitFullScreen=} [properties] Properties to set
         * @returns {CMsgExitFullScreen} CMsgExitFullScreen instance
         */
        CMsgExitFullScreen.create = function create(properties) {
            return new CMsgExitFullScreen(properties);
        };
    
        /**
         * Encodes the specified CMsgExitFullScreen message. Does not implicitly {@link CMsgExitFullScreen.verify|verify} messages.
         * @function encode
         * @memberof CMsgExitFullScreen
         * @static
         * @param {ICMsgExitFullScreen} message CMsgExitFullScreen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgExitFullScreen.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgExitFullScreen message, length delimited. Does not implicitly {@link CMsgExitFullScreen.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgExitFullScreen
         * @static
         * @param {ICMsgExitFullScreen} message CMsgExitFullScreen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgExitFullScreen.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgExitFullScreen message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgExitFullScreen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgExitFullScreen} CMsgExitFullScreen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgExitFullScreen.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgExitFullScreen();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgExitFullScreen message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgExitFullScreen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgExitFullScreen} CMsgExitFullScreen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgExitFullScreen.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgExitFullScreen message.
         * @function verify
         * @memberof CMsgExitFullScreen
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgExitFullScreen.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgExitFullScreen message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgExitFullScreen
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgExitFullScreen} CMsgExitFullScreen
         */
        CMsgExitFullScreen.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgExitFullScreen)
                return object;
            var message = new $root.CMsgExitFullScreen();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgExitFullScreen message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgExitFullScreen
         * @static
         * @param {CMsgExitFullScreen} message CMsgExitFullScreen
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgExitFullScreen.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgExitFullScreen to JSON.
         * @function toJSON
         * @memberof CMsgExitFullScreen
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgExitFullScreen.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgExitFullScreen;
    })();
    
    $root.CMsgGetCookiesForURL = (function() {
    
        /**
         * Properties of a CMsgGetCookiesForURL.
         * @exports ICMsgGetCookiesForURL
         * @interface ICMsgGetCookiesForURL
         * @property {number|null} [browser_handle] CMsgGetCookiesForURL browser_handle
         * @property {string|null} [url] CMsgGetCookiesForURL url
         */
    
        /**
         * Constructs a new CMsgGetCookiesForURL.
         * @exports CMsgGetCookiesForURL
         * @classdesc Represents a CMsgGetCookiesForURL.
         * @implements ICMsgGetCookiesForURL
         * @constructor
         * @param {ICMsgGetCookiesForURL=} [properties] Properties to set
         */
        function CMsgGetCookiesForURL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGetCookiesForURL browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgGetCookiesForURL
         * @instance
         */
        CMsgGetCookiesForURL.prototype.browser_handle = 0;
    
        /**
         * CMsgGetCookiesForURL url.
         * @member {string} url
         * @memberof CMsgGetCookiesForURL
         * @instance
         */
        CMsgGetCookiesForURL.prototype.url = "";
    
        /**
         * Creates a new CMsgGetCookiesForURL instance using the specified properties.
         * @function create
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {ICMsgGetCookiesForURL=} [properties] Properties to set
         * @returns {CMsgGetCookiesForURL} CMsgGetCookiesForURL instance
         */
        CMsgGetCookiesForURL.create = function create(properties) {
            return new CMsgGetCookiesForURL(properties);
        };
    
        /**
         * Encodes the specified CMsgGetCookiesForURL message. Does not implicitly {@link CMsgGetCookiesForURL.verify|verify} messages.
         * @function encode
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {ICMsgGetCookiesForURL} message CMsgGetCookiesForURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetCookiesForURL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGetCookiesForURL message, length delimited. Does not implicitly {@link CMsgGetCookiesForURL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {ICMsgGetCookiesForURL} message CMsgGetCookiesForURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetCookiesForURL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGetCookiesForURL message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGetCookiesForURL} CMsgGetCookiesForURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetCookiesForURL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGetCookiesForURL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGetCookiesForURL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGetCookiesForURL} CMsgGetCookiesForURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetCookiesForURL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGetCookiesForURL message.
         * @function verify
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGetCookiesForURL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgGetCookiesForURL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGetCookiesForURL} CMsgGetCookiesForURL
         */
        CMsgGetCookiesForURL.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGetCookiesForURL)
                return object;
            var message = new $root.CMsgGetCookiesForURL();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGetCookiesForURL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGetCookiesForURL
         * @static
         * @param {CMsgGetCookiesForURL} message CMsgGetCookiesForURL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGetCookiesForURL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };
    
        /**
         * Converts this CMsgGetCookiesForURL to JSON.
         * @function toJSON
         * @memberof CMsgGetCookiesForURL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGetCookiesForURL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGetCookiesForURL;
    })();
    
    $root.CCookie = (function() {
    
        /**
         * Properties of a CCookie.
         * @exports ICCookie
         * @interface ICCookie
         * @property {string|null} [name] CCookie name
         * @property {string|null} [value] CCookie value
         * @property {string|null} [domain] CCookie domain
         * @property {string|null} [path] CCookie path
         */
    
        /**
         * Constructs a new CCookie.
         * @exports CCookie
         * @classdesc Represents a CCookie.
         * @implements ICCookie
         * @constructor
         * @param {ICCookie=} [properties] Properties to set
         */
        function CCookie(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCookie name.
         * @member {string} name
         * @memberof CCookie
         * @instance
         */
        CCookie.prototype.name = "";
    
        /**
         * CCookie value.
         * @member {string} value
         * @memberof CCookie
         * @instance
         */
        CCookie.prototype.value = "";
    
        /**
         * CCookie domain.
         * @member {string} domain
         * @memberof CCookie
         * @instance
         */
        CCookie.prototype.domain = "";
    
        /**
         * CCookie path.
         * @member {string} path
         * @memberof CCookie
         * @instance
         */
        CCookie.prototype.path = "";
    
        /**
         * Creates a new CCookie instance using the specified properties.
         * @function create
         * @memberof CCookie
         * @static
         * @param {ICCookie=} [properties] Properties to set
         * @returns {CCookie} CCookie instance
         */
        CCookie.create = function create(properties) {
            return new CCookie(properties);
        };
    
        /**
         * Encodes the specified CCookie message. Does not implicitly {@link CCookie.verify|verify} messages.
         * @function encode
         * @memberof CCookie
         * @static
         * @param {ICCookie} message CCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCookie.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.domain);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.path);
            return writer;
        };
    
        /**
         * Encodes the specified CCookie message, length delimited. Does not implicitly {@link CCookie.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCookie
         * @static
         * @param {ICCookie} message CCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCookie.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCookie message from the specified reader or buffer.
         * @function decode
         * @memberof CCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCookie} CCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCookie.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCookie();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.domain = reader.string();
                    break;
                case 4:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCookie message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCookie} CCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCookie.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCookie message.
         * @function verify
         * @memberof CCookie
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCookie.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            return null;
        };
    
        /**
         * Creates a CCookie message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCookie
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCookie} CCookie
         */
        CCookie.fromObject = function fromObject(object) {
            if (object instanceof $root.CCookie)
                return object;
            var message = new $root.CCookie();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.path != null)
                message.path = String(object.path);
            return message;
        };
    
        /**
         * Creates a plain object from a CCookie message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCookie
         * @static
         * @param {CCookie} message CCookie
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCookie.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
                object.domain = "";
                object.path = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            return object;
        };
    
        /**
         * Converts this CCookie to JSON.
         * @function toJSON
         * @memberof CCookie
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCookie.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCookie;
    })();
    
    $root.CMsgGetCookiesForURLResponse = (function() {
    
        /**
         * Properties of a CMsgGetCookiesForURLResponse.
         * @exports ICMsgGetCookiesForURLResponse
         * @interface ICMsgGetCookiesForURLResponse
         * @property {number|null} [browser_handle] CMsgGetCookiesForURLResponse browser_handle
         * @property {string|null} [url] CMsgGetCookiesForURLResponse url
         * @property {Array.<ICCookie>|null} [cookies] CMsgGetCookiesForURLResponse cookies
         */
    
        /**
         * Constructs a new CMsgGetCookiesForURLResponse.
         * @exports CMsgGetCookiesForURLResponse
         * @classdesc Represents a CMsgGetCookiesForURLResponse.
         * @implements ICMsgGetCookiesForURLResponse
         * @constructor
         * @param {ICMsgGetCookiesForURLResponse=} [properties] Properties to set
         */
        function CMsgGetCookiesForURLResponse(properties) {
            this.cookies = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGetCookiesForURLResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgGetCookiesForURLResponse
         * @instance
         */
        CMsgGetCookiesForURLResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgGetCookiesForURLResponse url.
         * @member {string} url
         * @memberof CMsgGetCookiesForURLResponse
         * @instance
         */
        CMsgGetCookiesForURLResponse.prototype.url = "";
    
        /**
         * CMsgGetCookiesForURLResponse cookies.
         * @member {Array.<ICCookie>} cookies
         * @memberof CMsgGetCookiesForURLResponse
         * @instance
         */
        CMsgGetCookiesForURLResponse.prototype.cookies = $util.emptyArray;
    
        /**
         * Creates a new CMsgGetCookiesForURLResponse instance using the specified properties.
         * @function create
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {ICMsgGetCookiesForURLResponse=} [properties] Properties to set
         * @returns {CMsgGetCookiesForURLResponse} CMsgGetCookiesForURLResponse instance
         */
        CMsgGetCookiesForURLResponse.create = function create(properties) {
            return new CMsgGetCookiesForURLResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgGetCookiesForURLResponse message. Does not implicitly {@link CMsgGetCookiesForURLResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {ICMsgGetCookiesForURLResponse} message CMsgGetCookiesForURLResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetCookiesForURLResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.cookies != null && message.cookies.length)
                for (var i = 0; i < message.cookies.length; ++i)
                    $root.CCookie.encode(message.cookies[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGetCookiesForURLResponse message, length delimited. Does not implicitly {@link CMsgGetCookiesForURLResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {ICMsgGetCookiesForURLResponse} message CMsgGetCookiesForURLResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGetCookiesForURLResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGetCookiesForURLResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGetCookiesForURLResponse} CMsgGetCookiesForURLResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetCookiesForURLResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGetCookiesForURLResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    if (!(message.cookies && message.cookies.length))
                        message.cookies = [];
                    message.cookies.push($root.CCookie.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGetCookiesForURLResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGetCookiesForURLResponse} CMsgGetCookiesForURLResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGetCookiesForURLResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGetCookiesForURLResponse message.
         * @function verify
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGetCookiesForURLResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.cookies != null && message.hasOwnProperty("cookies")) {
                if (!Array.isArray(message.cookies))
                    return "cookies: array expected";
                for (var i = 0; i < message.cookies.length; ++i) {
                    var error = $root.CCookie.verify(message.cookies[i]);
                    if (error)
                        return "cookies." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgGetCookiesForURLResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGetCookiesForURLResponse} CMsgGetCookiesForURLResponse
         */
        CMsgGetCookiesForURLResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGetCookiesForURLResponse)
                return object;
            var message = new $root.CMsgGetCookiesForURLResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.cookies) {
                if (!Array.isArray(object.cookies))
                    throw TypeError(".CMsgGetCookiesForURLResponse.cookies: array expected");
                message.cookies = [];
                for (var i = 0; i < object.cookies.length; ++i) {
                    if (typeof object.cookies[i] !== "object")
                        throw TypeError(".CMsgGetCookiesForURLResponse.cookies: object expected");
                    message.cookies[i] = $root.CCookie.fromObject(object.cookies[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGetCookiesForURLResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGetCookiesForURLResponse
         * @static
         * @param {CMsgGetCookiesForURLResponse} message CMsgGetCookiesForURLResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGetCookiesForURLResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cookies = [];
            if (options.defaults) {
                object.browser_handle = 0;
                object.url = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.cookies && message.cookies.length) {
                object.cookies = [];
                for (var j = 0; j < message.cookies.length; ++j)
                    object.cookies[j] = $root.CCookie.toObject(message.cookies[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgGetCookiesForURLResponse to JSON.
         * @function toJSON
         * @memberof CMsgGetCookiesForURLResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGetCookiesForURLResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGetCookiesForURLResponse;
    })();
    
    $root.CMsgNodeHasFocus = (function() {
    
        /**
         * Properties of a CMsgNodeHasFocus.
         * @exports ICMsgNodeHasFocus
         * @interface ICMsgNodeHasFocus
         * @property {number|null} [browser_handle] CMsgNodeHasFocus browser_handle
         * @property {boolean|null} [bInput] CMsgNodeHasFocus bInput
         * @property {string|null} [name] CMsgNodeHasFocus name
         * @property {string|null} [elementtagname] CMsgNodeHasFocus elementtagname
         * @property {string|null} [searchbuttontext] CMsgNodeHasFocus searchbuttontext
         * @property {boolean|null} [bHasMultipleInputs] CMsgNodeHasFocus bHasMultipleInputs
         * @property {string|null} [input_type] CMsgNodeHasFocus input_type
         */
    
        /**
         * Constructs a new CMsgNodeHasFocus.
         * @exports CMsgNodeHasFocus
         * @classdesc Represents a CMsgNodeHasFocus.
         * @implements ICMsgNodeHasFocus
         * @constructor
         * @param {ICMsgNodeHasFocus=} [properties] Properties to set
         */
        function CMsgNodeHasFocus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgNodeHasFocus browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgNodeHasFocus
         * @instance
         */
        CMsgNodeHasFocus.prototype.browser_handle = 0;
    
        /**
         * CMsgNodeHasFocus bInput.
         * @member {boolean} bInput
         * @memberof CMsgNodeHasFocus
         * @instance
         */
        CMsgNodeHasFocus.prototype.bInput = false;
    
        /**
         * CMsgNodeHasFocus name.
         * @member {string} name
         * @memberof CMsgNodeHasFocus
         * @instance
         */
        CMsgNodeHasFocus.prototype.name = "";
    
        /**
         * CMsgNodeHasFocus elementtagname.
         * @member {string} elementtagname
         * @memberof CMsgNodeHasFocus
         * @instance
         */
        CMsgNodeHasFocus.prototype.elementtagname = "";
    
        /**
         * CMsgNodeHasFocus searchbuttontext.
         * @member {string} searchbuttontext
         * @memberof CMsgNodeHasFocus
         * @instance
         */
        CMsgNodeHasFocus.prototype.searchbuttontext = "";
    
        /**
         * CMsgNodeHasFocus bHasMultipleInputs.
         * @member {boolean} bHasMultipleInputs
         * @memberof CMsgNodeHasFocus
         * @instance
         */
        CMsgNodeHasFocus.prototype.bHasMultipleInputs = false;
    
        /**
         * CMsgNodeHasFocus input_type.
         * @member {string} input_type
         * @memberof CMsgNodeHasFocus
         * @instance
         */
        CMsgNodeHasFocus.prototype.input_type = "";
    
        /**
         * Creates a new CMsgNodeHasFocus instance using the specified properties.
         * @function create
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {ICMsgNodeHasFocus=} [properties] Properties to set
         * @returns {CMsgNodeHasFocus} CMsgNodeHasFocus instance
         */
        CMsgNodeHasFocus.create = function create(properties) {
            return new CMsgNodeHasFocus(properties);
        };
    
        /**
         * Encodes the specified CMsgNodeHasFocus message. Does not implicitly {@link CMsgNodeHasFocus.verify|verify} messages.
         * @function encode
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {ICMsgNodeHasFocus} message CMsgNodeHasFocus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgNodeHasFocus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.bInput != null && Object.hasOwnProperty.call(message, "bInput"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bInput);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.elementtagname != null && Object.hasOwnProperty.call(message, "elementtagname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.elementtagname);
            if (message.searchbuttontext != null && Object.hasOwnProperty.call(message, "searchbuttontext"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.searchbuttontext);
            if (message.bHasMultipleInputs != null && Object.hasOwnProperty.call(message, "bHasMultipleInputs"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.bHasMultipleInputs);
            if (message.input_type != null && Object.hasOwnProperty.call(message, "input_type"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.input_type);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgNodeHasFocus message, length delimited. Does not implicitly {@link CMsgNodeHasFocus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {ICMsgNodeHasFocus} message CMsgNodeHasFocus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgNodeHasFocus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgNodeHasFocus message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgNodeHasFocus} CMsgNodeHasFocus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgNodeHasFocus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgNodeHasFocus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.bInput = reader.bool();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.elementtagname = reader.string();
                    break;
                case 5:
                    message.searchbuttontext = reader.string();
                    break;
                case 6:
                    message.bHasMultipleInputs = reader.bool();
                    break;
                case 7:
                    message.input_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgNodeHasFocus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgNodeHasFocus} CMsgNodeHasFocus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgNodeHasFocus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgNodeHasFocus message.
         * @function verify
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgNodeHasFocus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.bInput != null && message.hasOwnProperty("bInput"))
                if (typeof message.bInput !== "boolean")
                    return "bInput: boolean expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.elementtagname != null && message.hasOwnProperty("elementtagname"))
                if (!$util.isString(message.elementtagname))
                    return "elementtagname: string expected";
            if (message.searchbuttontext != null && message.hasOwnProperty("searchbuttontext"))
                if (!$util.isString(message.searchbuttontext))
                    return "searchbuttontext: string expected";
            if (message.bHasMultipleInputs != null && message.hasOwnProperty("bHasMultipleInputs"))
                if (typeof message.bHasMultipleInputs !== "boolean")
                    return "bHasMultipleInputs: boolean expected";
            if (message.input_type != null && message.hasOwnProperty("input_type"))
                if (!$util.isString(message.input_type))
                    return "input_type: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgNodeHasFocus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgNodeHasFocus} CMsgNodeHasFocus
         */
        CMsgNodeHasFocus.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgNodeHasFocus)
                return object;
            var message = new $root.CMsgNodeHasFocus();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.bInput != null)
                message.bInput = Boolean(object.bInput);
            if (object.name != null)
                message.name = String(object.name);
            if (object.elementtagname != null)
                message.elementtagname = String(object.elementtagname);
            if (object.searchbuttontext != null)
                message.searchbuttontext = String(object.searchbuttontext);
            if (object.bHasMultipleInputs != null)
                message.bHasMultipleInputs = Boolean(object.bHasMultipleInputs);
            if (object.input_type != null)
                message.input_type = String(object.input_type);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgNodeHasFocus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgNodeHasFocus
         * @static
         * @param {CMsgNodeHasFocus} message CMsgNodeHasFocus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgNodeHasFocus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.bInput = false;
                object.name = "";
                object.elementtagname = "";
                object.searchbuttontext = "";
                object.bHasMultipleInputs = false;
                object.input_type = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.bInput != null && message.hasOwnProperty("bInput"))
                object.bInput = message.bInput;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.elementtagname != null && message.hasOwnProperty("elementtagname"))
                object.elementtagname = message.elementtagname;
            if (message.searchbuttontext != null && message.hasOwnProperty("searchbuttontext"))
                object.searchbuttontext = message.searchbuttontext;
            if (message.bHasMultipleInputs != null && message.hasOwnProperty("bHasMultipleInputs"))
                object.bHasMultipleInputs = message.bHasMultipleInputs;
            if (message.input_type != null && message.hasOwnProperty("input_type"))
                object.input_type = message.input_type;
            return object;
        };
    
        /**
         * Converts this CMsgNodeHasFocus to JSON.
         * @function toJSON
         * @memberof CMsgNodeHasFocus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgNodeHasFocus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgNodeHasFocus;
    })();
    
    $root.CMsgZoomToFocusedElement = (function() {
    
        /**
         * Properties of a CMsgZoomToFocusedElement.
         * @exports ICMsgZoomToFocusedElement
         * @interface ICMsgZoomToFocusedElement
         * @property {number|null} [browser_handle] CMsgZoomToFocusedElement browser_handle
         * @property {number|null} [leftoffset] CMsgZoomToFocusedElement leftoffset
         * @property {number|null} [topoffset] CMsgZoomToFocusedElement topoffset
         */
    
        /**
         * Constructs a new CMsgZoomToFocusedElement.
         * @exports CMsgZoomToFocusedElement
         * @classdesc Represents a CMsgZoomToFocusedElement.
         * @implements ICMsgZoomToFocusedElement
         * @constructor
         * @param {ICMsgZoomToFocusedElement=} [properties] Properties to set
         */
        function CMsgZoomToFocusedElement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgZoomToFocusedElement browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgZoomToFocusedElement
         * @instance
         */
        CMsgZoomToFocusedElement.prototype.browser_handle = 0;
    
        /**
         * CMsgZoomToFocusedElement leftoffset.
         * @member {number} leftoffset
         * @memberof CMsgZoomToFocusedElement
         * @instance
         */
        CMsgZoomToFocusedElement.prototype.leftoffset = 0;
    
        /**
         * CMsgZoomToFocusedElement topoffset.
         * @member {number} topoffset
         * @memberof CMsgZoomToFocusedElement
         * @instance
         */
        CMsgZoomToFocusedElement.prototype.topoffset = 0;
    
        /**
         * Creates a new CMsgZoomToFocusedElement instance using the specified properties.
         * @function create
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {ICMsgZoomToFocusedElement=} [properties] Properties to set
         * @returns {CMsgZoomToFocusedElement} CMsgZoomToFocusedElement instance
         */
        CMsgZoomToFocusedElement.create = function create(properties) {
            return new CMsgZoomToFocusedElement(properties);
        };
    
        /**
         * Encodes the specified CMsgZoomToFocusedElement message. Does not implicitly {@link CMsgZoomToFocusedElement.verify|verify} messages.
         * @function encode
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {ICMsgZoomToFocusedElement} message CMsgZoomToFocusedElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgZoomToFocusedElement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.leftoffset != null && Object.hasOwnProperty.call(message, "leftoffset"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.leftoffset);
            if (message.topoffset != null && Object.hasOwnProperty.call(message, "topoffset"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.topoffset);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgZoomToFocusedElement message, length delimited. Does not implicitly {@link CMsgZoomToFocusedElement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {ICMsgZoomToFocusedElement} message CMsgZoomToFocusedElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgZoomToFocusedElement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgZoomToFocusedElement message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgZoomToFocusedElement} CMsgZoomToFocusedElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgZoomToFocusedElement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgZoomToFocusedElement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.leftoffset = reader.uint32();
                    break;
                case 3:
                    message.topoffset = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgZoomToFocusedElement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgZoomToFocusedElement} CMsgZoomToFocusedElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgZoomToFocusedElement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgZoomToFocusedElement message.
         * @function verify
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgZoomToFocusedElement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.leftoffset != null && message.hasOwnProperty("leftoffset"))
                if (!$util.isInteger(message.leftoffset))
                    return "leftoffset: integer expected";
            if (message.topoffset != null && message.hasOwnProperty("topoffset"))
                if (!$util.isInteger(message.topoffset))
                    return "topoffset: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgZoomToFocusedElement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgZoomToFocusedElement} CMsgZoomToFocusedElement
         */
        CMsgZoomToFocusedElement.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgZoomToFocusedElement)
                return object;
            var message = new $root.CMsgZoomToFocusedElement();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.leftoffset != null)
                message.leftoffset = object.leftoffset >>> 0;
            if (object.topoffset != null)
                message.topoffset = object.topoffset >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgZoomToFocusedElement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgZoomToFocusedElement
         * @static
         * @param {CMsgZoomToFocusedElement} message CMsgZoomToFocusedElement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgZoomToFocusedElement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.leftoffset = 0;
                object.topoffset = 0;
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.leftoffset != null && message.hasOwnProperty("leftoffset"))
                object.leftoffset = message.leftoffset;
            if (message.topoffset != null && message.hasOwnProperty("topoffset"))
                object.topoffset = message.topoffset;
            return object;
        };
    
        /**
         * Converts this CMsgZoomToFocusedElement to JSON.
         * @function toJSON
         * @memberof CMsgZoomToFocusedElement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgZoomToFocusedElement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgZoomToFocusedElement;
    })();
    
    $root.CMsgCloseFullScreenFlashIfOpen = (function() {
    
        /**
         * Properties of a CMsgCloseFullScreenFlashIfOpen.
         * @exports ICMsgCloseFullScreenFlashIfOpen
         * @interface ICMsgCloseFullScreenFlashIfOpen
         * @property {number|null} [browser_handle] CMsgCloseFullScreenFlashIfOpen browser_handle
         */
    
        /**
         * Constructs a new CMsgCloseFullScreenFlashIfOpen.
         * @exports CMsgCloseFullScreenFlashIfOpen
         * @classdesc Represents a CMsgCloseFullScreenFlashIfOpen.
         * @implements ICMsgCloseFullScreenFlashIfOpen
         * @constructor
         * @param {ICMsgCloseFullScreenFlashIfOpen=} [properties] Properties to set
         */
        function CMsgCloseFullScreenFlashIfOpen(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgCloseFullScreenFlashIfOpen browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @instance
         */
        CMsgCloseFullScreenFlashIfOpen.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgCloseFullScreenFlashIfOpen instance using the specified properties.
         * @function create
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {ICMsgCloseFullScreenFlashIfOpen=} [properties] Properties to set
         * @returns {CMsgCloseFullScreenFlashIfOpen} CMsgCloseFullScreenFlashIfOpen instance
         */
        CMsgCloseFullScreenFlashIfOpen.create = function create(properties) {
            return new CMsgCloseFullScreenFlashIfOpen(properties);
        };
    
        /**
         * Encodes the specified CMsgCloseFullScreenFlashIfOpen message. Does not implicitly {@link CMsgCloseFullScreenFlashIfOpen.verify|verify} messages.
         * @function encode
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {ICMsgCloseFullScreenFlashIfOpen} message CMsgCloseFullScreenFlashIfOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCloseFullScreenFlashIfOpen.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgCloseFullScreenFlashIfOpen message, length delimited. Does not implicitly {@link CMsgCloseFullScreenFlashIfOpen.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {ICMsgCloseFullScreenFlashIfOpen} message CMsgCloseFullScreenFlashIfOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCloseFullScreenFlashIfOpen.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgCloseFullScreenFlashIfOpen message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgCloseFullScreenFlashIfOpen} CMsgCloseFullScreenFlashIfOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCloseFullScreenFlashIfOpen.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgCloseFullScreenFlashIfOpen();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgCloseFullScreenFlashIfOpen message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgCloseFullScreenFlashIfOpen} CMsgCloseFullScreenFlashIfOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCloseFullScreenFlashIfOpen.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgCloseFullScreenFlashIfOpen message.
         * @function verify
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgCloseFullScreenFlashIfOpen.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgCloseFullScreenFlashIfOpen message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgCloseFullScreenFlashIfOpen} CMsgCloseFullScreenFlashIfOpen
         */
        CMsgCloseFullScreenFlashIfOpen.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgCloseFullScreenFlashIfOpen)
                return object;
            var message = new $root.CMsgCloseFullScreenFlashIfOpen();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgCloseFullScreenFlashIfOpen message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @static
         * @param {CMsgCloseFullScreenFlashIfOpen} message CMsgCloseFullScreenFlashIfOpen
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgCloseFullScreenFlashIfOpen.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgCloseFullScreenFlashIfOpen to JSON.
         * @function toJSON
         * @memberof CMsgCloseFullScreenFlashIfOpen
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgCloseFullScreenFlashIfOpen.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgCloseFullScreenFlashIfOpen;
    })();
    
    $root.CMsgPauseFullScreenFlashMovieIfOpen = (function() {
    
        /**
         * Properties of a CMsgPauseFullScreenFlashMovieIfOpen.
         * @exports ICMsgPauseFullScreenFlashMovieIfOpen
         * @interface ICMsgPauseFullScreenFlashMovieIfOpen
         * @property {number|null} [browser_handle] CMsgPauseFullScreenFlashMovieIfOpen browser_handle
         */
    
        /**
         * Constructs a new CMsgPauseFullScreenFlashMovieIfOpen.
         * @exports CMsgPauseFullScreenFlashMovieIfOpen
         * @classdesc Represents a CMsgPauseFullScreenFlashMovieIfOpen.
         * @implements ICMsgPauseFullScreenFlashMovieIfOpen
         * @constructor
         * @param {ICMsgPauseFullScreenFlashMovieIfOpen=} [properties] Properties to set
         */
        function CMsgPauseFullScreenFlashMovieIfOpen(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPauseFullScreenFlashMovieIfOpen browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @instance
         */
        CMsgPauseFullScreenFlashMovieIfOpen.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgPauseFullScreenFlashMovieIfOpen instance using the specified properties.
         * @function create
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {ICMsgPauseFullScreenFlashMovieIfOpen=} [properties] Properties to set
         * @returns {CMsgPauseFullScreenFlashMovieIfOpen} CMsgPauseFullScreenFlashMovieIfOpen instance
         */
        CMsgPauseFullScreenFlashMovieIfOpen.create = function create(properties) {
            return new CMsgPauseFullScreenFlashMovieIfOpen(properties);
        };
    
        /**
         * Encodes the specified CMsgPauseFullScreenFlashMovieIfOpen message. Does not implicitly {@link CMsgPauseFullScreenFlashMovieIfOpen.verify|verify} messages.
         * @function encode
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {ICMsgPauseFullScreenFlashMovieIfOpen} message CMsgPauseFullScreenFlashMovieIfOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPauseFullScreenFlashMovieIfOpen.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPauseFullScreenFlashMovieIfOpen message, length delimited. Does not implicitly {@link CMsgPauseFullScreenFlashMovieIfOpen.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {ICMsgPauseFullScreenFlashMovieIfOpen} message CMsgPauseFullScreenFlashMovieIfOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPauseFullScreenFlashMovieIfOpen.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPauseFullScreenFlashMovieIfOpen message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPauseFullScreenFlashMovieIfOpen} CMsgPauseFullScreenFlashMovieIfOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPauseFullScreenFlashMovieIfOpen.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPauseFullScreenFlashMovieIfOpen();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgPauseFullScreenFlashMovieIfOpen message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPauseFullScreenFlashMovieIfOpen} CMsgPauseFullScreenFlashMovieIfOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPauseFullScreenFlashMovieIfOpen.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPauseFullScreenFlashMovieIfOpen message.
         * @function verify
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPauseFullScreenFlashMovieIfOpen.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgPauseFullScreenFlashMovieIfOpen message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPauseFullScreenFlashMovieIfOpen} CMsgPauseFullScreenFlashMovieIfOpen
         */
        CMsgPauseFullScreenFlashMovieIfOpen.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPauseFullScreenFlashMovieIfOpen)
                return object;
            var message = new $root.CMsgPauseFullScreenFlashMovieIfOpen();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPauseFullScreenFlashMovieIfOpen message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @static
         * @param {CMsgPauseFullScreenFlashMovieIfOpen} message CMsgPauseFullScreenFlashMovieIfOpen
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPauseFullScreenFlashMovieIfOpen.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgPauseFullScreenFlashMovieIfOpen to JSON.
         * @function toJSON
         * @memberof CMsgPauseFullScreenFlashMovieIfOpen
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPauseFullScreenFlashMovieIfOpen.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgPauseFullScreenFlashMovieIfOpen;
    })();
    
    $root.CMsgFocusedNodeText = (function() {
    
        /**
         * Properties of a CMsgFocusedNodeText.
         * @exports ICMsgFocusedNodeText
         * @interface ICMsgFocusedNodeText
         * @property {number|null} [browser_handle] CMsgFocusedNodeText browser_handle
         */
    
        /**
         * Constructs a new CMsgFocusedNodeText.
         * @exports CMsgFocusedNodeText
         * @classdesc Represents a CMsgFocusedNodeText.
         * @implements ICMsgFocusedNodeText
         * @constructor
         * @param {ICMsgFocusedNodeText=} [properties] Properties to set
         */
        function CMsgFocusedNodeText(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFocusedNodeText browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgFocusedNodeText
         * @instance
         */
        CMsgFocusedNodeText.prototype.browser_handle = 0;
    
        /**
         * Creates a new CMsgFocusedNodeText instance using the specified properties.
         * @function create
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {ICMsgFocusedNodeText=} [properties] Properties to set
         * @returns {CMsgFocusedNodeText} CMsgFocusedNodeText instance
         */
        CMsgFocusedNodeText.create = function create(properties) {
            return new CMsgFocusedNodeText(properties);
        };
    
        /**
         * Encodes the specified CMsgFocusedNodeText message. Does not implicitly {@link CMsgFocusedNodeText.verify|verify} messages.
         * @function encode
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {ICMsgFocusedNodeText} message CMsgFocusedNodeText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFocusedNodeText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFocusedNodeText message, length delimited. Does not implicitly {@link CMsgFocusedNodeText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {ICMsgFocusedNodeText} message CMsgFocusedNodeText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFocusedNodeText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFocusedNodeText message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFocusedNodeText} CMsgFocusedNodeText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFocusedNodeText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFocusedNodeText();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFocusedNodeText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFocusedNodeText} CMsgFocusedNodeText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFocusedNodeText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFocusedNodeText message.
         * @function verify
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFocusedNodeText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgFocusedNodeText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFocusedNodeText} CMsgFocusedNodeText
         */
        CMsgFocusedNodeText.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFocusedNodeText)
                return object;
            var message = new $root.CMsgFocusedNodeText();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFocusedNodeText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFocusedNodeText
         * @static
         * @param {CMsgFocusedNodeText} message CMsgFocusedNodeText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFocusedNodeText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.browser_handle = 0;
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            return object;
        };
    
        /**
         * Converts this CMsgFocusedNodeText to JSON.
         * @function toJSON
         * @memberof CMsgFocusedNodeText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFocusedNodeText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgFocusedNodeText;
    })();
    
    $root.CMsgFocusedNodeTextResponse = (function() {
    
        /**
         * Properties of a CMsgFocusedNodeTextResponse.
         * @exports ICMsgFocusedNodeTextResponse
         * @interface ICMsgFocusedNodeTextResponse
         * @property {number|null} [browser_handle] CMsgFocusedNodeTextResponse browser_handle
         * @property {string|null} [value] CMsgFocusedNodeTextResponse value
         */
    
        /**
         * Constructs a new CMsgFocusedNodeTextResponse.
         * @exports CMsgFocusedNodeTextResponse
         * @classdesc Represents a CMsgFocusedNodeTextResponse.
         * @implements ICMsgFocusedNodeTextResponse
         * @constructor
         * @param {ICMsgFocusedNodeTextResponse=} [properties] Properties to set
         */
        function CMsgFocusedNodeTextResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFocusedNodeTextResponse browser_handle.
         * @member {number} browser_handle
         * @memberof CMsgFocusedNodeTextResponse
         * @instance
         */
        CMsgFocusedNodeTextResponse.prototype.browser_handle = 0;
    
        /**
         * CMsgFocusedNodeTextResponse value.
         * @member {string} value
         * @memberof CMsgFocusedNodeTextResponse
         * @instance
         */
        CMsgFocusedNodeTextResponse.prototype.value = "";
    
        /**
         * Creates a new CMsgFocusedNodeTextResponse instance using the specified properties.
         * @function create
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {ICMsgFocusedNodeTextResponse=} [properties] Properties to set
         * @returns {CMsgFocusedNodeTextResponse} CMsgFocusedNodeTextResponse instance
         */
        CMsgFocusedNodeTextResponse.create = function create(properties) {
            return new CMsgFocusedNodeTextResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgFocusedNodeTextResponse message. Does not implicitly {@link CMsgFocusedNodeTextResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {ICMsgFocusedNodeTextResponse} message CMsgFocusedNodeTextResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFocusedNodeTextResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser_handle != null && Object.hasOwnProperty.call(message, "browser_handle"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.browser_handle);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFocusedNodeTextResponse message, length delimited. Does not implicitly {@link CMsgFocusedNodeTextResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {ICMsgFocusedNodeTextResponse} message CMsgFocusedNodeTextResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFocusedNodeTextResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFocusedNodeTextResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFocusedNodeTextResponse} CMsgFocusedNodeTextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFocusedNodeTextResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFocusedNodeTextResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser_handle = reader.uint32();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFocusedNodeTextResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFocusedNodeTextResponse} CMsgFocusedNodeTextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFocusedNodeTextResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFocusedNodeTextResponse message.
         * @function verify
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFocusedNodeTextResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                if (!$util.isInteger(message.browser_handle))
                    return "browser_handle: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgFocusedNodeTextResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFocusedNodeTextResponse} CMsgFocusedNodeTextResponse
         */
        CMsgFocusedNodeTextResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFocusedNodeTextResponse)
                return object;
            var message = new $root.CMsgFocusedNodeTextResponse();
            if (object.browser_handle != null)
                message.browser_handle = object.browser_handle >>> 0;
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFocusedNodeTextResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFocusedNodeTextResponse
         * @static
         * @param {CMsgFocusedNodeTextResponse} message CMsgFocusedNodeTextResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFocusedNodeTextResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser_handle = 0;
                object.value = "";
            }
            if (message.browser_handle != null && message.hasOwnProperty("browser_handle"))
                object.browser_handle = message.browser_handle;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
    
        /**
         * Converts this CMsgFocusedNodeTextResponse to JSON.
         * @function toJSON
         * @memberof CMsgFocusedNodeTextResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFocusedNodeTextResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgFocusedNodeTextResponse;
    })();

    return $root;
});
