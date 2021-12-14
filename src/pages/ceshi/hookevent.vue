<template>
  <div class="wrapper">
    <div class="box" v-if="status"></div>
    <comp @hook:mounted="hookMounted" />
  </div>
</template>

<script>
// 这就是上面的那个第三方业务组件
import Comp from './components/Comp.vue'

export default {
  data(){
    return{
      status:false,
    }
  },
  components: {
    Comp
  },
  mounted(){
     console.log("父组件的mounted")
     setTimeout(()=>{
       this.status = false
     },1000)
  },
  methods: {
    hookMounted() {
      //在父组件的mounted之前执行
      // console.log('loading ...',this.status)
      this.status = true
      console.log('loading ...',this.status)
    }
  }
}
</script>
<style lang="scss" scoped>
.box{
  width: 200px;
  height: 200px;
  background: red;
}
</style>
