//路由文件
//1.导入vue-router 包
import VueRouter from 'vue-router'
//2手动安装 vue-router

//导入account，goodslist 组件
import account from './min/Account.vue'
import goodslist from './min/GoodsList.vue'
//导入account 的2个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

var routes = [
    { 
        path: '/account',
         component: account,
         children:[
             { path: 'login', component: login },
             { path: 'register', component: register }
         ]
    },
    { path: '/goodslist', component: goodslist }
]

//3.创建路由对象
const router = new VueRouter({
    routes
})

//把路由对象暴露出去
export default router