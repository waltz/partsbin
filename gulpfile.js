var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    webpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config.js');

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
