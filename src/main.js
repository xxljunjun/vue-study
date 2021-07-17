
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/'
import http from '@/utils/api'
import img from '@/utils/img'
import 'element-ui/lib/theme-chalk/index.css'
// import "@/components/common/directives.js"
import messagebox from '@/utils/my-element/validate'
Vue.prototype.$MessageBox = messagebox
import '@/styles/element-variables.scss'
import animated from 'animate.css'
import JsonExcel from 'vue-json-excel'  //导出excel表格

Vue.component('downloadExcel', JsonExcel)
Vue.use(animated)
Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.prototype.$img = img

import pop from 'xxl-lang'
import "xxl-lang/lib/pop.css"
Vue.component('pop', pop)


Vue.filter('myFilter', function (value) {
  return value + 1
  // 返回处理后的值
})

// Vue.directive('my-directive', {
//   // 这里将会被 `bind` 和 `update` 调用
//   bind: function () { },
//   inserted: function () { },
//   update: function () { },
//   componentUpdated: function () { },
//   unbind: function () { }
// })
console.log("main.js中的process.env.NODE_ENV", process.env.NODE_ENV)
console.log("main.js中的process.env.outputDir ", process.env.outputDir)

//全局混入
Vue.mixin({
  data() {
    return {
      mainNum: 1,
    }
  },
  methodes: {
    mainConsole() {
      console.log("main.js打印的")
    }
  }
})

var version = Number(Vue.version.split('.')[0])

if (version === 2) {
  // console.log("11111111")
  // Vue v2.x.x
} else if (version === 1) {
  // console.log("2222222")
  // Vue v1.x.x
} else {
  // Unsupported versions of Vue
  // console.log("33333333")
}

//事件总线通信
const eventBus = new Vue()
Vue.prototype.$eventBus = eventBus

// 阻止启动生产消息
Vue.config.productionTip = false

// 根容器创建,Vue环境
new Vue({
  router,
  store,
  // i18n,
  render: h => h(App),

  // render: function (createElement) {
  //   return createElement(App);
  // },
  //h的意思就是 Hyperscript
  el: '#app'
})
// app.$mount('#app')

// console.log("vue的配置", Vue.config)
// console.log("vue的原型", Vue.prototype)

// Vue.config.silent = true //取消 Vue 所有的日志与警告。

/*
  自定义合并策略的选项。
合并策略选项分别接收在父实例和子实例上定义的该选项的值作为第一个和第二个参数，Vue 实例上下文被作为第三个参数传入。
*/
// Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
//   return child + 1
// }
// const Profile = Vue.extend({
//   _my_option: 1
// })

// Vue.config.devtools = true //务必在加载 Vue 之后，立即同步设置以下内容

// Vue.config.productionTip = false  // 阻止启动生产消息