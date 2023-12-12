module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            target: {
                files: [
                    {
                        src: './src/**/*.js',
                        dest: './build/main.js',
                    },
                ],
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
