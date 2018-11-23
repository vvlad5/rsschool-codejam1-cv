"use strict";

global.$ = {
    gulp: require('gulp'),
    webpackStream: require('webpack-stream'),
    del: require('del'),
    autoprefix: require('gulp-autoprefixer'),
    sass: require('gulp-sass'),
    minifyCss: require('gulp-clean-css'),
    sourcemaps: require('gulp-sourcemaps'),
    rigger: require('gulp-rigger'),
    imagemin: require('gulp-imagemin'),
    browserSync: require("browser-sync"),
    notify: require('gulp-notify'),
    combiner: require('stream-combiner2').obj,
    argv: require('yargs').argv,
    config: require('./gulp/gulp-config.js')(),
    tasks: require('./gulp/tasks.js')
};

$.tasks.forEach(item => require(item)());

$.gulp.task('dev', $.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('htmlBuild', 'stylesBuild', 'scriptsBuild', 'imagesBuild', 'fontsBuild'),
    $.gulp.parallel('watch', 'browserSync')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('htmlBuild', 'stylesBuild', 'scriptsBuild', 'imagesBuild', 'fontsBuild')
));