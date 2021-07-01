<template>
  <div class="son_1">
    <div>{{ msg }}</div>
    <button @click="toChange">点我改变父组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sonMsg: '我是son_1里面的msg',
    }
  },
  methods: {
    toChange() {
      this.$emit('active')
    },
  },
  mounted() {
    console.log('22222', this.sonMsg)
    console.log('4444444', this.$parent.msg)
    // this.$parent.$on('changeBrother', () => {
    //   console.log('555555555', this.sonMsg)
    // })
    this.$eventBus.$on('changeBrother', () => {
      console.log('555555555', this.sonMsg)
    })
  },
  props: {
    msg: String,
  },
}
</script>

<style lang="scss" scoped>
.son_1 {
  color: #000;
}
</style>