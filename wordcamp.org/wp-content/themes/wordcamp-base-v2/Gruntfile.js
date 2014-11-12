/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>',

		sass: {
			dist : {
				options : {
					require : [
						'bourbon',
						'neat',
						'sass-globbing'
					]
				},
				files : [{
					expand : true,
					flatten : true,
					cwd : 'scss',
					src : ['**/*.scss', '!**/_*.scss'],
					dest : './',
					ext : '.css'
				}]
			}
		},

		cssmin : {
			dist : {
				files : {
					'style.min.css' : [ 'style.css' ],
				}
			}
		},

		watch: {
			dist : {
				files: [ 'scss/**/*.scss' ],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', [ 'sass' ]);
	grunt.registerTask('build', [ 'default','cssmin' ]);
};
