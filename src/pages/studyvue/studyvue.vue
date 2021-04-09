<template>
	<div class="studyvue_box">
		<div class="box">vuex的学习</div>
		<div class="box">
			<span>显示的是vuex中的state值：</span>
			<span>{{message}}</span>
		</div>
		<div class="box">
			<button @click="tochange" class="brn">点我改变vuex里面的值</button>
		</div>
		<div class="box">
			index里面的state:{{largemsg}}
		</div>
		<div class="box">
			{{doneTodos}}
		</div>
		<div class="box">
			<button @click="outtologin" class="brn">点我去登录</button>
		</div>
		<div class="box">
			<div v-pre class="tojoin">
				{{msg}}
			</div>
		</div>
		<div class="box" >
			<div class="tojoin" v-cloak>
				{{msg}}
			</div>
		</div>
		<div class="box">
			<button @click="event" class="brn">点我去eventbus</button>
		</div>
	</div>
</template>

<script>
//mapActions
//mapMutations
import { mapState,mapGetters} from 'vuex'
import {EventBus} from "@/event-bus.js"
export default {
	data(){
		return{
			msg:"我是小溪流"
		}
	},
	computed:{
		//可以通过mapState，mapGetters方法简写代码，直接通过this去访问
		...mapState('music', ['message']),
		...mapState(['largemsg']),
		...mapGetters(['doneTodos']),
		// ...mapGetters({doneCount:'doneTodos'}), //可以命名
	},
	methods:{
		// ...mapMutations('music', ['getMusic']),
		// ...mapMutations(['tochangelargemsg']),
		// ...mapActions(["settimeouting"]),
		tochange(){
			let newmessage = "我真的变了"
			this.$store.dispatch("settimeouting",newmessage)
			this.$store.commit("music/getMusic",newmessage)
			this.$store.commit("tochangelargemsg",newmessage)
			// this.settimeouting(newmessage)
			// this.getMusic(newmessage)
			// this.tochangelargemsg(newmessage)

		},
		outtologin(){
			this.$store.commit("needLogin",true)
		},
		event(){
			// console.log("1111")
			EventBus.$emit("changeNum",true)
		}
	},
	mounted(){
		console.log("vuex状态管理工具",this.$store)
		//this.$store.state--------------可以直接访问vuex中的state
		//this.$store.getters-----------可以直接访问vuex中的getters
		console.log("this.$store.state",this.$store.state)
		console.log("this.$store.getters",this.$store.getters)
	},
	destroyed(){
		EventBus.$off("changeNum")
	}
}
</script>

<style lang="scss" scoped>
.studyvue_box{
	[v-cloak] {
		display: none;
	}
	color: #000;
	.brn{
		cursor: pointer;
	}
	.box{
		margin: 20px 0 20px 0;
	}
}
</style>