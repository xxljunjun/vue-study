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
    mode="vertical"
    :collapse="isCollapse"
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
      routes,
      isCollapse:false
    }
  },
  mounted(){
    this.$eventBus.$on("changeLarge",()=>{
        this.isCollapse = !this.isCollapse
    })
  },
  destroyed(){
    this.$eventBus.$off("changeLarge")
  },
  methods:{
    chooseSome(index,indexPath){
      console.log("index",index)
      console.log("indexPath",indexPath)
    },
  }
}
</script>

<style lang="scss" scoped>
  /*滚动条样式*/
/deep/.el-menu::-webkit-scrollbar {
  width:4px 
  /*height: 4px;*/
}
/deep/.el-menu::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
/deep/.el-menu::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
/deep/.el-menu {
  overflow: auto;
  height: 100%;
  overflow-x:hidden
}
/deep/.el-submenu{
  // overflow: auto;
  // height: 100% ;
}
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
  // min-width: 150px;
}
.el-submenu {
  // width: 150px;
}
</style>
