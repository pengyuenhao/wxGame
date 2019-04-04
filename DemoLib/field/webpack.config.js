const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        index: path.join(__dirname, 'index.js')
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new BundleAnalyzerPlugin(),
    ]
};