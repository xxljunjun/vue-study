<template>
  <div class="qf-header">
    <button @click="out" class="btn">点我弹出弹窗</button>
    <button @click="out_zero" class="btn">点我弹窗归零</button>
    <span class="box"> 利用event-bus组件之前的通信：{{ event_number }} </span>
    <button @click="eventbusthing" class="btn">eventbus兄弟组件通信</button>
    <router-link :to="{ path: '/login' }" replace>跳转登录页面</router-link>
    <button @click="toMaxMull" class="btnall">点我全屏</button>
    <!-- 你有几条未读的消息 -->
    <el-tooltip
      class="item"
      effect="dark"
      content="你有两条未读消息"
      placement="bottom"
    >
      <el-badge is-dot class="item" title="你在干嘛">
        <img src="@/assets/lingdang.png" alt="" class="lingdang" @click="clickOpenMessage">
      </el-badge>
    </el-tooltip>
    <button @click="toMesssage" class="btn">点我弹出消息提示</button>
    <!-- <button @click="toDialog" class="btn">点我弹出二次封装的dialog</button> -->
    <!-- <button @click="toAhide" class="btn">点我导航缩放</button> -->
    <!-- 模拟登录弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible1"
      width="30%"
      v-dialogDrag
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 二次封装的弹窗 -->
    <Dialog
      :dialogTitle="dialogTitle"
      :visible.sync="dialogVisible"
      @updateVisible="updateVisible"
      @resetPopupData="resetPopupData"
      @submitPopupData="submitPopupData"
      @handleClose="handleClose"
      :popupWidth="'550px'"
    >
      <div
        style="
          height: 150px;
          font-size: 16px;
          color: #3c4354;
          font-family: PingFangSC-Medium;
        "
      >
        你要是不满意的话还可以更换的一个样式或者是弹窗的大小之类的
      </div>
    </Dialog>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus.js";
import Dialog from "@/utils/my-element/dialog.vue";
export default {
  data() {
    return {
      msg: "1111111",
      dialogVisible1: false,
      event_number: 10,
      fullscreen: false,
      dialogVisible: false, // 弹框的出现与否
      dialogTitle: "这是小溪流二次封装的dialog组件", // 标题
    };
  },
  components: {
    Dialog,
  },
  watch: {
    "$store.state.status": {
      handler(newVal, oldVal) {
        console.log("控制弹窗新", newVal);
        console.log("控制弹窗旧", oldVal);
        if (newVal > 0) {
          this.dialogVisible1 = true;
        }
      },
      // immediate: true,
      // deep: true,
    },
  },
  mounted() {
    // console.log("vuex的状态管理工具",this.$store)
    EventBus.$on("changeNum", (val) => {
      console.log(val);
      this.event_number++;
    });
    this.$eventBus.$on("change", (val) => {
      console.log(val);
      this.event_number--;
    });

    // //字符串
    // router.push('home')
    // // 对象
    // router.push({ path: 'home' })
    // // 命名的路由
    // router.push({ name: 'user', params: { userId: '123' }})
    // // 带查询参数，变成 /register?plan=private
    // router.push({ path: 'register', query: { plan: 'private' }})
  },
  destroyed() {
    EventBus.off("changeNum");
    this.$eventBus.$off("change");
    this.$eventBus.$off("changeLarge")
  },
  methods: {
    clickOpenMessage(){
      console.log("点击打开消息通知")
      let {mesageStatus} = this.$store.state

      this.$store.commit('openDialog',!mesageStatus)
    },
    toAhide(){
      this.$eventBus.$emit("changeLarge")
    },
    toDialog(){
      this.dialogVisible = true
    },
    // 修改是否让页面显示与隐藏的事件
    updateVisible(val) {
      this.dialogVisible = val;
    },
    // 点击取消的事件
    resetPopupData() {
      //  这里可重置数据
      this.dialogVisible = false;
    },
    // 点击确定的按钮
    async submitPopupData() {
      this.dialogVisible = false;
    },
    // 关闭弹框（头部的X）
    handleClose() {
      this.dialogVisible = false;
    },
    toMesssage() {
      this.$MessageBox.MessageInfo();
    },
    out() {
      console.log("点我");
      this.$store.commit("needLogin", true);
    },
    out_zero() {
      this.$store.commit("needLogin", false);
    },
    eventbusthing() {
      this.event_number++;
    },
    toMaxMull() {
      //screenfull的插件也能实现
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>

<style lang="scss" scoped>
.qf-header {
  color: #000;
  .lingdang{
    height: 30px;
    width: 30px;
  }
  .btn {
    margin-right: 20px;
    cursor: pointer;
  }
  .box {
    margin-right: 20px;
  }
  .btnall {
    margin-left: 20px;
    cursor: pointer;
  }
}
.item {
  line-height: 30px;
  margin-left: 20px;
  margin: 0 20px;
  cursor: pointer;
}
</style>
