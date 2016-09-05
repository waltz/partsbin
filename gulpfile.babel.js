'use strict';

import gulp from 'gulp';
import gulp_live_server from 'gulp-live-server';
import webpack from 'gulp-webpack';
import webpackConfig from './webpack.config.js';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import jasmine from 'gulp-jasmine';

gulp.task('default', () => {
  const server = gulp_live_server.new('index.js');
  server.start();

  gulp.watch('index.js', server.start.bind(server));

  gulp.watch('public/index.css', (file) => {
    console.log('LiveReload found new styles.');
    server.notify.apply(server, [file]);
  });

  gulp.watch('public/index.js', (file) => {
    console.log('LiveReload found new client JavaScript.');
    server.notify.apply(server, [file]);
  });

  gulp.watch('client/**/*.jsx', ['webpack']);
  gulp.watch('spec/**/*.js', ['test']);
  gulp.watch('client/sass/**/*.scss', ['sass']);
});

gulp.task('webpack', () => {
  console.log('Webpacking.');

  return gulp.src('./client/js/index.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('public/'));
});

gulp.task('test', () => {
  console.log('Running tests.');

  return gulp.src('spec/**/*.js').pipe(jasmine());
});

gulp.task('sass', () => {
  const bourbonPaths = require('bourbon').includePaths;
  const neatPaths = require('bourbon-neat').includePaths;
  const cssPaths = bourbonPaths.concat(neatPaths);

  console.log('Compiling SASS.');

  return gulp.src('./client/sass/**/*.scss')
    .pipe(sass({
      includePaths: cssPaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});
