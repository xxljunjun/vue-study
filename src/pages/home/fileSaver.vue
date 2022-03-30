<template>
  <div class="find">
    <h2>file-saver插件的使用</h2>
    <button @click="downTxt">点我下载txt文件</button>
    <button @click="downImg">点我下载pdf文件</button>
    <button @click="downCanvase">点我下载canvase</button>
    <div id="my-canvas"></div>
  </div>
</template>

<script>
import { saveAs } from "file-saver";
export default {
  data: function() {
    return {};
  },
  mounted() {},
  methods: {
    downTxt() {
      let allStr = "111111111111111" + "\r\n" + "2222222222222";
      let export_blob = new Blob([allStr], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(export_blob, "小溪流.txt");
    },
    downImg() {
      saveAs("https://httpbin.org/image", "image.jpg");
    },
    downCanvase() {
      var canvas = document.getElementById("my-canvas");
      canvas.toBlob(function(blob) {
        saveAs(blob, "pretty image.png");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.find {
  margin-top: 50px;
  button {
    margin-right: 10px;
  }
}
</style>
