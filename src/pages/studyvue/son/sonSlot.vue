<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" v-bind:key="todo.id">
        <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
    -->
        <slot name="todo" v-bind:todo="todo">
          <!-- 后备内容 -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filteredTodos: [
        { id: 1, text: '111111111', isComplete: false },
        { id: 2, text: '222222222', isComplete: true },
        { id: 3, text: '3333333333', isComplete: true },
        { id: 4, text: '444444444', isComplete: false },
      ],
    }
  },
  components: {},
}
</script>

<style lang="scss" scoped>
</style>