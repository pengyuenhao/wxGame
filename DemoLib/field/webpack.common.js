const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  mode: "development",
  //mode:"production",
  entry: ['./src/index.ts'],

  resolve:
  {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    //new BundleAnalyzerPlugin()
  ]
};