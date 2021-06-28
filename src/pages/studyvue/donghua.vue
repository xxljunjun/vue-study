<template>
  <div class="donghua">
    <button @click="dianji" class="btn">点我呀</button>
    <div :class="status ? 'box clickbox' : 'box'"></div>
    <hr />
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
/* 
  ==>vue封装了transition标签

    ==>v-enter
    ==>v-enter-active
    ==>v-enter-to

    ==>v-leave
    ==>v-leave-active
    ==>v-leave-to

*/
export default {
  data() {
    return {
      status: false,
      show: true,
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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