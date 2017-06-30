// module.exports = function(grunt) {
//
// 	// Project configuration.
// 	grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json'),
// 		//serve
// 		serve: {
// 			options: {
// 				port: 9000
// 			}
// 		},
// 		//less
// 		less: {
// 			product: {
// 				options: {
// 					paths: ['css'],
// 					compress:true
// 				},
// 				files: {
// 					'css/style.css': 'less/import.less'
// 				}
// 			},
// 			dev: {
// 				options: {
// 					paths: ['css'],
// 					dumpLineNumbers:"comments"
// 				},
// 				files: {
// 					'ss/style.dev.css': 'less/import.less'
// 				}
// 			}
// 		},
// //grunt-includes: html 환경에서 인크루드를 쓸수있게 해줌.
// 		includes: {
// 				 dist:{
// 						 cwd:'html/',
// 						 src:['**/*.html'],
// 						 dest:'dist/views',
// 						 options:{
// 								 flatten:true,
// 								 includePath:'html/includes/'
// 						 }
// 				 }
// 		 },
// 		//watch
// 		watch: {
// 		  scripts: {
// 		    files: ['less/*.less'],
// 		    tasks: ['less'],
// 		    options: {
// 		      spawn: false,
// 		    },
// 		  },
// 		}
//
// });
//
//
//
// // Load the plugin that provides the "uglify" task.
// grunt.loadNpmTasks('grunt-serve');
// grunt.loadNpmTasks('grunt-contrib-less');
// grunt.loadNpmTasks('grunt-contrib-watch');
// grunt.loadNpmTasks('grunt-includes');
// // Default task(s).
// grunt.registerTask('default', ['serve']);
//
// };
