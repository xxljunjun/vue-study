<template>
  <div class="fundCode">
    <h4>echarts图片转bast64格式</h4>
    <div style="width:800px;height:500px;" id="chart"></div>
    <p>---------</p>
    <img :src="imgsrc" alt="111" />
  </div>
</template>

<script>
/*
  import * as from “…”语法
  把一个文件中export的所有变量，包装成一个对象。
*/
import * as echarts from "echarts";
export default {
  components: {},
  data() {
    return {
      imgsrc: "",
    };
  },
  mounted() {
    var chart = echarts.init(document.getElementById("chart"));
    var option = {
      animation: false,
      title: {
        text: "统计",
        padding: [10, 320, 0, 320],
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        name: "月份",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} : {c}",
      },
      yAxis: {
        type: "value",
        name: "数量",
      },
      series: [
        {
          name: "数量",
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          barWidth: 50, //柱图宽度
          label: {
            show: true,
            position: "top",
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#4976C5" },
              { offset: 0.5, color: "#7496D3" },
              { offset: 1, color: "#ECF0F9" },
            ]),
          },
        },
      ],
    };
    chart.setOption(option);

    //获取echarts图表的base64地址
    var baseImage = chart.getDataURL("png");
    console.log("图片", baseImage);
    this.imgsrc = baseImage;
  },
};
</script>

<style lang="scss" scoped>
.fundCode {
}
</style>
