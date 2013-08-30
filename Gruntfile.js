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
        src: ['galaxy_bootstrap.less'],
        dest: 'dist/galaxy_bootstrap.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['galaxy_bootstrap.less'],
        dest: 'dist/galaxy_bootstrap.min.css'
      }
    },
    jekyll: {
      example: {
        pygments: "true",
        src: "example",
        dest: "dist"
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task.
  grunt.registerTask('default', ['jekyll','recess']);

};
