import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import todo from './modules/todo'
import music from './modules/music'

export default new Vuex.Store({
  state: {
    // state是存储中心，所有需要被共享或缓存的数据，都在这里定义
    largemsg: "我是index里面呢的state数据",
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    status: 0, //大于0 的时候需要弹出登录窗口
    token: "",
    mesageStatus:false,
  },
  getters: {
    // getters相当于组件的计算属性，它与state相关，当它所关系的state变量发生变化时，会自动重新计算
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    // mutations是Vuex中专门用于更新state,同步任务
    tochangelargemsg(state, payload) {
      console.log(state)
      console.log(payload)
      state.largemsg = payload
    },
    needLogin(state, payload) {
      if (payload) {
        state.status++
      } else {
        state.status = 0
      }
    },
    toChangeMsg(state, payload) {
      if (payload) {
        state.largemsg = payload
      }
    },
    openDialog(state, payload){
      console.log(state)
      console.log(payload)
      state.mesageStatus = payload
    }
    // set_token(state,payload){

    // }
  },
  actions: {
    // actions是专门与后端api打交道的，异步任务;提交的是 mutation，而不是直接变更状态;可以包含任意异步操作。
    settimeouting(store, payload) {
      console.log(store)
      console.log(payload)
      store.commit("tochangelargemsg", payload)
    }
  },
  modules: {
    //vuex分模块处理
    todo,
    music
  },
})
