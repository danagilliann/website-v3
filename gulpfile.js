"use strict";

var gulp = require("gulp");
var gulpNgConfig = require("gulp-ng-config");
var server = require("gulp-server-livereload");

gulp.task("config", function() {
    gulp.src("config.json")
        .pipe(gulpNgConfig("myApp.config"))
        .pipe(gulp.dest("."));
});

gulp.task("serve", function() {
    gulp.src("./app")
        .pipe(server({
            livereload: true,
            open: true,
            defaultFile: "index.html",
            directoryListing: false
        }));
});
