<template>
<div class="qf-main">
  <div class="daohang"> 
    <div v-for="(item,index) in routerArr" :key="index">
      <span @click="toCurrent_router(item.path)" :class="item.path==$route.fullPath?'router_box blue_box':'router_box'">
        {{item.name}}
        <span class="close" @click.stop="close_router(item.path)">x</span>
      </span>
    </div>
    <!-- 关闭所有 -->
    <div class="close_All">
      
      <el-dropdown  @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">关闭其他标签</el-dropdown-item>
          <el-dropdown-item command="b">关闭所有标签</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
  <!-- 视图容器 -->
  <!-- 它的作用是，把URL所匹配成功的组件显示出来 -->
  <router-view name='default'></router-view>
  <!-- <router-view name='abc'></router-view>
  <router-view name='efg'></router-view> -->
</div>
</template>

<script>
export default {
  data(){
    return{
      routerArr:[],
    }
  },
  watch:{
    "$route.path":{
      handler(){
        let values = {
          name:this.$route.name,
          path:this.$route.fullPath
        }
        
        if(this.routerArr.length>0){
          let isTrue =true
          this.routerArr.forEach(val => {
            if(val.path === values.path){
              isTrue = false
            }
          })
          if(isTrue){
            this.routerArr.push(values)
            isTrue = true
          }
        }else{
          this.routerArr.push(values)
        }
        
      }
    },
    deep: true,
  },
  methods:{
    close_router(val){
      if(this.routerArr.length == 1){
        return
      }
      this.routerArr = this.routerArr.filter(item=>{
        return item.path !== val
      })
      let index = this.routerArr.length-1
      this.$router.push({path:this.routerArr[index].path})
    },
    toCurrent_router(val){
      this.$router.push({path:val})
    },
    handleCommand(command){
      if(command === "a"){
        //关闭其他
        let currentVal = {
          name:this.$route.name,
          path:this.$route.fullPath
        }
        this.routerArr = this.routerArr.filter(item=>{
          return item.path == currentVal.path
        })
      }else if(command === "b"){
        //关闭所有
        this.$router.push({path:"/"})
        this.routerArr = []
      }
    }
  },
  mounted(){
    if(this.$route.fullPath === "/"){
      this.routerArr.push({
        name:"首页概况",
        path:"/"
      })
    }else{
      this.routerArr.push({
          name:this.$route.name,
          path:this.$route.fullPath
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.qf-main{
  margin: 20px;
 
} 
.daohang{
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background: #eee;
  .router_box{
    display: inline-block;
    width: 100px;
    height: 30px;
    background: #ccc;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    line-height: 30px;
    color:#fff;
    margin-right: 10px;
    .close{
      position: absolute;
      right: 15px;
    }
  }
  .close_All{
    position: absolute;
    right: 100px;
  }
  .blue_box{
    background: #545c64;
  }
}
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
