<template>
<div class="qf-header">
  <button @click="out" class="btn">点我弹出弹窗</button>
  <button @click="out_zero" class="btn">点我弹窗归零</button>
  <span class="box">
    利用event-bus组件之前的通信：{{event_number}}
  </span>
  <button @click="eventbusthing" class="btn">eventbus兄弟组件通信</button> 
  <router-link :to="{ path: '/login'}" replace>跳转登录页面</router-link>
  <!-- 模拟登录弹窗 -->
  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import {EventBus} from "@/event-bus.js"
export default {
  data(){
    return{
      msg:"1111111",
      dialogVisible: false,
      event_number:10,
    }
  },
  watch:{
    "$store.state.status":{
      handler(newVal, oldVal) {
        console.log("控制弹窗新",newVal)
        console.log("控制弹窗旧",oldVal)
        if (newVal > 0) {
          this.dialogVisible = true
        }
      },
      // immediate: true,
      // deep: true,
    }
  },
  mounted(){
    // console.log("vuex的状态管理工具",this.$store)
    EventBus.$on("changeNum",(val)=>{
      console.log(val)
      this.event_number++
    })
    this.$eventBus.$on("change",(val)=>{
      console.log(val)
      this.event_number--
    })

    // //字符串
    // router.push('home')
    // // 对象
    // router.push({ path: 'home' })
    // // 命名的路由
    // router.push({ name: 'user', params: { userId: '123' }})
    // // 带查询参数，变成 /register?plan=private
    // router.push({ path: 'register', query: { plan: 'private' }})
  },
  destroyed(){
		EventBus.off("changeNum")
    this.$eventBus.$off("change")
	},
  methods:{
    out(){
      console.log("点我")
      this.$store.commit("needLogin",true)
    },
    out_zero(){
      this.$store.commit("needLogin",false)
    },
    eventbusthing(){
      this.event_number++
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-header{
  color: #000;
  .btn{
    margin-right: 20px;
  }
  .box{
    margin-right: 20px;
  }
}
</style>
