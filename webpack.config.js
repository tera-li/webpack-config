const htmlWebpackPlugin = require('html-webpack-plugin')  // 配置index.html页面的入口
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
                use: ['style-loader!css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname+'/src/index.html',  // 指定模板页面的路径，根据指定页面路径，去生成内存中的页面
            filename: 'index.html'
        })
    ]
}