<template>
  <div class="choosefund">
      <!-- <button @click='all' class="btn">点我全选</button>
      <div class="box">
        <div v-for="(val,index) in arr" :key='index' class="item">
            <input type="checkbox" :checked='val.check'>
        </div>
      </div> -->
      <div class="box">
                <pdf 
    ref="pdf"
    :src="url">
  </pdf>
      </div>
 
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components:{
      pdf
  },
  data(){
      return {
          url:"http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      }
  }
  }
</script> 

<style lang="scss" scoped>
.choosefund{
    .btn{
        margin-top: 20px;
    }
    // .box{
    //     height: 300px;
    //     overflow: auto;
    //     .item{

    //     }
    // }
}
.box{
    height: 300px;
    width: 300px;
}
</style>
