<template>
  <div class="allVue">
    <Child />
  </div>
</template>

<script>
import Child from './components/child.vue'
export default {
  provide() {
    return {
      val: '我是所有allVue组件中的数据',
    }
  },
  props: {
    //父子组件传值
  },
  data() {
    return {
      val:'11111111111111',
      //声明变量
      //vm.$data 访问原始数据对象。Vue 实例也代理了 data 对象上所有的 property，因此访问 vm.a 等价于访问 vm.$data.a。
      //节制地使用 $parent 和 $children - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信
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
    Child,
    //局部注册组件
  },
  // render: (h) => {
  //   //用js语言来构建DOM  createElement  h  _c  ---------都是别称
  //   // createElement（params1，params2，params3）接受三个参数

  //   /*
  // 1. render方法的实质就是生成template模板；
  // 2. 通过调用一个方法来生成，而这个方法是通过render方法的参数传递给它的；
  // 3. 这个方法有三个参数，分别提供标签名，标签相关属性，标签内部的html内容
  // 4. 通过这三个参数，可以生成一个完整的木模板
  // render方法可以使用JSX语法，但需要Babel plugin插件；
  // render方法里的第三个参数可以使用函数来生成多个组件（特别是如果他们相同的话），只要生成结果是一个数组，且数组元素都是VNode即可；
  // */
  //   return 11
  // },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log("111111111",this)
  },
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
  // beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // },
  // beforeRouteLeave(to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  // },
}
</script>

<style lang="scss" scoped>
.allVue {
  color: #000;
}
</style>