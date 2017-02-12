var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('js', function() {
    return gulp.src('./src/*.js')
        .pipe(uglify()).on('error', function(error){
            console.log(error);
        })
        .pipe(rename(function (path) {
            path.extname = '.min.js'
         }))
        .pipe(gulp.dest('./dist/'));
});