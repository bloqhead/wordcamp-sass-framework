/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>',
	sass: {
		dist : {
			files : [ {
				expand : true,
				flatten : true,
				cwd : 'scss',
				src : ['**/*.scss', '!**/_*.scss'],
				dest : './',
				ext : '.css'
			} ]
		}
	},
    // Task configuration.
    watch: {
		dist : {
			files: [
				'scss/**/*.scss'
			],
			tasks: ['sass'],
			options: {
				livereload: true
			}
		}
    },

    cssmin : {
    	dist : {
    		files : {
    			'style.min.css' : [ 'style.css' ],
    		}
    	}
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('build', ['default','cssmin'])
};
