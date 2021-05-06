<template>
  <div>
    <h1 v-show="isShow">测试</h1>
    <h1>{{ message }}</h1>
    <h1>{{ computedMessage }}</h1>
    <ChilderPro :isShow.sync="isShow" />
    <input type="text" v-focus />
  </div>
</template>

<script>
const ChilderPro = () => import('@/pages/home/components/childerPro')
export default {
  data() {
    return {
      message: 'hello',
      propA: '000000',
      propB: '000000',
      propC: '000000',
      propD: '000000',
      propE: '000000',
      propF: '000000',
      isShow: true,
    }
  },
  components: {
    ChilderPro,
  },
  props: {
    // //必须是数字类型
    // propA: Number,
    // //数字类型或者字符串
    // propB: [Number, String],
    // //布尔值，如果没有定义，默认值就是true
    // propC: {
    //   type: Boolean,
    //   dafault: false,
    // },
    // //数字，而且是必传
    // propD: {
    //   type: Number,
    //   required: true,
    // },
    // //如果数组或对象，默认值必须是一个函数来返回
    // propE: {
    //   type: Array,
    //   default: () => {
    //     return [1, 2, 3]
    //   },
    // },
    // //自定义一个验证函数
    // propF: {
    //   validator: (val) => {
    //     return val > 10
    //   },
    // },
  },
  watch: {
    // num(newName,oldName){
    // 	console.log("newName00",newName)
    // 	console.log("oldName11",oldName)
    // },
    // num:{
    // 	handler(newName,oldName){
    // 		console.log("newName22",newName)
    // 		console.log("oldName33",oldName)
    // 	},
    // 	immediate: true,// 代表在wacth里声明了num这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样
    // 	deep: true
    // }
  },
  computed: {
    //具有缓存
    computedMessage: function () {
      return this.message.split('').reverse().join('')
    },
  },
  methods: {
    init() {},
    gitThing() {},
    toChange() {
      this.isShow = false
    },
  },
  beforeCreate() {
    // this.$nextTick(() => {
    //   //深复制
    //   JSON.parse(JSON.stringify())
    // })
  },
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {
    //进入页面后触发
  },
  deactivated() {
    //离开页面后触发
  },
  // beforeRouteLeave(to, from, next) {

  // },
  // beforeRouteEnter(to, from, next) {

  // },
  // beforeRouteUpdate(to, from, next) {

  // },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      },
    },
    // pin:{
    // 	bind: function (el, binding, vnode) {
    // 		el.style.position = 'fixed'
    // 		el.style.top = binding.value + 'px'
    // 	}
    // }
  },
}
</script>

<style lang="scss" scoped>
</style>