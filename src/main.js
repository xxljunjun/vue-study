
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/'
import http from '@/utils/api'
import img from '@/utils/img'
import 'element-ui/lib/theme-chalk/index.css'
import "@/components/common/directives.js"
import messagebox from '@/utils/my-element/validate'
Vue.prototype.$MessageBox = messagebox
import '@/styles/element-variables.scss'

Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.prototype.$img = img

//全局混入
Vue.mixin({
  data(){
    return{
      mainNum:1,
    }
  },
  methodes:{
    mainConsole(){
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
  el: '#app'
})

// app.$mount('#app')
