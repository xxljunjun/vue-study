<template>
<div class="qf-aside">
  <div class="qf-logo">
    <img :src="$img.logo" alt="logo">
  </div>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    :unique-opened='true'
    active-text-color="#ffd04b"
    @select="chooseSome"
  >
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
  },
  mounted(){
    console.log("routes",this.routes)
  },
  methods:{
    chooseSome(index,indexPath){
      console.log("index",index)
      console.log("indexPath",indexPath)
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
  position: relative;
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
