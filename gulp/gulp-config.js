module.exports = () => {
    let dir = process.argv[2],
        webpack = null,
        build = null;

    if (dir === 'build') {
        dir = 'dist';
        build = true;
        webpack = require('./webpack-config.js')().prod;
    } else {
        dir = '.tmp';
        build = false;
        webpack = require('./webpack-config.js')().dev;
    }

    return {
        build,
        webpack,
        app: {
            html: 'app/html/pages/*.html',
            js: 'app/scripts/main.js',
            style: 'app/styles/main.scss',
            img: 'app/images/**/*.{png,gif,jpg,jpeg,svg}',
            fonts: 'app/fonts/**/*.*'
        },
        output: {
            html: `${dir}/`,
            js: `${dir}/js/`,
            css: `${dir}/css/`,
            img: `${dir}/images/`,
            fonts: `${dir}/fonts/`
        },
        watch: {
            html: 'app/html/**/*.html',
            js: 'app/scripts/**/*.js',
            style: 'app/styles/**/*.scss',
            img: 'app/images/**/*.*',
            fonts: 'app/fonts/**/*.*'
        },
        cleanBuild: 'dist/',
        cleanDev: '.tmp/'
    };
}