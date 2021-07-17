<template>
  <div class="animate-box">
    <div ref="divbox" id="divbox">动画效果</div>
    <button @click="pushClassName">点击我添加类名</button>
    <button @click="rmoveClassName">点击我去除类名</button>
    <pop title="我是标题" :cancleBack="cancle" :comfireBack="comfire">
    <template slot="content"> 我是内容 </template>
</pop>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    cancle(){

    },
    comfire(){

    },
    pushClassName() {
      console.log('000')
      let divbox = document.getElementById('divbox')
      //   divbox.classList.add('animate__bounce')
      //   divbox.classList.add('animate__rotateOutDownRight')
      divbox.classList.add('animate__flipOutX')
      divbox.classList.add('animate__animated')
    },
    rmoveClassName() {
      let divbox = document.getElementById('divbox')
      divbox.classList.remove('animate__flipOutX')
      divbox.classList.remove('animate__animated')
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.animate-box {
  color: #000;
}
</style>