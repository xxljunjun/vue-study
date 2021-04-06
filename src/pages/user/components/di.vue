<template>
  <div>
    <h1>di</h1>
    <span @click="decreas">点我减少</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    snum:{
      type:Number,
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    decreas(){
      this.$eventBus.$emit("eventThing")
      this.$emit("zidi")
    }
  },
};
</script>

<style lang="css" scoped>
</style>
