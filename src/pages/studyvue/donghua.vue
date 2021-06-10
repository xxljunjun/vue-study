<template>
  <div class="donghua">
    <button @click="dianji" class="btn">点我呀</button>
    <div :class="status ? 'box clickbox' : 'box'"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    }
  },
  methods: {
    dianji() {
      this.status = true
    },
  },
}
</script>

<style lang="scss" scoped>
.donghua {
  .box {
    height: 200px;
    width: 200px;
    background: red;
    margin: 300px auto;
  }
  .clickbox {
    transition: 1s;
    transform: translate(-300px, -300px) scale(0);
  }
}
</style>