<template>
  <div>
    <button @click="clickMe">点我打印</button>
    <button @click="goToSendHttp">点我发送http请求</button>
  </div>
</template>

<script>
import { isArray, get } from "lodash";
import {helloxxl } from '@/api/testXXL.js'

export default {
  data() {
    return {};
  },
  components: {},
  beforeMount() {},
  methods: {
    clickMe() {
      // let arr = []
      // console.log(isArray(arr))
      var object = { a: [{ b: { c: 3 } }] };

      // _.get(object, 'a[0].b.c');
      // // => 3

      // _.get(object, ['a', '0', 'b', 'c']);
      // // => 3

      // _.get(object, 'a.b.c', 'default');
      console.log(get(object, "a[0].b.c"));
    },
    async goToSendHttp(){
      const res = await helloxxl()
      console.log('res',res)
    }
  },
};
</script>

<style lang="scss" scoped></style>
