const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = merge(baseWebpackConfig, {
  // 指定构建环境
  mode: 'production',
  output: {
    // 打包后的资源的访问路径前缀
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  // 插件
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      title: 'webpack-react',
      // html模板的生成路径
      filename: utils.resolve('./../dist/index.html'),
      // html模板
      template: utils.resolve('./../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      },
    }),
  ],
});

module.exports = prodConfig;
