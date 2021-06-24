<template>
  <div class="allVue"></div>
</template>

<script>
export default {
  props: {
    //父子组件传值
  },
  data() {
    return {
      //声明变量
    }
  },
  watch: {
    //监控路由
  },
  computed: {
    //vue的计算属性的 getter
  },
  directives: {
    //局部自定义指令
  },
  mixins: [
    //局部混入
  ],
  filters: {
    //过滤器
  },
  methods: {
    //函数function
  },
  components: {
    //局部注册组件
  },
  render: (h) => {
    //用js语言来构建DOM  createElement  h  _c  ---------都是别称
    // createElement（params1，params2，params3）接受三个参数

    /* 	
	1. render方法的实质就是生成template模板； 
	2. 通过调用一个方法来生成，而这个方法是通过render方法的参数传递给它的； 
	3. 这个方法有三个参数，分别提供标签名，标签相关属性，标签内部的html内容 
	4. 通过这三个参数，可以生成一个完整的木模板 
	render方法可以使用JSX语法，但需要Babel plugin插件；
	render方法里的第三个参数可以使用函数来生成多个组件（特别是如果他们相同的话），只要生成结果是一个数组，且数组元素都是VNode即可；
	*/
    return 11
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {
    //被 keep-alive 缓存的组件激活时调用。
    //该钩子在服务器端渲染期间不被调用。
  },
  deactivated() {
    //被 keep-alive 缓存的组件停用时调用。
    //该钩子在服务器端渲染期间不被调用。
  },
  errorCaptured(err, vm, info) {
    //err, vm, info
  },
}
</script>

<style lang="scss" scoped>
.allVue {
  color: #000;
}
</style>