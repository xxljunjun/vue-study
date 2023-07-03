<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <div class="dialog-box">
      ID<el-input :disabled="isEdit" v-model="seachObj.id" placeholder="请输入内容"></el-input>
      SEX<el-input v-model="seachObj.sex" placeholder="请输入内容"></el-input>
      name<el-input v-model="seachObj.name" placeholder="请输入内容"></el-input>
    </div>
    <!-- elementui自带的插槽 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancle()">取 消</el-button>
      <el-button type="primary" @click="comfire()">确 定</el-button>
    </span>
    <!-- elementui自带的插槽 -->
  </el-dialog>
</template>
<script>
import {
  addUser,
  queryUserById,
  editUser
} from '@/api/user.js'
export default {
  data() {
    return {
      seachObj:{
        id:'',
        sex:'',
        name:'',
      },
    };
  },
  props: {
    //控制弹窗的显示与隐藏
    status: {
      type: Boolean,
      default: false,
    },
    //是编辑还是新增
    isEdit: {
      type: Boolean,
      default: false,
    },
    //回填的编辑数据
    editData:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  watch:{
    status:{
        handler(newVal){
            console.log('弹窗的状态',newVal)
            this.resetData()
            if(this.isEdit){
                this.backData()
            }
        },
        // immediate:true,  //如果为true组件加载时就会触发
        // deep:true  //监听对象或者数组的变化才要用
    }
  },
  computed: {
    dialogVisible: {
      //因为props传递进来的参数不能直接在组件中修改，所以用computed
      get() {
        return this.status;
      },
      set(val) {
        this.$emit("update:status", val);
      },
    },
    title(){
      //弹窗显示的标题
      return this.isEdit?'编辑':'新增'
    }
  },
  methods: {
    /**
     * 编辑时回填
     */
   async  backData(){
      console.log('需要回填的信息',this.editData)
      const {id} = this.editData
      //回填
      const {data} = await queryUserById({id})
     Object.entries(data).forEach(val=>{
      this.seachObj[val[0]] = val[1]
     })
    },
    /**
     * 打开弹窗重置弹窗数据
     */
    resetData(){
      this.seachObj = {
        id:'',
        name:'',
        sex:''
      }
    },
    /**
     * return ture false
     * 返回 ture弹窗关闭
     * 返回 false弹窗不关闭
     */
    handleClose() {
      return true;
    },
    /**
     * 点击确认按钮
     */
    async comfire() {
      const {id,name,sex} = this.seachObj
      let params = {
        id,
        name,
        sex
      }
      if(this.isEdit){
        const res1 =  await editUser(params)  //newAdd是新增接口或者编辑接口
        this.$emit("on-comfire");
        this.$emit("update:status", false); 
        return
      }
      const res =  await addUser(params)  //newAdd是新增接口或者编辑接口
      console.log('res',res)
      // if(res.code == 200){
        // 触发父组件on-comfire
        this.$emit("on-comfire");
        this.$emit("update:status", false);
      // }
    },
    /**
     * 点击取消按钮
     */
    cancle() {
      //关闭弹窗
      this.$emit("update:status", false);
      //触发父组件on-cancle
      this.$emit("on-cancle");
    },
  },
};
</script>
<style lang="scss" scoped>
// .dialog-box{}
</style>
