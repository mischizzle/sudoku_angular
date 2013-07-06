module.exports = function (grunt) {

  /*
      Grunt installation:
      -------------------
          npm install -g grunt-cli
          npm install -g grunt-init
          npm init (creates a `package.json` file)

      Project Dependencies:
      ---------------------
          npm install grunt --save-dev
          npm install grunt-contrib-watch --save-dev
          npm install grunt-contrib-jshint --save-dev
          npm install grunt-contrib-sass --save-dev
          */

  // Project configuration.
  grunt.initConfig({

      // Store your Package file so you can reference its specific data whenever necessary
      pkg: grunt.file.readJSON('package.json'),

      sass: {
        dev: {
          options: {
            style: 'expanded'
          },
          src: ['./app/assets/styles/sass/app.scss'],
          dest: './app/assets/styles/css/app.css'
        }
      },

      karma: {
        unit: {
          configFile: 'config/karma.conf.js',
          autoWatch: true
        }
      },

      // Run: `grunt watch` from command line for this section to take effect
      watch: {
        //files: ['<%= jshint.files %>', '<%= sass.dev.src %>'],
        files: ['<%= sass.dev.src %>', '<%= karma.unit.configFile %>'],
        tasks: 'default'
      }
    });

  // Load NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-karma');

  // Default Task
  grunt.registerTask('default', ['sass:dev']);

  // Unit Testing Task
  //grunt.registerTask('test', ['connect', 'jasmine']);

  // Release Task
  //grunt.registerTask('release', ['jshint', 'sass:dist']);

};