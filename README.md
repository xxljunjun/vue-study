### 一、安装环境
```
node v12+
node -v
npm -v
```

安装淘宝镜像：
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 二、脚手架
```
cnpm install @vue/cli -g
vue create vue-study
cd vue-study
npm run serve  // 启动开发环境

npm run build  // 上线（测试环境、生产环境）

当项目跑不起来时，你可以试着把node_modules包删干净，重装：
cnpm install
```

### 三、路由

* 多页面应用
* 单页面应用：一切皆组件，所谓页面的切换，实际上背后是组件的销毁与创建。

1、如何安装路由？
```
cnpm install vue-router -S   // 表示代码中要用到的包
```
在 src 根目录中新建一个 router.js 的文件，代码如下：
```
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册

export default new VueRouter({
  routes: []
})
```
在 main.js 入口文件中，把路由系统挂载到Vue系统中去
```
import router from './router.js'

new Vue({
  router
})
```

2、如何定义路由匹配规则？
```
// 定义路由匹配规则
const routes = [
    { path: '/home', component: Home },
    { path: '/user', component: User },
    { path: '/find', component: Find }
]
```

3、视图（组件）如何显示出来？

在适当的地方，比如 App组件中，使用 <router-view> 来显示url匹配成功的组件。

4、如何改变URL?

声明式路由导航：建议使用vue-router内置 <router-link> 组件来实现。
编程式路由导航：使用 路由api【$router.push()/replace()/back()】来实现页面跳转。

5、动态路由

路由匹配规则的写法：{path: '/detail/:id', component: '', props: true }
两种路由参数传参的方式：$route / props

6、三个命名

视图命名：当<router-view></router-view>加了name属性时，在路由匹配规则定义时要使用 components 字段。
路由别名：给路由匹配规则中的复杂path，取一个容易记忆的小名。
路由命名：给路由匹配规则取一个名字。

7、exact

<router-link></router-link>有两个 exact* 属性可使用，实现路由完全（精准）匹配。

8、路由懒加载

是一种性能优化的方案，你可以理解成导入组件的一种写法：
```
const Home = ()=>import('./home/Home.vue')
```
背后的原理：webpack代码分割功能+异步组件

9、嵌套视图

即，被 <router-view> 承载的组件中还可以再使用 <router-view>，形成嵌套关系。
在路由匹配规则中，使用 children 属性来实现。
```
{
  path: '/find',
  component: Find,
  // 嵌套视图
  children: [
    { path: '', component: FindPanelA },
    { path: 't2', component: FindPanelB }
  ]
}
```

10、还有两个知识点

Hash模式 vs. History模式
路由守卫


### 四、状态管理

1、如何理解“状态”？

什么是状态？在应用程序中，状态就是数据。
状态管理工具在Vue项目架构中是可选的。但是，从项目发展角度看，最好还安装、集成一下。
Vuex，它是Vue全家桶中最流利使用的状态工具。

2、状态管理工具可以解决什么实际问题呢？

* 组件之间数据共享
* 实现数据缓存

3、DevTools安装

下载地址：https://github.com/arcliang/Vue-Devtools-

4、Vuex中的五大概念

* state
* getters
* mutations
* actions
* mudules

5、Vuex安装
```
cnpm install vuex -S
```

在src根目录，创建 /store/index.js 文件，代码如下：
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
```

在 main.js 中挂载：
```
import store from './store/index.js'
new Vue({
  store
}).$mount('#app')
```

在组件中如何使用Vuex中的数据呢？
```
this.$store.state.msg
```
在组件中如何更新Vuex中的数据呢？
```
this.$store.commit('mutationFn', payload)
```

6、如何优雅地使用Vuex来管理应用程序中的外部数据？

把外部数据定义在Vuex的state中，页面中就可以通过 $store.state来使用了。
封装api接口（参考utils/api.js）
在Vuex导入api方法，在actions中定义与后端交互的逻辑，把处理完成的数据通过mutations方法提交到state
在mutations中定义 更新state的方法。当state变化时，页面自动更新
那么actions在哪里被触发呢？在页面逻辑中触发它。

【温馨提示】：建议在组件使用 map* 系列方法来使用Vuex中的数据和函数
  mapState 和 mapGetters 在写在 computed 中
  mapActions 和 mapMutations 写在 methods 中

### 五、集成axios

它是一个HTTP工具，用于与后端进行数据交互。
特点：
  1、基于Promise封装的库
  2、在客户端、Node端都可以使用

在项目中怎么使用呢？
1、cnpm install axios -S
2、一定要封装请求拦截器和响应拦截器。参考 utils/axios.js
3、最好把所有api统一封装可以复用的方法。参考 utils/api.js

浏览器同源策略阻止了ajax，怎么解决？
在项目根目录里新建vue.config.js文件，代码如下：
```
module.exports = {
  devServer: {
    // 用代理的方式来解决浏览器同源策略对ajax的限制
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',  // 目标远程服务器
        ws: true,
        changeOrigin: true   // 允许改变“域”
      }
    }
  }
}
```

### 六、element和sass

ToB vs. ToC

1、安装 Element

cnpm install element-ui -S
```
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

2、如何使用 sass ？

cnpm install sass-loader -D
cnpm install node-sass -D
```
<style lang='scss' scoped>
</style>
```

### 七、项目总结

1、技术栈：vue、路由、sass、axios、vuex，都是怎么用的？
2、UI框架：具体组件名（布局类组件、表单、表格、分页、导航），具体到某个组件是怎么用的？
3、团队组成：前端2人，后端2人，项目开发周期3个月
4、自己负责的模块：商品管理模块、广告管理、用户管理……
5、项目亮点：如果没有亮点，就直说没有。
6、项目难点：业务复杂（表单多、表格筛选条件多），后端接口多、不稳定，产品需求不稳定。小团队加强沟通。

### 八、vue2.0项目集成ts
* vue-class-component：扩展vue支持typescript，将原有的vue语法通过声明的方式来支持ts
* vue-property-decorator：基于vue-class-component扩展更多装饰器
* ts-loader：让webpack能够识别ts文件
* tslint-loader：tslint用来约束文件编码
* tslint-config-standard：tslint 配置 standard风格的约束
```
npm i vue-class-component vue-property-decorator -S
npm i ts-loader typescript tslint tslint-loader tslint-config-standard -D
```
* 在tsconfig.json文件中
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "ESNext",
    "strict": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "experimentalDecorators": true  // 启用装饰器
  }
}
```
* 在shims-tsx.d.ts
```
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
```
* 在shims-vue.d.ts
```
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
```
* tslint.json
```
{
    "extends": "tslint-config-standard",
    "globals": {
      "require": true
    }
  }
```

如果是vue3.0的项目
```

```