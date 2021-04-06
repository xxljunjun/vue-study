import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import todo from './modules/todo'
import music from './modules/music'

export default new Vuex.Store({
  // state是存储中心，所有需要被共享或缓存的数据，都在这里定义
  state: {},
  // getters相当于组件的计算属性，它与state相关，
  // 当它所关系的state变量发生变化时，会自动重新计算
  getters: {},
  // mutations是Vuex中专门用于更新state
  mutations: {},
  // actions是专门与后端api打交道的
  actions: {},
  modules: {
    todo,
    music
  }
})
