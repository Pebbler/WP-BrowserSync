var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
       proxy: {
           target: "http://dunepebbler.pebbler.be",
       },
       injectChanges: false,
    });
});

gulp.task('sass', function () {
    return gulp.src('styles/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("styles/*.scss", ['sass']);
    gulp.watch("*.php").on('change', bs.reload);
});