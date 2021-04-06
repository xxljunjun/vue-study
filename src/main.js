
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/'
import http from '@/utils/api'
import img from '@/utils/img'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.prototype.$img = img
Vue.config.productionTip = false
const eventBus = new Vue()
Vue.prototype.$eventBus = eventBus

// 根容器创建,Vue环境
new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app'
})

// app.$mount('#app')
