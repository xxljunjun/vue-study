import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册
import { Login } from '@/components/'

import arr from './pages/'

// 从自定义的菜单数据中，取出路由匹配规则
let routes = []
arr.map(ele=>{
  routes = [...routes, ...ele.arr]
})
console.log("0000000",routes)

// 路由系统，用于实现单页面应用程序
export default new VueRouter({
  // 两种路由模式，默认是 hash 路由，还可以改成 history
  mode: 'history',
  routes: [
    ...routes,
    // 找不到页面时，跳转到首页
    { path: '/login', components: { login: Login } },
    { path: '/*', redirect: '/' }
  ]
})
