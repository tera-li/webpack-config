const htmlWebpackPlugin = require('html-webpack-plugin')
// 配置index.html页面的入口，自动唉内存中根据指定页面生成一个内存页面
// 自动把打包好的index.js追加到html中
module.exports = {
    entry:__dirname+'/src/index.js', // 打包文件入口路径
    output:{
        path:__dirname+'/dist', // 打包名称
        filename:'./index.js'   // 文件名
    },
    module:{
        rules:[  // 依赖包处理，比如对css，image，json转成js
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ // 配置插件节点
            template: __dirname+'/src/index.html',  // 指定模板页面的路径，根据指定页面路径，去生成内存中的页面
            filename: 'index.html'
        })
    ],
    devServer: { // webpack-dev-server配置
        proxy: { // 代理
            '/api': 'http://localhost:3000'
        },
        // host: '0.0.0.0', // 可以让同一个ip地址的其他电脑或手机访问
        open: true, // 启动时自动打开浏览器
        port: 9000, // 端口
        hot: true, // 启用热更新，在不刷新的情况下替换css样式
        inline: true, // 内联模式
        https: true, // 可以选择https提供服务
        contentBase: 'src' // 指定托管的根目录
    }
}