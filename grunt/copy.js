(function () {
  'use strict';

  module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.config.set('copy', {
      src: {
        files: [{
          expand: true,
          cwd: '<%= paths.src %>/',
          src: [
            '**/*',
            '**/*.min.js'
          ],
          dest: '<%= paths.dist %>/'
        }]
      }
    });
    return grunt;
  };
}());
