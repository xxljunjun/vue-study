<template>
  <div>
    {{ demo }}
    <button @click="dianji">点我改变name值</button>
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
  // inheritAttrs: false,
  methods: {
    dianji() {
      console.log('点击事件')
      this.$emit('changeName','孙子组件改变xxl')
      //可以通过事件总线EventBus的通信方式改变爷爷的值
    },
  },
  mounted(){
     console.log('22222222222this.$attrs',this.$attrs)
  }
}
</script>

<style lang="scss" scoped>
</style>