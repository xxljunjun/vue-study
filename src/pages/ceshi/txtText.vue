<template>
  <div class="app-container">
    <el-button type="primary" @click="onClickDownDaily">txt导出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          time: "20200901",
          who: "大成基金管理有限公司",
          type: "XIAOSHOU_FEE|N",
          isout: "N",
          code: "000128",
          name: "大成景安短融债券A",
          has: "Y",
          edu: "2663820.73",
          danwei: "1.2687",
          feilv: "0.003",
          percent: "10%",
          money: "27.7",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // 20200901|大成基金管理有限公司|XIAOSHOU_FEE|N|000128|大成景安短融债券A|Y|2663820.73|1.2687|0.003||27.7
    // txt文件导出
    onClickDownDaily() {
      var title =
        "计提日期|机构名称|费用类型|是否中登|基金代码|基金名称|是否公开基金|保有份额|单位净值|费率|分成比例|费用金额";
      var str = "";
      this.tableData.forEach((item) => {
        str +=
          item.time +
          "|" +
          item.who +
          "|" +
          item.type +
          "|" +
          item.isout +
          "|" +
          item.code +
          "|" +
          item.name +
          "|" +
          item.has +
          "|" +
          item.edu +
          "|" +
          item.danwei +
          "|" +
          item.feilv +
          "|" +
          item.percent +
          "|" +
          item.money +
          "\r\n";
      });
      var allStr = title + "\r\n" + str;
      var export_blob = new Blob([allStr]);
      var save_link = document.createElement("a");
      save_link.href = window.URL.createObjectURL(export_blob);
      save_link.download = "导出" + ".txt";
      this.fakeClick(save_link);
    },
    fakeClick(obj) {
      var ev = document.createEvent("MouseEvents");
      ev.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      obj.dispatchEvent(ev);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.txttest {
}
</style>
