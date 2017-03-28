module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({

        uglify: {
            dist:{
                src:['jquery.countdown.js'],
                dest:'jquery.countdown.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};