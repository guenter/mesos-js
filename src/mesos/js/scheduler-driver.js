var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("../proto/mesos.proto"),
    mesos   = builder.build("mesos");

var frameworkInfo = new mesos.FrameworkInfo({
  "user": "",
  "name": "js-framework",
  "id": { "value": "js-framework" },
  "failover_timeout": 3600000.0,
  "checkpoint": true
});

var frameworkInfoBuf = frameworkInfo.encode();
