<template>
  <div>
    <h1>---------------</h1>
    <div>我是sun组件</div>
    <p>
      <span>{{ music_2 }}</span>
      <span><button @click="changemusic_2">点我改变music_2</button></span>
      <span>{{ music_3 }}</span>
      <span><button @click="changemusic_3">点我改变music_3</button></span>
    </p>
  </div>
</template>

<script>
export default {
  inject: ["provide1"],
  //   inheritAttrs: false,
  props: ["music_2", "music_3"],
  data() {
    return {};
  },
  watch: {},
  methods: {
    changemusic_2() {
      console.log("1");
      this.$emit("changemusic_2");
    },
    changemusic_3() {
      console.log("2");
      this.$emit("changemusic_3");
    },
  },
  mounted() {},
};
</script>

<style lang="css" scoped></style>
