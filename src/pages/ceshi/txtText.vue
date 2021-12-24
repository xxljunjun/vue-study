<template>
  <div class="app-container">
    <el-button type="primary" @click="onClickDownDaily" @click.stop
      >txt导出</el-button
    >

    <download-excel
      class="export-excel-wrapper"
      :data="json_data"
      :fields="json_fields"
      name="远程诊断报告导出.xls"
    >
      <el-button type="primary" size="small">导出EXCEL</el-button>
    </download-excel>
    <!-- <div class="box" v-if="status" @click.stop></div> -->
    <p>---------------</p>
    <div>
      <button @click="toTXT">点我使用插件下载txt</button>
    </div>

  </div>
</template>

<script>
 import {saveAs} from 'file-saver';
import getTXT from "@/utils/getTXT.js";
import { gettxtlist } from "@/utils/xxlmock.js";
export default {
  data() {
    return {
      status: false,
      tableData: [],
      title: "",
      json_fields: {
        "头部-诊断名称": "name", //常规字段
        "头部-联系电话": "phone.mobile", //支持嵌套属性
        "头部-损坏区域代码": {
          field: "phone.landline",
          //自定义回调函数
          callback: (value) => {
            return `损坏区域代码 - ${value}`;
          },
        },
      },
      json_data: [
        {
          name: "损坏的组件一",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010",
          },
        },
        {
          name: "损坏的组件二",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244",
          },
        },
      ],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 ",
          },
        ],
      ],
    };
  },
  mounted() {
    window.addEventListener("click", this.hide);
  },
  methods: {
    toTXT(){
      var data = '要导出的内容'
      let str = new Blob([data], {type: 'text/plain;charset=utf-8'});
      // 注意这里要手动写上文件的后缀名
      saveAs(str, `导出文件时的名字.txt`);
    },
    hide() {
      this.status = false;
    },
    onClickDownDaily() {
      // this.status = !this.status;
      gettxtlist().then((res) => {
        console.log("mock数据", res);
        this.title = res.data.title;
        this.tableData = res.data.list;
        getTXT(this.title, this.tableData, "xxl");
      });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: green;
}
.txttest {
}
</style>
