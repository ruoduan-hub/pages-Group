const path = require("path")
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')//vue-loader 插件

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口文件
    
    output: {//出口文件
        path: path.join(__dirname, './src/dist'),//输出文件夹
        filename: 'bundle.js'//输出文件名
    },
    plugins: [//第三方插件
        new webpack.HotModuleReplacementPlugin(),//热更新模块启用
        new htmlwebpackplugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        // vue-loader 插件
        new VueLoaderPlugin()
    ],
    module: {//配置第三方loader 模块
        rules: [//正则-文件匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//配置处理.css 的第三方loader规则
            {test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']},//sass
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=1' },//处理路径
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'}, //处理字体文件的loader 配置项
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//babel loader模块 Pexclude【排除】 npm包模块
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.vue$/, use: 'vue-loader' }//处理 .vue loader
        ]
    },
    resolve: {//修改vue 被导包的路径
        alias: {
            //"vue$": "vue/dist/vue.js"
        }
    },
    mode: "development"// |prouduction | none;

}