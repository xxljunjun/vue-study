<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
/* 

	directives
*/
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('11111', this.$data)
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      },
      // bind: function () {},
      // inserted: function () {},
      // update: function () {},
      // componentUpdated: function () {},
      // unbind: function () {},
    },
  },
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
</style>