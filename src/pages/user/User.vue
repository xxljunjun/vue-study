<template>
  <div>
    <h1>个人中心</h1>
    <h1>我是xiong和di的父组件：{{snum}}</h1>
    <Xiong :snum="snum" @zidingyishijian="zidingyishijian"/>
    <Di :snum="snum" @zidi="zidi"/>
  </div>
</template>

<script>
import Xiong from "./components/xiong.vue"
import Di from "./components/di.vue"
export default {
  data() {
    return {
      snum:100,
    };
  },
  components: {Xiong,Di},
  created(){
    
  },
  mounted(){
    
  },
  methods: {
    zidingyishijian(){
      this.snum++
    },
    zidi(){
      this.snum--
    }
  },
};
</script>

<style lang="css" scoped>
</style>
