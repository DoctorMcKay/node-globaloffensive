var Protobuf = require('protobufjs');

var builder = Protobuf.newBuilder({"convertFieldsToCamelCase": true});
Protobuf.loadProtoFile(__dirname + '/protos/base_gcmessages.proto', builder);
Protobuf.loadProtoFile(__dirname + '/protos/gcsdk_gcmessages.proto', builder);
Protobuf.loadProtoFile(__dirname + '/protos/cstrike15_gcmessages.proto', builder);

module.exports = builder.build();