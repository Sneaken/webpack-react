const { merge } = require('webpack-merge');
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(baseWebpackConfig,{
  // 指定构建环境
  mode:"production",
  // 插件
  plugins:[
    new HtmlWebpackPlugin({
      filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
      template: utils.resolve('./../public/index.html'), // html模板
    })
  ],
})
