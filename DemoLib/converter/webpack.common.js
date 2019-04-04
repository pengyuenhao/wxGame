const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 对js代码进行混淆压缩的插件
const MinifyPlugin  = require("babel-minify-webpack-plugin");
const minify = new MinifyPlugin({

},{
  comments : false
});
module.exports = {
  mode: "development",
  //mode:"production",
  entry: ['./src/index.js'],

  resolve:
  {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    //new BundleAnalyzerPlugin()
    //minify
  ]
};