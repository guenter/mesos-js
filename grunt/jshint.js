(function () {
  'use strict';

  module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.config.set('jshint', {
      build: {
        src: [
          'Gruntfile.js',
          'grunt/**/*.js'
        ]
      },
      src: {
        src: [
          '<%= paths.src %>/**/*.js'
        ]
      }
    });

    return grunt;
  };
}());
