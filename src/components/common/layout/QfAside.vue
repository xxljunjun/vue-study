<template>
<div class="qf-aside">
  <div class="qf-logo">
    <img :src="$img.logo" alt="logo">
  </div>
  <!-- <a href="/#/home">首页概况</a>
  <a href="/#/find">公司动态</a>
  <a href="/#/user">个人中心</a> -->

  <!-- 声明式路由导航 -->
  <!-- router-link被编译以后，默认被渲染成 a 标签 -->
  <!-- <div v-for='nav in routes' :key='nav.id'>
    <router-link
      :to='nav.path'
      tag='div'
      :exact='nav.exact'
      active-class='on'
      v-text='nav.text'
      v-if='!nav.isNotNav'
    >
    </router-link>
  </div> -->

  <el-menu
    background-color="#545c64"
    text-color="#fff"
    :unique-opened='true'
    active-text-color="#ffd04b">
    <!-- 一层循环 -->
    <el-submenu v-for='group in routes' :key='group.id' :index="group.id+''">
      <template slot="title">
        <i :class="group.icon"></i>
        <span v-text='group.text'></span>
      </template>
      <!-- 二层循环 -->
      <div v-for='nav in group.arr' :key='nav.id'>
        <el-menu-item
          v-if='!nav.isNotNav'
          :index="nav.id+''">
          <router-link  :to='nav.path' v-text='nav.text' tag='div'></router-link>
        </el-menu-item>
      </div>
    </el-submenu>
  </el-menu>

</div>
</template>

<script>
import routes from '@/pages/'

export default {
  data: function() {
    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-aside {
  background: rgba(84, 92, 100, 1);
  height: 100%;
  color: white;
  top: 0;
  right:0;
  left: 0;
  bottom: 0;
  overflow: auto;
}
.qf-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  margin: 20px auto;
  overflow: hidden;
  &>img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.el-menu-item {
  min-width: 150px;
}
.el-submenu {
  width: 150px;
}
</style>
