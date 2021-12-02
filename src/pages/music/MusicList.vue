<template>
  <div class="music">
    <div>我是父组件</div>
    <div>
      <span>实现动态路由传参</span>
      <button @click="goToDetail">点我实现动态路由传参</button>
    </div>
    <div>
      <p>实现作用域插槽传参</p>
    </div>
    <Son
      :music="music_1"
      :music_2="music_2"
      :music_3="music_3"
      @changemusic_1="changemusic_1"
      @changemusic_2="changemusic_2"
      @changemusic_3="changemusic_3"
      @changeprovide1="changeprovide1"
    >
      <template v-slot:xxl="slotprops">
        {{ slotprops }}
      </template>
    </Son>
  </div>
</template>

<script>
import Son from "./son.vue";
export default {
  components: {
    Son,
  },
  data: function () {
    return {
      music_1: "我是父组件的music_1",
      music_2: "我是父组件的music_2",
      music_3: "我是父组件的music_3",
    };
  },
  provide() {
    return {
      provide1: "在父组件的provide",
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeprovide1() {
      this.provide1 = "0";
    },
    changemusic_1() {
      this.music_1 = "1";
    },
    changemusic_2() {
      this.music_2 = "2";
    },
    changemusic_3() {
      this.music_3 = "3";
    },
    goToDetail() {
      //  path: "/music/detail/:id",
      console.log("实现动态路由传参");
      this.$router.push("/music/detail/" + 123);
    },
  },
};
</script>

<style lang="css" scoped>
.music {
}
</style>
