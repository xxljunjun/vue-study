<template>
  <div class="slot_box">
    <h1>如何使用插槽</h1>
    <p>插槽可以放置什么内容</p>
    <p>默认插槽</p>
    <p>具名插槽</p>
    <p>作用域插槽</p>
	<p>Vue2.6.0的更新，废弃了slot，新增了v-slot</p>
    <childenSlot :lists="nameList">
		【2.6.0起，v-slot取代了slot和slot-scope】
		<template v-slot:header>
			<div class="box">
				我是子组件标签内的内容，而且还是有名字的，我被称为具名插槽
			</div>
		</template>
		<!--slotProps可以使任意名字-->
        <template v-slot:main="slotProps">
            <strong style="color: crimson">{{slotProps.user.firstName}}</strong>
        </template>
    </childenSlot>
  </div>
</template>

<script>
import childenSlot from "./childenSlot";
export default {
  data() {
    return {
      nameList: [
        { id: 1, name: "孙悟空" },
        { id: 2, name: "猪八戒" },
        { id: 3, name: "沙和尚" },
        { id: 4, name: "唐僧" },
        { id: 5, name: "小白龙" },
      ],
    };
  },
  methods: {},
  components: {
    childenSlot,
  },
};
</script>

<style lang="scss" scoped>
.slot_box {
  color: #000;
}
</style>