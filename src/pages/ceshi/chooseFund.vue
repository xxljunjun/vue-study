<template>
  <div class="choosefund">
      <button @click='all' class="btn">点我全选</button>
      <div class="box">
        <div v-for="(val,index) in arr" :key='index' class="item">
            <input type="checkbox" :checked='val.check'>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr:[]
     
    };
  },
  mounted(){
      for (var i = 0; i < 1000; i++) {
            console.log("1")
        this.arr.push({check:true})
        }
      console.log(this.arr)
  },
  methods: {
      all(){
          console.log('全选')
          this.arr.forEach(item => {
              console.log("111",this.arr.length)
              item.check = !item.check
          });
      }
  },
};
</script>

<style lang="scss" scoped>
.choosefund{
    .btn{
        margin-top: 20px;
    }
    .box{
        height: 300px;
        overflow: auto;
        .item{

        }
    }
}
</style>
