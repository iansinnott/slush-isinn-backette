'use strict';

var gulp       = require('gulp'),
    browserify = require('browserify'),
    jadeify    = require('jadeify'),
    nameBundle = require('vinyl-source-stream'),
    plumber    = require('gulp-plumber'),
    debug      = require('debug')('gulp:browserify');

var config = require('../../config');

/**
 * Build the js for the app and buldle it into one neat file.
 */
module.exports = function() {
  debug('Building browser bundle');
  browserify(process.cwd() + '/' + config.paths.jsMain)
    .transform(jadeify)
    .bundle()
    .pipe(plumber())
    .pipe(nameBundle('app.js'))
    .pipe(gulp.dest(config.paths.dest));
};
