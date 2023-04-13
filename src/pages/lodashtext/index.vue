<template>
    <div >
     <button @click="clickMe">点我打印</button>
    </div>
  </template>
  
  <script>
  import {isArray,get} from 'lodash'

  
  export default {
    data() {
      return {
       
      };
    },
    components: {
    },
    beforeMount() {
      
    },
    methods:{
        clickMe(){
            // let arr = []
            // console.log(isArray(arr))
            var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
// _.get(object, 'a[0].b.c');
// // => 3
 
// _.get(object, ['a', '0', 'b', 'c']);
// // => 3
 
// _.get(object, 'a.b.c', 'default');
console.log(get(object,'a[0].b.c'))

        }
    }
  };
  </script>
  
  <style lang="scss" scoped>

  </style>
  