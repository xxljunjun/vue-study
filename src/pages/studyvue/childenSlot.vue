<template>
  <div class="childen">
    <slot name="header"></slot>
    <div>
      <slot :user="userData" name="main"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:1,
      userData: {
          firstName: 'AAA',
          lastName: 'Miss'
      }
    }
  },
  props:{
    lists:{
      type:Array,
      default:()=>{
				return [1,2,3]
			},
      require:true
    }
  },
  mounted(){
    console.log("父向子传值",this.lists)
  }
};
</script>

<style lang="scss" scoped>
.childen {
  color: #000;
}
</style>