<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
/* 
  全局自定义指令
  Vue.directive('my-directive', {
     // 这里将会被 `bind` 和 `update` 调用
    bind: function () {},
    inserted: function () {},
    update: function () {},
    componentUpdated: function () {},
    unbind: function () {}
  })
  v-demo:foo.a.b="message"================自定义指令也可以有修饰符
	directives
  如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。
*/
export default {
  data() {
    return {
      direction: 'left'
    }
  },
  mounted() {
    console.log('11111', this.$data)
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el, binding) {
        el.focus()
        console.log(el)
        console.log(binding)
      },
      // bind: function () {},
      // inserted: function () {},
      // update: function () {},
      // componentUpdated: function () {},
      // unbind: function () {},
    },
    pin:{
         bind: function (el, binding) {
          el.style.position = 'fixed'
          var s = (binding.arg == 'left' ? 'left' : 'top')
          el.style[s] = binding.value + 'px'
        }
      }
  },
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
</style>