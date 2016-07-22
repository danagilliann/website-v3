'use strict';

var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');

gulp.task('default', ['serve','sass','sass:watch'], function () {

});

gulp.task('sass', function () {
  return gulp.src('app/style/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/style/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/style/sass/*.sass', ['sass']);
});

gulp.task('serve', function () {

    gulp.src('./app')
        .pipe(server({
            livereload: false,
            open: true,
            defaultFile: 'index.html',
            directoryListing: false
        }));

});
