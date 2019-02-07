//vue 导包
import Vue from 'vue'
//1.导入vue-router 包
import VueRouter from 'vue-router'
//22手动安装 vue-router
Vue.use(VueRouter)

//导入app组件
import app from './App.vue'
//导入自定义路由模块
import router from './router.js'


var vm = new Vue({
    el: '#app',
    router,//4.将路由对象挂载到vm
    render:  c => c(app)//会把指定el容器中的元素都清空，不要把router-view、router-link，直接写到el元素中去
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；