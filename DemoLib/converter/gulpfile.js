//引用插件模块
var gulp = require("gulp"),
    del = require('del'),
    webpack = require('webpack'),
    minimist = require('minimist'),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    gutil = require('gulp-util');

//获取Node插件和工作路径
let workSpaceDir = ".";
var webpackConf = require('./webpack.prod');
var knownOptions = {
    string: 'env',
    default: {
        env: process.env.NODE_ENV || 'production'
    }
};
var options = minimist(process.argv.slice(2), knownOptions);


//清理工具
gulp.task('clean', function (cb) {
    console.log("[清理文件]" + 'lib/**/*.*');
    //清理之前存在的旧文件
    return del(['lib/**/*.*'], cb);
});
//run webpack pack 
gulp.task('pack', ['clean'], function (done) {
    var _conf = options.env === 'production' ? webpackConf : webpackConfDev;
    webpack(_conf, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack]', stats.toString({
            colors: true
        }))
        done()
    });
});

gulp.task('default', function (db) {
    gulp.src("./src/index.js")
        .pipe(rename({ suffix: '.min' }))   //rename压缩后的文件名
        .pipe(uglify({
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true,
            }
        }))
        .pipe(gulp.dest("./dist"));
});