'use strict';

var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
})
