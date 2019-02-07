//项目入口文件
//1.导入jquery  es6 导入模块的方式
import $ from 'jquery' //相当于 const $ = require('jquery')

//使用import，导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
//注意：如果要通过路径形式，去引入 node_modules 中相关文件，可以省略前面这一层：node_modules，可以直接写包名加具体路径
import 'bootstrap/dist/css/bootstrap.min.css'
//注意：webpack 默认只能打包处理js类型的文件，无法处理其他的非js文化
//如果想要处理，要安装一些合适的第三方loader加载器
//1. 处理css 要装：npm i style-loader css-loader -D
//2. 打开 webpack.config.js 这个配置文件，在 里面，新增一个 配置节点，叫做 module, 它是一个对象；在 这个 module 对象身上，有个 rules 属性，这个 rules 属性是个 数组；这个数组中，存放了，所有第三方文件的 匹配和 处理规则；

// 注意： webpack 处理第三方文件类型的过程：
// 1. 发现这个 要处理的文件不是JS文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
// 2. 如果能找到对应的规则， 就会调用 对应的 loader 处理 这种文件类型；
// 3. 在调用loader 的时候，是从后往前调用的；
// 4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行 打包合并，最终输出到  bundle.js 中去



$(() => {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', () => {
        return '#' + 'B65389'
    })
})