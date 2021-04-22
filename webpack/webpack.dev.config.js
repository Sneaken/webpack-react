const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = merge(baseWebpackConfig, {
  // 指定构建环境
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-react',
      template: utils.resolve('./../public/index.html'), // html模板
    }),
  ],
  // 开发环境本地启动的服务配置
  devServer: {
    open: true,
    // 将运行进度输出到控制台
    progress: true,
    // 接口转发
    // proxy: {
    //   '/api': {
    //     target: 'http://www.baidu.com', // 访问/api/xxx 实际会转发到 http://www.baidu.com/api/xxx
    //   },
    //   '/api2': {
    //     target: 'http://www.baidu.com',
    //     pathRewrite: {
    //       '^/api': '', // 访问/api2/xxx 实际会转发到 http://www.baidu.com/xxx
    //     },
    //   },
    //   '/api3': {
    //     target: 'https://www.baidu.com', // 访问/api3/xxx 实际会转发到 http://www.baidu.com/api3/xxx
    //     secure: false, // 防止转发失败 （默认情况下，将不接受在 HTTPS 上运行且证书无效的后端服务器。）
    //   },
    // },
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});

console.log('devConfig => ', devConfig);

module.exports = devConfig;
