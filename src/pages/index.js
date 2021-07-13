
// 路由懒加载：使用webpack代码分割功能和异步组件的特点来实现，目的性能优化。

//首页概况
const Home = () => import('./home/Home.vue')
const Find = () => import('./home/Find.vue')
const Todo = () => import('./home/Todo.vue')
const excel = () => import("./home/excel.vue")

const User = () => import('./user/User.vue')
const MusicList = () => import('./music/MusicList.vue')
const MusicDetail = () => import('./music/MusicDetail.vue')
const GoodList = () => import('./good/GoodList.vue')
const GoodAdd = () => import('./good/GoodAdd.vue')

// 广告中心模块
const Ad = () => import('./center/Ad.vue')
const stard = () => import('./stard/stard.vue')
const stard1 = () => import('./stard/stard1.vue')
const stard2 = () => import('./stard/stard2.vue')
const stard3 = () => import('./stard/stard3.vue')

//vue的学习模块
const Studyvue = () => import("./studyvue/studyvue.vue")
const Slot = () => import("./studyvue/slot.vue")
const lili = () => import("./studyvue/lili.vue")
const animate = () => import("./studyvue/animate.vue")
const mySwiper = () => import("./studyvue/mySwiper.vue")
const editor = () => import("./studyvue/editor.vue")
const drag = () => import("./studyvue/drag.vue")
const donghua = () => import("./studyvue/donghua.vue")

//复习vue的学习模块
const apiFunction = () => import("./reviewVue/index.vue")
const myMine = () => import("./reviewVue/myMine.vue")
const selfInstruction = () => import("./reviewVue/selfInstruction.vue")
const all = () => import("./reviewVue/all.vue")
const mytransition = () => import("./reviewVue/mytransition.vue")
const other = () => import("./reviewVue/other.vue")
const communicat = () => import("./reviewVue/communicat.vue")

//新的测试学习模块
const another = () => import("./ceshi/index.vue")
const iframs = () => import("./ceshi/iframs.vue")
const websorketxxl = () => import("./ceshi/hellow-websorket.vue")

// import { FindPanelA, FindPanelB } from '../components/'

// 异步组件
// Vue.component('qf-async', (resolve, reject)=>{
//   setTimeout(()=>{
//     resolve({
//       template: `<div></div>`,
//       methods: {}
//     })
//   }, 2000)
// })


// 动态路由与路由传参
// 一般用于，从列表页面到详情页面传递id
// 在详情页面有两种接收路由参数的方式，一种使用 $route.params，另一种是使用props传值
const routes = [
  {
    id: 10,
    text: '首页概况',
    icon: 'el-icon-s-home',
    arr: [
      {
        id: 1001,
        path: '/',
        component: Home,
        text: '首页概况',
        name: "首页概况",
        exact: true
        // 【命名视图】当访问首页时，使用一个叫abc的视图容器来承载Home组件
        // components: {
        //   abc: Home,
        //   efg: Find,
        //   default: MusicList
        // }
      },
      {
        id: 1002,
        path: '/find',
        component: Find,
        text: '公司新闻',
        exact: false,
        name: "公司新闻",
        // 嵌套视图
        // children: [
        //   { path: '', component: FindPanelA },   // /find/
        //   { path: 't2', component: FindPanelB }    // /find/t2
        // ],
        // components: {
        //   efg: Find,
        // }
      },
      {
        id: 1003,
        text: 'TodoList',
        path: '/todo',
        name: "TodoList",
        component: Todo,
        exact: true
      },
      {
        id: 1004,
        text: '导出excel',
        path: '/excel',
        name: "导出excel",
        component: excel,
        exact: true
      }
    ]
  },
  {
    id: 11,
    text: '系统管理',
    icon: 'el-icon-setting',
    name: "系统管理",
    arr: [
      {
        id: 1101,
        // path: '/user',
        path: '/user',
        // 路由别名：你可以理解成是当前路由path的另一个容易记忆的小名
        alias: '/u',
        // 路由命名：给当前路由规则取一个名字
        name: '个人中心',
        component: User,
        text: '个人中心',
        exact: true
      },
    ]
  },
  {
    id: 12,
    text: '音乐管理',
    name: '音乐管理',
    icon: 'el-icon-platform-eleme',
    arr: [
      {
        id: 1201,
        path: '/music',
        // component: ()=>import('./music/MusicList.vue'),
        component: MusicList,
        text: '音乐列表',
        name: '音乐列表',
        exact: false
      },
      {
        id: 1202,
        text: '音乐详情',
        name: '音乐详情',
        path: '/music/detail/:id',
        component: MusicDetail,
        isNotNav: true,   // 不渲染成菜单
        // props: true
      },
    ]
  },
  {
    id: 13,
    text: '商品管理',
    name: '商品管理',
    icon: 'el-icon-goods',
    arr: [
      {
        id: 1301,
        text: '商品列表',
        path: '/good/list',
        name: '商品列表',
        component: GoodList
      },
      {
        id: 1302,
        text: '商品新增',
        name: '商品新增',
        path: '/good/add/:id',
        component: GoodAdd,
        isNotNav: true
      }
    ]
  },
  {
    id: 14,
    text: '营销中心',
    name: '营销中心',
    icon: 'el-icon-goods',
    arr: [
      {
        id: 1401,
        text: '轮播图',
        name: '轮播图',
        path: '/center/ad',
        component: Ad
      }
    ]
  },
  {
    id: 15,
    text: '预备练习',
    name: '预备练习',
    icon: 'el-icon-goods',
    arr: [
      {
        id: 1401,
        text: '20210209',
        name: '20210209',
        path: '/stard/one',
        component: stard
      },
      {
        id: 1402,
        text: '202102010',
        path: '/stard/two',
        name: '202102010',
        component: stard1
      },
      {
        id: 1403,
        text: '202103005',
        name: '202103005',
        path: '/stard/three',
        component: stard2
      },
      {
        id: 1404,
        text: '20210318',
        name: '20210318',
        path: '/stard/four',
        component: stard3
      }
    ]
  },
  {
    id: 16,
    text: '学习vue3.0',
    name: '学习vue3',
    icon: 'el-icon-goods',
    arr: [
      {
        id: 1601,
        text: '第一天的学习',
        name: '第一天的学习',
        path: '/studyvue/one',
        component: Studyvue
      },
      {
        id: 1602,
        text: '插槽的学习',
        name: '插槽的学习',
        path: '/slot',
        component: Slot
      },
      {
        id: 1603,
        text: 'lili后台',
        name: 'lili后台',
        path: '/lili',
        component: lili
      },
      {
        id: 1604,
        text: '动画学习',
        name: '动画学习',
        path: '/animate',
        component: animate
      },
      {
        id: 1605,
        text: '轮播图',
        name: '轮播图',
        path: '/mySwiper',
        component: mySwiper
      },
      {
        id: 1606,
        text: '编辑器',
        name: '编辑器',
        path: '/editor',
        component: editor
      },
      {
        id: 1607,
        text: '拖拽',
        name: '拖拽',
        path: '/drag',
        component: drag
      },
      {
        id: 1608,
        text: '动画',
        name: '动画',
        path: '/donghua',
        component: donghua
      }
    ]
  },
  {
    id: 17,
    text: '重温vue',
    name: '重温vue',
    icon: 'el-icon-goods',
    arr: [
      {
        id: 1701,
        text: '方法api',
        name: '方法api',
        path: '/apiFunction',
        component: apiFunction
      }, {
        id: 1702,
        text: '混入',
        name: '混入',
        path: '/myMine',
        component: myMine
      }, {
        id: 1703,
        text: '自定义指令',
        name: '自定义指令',
        path: '/selfInstruction',
        component: selfInstruction
      }, {
        id: 1704,
        text: 'vue总',
        name: 'vue总',
        path: '/all',
        component: all
      }, {
        id: 1705,
        text: '内置动画',
        name: '内置动画',
        path: '/mytransition',
        component: mytransition
      }, {
        id: 1706,
        text: '其他',
        name: '其他',
        path: '/other',
        component: other
      }, {
        id: 1707,
        text: '组件通信',
        name: '组件通信',
        path: '/communicat',
        component: communicat
      },
    ]
  },
  {
    id: 18,
    text: '测试',
    name: '测试',
    icon: 'el-icon-goods',
    arr: [
      {
        id: 1801,
        text: '超越',
        name: '超越',
        path: '/another',
        component: another
      }, {
        id: 1802,
        text: 'iframs',
        name: 'iframs',
        path: '/iframs',
        component: iframs
      }, {
        id: 1803,
        text: 'websorket',
        name: 'websorket',
        path: '/websorket',
        component: websorketxxl
      },
    ]
  }
]

//路由守卫
// routes.beforeEach((to, from, next) => {
//   let token = localStorage.getItem("token")
//     if (token) {
//       next()
//     } else {
//       next("/login")
//     }
// })

export default routes
