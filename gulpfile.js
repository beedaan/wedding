'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var del = require('del');

gulp.task('clean', function () {
    return del(['public/dist'])
});

gulp.task('scripts', function () {
    return gulp.src('public/javascripts/*.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('critical-plugins', function () {
    return gulp.src([
            'public/components/angular-animate/angular-animate.min.js',
            'public/components/angular-strap/dist/angular-strap.min.js'],
        {base: 'public/components'})
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('critical-plugins.min.js'))
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('uncritical-plugins', function () {
    return gulp.src([
            'public/components/angular-strap/dist/angular-strap.tpl.js',
            'public/components/angular-scroll/angular-scroll.js',
            'public/components/blueimp-gallery/js/blueimp-gallery.js'],
        {base: 'public/components'})
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('uncritical-plugins.min.js'))
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('default', ['clean', 'scripts', 'critical-plugins', 'uncritical-plugins']);
