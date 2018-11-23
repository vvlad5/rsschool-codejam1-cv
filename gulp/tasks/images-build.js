module.exports = () => {
    $.gulp.task('imagesBuild', () => {
        if ($.config.build) {
            return $.gulp.src($.config.app.img)
                .pipe($.imagemin({
                    interlaced: true,
                    progressive: true,
                    optimizationLevel: 5,
                }))
                .pipe($.gulp.dest($.config.output.img));
        }

        return $.gulp.src($.config.app.img)
            .pipe($.gulp.dest($.config.output.img))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};