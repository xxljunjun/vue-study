<template>
  <div class="childen">
      <!-- 插槽slot的作用正是如此，例如，组件中的一个地方，默认情况下为button，而在使用的时候，我们有需求需扩展为span,扩展为input，这时候我们就需要使用到插槽。 -->
    <!-- 这个chiiden组件是一个子组件 -->
    <!-- <slot></slot>
    <br>
    <br>
    <slot name="girl"  :say="msg" h="我是数据二" kk="我是数据三"></slot>
    <br>
    <slot name="boy" ></slot> -->
    <div>
        <ul>
            <li v-for="list in lists" :key="list.id">
                <slot :bbbbb="list" name="array_1"></slot>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:1,
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