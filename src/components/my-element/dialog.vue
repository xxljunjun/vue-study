<template>
	<div class="my_dialog">
		<el-dialog
			:title="dialogTitle"
			:visible.sync="dialogVisible"
			:width="popupWidth"
			:before-close="handleClose"
		>
		<slot>
			<p>弹框自定义的内容</p>
		</slot>
		<span slot="footer" class="dialog-footer">
			<el-button @click="Cancel">取 消</el-button>
			<el-button type="primary" @click="Save">确 定</el-button>
		</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
  props: {
    dialogTitle: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: false
    },
    popupWidth: {
      type: String,
      default: '550px'
    }
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        // 当visible改变的时候，触发父组件的 updateVisible方法，在该方法中更改传入子组件的 centerDialogVisible的值
        this.$emit('updateVisible', val)
      }
    }
  },
  methods: {
    Cancel () {
      this.$emit('resetPopupData')
    },
    Save () {
      this.$emit('submitPopupData')
    },
    handleClose () {
      this.$emit('handleClose')
    }
  }
}
</script>

<style lang="less">
.my_dialog {
  width: 550px;
  .el-dialog {
    z-index: 10000;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(17, 130, 251, 0.5);
    border-radius: 5px;
    margin-top: 10% !important;
  }
  .el-dialog__header {
    width: 100%;
    height: 40px;
    line-height: 38px;
    border-bottom: 1px solid #f6f7f9;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 16px;
  }
  .el-dialog__close.el-icon.el-icon-close {
    font-size: 20px;
    width: 17px;
    height: 17px;
  }
  .el-button.el-button--default {
    width: 88px;
    color: #1182fb;
    border: 1px solid #1182fb;
  }
  .el-button.el-button--primary {
    width: 88px;
  }
  .el-dialog__body {
    padding: 24px 32px;
    box-sizing: border-box;
  }
  .el-dialog__headerbtn {
    top: 4px;
  }
  .el-dialog__title {
    color: #3c4354;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    line-height: 16px;
  }
  .el-dialog__footer {
    text-align: center;
  }
}
</style>