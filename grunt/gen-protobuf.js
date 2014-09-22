(function () {
  'use strict';

  module.exports = function (grunt) {

    /**
     * Calls proto2js on all .proto files in src proto dir
     */
    grunt.registerTask('gen-protobuf', function () {
      var readdir = require('readdir');
      var paths = grunt.config.data.paths;
      var files = readdir.readSync(paths.srcProto, ['**.proto']);

      files.forEach(function (file) {
        grunt.task.run('exec:gen_protobuf:' + file);
      });
    });

    return grunt;
  };
}());
