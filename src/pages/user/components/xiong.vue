<template>
  <div>
    <h1 v-text="num"></h1>
    <h1>xiong</h1>
    <span @click="increas">点我增加</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num:1
    };
  },
  props:{
    snum:{
      type:Number,
    }
  },
  components: {},
  created(){},
  mounted(){
    this.$eventBus.$on("eventThing",()=>{
      this.num--
    })
  },
  methods: {
    increas(){
      this.num++
      this.$emit("zidingyishijian")
    }
  },
};
</script>

<style lang="css" scoped>
</style>
