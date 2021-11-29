<template>
  <div class="other">
    <!--111-->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">111111111</el-menu-item>
      <el-menu-item index="2">2222222222</el-menu-item>
      <el-menu-item index="3">333333333</el-menu-item>
    </el-menu>
    <!--2222222-->
    <div class="item_box">
      <div
        v-for="(item, index) in arr"
        :key="index"
        class="item"
        :class="{ active: item.istrue }"
        @click="chooseItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <!--3333333-->
    <div class="box">
      {{ data }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      arr: [
        { id: 1, name: "444", istrue: true },
        { id: 2, name: "555", istrue: false },
      ],
      data: "需要展示的数据1",
    };
  },
  components: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.arr = [
            { id: 1, name: "666", istrue: true },
            { id: 2, name: "777", istrue: false },
          ];
            //发送http请求
          this.data = '需要展示的数据3'
          break;
        case "2":
          this.arr = [
            { id: 1, name: "888", istrue: true },
            { id: 2, name: "999", istrue: false },
          ];
          this.data = '需要展示的数据4'
          break;
        case "3":
          this.arr = [
            { id: 1, name: "xxl", istrue: true },
            { id: 2, name: "junjun", istrue: false },
          ];
          //发送http请求
          this.data = '需要展示的数据5'
          break;
      }
    },
    chooseItem(item) {
      if (item.id == 1) {
        this.data = '需要展示的数据1'
      }else{
        this.data = '需要展示的数据2'
      }

      this.arr.forEach((val) => {
        val.istrue = false;
        if (val.id == item.id) {
          item.istrue = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.other {
  color: #000;
}
.item_box {
  display: flex;
  .item {
    margin-right: 100px;
    cursor: pointer;
    &.active {
      border-bottom: 1px solid red;
    }
  }
}
.box {
  margin-top: 50px;
}
</style>