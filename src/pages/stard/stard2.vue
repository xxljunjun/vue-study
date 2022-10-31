<template>
	<div>
		<h1>测试ref组件通信-------------局部混入特性</h1>
		<h1>{{this.mixiNum}}</h1>
		<h1 v-text="fu"></h1>
		<Zi ref="zi"/>
		<div class="cover">
			<img src="@/assets/banner@2x.png" alt="">
		</div>
	</div>
</template>

<script>
import Zi from "./components/zi.vue"
import {mymixin} from "@/mixins/mixin"  //局部混入方法和data
	export default {
		data(){
			return{
				fu:"我是父组件的值"
			}
		},
		mixins:[mymixin],
		mounted(){
			// console.log(this.$refs.da)
			this.todoSome()
			this.fu = this.$refs.zi.da
			this.$refs.zi.zifangfa()
			
		},
		components:{
			Zi
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
.cover{
	width:372px;
	height:210px;
	overflow:hidden;
	background:red;
	img{
		width:372px;
		height:210px;
		// object-fit:contain;
		object-fit:cover;
		// object-fit:fill;
		// object-fit:none;
		// object-fit:scale-down;
	}
}	
</style>