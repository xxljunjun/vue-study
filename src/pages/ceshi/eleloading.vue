<template>
  <div class="eleloading">
    <el-button v-loading="loading" @click="enter">默认按钮</el-button>
    <el-image style="width: 200px; height: 200px" :src="url">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      url:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      //   url: "../../assets/logo.png",
    };
  },
  methods: {
    enter() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.eleloading {
  .image-slot {
    height: 200px;
    width: 200px;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
