const path = require('path')
//配置文件，就是一个js文件，通过nodejs模块操作，向外暴露一个配置对象
const webpack = require('webpack')//热更新第二步
//导入内存生产 html 插件
const htmlWebpackPlugin = require('html-webpack-plugin')//只要是插件就要放到plugins 里面去
/**这个插件的2个左右
 * 1. 自动在内存中根据指定页面生成一个内存页面
 * 2. 自动把打包好的 bundle.js 追加到节点
 */

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口表示要打包的文件

    output: {//出口 输出相关配置
        path: path.join(__dirname, './dist'),//打包好的文件输出文件夹
        filename: 'bundle.js'//输出的文件的名称
    },
    // devServer: {
    //     port: 8080,//默认8080
    //     open: true, //打开浏览器 默认不打开
    //     contentBase: 'src', //指定项目的根路径
    //     hot: true //启动热更新 第一步
    // },
    plugins: [ //热更新 第三步 配置插件
        new webpack.HotModuleReplacementPlugin(),//new 一个热更新的模块对象，启用热更新

        new htmlWebpackPlugin({//配置 内存生成html，插件
            template: path.join(__dirname, './src/index.html'),//指定模板页面,生成内存页面
            filename: 'index.html'//指定生成页面的名称 不会被默认访问 RAM-index.html
        })
    ],
    module: {//配置第三方模块加载器
        rules: [//第三方模块 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//配置处理.css 的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//配置处理less文件第三方 loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },//配置处理sass 第三方loader 规则
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=2&name=[hash:8]-[name].[ext]' },//处理图片路径的loader
            // 传参：limit 给定的值是图片大小，单位是byte，值>=图片，就会转base64，反之则不会
            //[hash:8] 在每张图片名字前面给一个哈希值最大32，解决图片不同文件夹重名打包问题
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'} //处理字体文件的loader 配置项
        ]
    },
    mode: "development"//development, production 或 none ；制定模式 生产模式会压缩代码
}