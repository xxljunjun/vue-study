export const mymixin = {
	data(){
		return {
			mixiNum:1,
		}
	},
	methods:{
		todoSome(){
			console.log("mysever")
		}
	},
	created(){
		console.log("初始化mixin的生命周期created")
	}
}