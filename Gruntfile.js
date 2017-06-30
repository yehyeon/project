module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//serve
		serve: {
			options: {
				port: 9000
			}
		},
		//less
		less: {
			product: {
				options: {
					paths: ['assets/css'],
					compress:true
				},
				files: {
					'assets/css/style.min.css': 'assets/less/import.less'
				}
			},
			dev: {
				options: {
					paths: ['assets/css'],
					dumpLineNumbers:"comments"
				},
				files: {
					'assets/css/style.dev.css': 'assets/less/import.less'
				}
			}
		},
//grunt-includes: html 환경에서 인크루드를 쓸수있게 해줌.
		includes: {
				 dist:{
						 cwd:'html/',
						 src:['**/*.html'],
						 dest:'dist/views',
						 options:{
								 flatten:true,
								 includePath:'html/includes/'
						 }
				 }
		 },
		//watch
		watch: {
		  scripts: {
		    files: ['assets/less/*.less'],
		    tasks: ['less'],
		    options: {
		      spawn: false,
		    },
		  },
		}

});



// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-includes');
// Default task(s).
grunt.registerTask('default', ['serve']);

};
