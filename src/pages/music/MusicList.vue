<template>
<div>
  <h1>音乐列表</h1>

  <!-- 音乐搜索框 -->
  <div>
    <input type="text" v-model='star' @keyup.enter='search'>
  </div>

  <!-- 音乐列表渲染 -->
  <div>
    <div v-for='item in musicList' :key='item.id' @click='skipToDetail(item)'>
      <span v-text='item.id'></span>
      <span>----</span>
      <span v-text='item.name'></span>
    </div>
  </div>
</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      star: ''
    }
  },
  computed: {
    // 从一个名叫 music 的子store中引入 musicList这个变量，
    // 然后就能使用 this.musicList 来访问它了
    ...mapState('music', ['musicList'])
  },
  methods: {
    ...mapActions('music', ['getMusic']),
    skipToDetail(item) {
      // 编程式路由导航
      // 你可以在这里写其它任意业务
      this.$router.history.push('/music/detail/'+item.id)
      // push()
      // replace()
      // back()
    },
    // 音乐搜索
    search() {
      let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=69020128776265001&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

      let params = {}
      str.split('&').map(ele=>{
        let arr = ele.split('=')
        params[arr[0]] = arr[1]
      })
      // params.w = decodeURI(params.w)
      params.w = this.star
      params.n = 20

      // this.$store.dispatch('getMusic', params)
      this.getMusic(params)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
