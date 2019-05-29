var gulp = require('gulp'),
    source = require("source"),
    browserify = require("browserify"),
    tsify = require("tsify")

//脚本文件合并打包工具
gulp.task('tsTest', function() {
	return browserify({
		basedir: ".",
		debug: true,
		entries: ['src/index.ts'],
	})
	.pipe(source("A.js"))
	.pipe(gulp.dest("./lib/"));
});
//这里后续应该加上protobuf文件的静态化处理
/**@see https://segmentfault.com/a/1190000012820412*/
/**@example
*$> pbjs -t static-module -w commonjs -o joengProto.js joengProto.proto
*$> pbts -o joengProto.d.ts joengProto.js
*/