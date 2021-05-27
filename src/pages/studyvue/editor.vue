<template>
  <div id="div1"></div>
</template>

<script>
import E from 'wangeditor'
export default {
  data() {
    return {}
  },
  mounted() {
    const editor = new E('#div1')
    // 设置编辑区域高度为 500px
    editor.config.height = 200
    editor.create()
  },
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
</style>