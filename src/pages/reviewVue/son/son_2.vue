<template>
  <div class="son_2">
    <div>{{ some }}</div>
    <button @click="parentComment">点我$parent通信</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      some: 'son_2的data里面的some',
    }
  },
  inject: ['proMsg'],
  mounted() {
    console.log('66666666', this.proMsg)
  },
  methods: {
    parentComment() {
      //   this.$parent.$emit('changeBrother')
      this.$eventBus.$emit('changeBrother')
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.son_2 {
  color: #000;
}
</style>