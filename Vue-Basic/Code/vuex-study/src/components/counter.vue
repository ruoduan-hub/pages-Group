<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {
      // count: 0
    };
  },
  methods: {
    add(){
      //千万不要这么用，不符合vuex的设计理念
      //this.$store.state.count ++
      this.$store.commit("increment")
    },
    remove(){
      this.$store.commit("reduce", {a:1,b:2})
    }
  },
  computed:{
   
  }
};
</script>

<style lang="scss" scoped>

</style>
