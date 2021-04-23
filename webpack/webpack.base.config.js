const utils = require('./utils');

const baseConfig = {
  // 入口
  entry: {
    index: './src/index',
  },
  // 出口
  output: {
    path: utils.resolve('../dist'),
    filename: 'static/js/[name].[contenthash:8].js',
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude 指定要排除的文件
        // include 指定要包含的文件
        // exclude 的优先级高于 include, 在 include 和 exclude 中使用绝对路径数组，
        // 尽量避免 exclude, 更倾向于使用 include
        include: utils.resolve('../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
          name: 'static/img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  resolve: {
    modules: [utils.resolve('../node_modules')],
    // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      // 在项目中使用@符号代替src路径，导入文件路径更方便
      '@': utils.resolve('../src'),
      // 默认情况下， webpack 会从入口文件 ./node_modules/bin/react/index 开始递归解析和处理依赖的文件，可以直接指定文件，避免此处的耗时
      react: utils.resolve('../node_modules/react/umd/react.production.min.js'),
      'react-dom': utils.resolve('../node_modules/react-dom/umd/react-dom.production.min.js'),
    },
  },
};

module.exports = baseConfig;
