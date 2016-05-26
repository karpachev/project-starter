module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
		  development: {
		    options: {
		      paths: ['public/css']
		    },
		    files: {
		      'public/css/main.css': 'public/css/main.less'
		    }
		  }
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  development: {
		    files: {
		      'public/css/main.min.css': ['public/css/main.css']
		    }
		  }
		}		
	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['less', 'cssmin']);
}
