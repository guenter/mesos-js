'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        paths: require('./paths')
    });

    grunt.file.expand('grunt/*.js').forEach(function (task) {
        require('./' + task)(grunt);
    });

    grunt.registerTask('default', [
        'jshint',
        'copy'
    ]);

};