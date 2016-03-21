"use strict";
let gulp = require("gulp");
let plumber = require("gulp-plumber");
let flatten = require("gulp-flatten");
let size = require("gulp-size");
let fs = require("fs");
let mainBowerFiles = require("main-bower-files");

gulp.task("build", ["build:font:bower"]);

gulp.task("build:font:bower", function () {
  if(fs.existsSync(`${process.cwd()}/bower.json`)) {
    return gulp.src(mainBowerFiles({
      filter: /(eot|svg|ttf|woff|otf)$/,
    }))
      .pipe(plumber())
      .pipe(flatten())
      .pipe(gulp.dest("server/public/fonts/"))
      .pipe(size({
        showFiles : true,
        title     : "font",
      }));
  }
});

gulp.task("default", ["build"]);
