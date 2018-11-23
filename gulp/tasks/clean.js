module.exports = () => {
    $.gulp.task('clean',
        $.del.bind(null, [$.config.cleanDev, $.config.cleanBuild], {dot: true})
    );
};