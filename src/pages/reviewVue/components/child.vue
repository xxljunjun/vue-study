<template>
  <div>
    {{ $attrs }}
    <div @click="tochangeVal">
      点我改变val的值
    </div>
    <sonChild :v-bind='$attrs' v-on='$listeners'/>
  </div>
</template>

<script>
import sonChild from './sonChild.vue'
//当前页面没有接收完父组件传来的变量。传来的所有变量减去当前props接收的，就传给了这个child2的组件
//当前页面没有返回的父组件传来的所有的函数。所有的减去给返回值的，就传给了child2组件
export default {
  inject: ['val'],
  data() {
    return {
      demo: this.val,
    }
  },
  props:{
    val:{
      type:String
    }
  },
  // inheritAttrs: false,//子组件的顶层标签元素中（本例子的div元素）会渲染出父组件传递过来的属性
  methods:{
    tochangeVal(){
      this.$emit('changeVal','子组件')
    }
  },
  mounted(){
    // alert(this.$attrs)
    console.log('111111111this.$attrs',this.$attrs)
    console.log("this.$listeners",this.$listeners)
  },
  components: {
    sonChild,
  },
}
</script>

<style lang="scss" scoped>
</style>