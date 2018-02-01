'use strict';

let gulp = require('gulp'),
    bs   = require('browser-sync').create();

gulp.task('browser-sync', function () {
    bs.init({
        server: {
            baseDir: './src'
        },
        files: "./src/**/*.*"
    });
});

gulp.task('serve', ['browser-sync'], function () {

});