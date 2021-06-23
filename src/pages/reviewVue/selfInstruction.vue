<template>
  <div>
    <input type="text" />
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
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      },
    },
  },
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
</style>