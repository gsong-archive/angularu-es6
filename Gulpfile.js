var gulp = require('gulp');
var serve = require('browser-sync');
var sync = require('run-sequence');
var webpack = require('gulp-webpack');


var paths = {
  app: ['client/app/**/*.{js,css,html}']
};

gulp.task('build', function() {
  return gulp.src('client/app/app.js')
  .pipe(webpack(require('./webpack.config')))
  .pipe(gulp.dest('client'));
});

gulp.task('serve', function() {
  serve({
    port: 3000,
    open: false,
    server: {
      baseDir: 'client'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', serve.reload]);
});

gulp.task('dev', function(done) {
  sync('build', 'watch', 'serve', done);
});
