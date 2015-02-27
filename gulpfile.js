var gulp = require('gulp');
var karma = require('gulp-karma');
var ngAnnotate = require('gulp-ng-annotate')
var uglify = require('gulp-uglify')
var del = require('del')
var concat = require('gulp-concat')
//Can give the test files here, or just allow it to run the default files.
var testFiles = [
    // 'bower_components/angular/angular.min.js',
    // 'bower_components/angular-mocks/angular-mocks.js',
    // 'app.js',
    // 'mainCtrl.js',
    // 'anotherCtrl.js',
    // 'services/testService.js',
    // 'test/mainCtrlTest.js',
    // 'test/anotherCtrlTest.js'
]

gulp.task('wipeDist', function(){
  del(['dist/**'])
})

gulp.task('annotate', function () {
    
    return gulp.src(['src/app/app.js', 'src/*.js','src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      throw err;
    });
});

gulp.task('test-watch', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});