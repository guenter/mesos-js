(function () {
  'use strict';

  module.exports = function (grunt) {

    /**
     * Calls proto2js on all .proto files in src proto dir
     */
    grunt.registerTask('gen-protobuf', function () {
      var fs = require('fs');
      var mkdirp = require('mkdirp');
      var path = require('path');
      var readdir = require('readdir');
      var paths = grunt.config.data.paths;
      var files = readdir.readSync(paths.srcProto, ['**.proto']);

      files.forEach(function (file) {
        var p = paths.destProto + '/' + path.dirname(file);

        if (!fs.existsSync(p)) {
            mkdirp.sync(p);
        }

        grunt.task.run('exec:gen_protobuf:' + file);
      });
    });

    return grunt;
  };
}());
