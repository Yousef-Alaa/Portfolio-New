let gulp = require('gulp'),
		prefix = require('gulp-autoprefixer'),
		pug = require('gulp-pug-3'),
		sass = require('gulp-sass'),
		connect = require('gulp-connect'),
		srcmaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify'),
		imagemin = require('gulp-image');


// Image Task
gulp.task('image', function () {
	gulp.src('project/images/**/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'));
});

// Pug Task
gulp.task('pug', function () {
	return gulp.src('project/pug/index.pug')
					.pipe(pug())
				.pipe(gulp.dest('dist'))
					.pipe(connect.reload());
});

// Sass Task
gulp.task('css', function () {
	return gulp.src('project/sass/style.scss')
					.pipe(srcmaps.init())
					.pipe(sass({outputStyle: 'compressed'}))
					.pipe(prefix('last 2 versions'))
					.pipe(srcmaps.write('.'))
				.pipe(gulp.dest('dist/css'))
					.pipe(connect.reload());
});

// Js Task
gulp.task('js', function () {
	return gulp.src('project/script.js')
						.pipe(uglify())
			.pipe(gulp.dest('dist/js'))
						.pipe(connect.reload());
});

// Watch Task
gulp.task('watch', function () {

	connect.server({ root: 'dist', livereload: true, port: 8000 });
	gulp.watch('project/pug/**/*.pug', gulp.series('pug'));
	gulp.watch('project/sass/style.scss', gulp.series('css'));
	gulp.watch('project/script.js', gulp.series('js'));

});
