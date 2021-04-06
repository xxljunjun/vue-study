<template>
<div class="qf-ad">
  <h1>广告中心</h1>
  <el-button size='mini' type="primary" @click='showModal'>新增</el-button>

  <div class="qf-table">
    <el-table
      :data="list"
      style="width: 100%">

      <el-table-column
        prop="title"
        label="活动名称"
        align='center'>
      </el-table-column>

      <el-table-column
        prop="img"
        label="图片"
        align='center'>
        <template slot-scope="scope">
          <div class="row-img">
            <img :src="$img.imgBaseUrl+scope.row.img" alt="img">
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="desc"
        align='center'
        label="活动描述">
      </el-table-column>

      <el-table-column label="操作" align='center'>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="rowHandle(scope.row, 'edit')">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="rowHandle(scope.row, 'del')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog title="新增广告" :visible.sync="visible">
    <el-form :model="form">
      <el-form-item label="活动名称" label-width="120px">
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动描述" label-width="120px">
        <el-input
          v-model="form.desc"
          type="textarea"
          :rows="2"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" label-width="120px">
        <el-upload
          :action="$img.imgUpUrl"
          :multiple='false'
          :limit='1'
          :file-list='imgArr'
          :on-success='imgSuccess'
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="modalHandle('cancel')">取 消</el-button>
      <el-button type="primary" @click="modalHandle('confirm')">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      visible: false,
      form: {
        title: '',
        img: '',
        desc: ''
      },
      list: [],
      imgArr: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$http.fetchAdList({}).then(res=>{
        console.log('广告列表', res)
        this.list = res.list
      })
    },
    // 重置modal中的表单
    resetModal() {
      this.form = {
        name: '',
        desc: '',
        img: ''
      }
      this.imgArr = []
    },
    showModal() {
      this.visible = true
    },
    imgSuccess(res) {
      console.log('图片上传成功', res)
      // 当图片上传成功，把后端返回的url信息赋值给当前表单对象
      this.form.img = res.data.url
    },
    rowHandle(row, type) {
      console.log('row', row)
      switch (type) {
        case 'edit':
          //
          break;
        case 'del':
          this.$confirm('你确定要删除这条广告吗？', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$http.fetchAdDel({id: row._id}).then(()=>{
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.init()
            })
          })
          break;
        default:

      }
    },
    modalHandle(type) {
      console.log('type', type)
      this.visible = false
      switch (type) {
        case 'confirm':
          this.$http.fetchAdAdd(this.form).then(()=>{
            console.log('添加轮播图成功')
            this.init()
            this.resetModal()
          })
          break;
        case 'cancel':
          this.resetModal()
          break;
        default:

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-ad {
  .row-img {
    &>img {
      display: block;
      width: 200px;
      height: 80px;
      margin: 0 auto;
    }
  }
}
</style>
