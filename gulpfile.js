var gulp = require ("gulp")
var sass = require ("gulp-sass")
var babel = require('gulp-babel');

gulp.task("css",function () {
	gulp.src("sass/main.scss")
	.pipe(sass())
	.pipe(gulp.dest("assets/css"))
})

gulp.task("watch", ["css","js"],function () {
	gulp.watch("sass/**/*.scss", ["css"] )
	gulp.watch("js/**/*.js", ["js"] )
} )


gulp.task('js', function () {
    return gulp.src('js/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('assets/js'));
});