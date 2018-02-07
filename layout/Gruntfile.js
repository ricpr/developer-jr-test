module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			main: {
				expand: true,
				cwd: 'src',
				src: '*.html',
				dest: 'htdocs/'
			},
			media: {
				expand: true,
				cwd: 'src/assets/media',
				src: '*.*',
				dest: 'htdocs/assets/media/'
			},
			css: {
				expand: true,
				cwd: 'src/assets/style',
				src: '**/*.css',
				dest: 'htdocs/assets/style/'
			},
			script: {
				expand: true,
				cwd: 'src/assets/script',
				src: '**/*.*',
				dest: 'htdocs/assets/script/'
			},
			fonts: {
				expand: true,
				cwd: 'src/assets/fonts',
				src: '*.*',
				dest: 'htdocs/assets/fonts/'
			},
			template: {
				expand: true,
				cwd: 'src/assets/template',
				src: '*.*',
				dest: 'htdocs/assets/template/'
			}
		},
		less: {
			build: {
				files: [
					{
						src: 'src/assets/style/main.less',
						dest: 'htdocs/assets/style/main.css'
					},
					{
						src: 'src/assets/style/home.less',
						dest: 'htdocs/assets/style/home.css'
					},
					{
						src: 'src/assets/style/horoscope.less',
						dest: 'htdocs/assets/style/horoscope.css'
					},
					{
						src: 'src/assets/style/weather.less',
						dest: 'htdocs/assets/style/weather.css'
					},
					{
						src: 'src/assets/style/schedule.less',
						dest: 'htdocs/assets/style/schedule.css'
					},
					{
						src: 'src/assets/style/content.less',
						dest: 'htdocs/assets/style/content.css'
					},
					{
						src: 'src/assets/style/programs.less',
						dest: 'htdocs/assets/style/programs.css'
					},
					{
						src: 'src/assets/style/promotions.less',
						dest: 'htdocs/assets/style/promotions.css'
					}
				]
			}
		},
		cssmin: {
			build: {
				files: [
					{
						src: 'htdocs/assets/style/main.css',
						dest: 'htdocs/assets/style/main.css'
					},
					{
						src: 'htdocs/assets/style/home.css',
						dest: 'htdocs/assets/style/home.css'
					}
				]
				
			}
		},
		includes: {
			build: {
				cwd: 'src',
				src: '*.html',
				dest: 'htdocs/',
				options: {
					flatten: true,
					includePath: 'src/include',
					banner: ''
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-includes');

	grunt.registerTask('build', ['copy', 'includes', 'less', 'cssmin']);
	grunt.registerTask('default', ['build']);
};