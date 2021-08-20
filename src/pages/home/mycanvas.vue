<template>
  <div class="mycanvas">
    <canvas id="myCanvas" width="200" height="200"></canvas>
    <canvas id="myCanvas_1" width="200" height="200"></canvas>
    <canvas id="tutorial" width="200" height="200"></canvas>
    <canvas id="solar" width="500" height="500"></canvas>
  </div>
</template>

<script>
let sun;
let earth;
let moon;
let ctx;
export default {
  data() {
    return {};
  },
  mounted() {
    this.canvasInit();
    this.canvasInit_1();
    this.draw_1();
    this.init_1();
    this.draw()
  },
  methods: {
    canvasInit() {
      //首先，找到 <canvas> 元素:
      var c = document.getElementById("myCanvas");
      //检测浏览器的支持性
      if (!c.getContext) return;
      //然后，创建 context 对象：
      var ctx = c.getContext("2d");

      //设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）。
      ctx.fillStyle = "#FF0000";
      //illRect(x,y,width,height) 方法定义了矩形当前的填充方式。
      ctx.fillRect(0, 0, 150, 75); //绘制一个填充的矩形。
      //ctx.trokeRect(x, y, width, height) //绘制一个矩形的边框。
      //ctx.clearRect(x, y, widh, height); //清除指定的矩形区域，然后这块区域会变的完全透明

      //画线
      ctx.moveTo(0, 0); //开始坐标
      ctx.lineTo(150, 75); //结束坐标
      ctx.stroke(); //绘制线条:

      //画圆
      //arc(x,y,r,start,stop)画圆
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();

      //写字
      // ctx.font="30px Arial";
      // ctx.fillText("Hello World",10,50);
      ctx.font = "30px Arial";
      ctx.strokeText("Hello World", 10, 50);
    },
    canvasInit_1() {
      //首先，找到 <canvas> 元素:
      var c = document.getElementById("myCanvas_1");
      //然后，创建 context 对象：
      var ctx = c.getContext("2d");

      //createLinearGradient(x,y,x1,y1) - 创建线条渐变
      //createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
      // 创建渐变
      var grd = ctx.createLinearGradient(0, 0, 200, 0);
      grd.addColorStop(0, "red");
      grd.addColorStop(1, "white");
      // 填充渐变
      ctx.fillStyle = grd;
      ctx.fillRect(10, 10, 150, 80);

      //填充图片
      // var img=document.getElementById("scream");
      // ctx.drawImage(img,10,10);
    },
    draw_1() {
      var canvas = document.getElementById("tutorial");
      if (!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
      ctx.beginPath(); //新建一条path
      ctx.lineWidth = 10;
      ctx.moveTo(50, 50); //把画笔移动到指定的坐标
      ctx.lineTo(200, 50); //绘制一条从当前位置到指定坐标(200, 50)的直线.
      //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
      ctx.closePath();
      ctx.stroke(); //绘制路径。
    },
    init_1() {
      sun = new Image();
      earth = new Image();
      moon = new Image();
      sun.src = "../../assets/logo.png";
      earth.src = "../../assets/logo.png";
      moon.src = "../../assets/logo.png";

      let canvas = document.querySelector("#solar");
      ctx = canvas.getContext("2d");

      sun.onload = function () {
        this.draw();
      };
    },
    draw() {
      ctx.clearRect(0, 0, 300, 300); //清空所有的内容
      /*绘制 太阳*/
      ctx.drawImage(sun, 0, 0, 300, 300);

      ctx.save();
      ctx.translate(150, 150);

      //绘制earth轨道
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,0,0.5)";
      ctx.arc(0, 0, 100, 0, 2 * Math.PI);
      ctx.stroke();

      let time = new Date();
      //绘制地球
      ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
          ((2 * Math.PI) / 60000) * time.getMilliseconds()
      );
      ctx.translate(100, 0);
      ctx.drawImage(earth, -12, -12);

      //绘制月球轨道
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,.3)";
      ctx.arc(0, 0, 40, 0, 2 * Math.PI);
      ctx.stroke();

      //绘制月球
      ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
          ((2 * Math.PI) / 6000) * time.getMilliseconds()
      );
      ctx.translate(40, 0);
      ctx.drawImage(moon, -3.5, -3.5);
      ctx.restore();

    //   requestAnimationFrame(this.draw());
    },
  },
};
</script>

<style lang="scss" scoped>
.mycanvas {
  padding: 20px;
}
</style>