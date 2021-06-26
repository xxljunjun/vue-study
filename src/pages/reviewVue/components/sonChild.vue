<template>
  <div>
    {{ demo }}
    <button @click="dianji">点我改变值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo: this.val,
    }
  },
  inject: ['val'],
  methods: {
    dianji() {
      console.log('点击事件')
      //可以通过事件总线EventBus的通信方式改变爷爷的值
    },
  },
}
</script>

<style lang="scss" scoped>
</style>