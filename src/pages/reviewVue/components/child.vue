<template>
  <div>
    {{ demo }}
    <sonChild />
  </div>
</template>

<script>
import sonChild from './sonChild.vue'
export default {
  inject: ['val'],
  data() {
    return {
      demo: this.val,
    }
  },
  components: {
    sonChild,
  },
}
</script>

<style lang="scss" scoped>
</style>