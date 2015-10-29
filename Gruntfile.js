module.exports = function(grunt) {

  grunt.initConfig({
      template: {
        dist: {
          options: {
            data: {
              data: grunt.file.readJSON('src/config.json')
            }
          },
          files: {
            "tmp/index.html": "src/index.tpl.html",
          }
        }
      },
      str2js: {
        NS: { 'tmp/template.js': ['tmp/index.html', 'tmp/style.css']}
      },
      concat: {
          options: {
            separator: ';',
          },
          dist: {
            src: ['tmp/template.js', 'src/*.js'],
            dest: 'dist/fxux-banner.js',
          },
      },
      uglify: {
        options: {
          compress: true,
          report: 'min'
        },
        dist: {
          files: {
            'dist/fxux-banner.min.js': 'dist/fxux-banner.js'
          }
        }
      },
      dataUri: {
          dist: {
            // src file
            src: ['src/*.css'],
            // output dir
            dest: 'tmp/',
            options: {
              // specified files are only encoding
              target: ['src/*.png'],
              // adjust relative path?
              fixDirLevel: true
            }
          }
        }
  });

grunt.loadNpmTasks('grunt-data-uri');
grunt.loadNpmTasks('grunt-template-render');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-string-to-js');

grunt.registerTask('default', ['dataUri', 'template', 'str2js', 'concat', 'uglify']);

}