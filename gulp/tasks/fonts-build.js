module.exports = () => {
    $.gulp.task('fontsBuild', () => {
        return $.gulp.src($.config.app.fonts)
            .pipe($.gulp.dest($.config.output.fonts))
            .pipe($.gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*'))
            .pipe($.gulp.dest($.config.output.fonts + '/font-awesome'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
}