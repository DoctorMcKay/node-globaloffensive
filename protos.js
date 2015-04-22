var fs = require('fs');
var Protobuf = require('protobufjs');

Protobuf.convertFieldsToCamelCase = true;

var builder = Protobuf.newBuilder();
Protobuf.loadProtoFile(__dirname + '/protos/base_gcmessages.proto', builder);
Protobuf.loadProtoFile(__dirname + '/protos/gcsdk_gcmessages.proto', builder);
Protobuf.loadProtoFile(__dirname + '/protos/cstrike15_gcmessages.proto', builder);

module.exports = builder.build();