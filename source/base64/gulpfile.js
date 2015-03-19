var gulp = require('gulp');
var base64 = require('gulp-base64');
 
//basic example 
gulp.task('build', function () {
    return gulp.src('./css/*.css')
        .pipe(base64())
        .pipe(gulp.dest('./public/css'));
});

//example with options 
/*
gulp.task('build', function () {
    return gulp.src('./css/*.css')
        .pipe(base64({
            baseDir: 'public',
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 8*1024, // bytes 
            debug: true
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css'));
});
*/