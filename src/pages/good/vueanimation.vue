<template>
  <div class="vueanimation">
    <div class="box">
          <transition name="slide-fade">
   <div class="box_1" v-if="status_1"></div>
  </transition>
      
      <div class="box_2" v-if="status_2"></div>
      <div>
        <button @click="show" class="btn">点我触发v-if</button>
      </div>
    </div>
  </div>
</template>
<script>
/*
    v-if或v-show离开或进入时有6个class类名
        ==>v-enter:
        ==>v-enter-active:
        ==>v-enter-to:
        ==>v-leave:
        ==>v-leave-active:
        ==>v-leave-to:
*/
export default {
  data() {
    return {
      status_1: true,
      status_2: true,
    };
  },
  components: {},
  computed: {},
  methods: {
    show() {
        this.status_1 = !this.status_1
    }
  },
};
</script>
<style scoped lang='scss'>
.slide-fade-enter{
    //定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
    transform: translateX(10px);
     opacity: 0;
}
.slide-fade-enter-active{
    transition: all .3s ease;
}
.slide-fade-enter-to{

}
.slide-fade-leave{
   
}
.slide-fade-leave-active{
     transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-to{
     transform: translateX(10px);
     opacity: 0;
}




.vueanimation {
  .box {
    margin-top: 20px;
    display: flex;
    align-items: center;
    .box_1 {
      width: 100px;
      height: 100px;
      background: red;
      margin-right: 20px;
    }
    .box_2 {
      width: 100px;
      height: 100px;
      background: green;
    }
    .btn {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
