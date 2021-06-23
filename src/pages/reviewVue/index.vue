<template>
  <div class="apiFunction">
    <!-- 当全局过滤器和局部过滤器重名时，会采用局部过滤器 -->
    <div v-bind:id="rawId | formatId">过滤器的使用</div>
    <div>{{ num | numFilters('11', '22') }}</div>
  </div>
</template>

<script>
/* 
  过滤器注意点
    1、当全局过滤器和局部过滤器重名时，会采用局部过滤器
*/
export default {
  data() {
    return {
      num: 44,
      rawId: 999,
    }
  },
  components: {},
  methods: {},
  filters: {
    numFilters: function (val, a, b) {
      console.log(val)
      console.log(a)
      console.log(b)
    },
    formatId: function (val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss" scoped>
.apiFunction {
  color: #000;
}
</style>