<template>
  <div class="home">
    <div id="main"></div>
    <div id="main_1"></div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import * as echarts from "echarts";
export default {
  data() {
    return {
      pingleiArr: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    };
  },
  components: {},
  mounted() {
    console.log("唯一值", nanoid);
    this.initEchart();
    this.initEchart_1();
  },
  methods: {
    initEchart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: this.pingleiArr,
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    initEchart_1() {
      var chartDom = document.getElementById("main_1");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="css" scoped>
/* .home {
  height: 900px;
} */
#main {
  height: 500px;
  width: 500px;
}
#main_1 {
  height: 600px;
  width: 500px;
}
</style>
