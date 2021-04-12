
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/'
import http from '@/utils/api'
import img from '@/utils/img'
// import i18n from './i18n/i18n'
import 'element-ui/lib/theme-chalk/index.css'
import "@/components/common/directives.js"

Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.prototype.$img = img
Vue.config.productionTip = false

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
  el: '#app'
})

// app.$mount('#app')
