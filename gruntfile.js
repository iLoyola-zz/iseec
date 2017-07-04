'use strict'

module.exports = function( grunt ) {

  grunt.initConfig({
    express: {
      server: {
        options: {
          script: './server/server.js',
          delay: 1
        }
      }
    },
    watch: {
      development: {
        files: [ './dev/css/**/*' ],
        task: [ 'compass' ],
        express: {
          files: [ '**/*.js' ],
          tasks: [ 'express:server' ],
          options: {
            spawn: false
          }
        }
      }
    },
    compass: {
      options: {
        sassDir: './dev/css/',
        cssDir: './temp/css/'
      },
      development: {
        options: {
          outputStyle: 'expanded'
        }
      }
    },
    copy: {
      toTemp: {
        files: [
          {
            expand: true,
            cwd: './dev/js/',
            src: [ '*.js' ],
            dest: './temp/js/'
          }
        ]
      },
      fromTemp: {
        files: [
          {
            expand: true,
            cwd: './temp/css/',
            src: [ '**' ],
            dest: './assets/css/'
          }
        ]
      }
    },
    cssmin: {
      target: {
        files: {
          './assets/css/exports/default.css': ['./assets/css/exports/default.css']
        }
      }
    },
    clean: [
      './temp'
    ]
  });

  grunt.registerTask( 'start', 'Spins up server and watch for css changes', [
      'copy:toTemp',
      'compass:development',
      'copy:fromTemp',
      'clean',
      'express:server',
      'cssmin',
      'watch:development'
    ]);

  return require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );
}