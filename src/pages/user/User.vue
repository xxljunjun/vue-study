<template>
  <div>
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
export default {
  data() {
    return {
      snum: 100,
    }
  },
  components: { Xiong, Di },
  created() {},
  mounted() {},
  destroyed() {
    this.$eventBus.$off('change')
  },
  methods: {
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
