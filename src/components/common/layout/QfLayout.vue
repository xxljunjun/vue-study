<template>
<div class="qf-layout">
  <el-container>
    <el-aside :width="width">
      <QfAside></QfAside>
    </el-aside>
    <el-container class="qf-container">
        <el-header height='60px'>
          <QfHeader></QfHeader>
        </el-header>
        <el-main>
          <QfMain></QfMain>
        </el-main>
    </el-container>
  </el-container>
  <!-- 消息模块 -->
  <XxlMessage/>
</div>
</template>

<script>
import XxlMessage from './xxlMessage.vue'
export default {
  data(){
    return{
      width:"150px"
    }
  },
  mounted(){
    this.$eventBus.$on("changeLarge",()=>{
      if(this.width === "150px"){
        this.width = "60px"
      }else{
        this.width = "150px"
      }
    })
  },
  destroyed(){
    this.$eventBus.$off("changeLarge")
  },
  components: {
    QfAside: ()=>import('./QfAside.vue'),
    QfHeader: ()=>import('./QfHeader.vue'),
    QfMain: ()=>import('./QfMain.vue'),
    XxlMessage
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  background: #eee;
}
.qf-layout {
  height: 100%;
}

// 左侧菜单
.el-aside {
  height: 100%;
  padding: 0;
  .qf-aside {
    background-color: #545c64;
    height: 100%;
    color: #ddd;
    overflow: hidden;
  }
}
// 顶部操作栏
.el-header {
  padding: 0;
  width: 100%;
  .qf-header {
    background-color: white;
    line-height: 60px;
    padding-left: 20px;
    width: 100%;
  }
}
// 主体内容
.el-main {
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
  overflow: auto;
  // padding: 15px;
  // padding-bottom: 10px;
  // padding-right: 10px;
  padding: 0;
  .qf-main {
    box-sizing: border-box;
    // padding: 20px;
    // background-color: white;
    min-width: 900px;
    padding-bottom: 50px;
  }
}






</style>
