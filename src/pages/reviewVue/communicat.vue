<template>
  <div class="communicat">
    <div>组件通信</div>
    <Son1 :msg="msg" ref="son1" @active="toChangMsg" />
    <Son2 />
    <hr />
    <button @click="changVuex">去改变vuex里面的值</button>
  </div>
</template>

<script>
/* 
	组件中的通信方式，可以分为
		父==>子：
			1、通过props传值
			2、ref
			3、$children
		子==>父：
			1、自定义事件this.$emit()
		兄弟==>兄弟：
			1、$parent
			2、事件总线通信eventBus
			3、provide/inject
			4、vuex通信


*/
import Son1 from './son/son_1.vue'
import Son2 from './son/son_2.vue'
export default {
  data() {
    return {
      msg: '我是父组件的值',
    }
  },
  watch: {
    '$store.state.largemsg': {
      handler(newVal) {
        console.log('888vuex里面的store值改变了', newVal)
      },
      deep: true,
      //   immediate: true,
    },
  },
  provide() {
    return {
      proMsg: '由provide提供的data信息',
    }
  },
  mounted() {
    console.log('11111', this.$refs.son1.sonMsg)
    console.log('333333333', this.$children[0].sonMsg) //子组件不存在顺序
    console.log('vuex的参数', this.$store.state.largemsg)
  },
  methods: {
    toChangMsg() {
      this.msg = '我是父组件的值11111111'
    },
    changVuex() {
      console.log('去改变vuex里面的值')
      this.$store.commit('toChangeMsg', '改变后的largemsg')
    },
  },
  components: {
    Son1,
    Son2,
  },
  props: {},
}
</script>

<style lang="scss" scoped>
.communicat {
  color: #000;
}
</style>