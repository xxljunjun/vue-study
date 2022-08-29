<template>
  <div class="myElment" style="height:5000px;">
    <!-- <el-alert type="success" show-icon>
      <template slot="default">
        通过decration中的slot写的
      </template>
      <template slot="title">
        成功提示的文案
      </template>
    </el-alert> -->
    <el-backtop target=".el-main" :bottom="100">
      <div>
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {},
  mounted() {
    debugger;
  },
};
</script>

<style lang="css" scoped>
.myElment {
}
</style>
