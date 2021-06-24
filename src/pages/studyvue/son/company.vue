<template>
  <div class="company_Box">
    <div class="com_top">
      <div class="inp_box">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="inp_box">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="inp_box lastInput">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="gray"></div>
      <div class="btn" @click="tankuang">查询</div>
    </div>
    <div class="com_middle">
      <div class="inp_box">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="inp_box">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="inp_box lastInput largeinp">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="com_buttom">
      <div class="inp_box">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="inp_box">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
      <div class="inp_box lastInput largeinp">
        <span class="text">所属公司/集团：</span>
        <el-input v-model="company" placeholder="请输入内容"></el-input>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: '',
      dialogVisible: false,
    }
  },
  methods: {
    tankuang() {
      this.dialogVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #040404;
  line-height: 20px;
}
.inp_box {
  margin-top: 26px;
  margin-right: 200px;
}
.lastInput {
  margin-right: 0;
}
.largeinp {
  display: flex;
  flex-direction: column;
  .el-input {
    width: 640px;
  }
}
.el-input {
  margin-top: 8px;
}
.company_Box {
  padding-left: 24px;
  &.blur {
    filter: blur(5px);
  }
  .com_top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    .gray {
      height: 36px;
      width: 36px;
      background: #f5f5f5;
      position: relative;
      top: 25px;
      margin-left: 100px;
    }
    .btn {
      width: 94px;
      height: 36px;
      background: #498efb;
      border-radius: 4px;
      position: relative;
      top: 25px;
      margin-left: 100px;
      text-align: center;
      line-height: 36px;
      color: #fff;
      cursor: pointer;
    }
  }
  .com_middle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .com_buttom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>