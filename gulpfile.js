var gulp = require('gulp');
var karma = require('gulp-karma');
var ngAnnotate = require('gulp-ng-annotate'); //adds the array notation necessary for minifying
var uglify = require('gulp-uglify')
var del = require('del')
var concat = require('gulp-concat')
var htmlreplace = require('gulp-html-replace')
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

//apparently this has to be called on it's own first? or maybe it has to be called at a different place
//in the order because if I include it in the build task it gets rid of stuffs.
gulp.task('wipeDist', function(){
  return del(['dist/**'])
})

gulp.task('replaceHTML', function() {
  return gulp.src('src/index.html')
    .pipe(htmlreplace({
        'js': 'app.min.js'
    }))
    .pipe(gulp.dest('dist'));
});
//this copies the index.html file- need to replace the extra script tags
gulp.task('copytemplates', function(){
  return gulp.src(['src/components/**/*.html'])
    .pipe(gulp.dest('dist/components/'))
})

gulp.task('copyResources', function(){
  return gulp.src(['src/resources/**'])
    .pipe(gulp.dest('dist/resources/'))
})
//the way the files are recreated in the dist folder means they can't be found if all of them are minified together
//the file starts to look for the components folder and can't find what it needs
gulp.task('annotate', function () {
    
    return gulp.src(['src/app/app.js', 'src/*.js','src/**/*.js'])
        .pipe(concat('app.min.js'))
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

gulp.task('build', ['replaceHTML', 'copyResources', 'copytemplates', 'annotate']);










