const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

const config = {
  // 指定构建环境
  mode: "development",
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    path: resolve("dist"),
    filename: "js/[name].[hash].js",
    publicPath: "/" // 打包后的资源的访问路径前缀
  },
  // 模块
  module: {},
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('dist/index.html'), // html模板的生成路径
      template: resolve('public/index.html'),// html模板
    })
  ],
  // // 开发环境本地启动的服务配置
  // devServer: {}
}

module.exports = config
