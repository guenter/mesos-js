(function () {
  'use strict';

  var eq     = require("deep-equal");
  var assert = require("assert");
  var fs     = require("fs");
  var pb     = require("protobufjs");
  var should = require('should');
  var _      = require("underscore");

  describe('The mesos.proto helpers', function() {

    var json = fs.readFileSync("src/mesos/js/generated/mesos/mesos.js", "utf8");
    var builder = pb.loadJson(json);
    var mesos = builder.build("mesos");


    it('should import as a non-empty object', function() {
      assert(mesos != null);
      assert(typeof mesos === "object");
      assert(mesos != {});
    });

    it('should (de)serialize mesos.Status', function() {
      assert(_.size(mesos.Status) == 4);
      assert(mesos.Status.DRIVER_RUNNING != mesos.Status.DRIVER_STOPPED);
    });

    it('should (de)serialize mesos.FrameworkID', function() {
      var p = new mesos.FrameworkID({"value": "hipster-js-framework"});
      assert(p.value === "hipster-js-framework");

      var p2 = mesos.FrameworkID.decode(p.encode());
      assert(eq(p, p2));
    });

/*
    it('should (de)serialize mesos.OfferID', function() {
      // TODO
    });

    it('should (de)serialize mesos.SlaveID', function() {
      // TODO
    });

    it('should (de)serialize mesos.TaskID', function() {
      // TODO
    });

    it('should (de)serialize mesos.ExecutorID', function() {
      // TODO
    });

    it('should (de)serialize mesos.ContainerID', function() {
      // TODO
    });
*/

    it('should (de)serialize mesos.FrameworkInfo', function() {
      var p = new mesos.FrameworkInfo({
        "user": "analytics",
        "name": "hipster-js-framework",
        "id": { "value": "hipster-js-framework" },
        "role": "*",
        "failover_timeout": 3600000.0,
        "checkpoint": true
      });
      assert(p.user === "analytics");
      assert(p.id.value === "hipster-js-framework");

      var p2 = mesos.FrameworkInfo.decode(p.encode());
      assert(eq(p, p2));
    });

/*
    it('should (de)serialize mesos.HealthCheck', function() {
      // TODO
    });

    it('should (de)serialize mesos.CommandInfo', function() {
      // TODO
    });

    it('should (de)serialize mesos.ExecutorInfo', function() {
      // TODO
    });

    it('should (de)serialize mesos.MasterInfo', function() {
      // TODO
    });

    it('should (de)serialize mesos.SlaveInfo', function() {
      // TODO
    });

    it('should (de)serialize mesos.Value', function() {
      // TODO
    });

    it('should (de)serialize mesos.Attributes', function() {
      // TODO
    });

    it('should (de)serialize mesos.Resource', function() {
      // TODO
    });

    it('should (de)serialize mesos.ResourceStatistics', function() {
      // TODO
    });

    it('should (de)serialize mesos.ResourceUsage', function() {
      // TODO
    });

    it('should (de)serialize mesos.PerfStatistics', function() {
      // TODO
    });

    it('should (de)serialize mesos.Request', function() {
      // TODO
    });

    it('should (de)serialize mesos.Offer', function() {
      // TODO
    });

    it('should (de)serialize mesos.TaskInfo', function() {
      // TODO
    });

    it('should (de)serialize mesos.TaskStatus', function() {
      // TODO
    });

    it('should (de)serialize mesos.Filters', function() {
      // TODO
    });

    it('should (de)serialize mesos.Environment', function() {
      // TODO
    });

    it('should (de)serialize mesos.Parameter', function() {
      // TODO
    });

    it('should (de)serialize mesos.Parameters', function() {
      // TODO
    });

    it('should (de)serialize mesos.Credential', function() {
      // TODO
    });

    it('should (de)serialize mesos.Credentials', function() {
      // TODO
    });

    it('should (de)serialize mesos.ACL', function() {
      // TODO
    });

    it('should (de)serialize mesos.ACLs', function() {
      // TODO
    });

    it('should (de)serialize mesos.RateLimit', function() {
      // TODO
    });

    it('should (de)serialize mesos.FrameworkInfo', function() {
      // TODO
    });

    it('should (de)serialize mesos.RateLimits', function() {
      // TODO
    });

    it('should (de)serialize mesos.Volume', function() {
      // TODO
    });

    it('should (de)serialize mesos.ContainerInfo', function() {
      // TODO
    });
*/
  });

}());

