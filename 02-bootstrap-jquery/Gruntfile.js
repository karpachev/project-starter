module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			bootstrap: {
				expand: true,
				cwd: 'node_modules/bootstrap/dist/',
				src: './**',
				dest: 'static/boostrap/'
			},
			jquery: {
				expand: true,
				cwd: 'node_modules/jquery/dist/',
				src: './**',
				dest: 'static/jquery/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default', ['copy']);
}
