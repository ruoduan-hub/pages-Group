//入口文件
//在 webpack 构建的 项目中，使用vue 开发
//注意：在webpack 中使用 import Vue from 'vue' 导入的构造函数，功能不完整，只听了runtime-only的方式，并没有提供想网页中那样的使用方式
//import Vue from '../node_modules/vue/dist/vue.js'

// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】
 //import 包不全
    //vue.runtime.esm.js:619 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.


import Vue from 'vue'

// var login = {
//     template: '<h1>登录组件</h1>'
// }


//1. 导入login 组件
import login from './login.vue'
//默认 webpack 无法打包 .vue文件 要安装相关的loader  cnpm i vue-loader vue-template-compiler -D
var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // methods: {},
    // components: {
    //     login
    // }
    render:  (createElements, context) => createElements(login)
    
})

import m1, {title as t, content} from './test.js'
console.log(m1);
console.log(t+'---'+content)

