var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('default', function() {
  server.run(['index.js']);

  gulp.watch(['./**/*.js'], server.run);
  gulp.watch(['./**/*.css'], function(file) {
    console.log(file);
    server.notify(file);
  });
});
