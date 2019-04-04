const path = require('path');
const merge = require('webpack-merge');
// 引入通用webpack配置文件
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules:
      [        
        {
          loader: 'babel-loader',
          options: babelOptions,
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
      ]
  },
  // 使用 source-map
  devtool: 'source-map',
  // 对 webpack-dev-server 进行配置
  devServer: {
    contentBase: './dist',
    // 设置localhost端口
    port: 9000,
    // 自动打开浏览器
    open: true,
  },
  plugins: [
  ],
  // 设置出口文件地址与文件名
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
});