<template>
    <div>
        <h1>Account 组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang='scss'>
/*普通的style 标签 只支持普通的样式，如果想要启用less，scss，要为元素设置lang属性*/
//只要咱们是在.vue 组件中定义 style，推荐都为style开启scopend属性
body{
    div{
        font-style: italic;
        background-color: pink;
    }
}
</style>

