<template>
  <div class="slot_box">
    <!-- 唯一一种特殊的仔子组件上的v-slot -->
    <!-- <ChildenSlot v-slot：default> 111111111111111111 </ChildenSlot> -->
    <!-- 具名插槽 -->
    <!-- <ChildenSlot>
      <template v-slot:header> 111111111 </template>
    </ChildenSlot> -->
    <!-- 作用域插槽 ：slotProps可以是任意名字-->
    <!-- <ChildenSlot v-slot:default="slotProps"
      >{{ slotProps.user.firstName }}
    </ChildenSlot> -->
    <!-- <ChildenSlot v-slot:default="{ user }">{{ user.firstName }} </ChildenSlot> -->

    <!-- 动态插槽名 -->
    <!-- <ChildenSlot>
      <template v-slot:[dynamicSlotName]> 00000000 </template>
    </ChildenSlot>
    <button @click="changeSlot">点我改变slot</button> -->

    <!--  -->
    <ChildenSlot #default="{ user }"> {{ user.firstName }} </ChildenSlot>
  </div>
</template>

<script>
/* 

  什么是插槽？
    ==>默认插槽
      <ChildenSlot>
        我是默认插槽的内容
      </ChildenSlot>
    ==>具名插槽
      +在父组件中
        <template v-slot:header>
            我是子组件标签内的内容，而且还是有名字的，我被称为具名插槽
        </template>
      +在子组件中
        <slot name="header"></slot>
    ==>作用域插槽
      +在父组件中(插槽props解构)
        <ChildenSlot v-slot:default="{ user }">{{ user.firstName }} </ChildenSlot>
        <ChildenSlot >
          <template v-slot:default="{ user }">
              {{ user.firstName }} 
          </template>
        </ChildenSlot>
      +在子组件中
        <slot :user="user" >{{ user.lastName}}</slot>

    
*/

/* 
  注意点
    1、父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
    2、<slot></slot>标签里面的内容会作为后备内容且有默认的名字default
    3、(特殊：独占默认插槽的缩写语法)---只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法，v-slot 只能添加在 <template> 上 
    4、作用域插槽:绑定在 <slot> 元素上的 attribute 被称为插槽 prop
    5、#简写： #default="{ user }"


*/
import ChildenSlot from './childenSlot'
export default {
  data() {
    return {
      dynamicSlotName: 'one',
      obj: {
        id: 1,
        name: '孙悟空',
      },
      nameList: [
        { id: 1, name: '孙悟空' },
        { id: 2, name: '猪八戒' },
        { id: 3, name: '沙和尚' },
        { id: 4, name: '唐僧' },
        { id: 5, name: '小白龙' },
      ],
    }
  },
  methods: {
    changeSlot() {
      this.dynamicSlotName = 'two'
    },
  },
  components: {
    ChildenSlot,
  },
}
</script>

<style lang="scss" scoped>
.slot_box {
  color: #000;
}
</style>