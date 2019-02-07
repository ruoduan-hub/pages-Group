<template>
    <div>
        <h1>使用.vue 定义出来的组件 --- {{ msg }}</h1>
    </div>
</template>

<script>
export default {//组件中的data 必须是 fn
    data () {
        return {
            msg: '123'
        }
    },
    methods: {
        show() {
            console.log('login.vue中的show方法')
        }
    }
}
</script>


<style>

</style>

