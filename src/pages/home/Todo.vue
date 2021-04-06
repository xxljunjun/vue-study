<template>
<div class="xxl_todo">
    <h1 v-text="num"></h1>
    <h1 v-text="msg"></h1>
    <h1 v-text="commsg"></h1>
    <h1>我是todo里的标题</h1>
    <!-- <ChilderPro 
      :propA="propA" 
      :propB="propB" 
      :propC="propC"
      :propD="propD"
      :propE="propE"
      :propF="propF"
      @childThing="gitThing"
    /> -->
    <span @click="eventShijian">点我传递eventBus</span>
</div>
</template>

<script>
// const ChilderPro = ()=>import("./components/childerPro")
export default {
  data: function() {
    return {
      propA:520,
      propB:"我是字符串哟",
      propC:true,
      propD:5201314,
      propE:[1,2,3,4,5,6,7,8,9],
      propF:100,
      num:"猜猜我是谁",
      msg:"hello xxl",
      eventmsg:"用eventBus传递的信息",
    }
  },
  watch:{
    // num(newName,oldName){
    //   console.log("newName00",newName)
    //   console.log("oldName11",oldName)
    // },
    num:{
      handler(newName,oldName){
        console.log("newName22",newName)
        console.log("oldName33",oldName)
      },
      immediate: true,// 代表在wacth里声明了num这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样
      deep: true
    }
  },
  props:{

  },
  computed: {
    commsg:function(){
      return this.msg.split('').reverse().join('')
    }
  },
  components:{
    // ChilderPro,
  },
  mounted() {
    
  },
  methods: {
    gitThing(val){
      console.log("2222",val)
      this.num =val

    },
    eventShijian(){
      console.log("111111",this.eventmsg)
      this.$eventBus.$emit("eventShijian",this.eventmsg)
    }
  },
  beforeDestroy () {
    this.$eventBus.$off('eventShijian')
  }
}
</script>

<style lang="scss" scoped>
.xxl_todo{
  // background: red;
}
</style>
