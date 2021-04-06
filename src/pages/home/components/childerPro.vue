<template>
  <div class="xxl_childerPro">
    <h1 v-text="propA"></h1>
    <h1 v-text="propB"></h1>
    <h1 v-if="propC">默认我是看不见的</h1>
    <h1 v-text="propD"></h1>
    <h1 v-for="item in childpropE" :key="item">
      {{ item }}
    </h1>
    <h1 v-text="propF"></h1>
    <span class="“btn”" @click="btnThing">点我！</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      childpropE:[],
      myNumber:1314941
    }
  },
  watch:{

  },
  props:{
    //必须是数字类型
    propA:Number,
    //数字类型或者字符串
    propB:[Number,String],
    //布尔值，如果没有定义，默认值就是true
    propC:{
      type:Boolean,
      dafault:false
    },
    //数字，而且是必传
    propD:{
      type:Number,
      requiiired:true
    },
    //如果数组或对象，默认值必须是一个函数来返回
    propE:{
      type:Array,
      default:()=>{
        return [1,2,3]
      }
    },
    //自定义一个验证函数
    propF:{
      validator:(val)=>{
        return val>10
      }
    }

  },
  computed: {
    
  },
  mounted() {
    console.log("0000000",this.propA)
    console.log("11111111111",this.propB)
    console.log("22222222",this.propC)
    console.log("33333333",this.propD)
    console.log("4444444",this.propE)
    console.log("5555555",this.propF)
    this.childpropE = this.propE
    console.log("66666666",this.childpropE)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.xxl_childerPro {
  //   background: red;
  .btn {
  }
}
</style>
