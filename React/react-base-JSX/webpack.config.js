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
    }
}