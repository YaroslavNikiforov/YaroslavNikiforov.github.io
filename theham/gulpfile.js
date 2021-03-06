'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const js_min = require('gulp-js-minify');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const image_min = require('gulp-imagemin');
const rename = require('gulp-rename');
const gulp_sync = require('gulp-sync')(gulp);


gulp.task('dev', function () {

    browserSync.init({
        server: './'
    });

    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/javascript/*.js', ['js']);
    gulp.watch('./src/images/**', gulp_sync.sync(['clean-img', 'images']));
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('build', gulp_sync.sync(['clean-dist', 'sass', 'js', 'images']));

gulp.task('clean-dist', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(concat('style.scss'))
        .pipe(sass({
            outputStyle: 'compressed',
            errorLogToConsole: true,
        })).on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src('./src/javascript/*.js')
        .pipe(concat('script.js'))
        .pipe(js_min())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('clean-img', function () {
    return gulp.src('./dist/img', {read: false})
        .pipe(clean());
});

gulp.task('images', function () {
    return gulp.src('./src/images/**/*')
        .pipe(image_min())
        .pipe(gulp.dest('./dist/img'))
        .pipe(browserSync.stream());
});


gulp.task('default', gulp_sync.sync(['build', 'dev']));