"use strict";

var express = require("express");
var app = express();

var gulp = require("gulp");
require("./gulpfile");

gulp.start("config");

app.use(express.static("app"));

app.listen(3000);

console.log("Listening on port 3000")
