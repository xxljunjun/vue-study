<template>
  <div>
    1111111111111
    <Child />
  </div>
</template>

<script>
/* 
	局部混入和全局混入
	1、同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
	2、数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
	3、Vue.config.optionMergeStrategies，可以自定义混入
*/
import onemixine from './components/onemixine.vue'
import Child from './components/child.vue'
export default {
  provide() {
    return {
      val: '我是所有allVue组件中的数据',
    }
  },
  data() {
    return {}
  },
  mixins: [onemixine],
  components: {
    Child,
  },
  mounted() {
    console.log('打印混入里面的数据data', this.msg)
  },
}
</script>

<style lang="scss" scoped>
</style>