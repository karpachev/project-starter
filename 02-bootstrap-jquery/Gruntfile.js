module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
		  development: {
		    options: {
		      paths: ['public/css']
		    },
		    files: {
		      'public/css/main.css': 'public/css/main.less',
		      'public/css/main_include_body.css': 'public/css/main_include_body.less'
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
		      'public/css/main.min.css': ['public/css/main.css'],
		      'public/css/main_include_body.min.css': ['public/css/main_include_body.css']
		    }
		  }
		},
		watch: {
		  css: {
		    files: ['public/css/main.less','**.js'],
		    tasks: ['less','cssmin'],
		    options: {
		      spawn: false,
		      livereload: true
		    }
		  },
		  scripts: {
		    files: ['**.js'],
		    tasks: [],
		    options: {
		      spawn: false,
		      livereload: true
		    }
		  },	
	  	  ejs_templates: {
		    files: ['views/**/*.ejs'],
		    options: {
		      spawn: false,
		      livereload: true
		    }
		  },			  	  
		  configFiles: {
		    files: [ 'Gruntfile.js' ],
		    options: {
		      reload: true
		    }
		  }		  
		}	
	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', ['less', 'cssmin', 'watch']);
}
