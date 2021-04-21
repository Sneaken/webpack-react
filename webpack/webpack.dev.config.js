const {merge} = require('webpack-merge')
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(baseWebpackConfig, {
  // 指定构建环境
  mode: "development",
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-react',
      template: utils.resolve('./../public/index.html'), // html模板
    })
  ],
  // 开发环境本地启动的服务配置
  devServer: {
    open: true
  }
})
