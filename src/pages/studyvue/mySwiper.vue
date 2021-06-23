<template>
  <div>
    <Son>
      <template v-slot:todo="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </Son>
  </div>
</template>

<script>
import Son from './son/sonSlot.vue'
export default {
  props: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: {
    Son,
  },
}
</script>

<style lang="scss" scoped>
</style>