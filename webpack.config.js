// 配置index.html页面的入口，自动在内存中根据指定页面生成一个内存页面
// 自动把打包好的index.js追加到html中
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口，指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始
  entry: __dirname + "/src/index.js",
  // 输出，告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件
  output: {
    // 打包输出路径
    path: __dirname + "/dist",
    // 文件名
    filename: "[id].js",
    // 在生成文件之前清空 output 目录
    clean: true,
  },
  module: {
    rules: [
      // webpack 只能理解 JavaScript 和 JSON 文件
      // loader将处理import,require等其它的类型文件，比如对.css,Image,.ts转换成 Webpack能够识别的方式
      // 原始文件 -> loader 编译,代码转换 -> loader 处理完成后的结果,交给 webpack进行打包 -> 输出最终文件
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    // new htmlWebpackPlugin({
    //   // 配置插件节点
    //   template: __dirname + "/src/index.html", // 指定模板页面的路径，根据指定页面路径，去生成内存中的页面
    //   filename: "index.html",
    // }),
  ],
  devServer: {
    // webpack-dev-server配置
    // proxy: {
    //   // 代理
    //   "/api": {
    //     target: "http://localhost:3000",
    //     secure: false,
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //   },
    // },
  },
};
