<template>
  <div>
    <h1 class="disabled">测试stard</h1>
    <el-button type="primary">主要按钮</el-button>
    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <div class="checkBox">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <div style="margin: 15px 0"></div>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <el-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>
    <el-cascader :props="props"></el-cascader>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <el-transfer v-model="value" :data="data"></el-transfer>
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <a href="http://localhost:8080/images/11.mp4" download>视频</a>
    <a href="@/assets/logo.png" download="haoroom前端博客图片下载">照片</a>
    
<a href="http://www.xx.com/virtualPath/facility/document/2018/07/09/44a9a76a-084a-415a-9d50-e26ea28b55ce/0b48ed694ef510393ad2e829d6ec2fad.jpg" download>网络下载</a>
  </div>
</template>

<script>
let id = 0;
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      radio: "1",
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      num: 1,
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(() => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2,
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        },
      },
      //   value: true,
      //   value1: 0,
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      data: generateData(),
      value: [1, 4],
    };
  },
  components: {},
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    handleChange(value) {
      console.log(value);
    },
    goBack() {
      console.log("go back");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>