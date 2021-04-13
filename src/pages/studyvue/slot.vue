<template>
  <div class="slot_box">
    <h1>如何使用插槽</h1>
    <p>插槽可以放置什么内容</p>
    <p>默认插槽</p>
    <p>具民插槽</p>
    <p>作用域插槽</p>
    <childenSlot :lists="nameList">
      <!-- 插槽就是Vue实现的一套内容分发的API，将元素作为承载分发内容的出口。
			<template slot="girl" slot-scope="a">
				漂亮、美丽、购物、逛街
				{{a.say}}
				{{a.h}}
				{{a.kk}}
			</template>
			<template slot="boy">
				帅气、才实
			</template> -->
      <template slot-scope="b" slot="array_1">
        {{ b }}
        <div v-if="b.bbbbb.id == 1">
          你好：<span>{{ b.bbbbb.name }}</span>
        </div>
        <div v-else>
			<button>{{ b.bbbbb.name }}</button>
		</div>
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