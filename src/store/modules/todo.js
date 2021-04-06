export default {
  namespaced: true,
  state: {
    msg: 'hello 2009',
    list: []
  },
  getters: {
    total(state) {
      return state.list.length
    }
  },
  mutations: {
    addTask(state, payload) {  // 负荷
      console.log('addTask', state, payload)
      state.list.push({task: payload, id: Date.now()})
    },
    delTask(state, payload) {
      state.list = state.list.filter(ele=>ele.id!==payload)
    }
  }
}
