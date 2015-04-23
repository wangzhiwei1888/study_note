
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.initConfig({
	  
	  less: {
		  development: {
		    
		    files: {
		      "dest/index.css": "css/index.less"
		    }
		  }
		}
	})

	grunt.registerTask('less01',['less:development']);

}
