module.exports = () => {
    $.gulp.task('htmlBuild', () => {
        return $.combiner(
            $.gulp.src($.config.app.html),
            $.rigger(),
            $.gulp.dest($.config.output.html),
            $.browserSync.reload({
                stream: true
            })
        ).on('error', $.notify.onError(err => ({
            title: 'HTML error',
            message: err.message
        })));
    });
};