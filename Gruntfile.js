module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      connect: {
        server: {
          options: {
            port: 8000,
            hostname: '0.0.0.0',
            livereload: 35729
          }
        }
      },
      watch: {
        options: {
          livereload: 35729
        },
        files: ['**'],
        tasks: []
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("server", ["connect", "watch"]);


  };