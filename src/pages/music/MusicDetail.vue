<template>
<div>
  <h1>音乐详情页</h1>
</div>
</template>

<script>
export default {
  // 使用props来接收路由中的动态参数
  // props: {
  //   id: {
  //     type: String,
  //     required: true
  //   }
  // },
  mounted() {
    let id = this.$route.params.id
    // 根据id来调接口，获取音乐详情
    console.log('音乐id', id)
  }
}
</script>

<style lang="css" scoped>
</style>
