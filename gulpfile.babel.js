'use strict';

import gulp from 'gulp';
import gls from 'gulp-live-server';
import webpack from 'gulp-webpack';
import webpackConfig from './webpack.config.js';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import jasmine from 'gulp-jasmine';

gulp.task('default', function() {
  var server = gls.new('index.js');
  server.start();

  gulp.watch('index.js', server.start.bind(server));

  // Watch for CSS changes and notify the client when new things appear.
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/css/**/*.css', function(file) {
    console.log('fresh css changes detected');
    server.notify.apply(server, [file]);
  });

  gulp.watch('./public/index.js', function(file) {
    console.log('fresh js bundle!');
    server.notify.apply(server, [file]);
  })

  gulp.src('./client/js/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('public/'));

  gulp.watch('spec/**/*.js', ['test']);
});

gulp.task('test', () => {
  return gulp.src('spec/**/*.js').pipe(jasmine());
});

gulp.task('sass', () => {
  var bourbonPaths = require('bourbon').includePaths;
  var neatPaths = require('bourbon-neat').includePaths;
  var cssPaths = bourbonPaths.concat(neatPaths);

  console.log('Compiling SASS.');

  return gulp.src('./client/sass/**/*.scss')
    .pipe(sass({
      includePaths: cssPaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});
