const path = require('path');
const merge = require('webpack-merge');
const fs = require("fs");
const jsonfile = require('jsonfile');
// 引入通用webpack配置文件
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin  = require("babel-minify-webpack-plugin");
const minifyPlugin = new MinifyPlugin({

},{
  comments : false
});
// 对js代码进行混淆压缩的插件
const uglifyJSPlugin = new UglifyJSPlugin();
const package = jsonfile.readFileSync("package.json");
//根据包信息配置库
const namespace = package.namespace;
const name = package.name;

// 对babel的配置，内容同.babelrc文件
const babelOptions = {
  "presets": [
    ["@babel/preset-env",{
      "targets": {
        "node": "current"
        }
      }
    ]
  ],
  "env":{
    "production": {
      "presets": ["minify"]
    }
  }
}
module.exports = merge(common, {
  devtool: 'cheap-source-map',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      //排除这个文件夹
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions,
        },
        {
          loader: 'ts-loader'
        },
      ]
    }]},
  plugins: [
    //uglifyJSPlugin,
    //minifyPlugin
  ], 
  // 设置出口文件地址与文件名
  output: {
    //一般都会选择umd
    library: namespace,
    //输出方式
    libraryTarget: "umd",  
    //路径
    path: path.resolve('dist'),
    pathinfo: false,
    umdNamedDefine: false,
    //输出文件名称
    filename: name + '.js',
    //全局对象获取方式
    globalObject: '"undefined" != typeof self ? self : this'
  },

});