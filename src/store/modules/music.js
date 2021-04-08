// import { fetchQqMusic } from '@/utils/api'

export default {
  namespaced: true,   // 开启命名空间
  state: {
    musicList: [],
    message:"我是musicLIst里面的值"
  },
  mutations: {
    updateMusicList(state, payload) {
      state.musicList = payload
    },
    updatemessage(state, payload){
      console.log("4444444",state)
      console.log("5555555",payload)
      state.message = payload
    },
    getMusic(store, payload) {
      console.log("22222222",store)
      console.log("33333333",payload)
      // fetchQqMusic(payload).then(res=>{
      //   store.commit('updateMusicList', res.song.list)
      // })
    }
  },
  actions: {
    
  }
}
