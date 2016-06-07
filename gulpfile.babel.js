'use strict';

import gulp from 'gulp';
import gls from 'gulp-live-server';
import webpack from 'gulp-webpack';
import webpackConfig from './webpack.config.js';
import jest from 'gulp-jest';
import babel from 'gulp-babel';

gulp.task('default', function() {
  var server = gls.new('index.js');
  server.start();

  gulp.watch('index.js', server.start.bind(server));
  gulp.watch(['./**/*.css'], function(file) {
    console.log('fresh css changes detected');
    server.notify.apply(server, [file]);
  });
  gulp.watch('./public/bundle.js', function(file) {
    console.log('fresh js bundle!');
    server.notify.apply(server, [file]);
  })

  gulp.src('./public/js/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('public/'));
});

gulp.task('test', () => {
  return gulp.src('__tests__/*.js')          
          .pipe(babel({
            presets: ['es2015']
          }))
          .pipe(jest({
            verbose: true
          }));
});
