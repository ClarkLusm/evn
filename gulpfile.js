'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  console.log('xxx');
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
};

gulp.task('watch', function () {
  return gulp.watch('./assets/sass/*.scss', gulp.series(buildStyles));
})