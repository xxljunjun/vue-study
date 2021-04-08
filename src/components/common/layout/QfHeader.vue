<template>
<div class="qf-header">
  header
  <button @click="out">点我弹出弹窗</button>
  <button @click="out_zero">点我弹窗归零</button>

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
export default {
  data(){
    return{
      msg:"1111111",
      dialogVisible: false
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
  },
  methods:{
    out(){
      console.log("点我")
      this.$store.commit("needLogin",true)
    },
    out_zero(){
      this.$store.commit("needLogin",false)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
