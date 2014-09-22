(function () {
  'use strict';

  module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
      paths: require('./paths'),
      mochaTest: {
        test: {
          options: {
            reporter: 'spec'
          },
          src: ['test/**/*.js']
        }
      }
    });

    grunt.file.expand('grunt/*.js').forEach(function (task) {
      require('./' + task)(grunt);
    });

    grunt.registerTask('test', [
      'jshint',
      'mochaTest'
    ]);

    grunt.registerTask('default', [
      'jshint',
      'copy'
    ]);

  };
}());
