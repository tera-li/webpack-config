// 配置index.html页面的入口，自动在内存中根据指定页面生成一个内存页面
// 自动把打包好的index.js追加到html中
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: process.env.NODE_ENV,
  // 入口，指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始
  entry: {
    vue_main: __dirname + "/src/vue_main.js",
    main: __dirname + "/src/index.js",
    two_entry: __dirname + "/src/two-entry.js",
  },
  // 输出，告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件
  output: {
    // 打包输出路径
    path: __dirname + "/dist",
    // 文件名
    filename: "js/[contenthash].js",
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
        // 从后向前处理，处理完成后交由 webpack打包合并到 bundle.js中
        use: ["style-loader", "css-loader"],
      },
      // 解析.ts
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
      // 解析.js
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            // 缓存babel-loader 的执行结果
            // 之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)
            presets: ["@babel/preset-env"],
          },
        },
      },
      // 解析.vue
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  // 扩展 webpack 功能，打包优化，资源管理，注入环境变量
  plugins: [
    // 生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle
    new htmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
    }),
    new VueLoaderPlugin(),
  ],
  // 配置模块如何解析
  resolve: {
    // 别名
    alias: {
      "@": "/src",
    },
    // 尝试按顺序解析这些后缀名，引入文件就可以不带后缀
    extensions: [".js", ".json", ".vue"],
  },
  // 开发工具
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  // 开发服务配置
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR功能
    http2: true,
    https: false,
  },
  // 从输出的 bundle 中排除依赖
  // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
  // 例如，从 CDN 引入 Vue，而不是把它打包：
  externals:
    process.env.NODE_ENV === "development"
      ? {}
      : {
          vue: "Vue",
        },
  // optimization: {
  //   minimize: false,
  // },
};
console.log(process.env.NODE_ENV);
