<template>
  <div>
    <iframe
      src="http://localhost:8088/#/"
      frameborder="0"
      width="100%"
      height="1000px"
      id="myframe"
    ></iframe>
  </div>
</template>

<script>
//父
export default {
  data() {
    return {};
  },
  mounted() {
    //获取iframe元素
    let iFrame = document.getElementById("myframe");

    //iframe加载完毕后再发送消息，否则子页面接收不到message
    iFrame.onload = function() {
      //iframe加载完立即发送一条消息
      console.log("获取ifram", iFrame.contentWindow);
      iFrame.contentWindow.postMessage("我是ifram加载后的消息", "*");
    };
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
iframe {
}
</style>
