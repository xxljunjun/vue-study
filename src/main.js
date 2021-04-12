
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/'
import http from '@/utils/api'
import img from '@/utils/img'
import 'element-ui/lib/theme-chalk/index.css'
import "@/components/common/directives.js"

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
