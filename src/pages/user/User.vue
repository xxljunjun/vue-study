<template>
  <div>
    <!-- <lottie
      :options="defaultOptions"
      :height="200"
      :width="200"
      @animCreated="handleAnimation"
    /> -->
    <h1>个人中心</h1>
    <h1>我是xiong和di的父组件：{{ snum }}</h1>
    <Xiong :snum="snum" @zidingyishijian="zidingyishijian" />
    <Di :snum="snum" @zidi="zidi" />
    <div class="box">
      <button @click="toEvent">点我触发全局的事件总线</button>
    </div>
    <div @click="goTopage">点我跳转路由传参</div>
    <router-link to="/find">跳转</router-link>
  </div>
</template>

<script>
import Xiong from './components/xiong.vue'
import Di from './components/di.vue'
// 第一步：script中引入资源
import * as animationData from '../../assets/data2.json'
export default {
  data() {
    return {
      snum: 100,
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
      anim: {},
    }
  },
  components: { Xiong, Di },
  created() {},
  mounted() {},
  destroyed() {
    this.$eventBus.$off('change')
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
      console.log('11111111111111111', anim) //这里可以看到 lottie 对象的全部属性
    },
    goTopage() {
      this.$router.push({
        name: '公司新闻',
        params: {
          name: '小溪流',
        },
      })
    },
    zidingyishijian() {
      this.snum++
    },
    zidi() {
      this.snum--
    },
    toEvent() {
      this.$eventBus.$emit('change', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 30px;
}
</style>
