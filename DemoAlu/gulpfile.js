//引用插件模块
var gulp = require("gulp"),
    concat = require("gulp-concat"),
    sourcemaps = require('gulp-sourcemaps'),
    order = require("gulp-order"),
    //ts = require("gulp-typescript"),
    //uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jsonfile = require('jsonfile'),
    del = require('del'),
    //tsify = require('tsify'),
    webpack = require('webpack'),
    fs = require('fs'),
    minimist = require('minimist'),
    sftp = require('gulp-sftp'),
    gutil = require('gulp-util');

//获取Node插件和工作路径
let workSpaceDir = ".";
var wxConf = require('./webpack.wx');
var webpackConf = require('./webpack.prod');
var knownOptions = {
    string: 'env',
    default: {
        env: process.env.NODE_ENV || 'production'
    }
};
var options = minimist(process.argv.slice(2), knownOptions);
var src = process.cwd() + '/src';
var assets = process.cwd() + '/dist';
var basepath = process.cwd() + '/';
var remoteServer = {
    host: '192.168.56.129',
    remotePath: '/data/website/website1',
    user: 'root',
    pass: 'password'
};
var localServer = {
    host: '127.0.0.1',
    remotePath: '/data/website/website1',
    user: 'root',
    pass: 'password'
};


//本地配置文件
let localfile = jsonfile.readFileSync("./local.json");
//清理工具
gulp.task('clean', function (cb) {
    console.log("[清理文件]" + 'lib/**/*.*');
    //清理之前存在的旧文件
    return del(['lib/**/*.*'], cb);
});
gulp.task('scripts', function (cb) {
    //获取多个文件索引
    return gulp.src(['./lib/' + localfile.name + '.js', './src/ender'])
        //合并标题注释到代码文件的抬头
        .pipe(concat(localfile.name + '.js'))
        //写入库文件夹
        .pipe(gulp.dest('./lib/'), cb);
});
//发布到本地
gulp.task('default', ['pack'], function (db) {
    let paths = localfile.paths;
    let useMin = localfile.useMin;
    let name = localfile.name;
    let filePath;
    let fileName = (useMin ? name + '.min' : name) + '.js';
    let mapName = (useMin ? name + '.min' : name) + '.js.map';
    let declarePath, declareName, local;
    //检查文件是否存在
    for (let i = 0; i < paths.length; i++) {
        local = paths[i].local;
        if (!fs.existsSync(local + '/' + fileName)) {
            console.log("[文件不存在]" + local + '/' + fileName);
            continue;
        }
        filePath = paths[i].path + name + ".js";
        mapPath = paths[i].path + name + ".js.map";

        declareName = paths[i].declareName;
        declarePath = paths[i].declarePath + declareName;
        console.log("[Write]" + paths[i].name + "[Path]" + filePath);
        console.log("[Write]" + paths[i].name + "[Map]" + mapPath);
        console.log("[Write]" + paths[i].name + "[Declare]" + declarePath);

        //fs.mkdirSync(paths[i].path);
        fs.writeFileSync(filePath, fs.readFileSync(local +'/' + fileName));
        fs.writeFileSync(mapPath, fs.readFileSync(local + '/' + mapName));
        fs.writeFileSync(declarePath, fs.readFileSync("index.d.ts"));
    }

});
//run webpack pack 
gulp.task('pack', ['clean'], function (done) {
    var _conf = options.env === 'production' ? webpackConf : webpackConfDev;
    webpack(_conf, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack]', stats.toString({
            colors: true
        }))
        webpack(wxConf, function (err, stats) {
            if (err) throw new gutil.PluginError('webpack', err)
            gutil.log('[webpack]', stats.toString({
                colors: true
            }))
            done()
        });
    });

});
//deploy assets to remote server 
gulp.task('deploy', function () {
    var _conf = options.env === 'production' ? remoteServer : localServer;
    console.log("[发布]" + _conf.remotePath + "[地址]" + assets);
    return gulp.src(assets + '/**')
        .pipe(sftp(_conf))
})
//启动热更新
gulp.task('serve', function () {
    gulp.start('default');
    //监控文件变化，自动更新 
    gulp.watch('src/**/*.ts', ['default']);
});