"use strict";
let gulp = require("gulp");
let plumber = require("gulp-plumber");
let flatten = require("gulp-flatten");
let size = require("gulp-size");
let fs = require("fs");

gulp.task("build", ["build:font:bower", "build:icons"]);

gulp.task("build:font:bower", function () {
  let bowerDir = JSON.parse(fs.readFileSync(`${process.cwd()}/.bowerrc`)).directory;
  return gulp.src([
    `${bowerDir}/font-awesome/fonts/**/*`,
  ])
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest("server/public/fonts/"))
    .pipe(size({
      showFiles : true,
      title     : "fonts",
    }));
});

gulp.task("build:icons", function () {
  if (fs.existsSync(`${process.cwd()}/.bowerrc`)) {
    let bowerDir = JSON.parse(fs.readFileSync(`${process.cwd()}/.bowerrc`)).directory;
    return gulp.src([
      `${bowerDir}/devicon/icons/**/*`,
    ])
      .pipe(plumber())
      .pipe(gulp.dest("server/public/images/icons/"))
      .pipe(size({
        showFiles : true,
        title     : "icons",
      }));
  }
});

gulp.task("default", ["build"]);
