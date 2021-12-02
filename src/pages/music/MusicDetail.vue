<template>
  <div>
    <h1>音乐详情页</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    "$route.params.id": {
      handler(newVal) {
        console.log("监听的值", newVal);
        this.getData(newVal);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    getData(id) {
      console.log("请求成功了！！", id);
    },
  },
  mounted() {
    console.log("动态路由传参的值", this.$route.params);
  },
};
</script>

<style lang="css" scoped></style>
