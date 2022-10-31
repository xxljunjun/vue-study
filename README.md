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

- 多页面应用
- 单页面应用：一切皆组件，所谓页面的切换，实际上背后是组件的销毁与创建。

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

在 main.js 入口文件中，把路由系统挂载到 Vue 系统中去

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

在适当的地方，比如 App 组件中，使用 <router-view> 来显示 url 匹配成功的组件。

4、如何改变 URL?

声明式路由导航：建议使用 vue-router 内置 <router-link> 组件来实现。
编程式路由导航：使用 路由 api【\$router.push()/replace()/back()】来实现页面跳转。

5、动态路由

路由匹配规则的写法：{path: '/detail/:id', component: '', props: true }
两种路由参数传参的方式：\$route / props

6、三个命名

视图命名：当<router-view></router-view>加了 name 属性时，在路由匹配规则定义时要使用 components 字段。
路由别名：给路由匹配规则中的复杂 path，取一个容易记忆的小名。
路由命名：给路由匹配规则取一个名字。

7、exact

<router-link></router-link>有两个 exact\* 属性可使用，实现路由完全（精准）匹配。

8、路由懒加载

是一种性能优化的方案，你可以理解成导入组件的一种写法：

```
const Home = ()=>import('./home/Home.vue')
```

背后的原理：webpack 代码分割功能+异步组件

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

Hash 模式 vs. History 模式
路由守卫

### 四、状态管理

1、如何理解“状态”？

什么是状态？在应用程序中，状态就是数据。
状态管理工具在 Vue 项目架构中是可选的。但是，从项目发展角度看，最好还安装、集成一下。
Vuex，它是 Vue 全家桶中最流利使用的状态工具。

2、状态管理工具可以解决什么实际问题呢？

- 组件之间数据共享
- 实现数据缓存

3、DevTools 安装

下载地址：https://github.com/arcliang/Vue-Devtools-

4、Vuex 中的五大概念

- state
- getters
- mutations
- actions
- mudules

5、Vuex 安装

```
cnpm install vuex -S
```

在 src 根目录，创建 /store/index.js 文件，代码如下：

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

在组件中如何使用 Vuex 中的数据呢？

```
this.$store.state.msg
```

在组件中如何更新 Vuex 中的数据呢？

```
this.$store.commit('mutationFn', payload)
```

6、如何优雅地使用 Vuex 来管理应用程序中的外部数据？

把外部数据定义在 Vuex 的 state 中，页面中就可以通过 \$store.state 来使用了。
封装 api 接口（参考 utils/api.js）
在 Vuex 导入 api 方法，在 actions 中定义与后端交互的逻辑，把处理完成的数据通过 mutations 方法提交到 state
在 mutations 中定义 更新 state 的方法。当 state 变化时，页面自动更新
那么 actions 在哪里被触发呢？在页面逻辑中触发它。

【温馨提示】：建议在组件使用 map\* 系列方法来使用 Vuex 中的数据和函数
mapState 和 mapGetters 在写在 computed 中
mapActions 和 mapMutations 写在 methods 中

### 五、集成 axios

它是一个 HTTP 工具，用于与后端进行数据交互。
特点：
1、基于 Promise 封装的库
2、在客户端、Node 端都可以使用

在项目中怎么使用呢？
1、cnpm install axios -S
2、一定要封装请求拦截器和响应拦截器。参考 utils/axios.js
3、最好把所有 api 统一封装可以复用的方法。参考 utils/api.js

浏览器同源策略阻止了 ajax，怎么解决？
在项目根目录里新建 vue.config.js 文件，代码如下：

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

### 六、element 和 sass

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
2、UI 框架：具体组件名（布局类组件、表单、表格、分页、导航），具体到某个组件是怎么用的？
3、团队组成：前端 2 人，后端 2 人，项目开发周期 3 个月
4、自己负责的模块：商品管理模块、广告管理、用户管理……
5、项目亮点：如果没有亮点，就直说没有。
6、项目难点：业务复杂（表单多、表格筛选条件多），后端接口多、不稳定，产品需求不稳定。小团队加强沟通。

### 八、vue2.0 项目集成 ts

- vue-class-component：扩展 vue 支持 typescript，将原有的 vue 语法通过声明的方式来支持 ts
- vue-property-decorator：基于 vue-class-component 扩展更多装饰器
- ts-loader：让 webpack 能够识别 ts 文件
- tslint-loader：tslint 用来约束文件编码
- tslint-config-standard：tslint 配置 standard 风格的约束

```
npm i vue-class-component vue-property-decorator -S
npm i ts-loader typescript tslint tslint-loader tslint-config-standard -D
```

- 在 tsconfig.json 文件中

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

- 在 shims-tsx.d.ts

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

- 在 shims-vue.d.ts

```
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
```

- tslint.json

```
{
    "extends": "tslint-config-standard",
    "globals": {
      "require": true
    }
  }
```

如果是 vue3.0 的项目

```

```

### 九、安装 mock

```
 npm install mockjs -S
```

- main.js 文件

```js
// import mock from "@/mock/index";
// Vue.use(mock);
require("@/mock/index.js");
```

### 十、安装导出 excel 的插件

```
cnpm install vue-json-excel -S
```

- main.js 文件

```js
import JsonExcel from "vue-json-excel"; //导出excel表格
Vue.component("downloadExcel", JsonExcel);
```

###

```
npm install file-saver --save
```

### 十一、安装生成唯一 id 的 nanoid

```
npm install nanoid -S
```

### 十二、安装生成 vue-pdf 的插件

```
npm install --save vue-pdf
```

### 十三、安装可视化打包体积

- npm install webpack-bundle-analyzer --save-dev
- 配置 vue.config.js

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = {
  chainWebpack: (config) => {
    // 展示图形化信息(上线钱注释掉)
    config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
  },
};
```

### 十四、项目安装的插件

| 包名                    | 作用                     |
| :---------------------- | :----------------------- |
| element-ui              | 蚂蚁 UI 库               |
| mockjs                  | mock 模拟数据            |
| nanoid                  | 唯一值                   |
| echarts                 | echarts 图表             |
| js-cookie               | 操作 cookie 的库         |
| sass-loader             | 使用 sass 预编译语言     |
| node-sass               | 使用 sass 预编译语言     |
| less                    | 使用 less 预编译语言     |
| less-loader             | 使用 less 预编译语言     |
| file-saver              | 生成 txt/img/canvas 文件 |
| vue-json-excel          | 生成 excel 文件          |
| vue-pdf                 | 生成 pdf 文件            |
| axios                   | 发送 http 请求           |
| moment                  | 时间处理 功能            |
| webpack-bundle-analyzer | 打包后可视化体积         |
| sortablejs              | 实现拖拽功能             |
| swiper                  | 轮播图                   |

### 十五、使用 ag-grid

- npm install --save ag-grid-community ag-grid-vue

### 十六、elementUI的按需引入
+ npm install babel-plugin-component -D
+ npm install --save-dev babel-preset-es2015
```

```
