'use strict';

/**
 * The Gulpfile
 *
 * The gulp task structure is based on:
 * http://viget.com/extend/gulp-browserify-starter-faq
 */

var gulp = require('./gulp');

gulp.task('build', ['browserify']);

/**
 * NOTE: The 'nodemon' and 'serve' tasks cannot be used at the same time
 * otherwise they will both try to serve simultaneously.
 */
gulp.task('default', ['nodemon', 'build', 'watch']);
