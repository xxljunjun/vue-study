<template>
  <div class="home">
    <div id="main"></div>
    <div>{{this.mainNum}}</div>
    <div id="main_1"></div>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
    </el-steps>
    <div class="step_1" v-if="this.active==1">
      <Step1 
        :stepNum.sync="stepNum"
        @setNum="tochangs"
      />
    </div>
    <div class="step_2" v-else>
      <Step2/>
    </div>
    <el-button 
      style="margin-top: 12px;" 
      @click="next" v-text="this.active==1?'下一步':'上一步'"
    >
    </el-button>
    <el-button 
      style="margin-top: 12px;" 
      v-if="this.active==2"
    >
    预览
    </el-button>
    <el-button 
      style="margin-top: 12px;" 
       v-if="this.active==2"
    >
    提交
    </el-button>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Step1 from "@/pages/home/components/Step1.vue"
import Step2 from "@/pages/home/components/Step2.vue"
export default {
  data() {
    return {
      pingleiArr:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      active: 1,
      stepNum:1,
    };
  },
  components: {
    Step1,
    Step2
  },
  mounted() {
    this.initEchart();
    this.initEchart_1()
  },
  methods: {
    next(){
      console.log(this.active)
       if (this.active++ > 1) this.active = 1;
    },
    tochangs(){
      this.stepNum++
    },
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
#main_1{
  height: 600px;
  width: 500px;
}
</style>
