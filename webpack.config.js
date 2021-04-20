const path = require("path")

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 指定构建环境
  mode: "development",
  // 入口
  entry: {
    app: "./src/index"
  },
  // 出口
  output: {
    path: resolve("dist"),
    filename: "js/[name].[hash].js",
    publicPath: "/" // 打包后的资源的访问路径前缀
  },
  // 模块
  module: {},
  // 插件
  plugins: [],
  // // 开发环境本地启动的服务配置
  // devServer: {
  //
  // }
}
