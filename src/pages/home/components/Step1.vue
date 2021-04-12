<template>
	<div>
		<h1>{{this.stepNum}}</h1>
		<button @click="changNum">点我改变</button>
	</div>
</template>

<script>
	export default {
		data(){
			return{

			}
		},
		props:{
			stepNum:{
				type:Number,
				default:0,
				requiiired:true
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