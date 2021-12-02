<template>
  <div>
    <h1>----------</h1>
    <p>我是son组件</p>
    <span>{{ music }}</span>
    <span><button @click="toemitMusic">点我改变music_1</button></span>
    <div>
      <slot name="xxl" :sondata="sondata">11111</slot>
    </div>

    <Sun v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Sun from "./sun.vue";
export default {
  //   inheritAttrs: false,
  props: {
    music: {
      type: String,
      default: "",
    },
  },
  components: {
    Sun,
  },
  data() {
    return {
      sondata: [
        { id: 1, nam: "xxl" },
        { id: 2, nam: "junjun" },
      ],
    };
  },
  watch: {},
  methods: {
    toemitMusic() {
      this.$emit("changemusic_1");
    },
  },
  mounted() {
    console.log("子组件未接受的值", this.$attrs);
    console.log("子组件未接受的值", this.$listeners);
  },
};
</script>

<style lang="css" scoped></style>
