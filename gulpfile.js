var gulp    = require('gulp'),
    gls = require('gulp-live-server'),
    webpack = require('gulp-webpack');

gulp.task('default', function() {
  var server = gls.new('index.js');
  server.start();

  var client_scripts = './public/js/entry.js';

  gulp.watch('index.js', server.start.bind(server));
  gulp.watch(['./**/*.css'], function(file) {
    console.log('fresh css changes detected');
    server.notify.apply(server, [file]);
  });
  gulp.watch('./public/bundle.js', function(file) {
    console.log('fresh js bundle!');
    server.notify.apply(server, [file]);
  })

  gulp.src(client_scripts)
    .pipe(webpack({
      watch: true,
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('public/'));
});
