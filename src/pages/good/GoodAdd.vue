<template>
<div class="qf-good-add">
  <div v-if='id==0'>商品新增</div>
  <div v-else>商品编辑</div>

  <div class="qf-form">

    <el-form
      :model="info"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="info.name"></el-input>
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input type="textarea" v-model="info.desc"></el-input>
      </el-form-item>

      <el-form-item label="选择品类" prop="cate">
        <!-- v-model = v-bind:value + v-on:input -->
        <CateSelect v-model='info.cate'></CateSelect>
        <!-- <CateSelect :value='info.cate' @input='cateChange'></CateSelect> -->
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input-number
          v-model="info.price" :min="0" label="商品价格"></el-input-number>
      </el-form-item>

      <el-form-item label="商品图片" prop="img">
        <!-- action是用于上传文件（图片）的URL -->
        <!-- :on-success是图片上传成功时的回调函数 -->
        <el-upload
          :action="$img.imgUpUrl"
          list-type="picture-card"
          :multiple='false'
          :limit='1'
          :file-list='imgArr'
          :on-success='imgSuccess'
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="info.img" alt="img">
        </el-dialog>
      </el-form-item>


      <el-form-item label="是否热销" prop="hot">
        <el-switch v-model="info.hot"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">
          <span v-if='id==0'>添加商品</span>
          <span v-else>添加编辑</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import { CateSelect } from '@/components/'
export default {
  name: 'GoodAdd',
  components: {
    CateSelect
  },
  computed: {
    id: function() {
      return  this.$route.params.id
    }
  },
  data: function() {
    return {
      info: {
        name: '',
        desc: '',
        hot: false,
        cate: '',
        price: 0,
        img: ''
      },
      imgArr: [],
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写商品描述', trigger: 'blur' },
          { min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur' }
        ],
        cate: [
          { required: true, message: '请选择商品品类', trigger: 'change' }
        ]
      },
      dialogVisible: false
    }
  },
  mounted() {
    let id = this.id
    if(id!=0) {
      this.$http.fetchGoodInfo({id: this.id}).then(res=>{
        console.log('商品详情', res)
        this.info = res
        this.imgArr = [{name:'',url: this.$img.imgBaseUrl+res.img}]
      })
    }
  },
  methods: {
    imgSuccess(res) {
      console.log('图片上传成功', res)
      // 当图片上传成功，把后端返回的url信息赋值给当前表单对象
      this.info.img = res.data.url
    },
    submitForm() {
      console.log('商品信息', this.info)
      let info = this.info
      // 编辑时，一定要传当前数据id
      if(this.id!=0) {
        info.id = this.id
      }
      this.$http.fetchGoodAddOrEdit(info).then(()=>{
        // 当商品添加成功时，跳转到商品列表页
        this.$router.replace('/good/list')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-form {
  width: 60%;
  margin-top: 30px;
  & .el-upload.el-upload--picture-card {
    width: 80px;
    height: 80px;
  }
}

</style>
