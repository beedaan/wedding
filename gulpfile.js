'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var del = require('del');

gulp.task('clean', function() {
   return del(['public/dist'])
});

gulp.task('scripts', ['clean'], function() {
   return gulp.src('./public/javascripts/*.js')
       .pipe(ngAnnotate())
       .pipe(uglify())
       .pipe(concat('all.min.js'))
       .pipe(gulp.dest('./public/dist/'));
});

gulp.task('default', ['scripts']);
