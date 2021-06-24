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
  render: function (createElement) {
    //用js语言来构建DOM
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