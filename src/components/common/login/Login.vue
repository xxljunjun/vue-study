<template>
<div class="qf-login">
  <div class="qf-login-wrap">
    <el-form :model="user" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密 码" prop="password">
        <el-input show-password v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z][a-zA-Z0-9]{1,9}$/, message: '用户名格式不对', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^[a-zA-Z][a-zA-Z0-9]{5,17}$/, message: '密码格式不对', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginSubmit() {
      console.log('user', this.user)
      // 调登录接口
      this.$http.fetchLogin(this.user).then(res=>{
        console.log('login res', res)
        // 第一步：把token存储在localStorage中
        localStorage.setItem('token', res.token)
        // 第二步：跳转到系统内部首页
        this.$router.history.replace('/')

        // token是后端根据用户登录信息生成的加密字符串，用于鉴权（识别用户身份）
        // 它之所以流利，是因为安全。它是固定长度的，由三个部分组成，分别是加密算法、用户信息、密钥。
        // 在管理系统中，一般情况下，除了登录接口之外，所以其它接口都需要进行token验证。
        // 当后端验证token成功，才会查询数据给你想要的数据。
        // 那前端该如何登录成功时的token传递给后端呢？
        // config.headers.Authorization = localStorage.getItem('token')
        // 当token失败（后端验证它失败时），后端一般会提示前端token失败。此时，前端要在响应拦截器重定向到登录页。
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(84, 92, 100, 1);
  .qf-login-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 550px;
    margin-left: -275px;
    background: white;
    padding: 25px;
    box-sizing: border-box;
    border-radius: 10px;
    height: 214px;
    margin-top: -107px;
  }
}
</style>
