var gulp        = require('gulp'),
    browserify  = require('gulp-browserify');

var paths = {
  src:    './src/**/*',
  build:  './build/**/*',
  index:  './index.html'
}

gulp.task('default', function() {
  gulp.src('./src/test.js', {
        read: false
      })
      .pipe(browserify({
        transform: ['reactify'],
        extensions: ['.jsx']
      }))
      .on('error', console.log)
      .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['default']);
  gulp.watch(paths.index, ['default']);
});