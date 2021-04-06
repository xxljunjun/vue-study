import { fetchQqMusic } from '@/utils/api'

export default {
  namespaced: true,   // 开启命名空间
  state: {
    musicList: []
  },
  mutations: {
    updateMusicList(state, payload) {
      state.musicList = payload
    }
  },
  actions: {
    getMusic(store, payload) {
      fetchQqMusic(payload).then(res=>{
        store.commit('updateMusicList', res.song.list)
      })
    }
  }
}
