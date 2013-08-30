/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    recess: {
      options: {
        compile: true
      },
      bootstrap: {
        src: ['index.less'],
        dest: 'index.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['index.less'],
        dest: 'index.min.css'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-recess');

  // Default task.
  grunt.registerTask('default', ['recess']);

};