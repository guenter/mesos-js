(function () {
  'use strict';

  // namespace pid
  var pid = pid || {};

  // Class pid.UPID.
  pid.UPID = function(id, ip, port) {
    this.id = id;
    this.ip = ip;
    this.port = port;
  };

  module.exports = pid;

}());
