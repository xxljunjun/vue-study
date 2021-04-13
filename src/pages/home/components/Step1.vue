<template>
	<div>
		<h1>{{stepNum}}</h1>
		<h2>{{resmsg}}</h2>
		<input type="text" v-model="msg">
		<button @click="changNum">点我改变</button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				msg:"我是一个潇洒洒脱的浪里个浪"
			}
		},
		props:{
			stepNum:{
				type:Number,
				default:0,
				requiiired:true
			}
		},
		watch:{
			'msg':(newval,oldval)=>{
				console.log(newval)
				console.log(oldval)
			},
			deep:true,
			Immediate:true
		},
		computed:{
			resmsg:function(){
				return this.msg+"加上我就是你了"
			}
		},
		components:{

		},
		methods:{
			changNum(){
				this.$emit("update:stepNum",22)
				// this.$emit("setNum")
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>