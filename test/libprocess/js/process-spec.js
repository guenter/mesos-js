(function () {
  'use strict';

  var assert = require("assert");
  var should = require('should');
  var process = require("../../../src/libprocess/js/process.js");

  describe('process', function() {
    it('should import as a non-empty object', function() {
      var lib = process;
      assert(typeof lib === "object");
      lib.should.not.equal({});
    });
  });

  describe('Process', function() {
    it('should instantiate', function() {
      var p = new process.Process();
    });
  });

}());
