(function () {
  'use strict';

  module.exports = function (grunt) {
    var paths = grunt.config.data.paths;
    grunt.loadNpmTasks('grunt-exec');

    grunt.config.set('exec', {
      gen_protobuf: {
        command: function (file) {
          var generated = file.replace('.proto', '.js');
          var args = [
            'node_modules/protobufjs/bin/proto2js',
            paths.srcProto + '/' + file,
            '>',
            paths.destProto + '/' + generated
          ];

          return args.join(' ');
        }
      }
    });

    return grunt;
  };
}());
