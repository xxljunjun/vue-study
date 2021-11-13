<template>
  <div class="childen">
    <!-- <slot></slot> -->
    <slot name="header" :data='user'>0000000000</slot>
    <slot name="middle"></slot>
    <slot name="footer"></slot>
    <!-- <slot v-bind:user="user">{{ user.lastName }}</slot> -->

    <!-- <slot name="one">2222222222</slot>
    <slot name="two">3333333333</slot> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: 1,
      user: {
        firstName: 'AAA',
        lastName: 'Miss',
      },
    }
  },
  props: {
    lists: {
      type: Array,
      default: () => {
        return [1, 2, 3]
      },
      require: true,
    },
  },
  mounted() {
    console.log('父向子传值', this.lists)
  },
}
</script>

<style lang="scss" scoped>
.childen {
  color: #000;
}
</style>