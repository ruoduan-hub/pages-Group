const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//创建插件实例对象
const htmlplugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    firename: 'index.html',
})





//暴露配置对象
module.exports = {//webpack4 约定大于配置
    mode: 'development',  //'development' or 'production'
    plugins: [
        htmlplugin
    ],
    module: {//第三方模块的配置规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],//表示这几个文件的后缀名，可以省略不写
        alias: {'@': path.join(__dirname, './src')}//@ 就表示项目根目录中 src 路径了
    }
}