<template>
  <div id="itxst">
    <div
      :data-id="index + 1"
      class="box"
      v-for="(item, index) in boxArr"
      :key="index"
    >
      item{{ index + 1 }}
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      boxArr: [
        { id: 1, message: 'item1' },
        { id: 2, message: 'item2' },
        { id: 3, message: 'item3' },
        { id: 4, message: 'item4' },
        { id: 5, message: 'item5' },
        { id: 6, message: 'item6' },
        { id: 7, message: 'item7' },
        { id: 8, message: 'item8' },
        { id: 9, message: 'item9' },
        { id: 1, message: 'item1' },
        { id: 2, message: 'item2' },
        { id: 3, message: 'item3' },
        { id: 4, message: 'item4' },
        { id: 5, message: 'item5' },
        { id: 6, message: 'item6' },
        { id: 7, message: 'item7' },
        { id: 8, message: 'item8' },
        { id: 9, message: 'item9' },
      ],
    }
  },
  components: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      //获取对象
      var el = document.getElementById('itxst')
      //设置配置
      var ops = {
        animation: 300,
        //拖动结束
        onEnd: function (evt) {
          console.log(evt)
          //获取拖动后的排序
          var arr = sortable.toArray()
          // alert(JSON.stringify(arr))
          console.log(arr)
        },
      }
      //初始化
      var sortable = Sortable.create(el, ops)
    },
  },
}
</script>

<style lang="scss" scoped>
#itxst {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 100px;
  .box {
    width: 80px;
    height: 30px;
    cursor: pointer;
    background: yellow;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>