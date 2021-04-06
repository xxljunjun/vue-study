<template>
<div class="qf-app">
    <!-- 登录页和Layout（系统内页）是有你无我的。他俩敌人（兄弟）关系。
    但是Login页面也需要通过 /#/login 路由的方式进行访问，把需要把 Login加入到路由系统中。
    为了避免Login 和 其它所谓的 pages 页面抢那个名字叫default的椅子（router-view）。
    所以，当我们把Login加入到路由系统中时，给它一个VIP专座（名字叫login的router-view）来展示，放在App.vue中。
    它俩的胜负关系，由$route.path==='/login'来决定胜负。 -->
    <router-view v-if='$route.path==="/login"' name='login'></router-view>
    <QfLayout v-else></QfLayout>
</div>
</template>

<script>

import {  QfLayout } from '@/components/'

export default {
  name: 'App2',
  components: {
    QfLayout,
  },
  data: function() {
    return {
      foo: 'hello foo'
    }
  },
  // 监听路由的变化
  watch: {
    // $route: function(to, from) {
    //   console.log('url发生了变化', to, from)
    // }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.qf-app {
  height: 100%;
}
/* 所有搜索和筛选的文字提示向右靠齐 */
.qf-filter-label {
  text-align: right;
  padding-right: 10px;
}
.el-row {
  margin-bottom: 25px;
}
</style>
