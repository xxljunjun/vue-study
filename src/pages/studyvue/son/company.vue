<template>
	<div class="company_Box">
		<div class="com_top">
			<div class="inp_box">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
			<div class="inp_box">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
			<div class="inp_box lastInput">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
			<div class="gray">

			</div>
			<div class="btn">
				查询
			</div>
		</div>
		<div class="com_middle">
			<div class="inp_box">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
			<div class="inp_box">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
			<div class="inp_box lastInput largeinp">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
		</div>
		<div class="com_buttom">
			<div class="inp_box">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
			<div class="inp_box">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
			<div class="inp_box lastInput largeinp">
				<span class="text">所属公司/集团：</span>
				<el-input v-model="company" placeholder="请输入内容"></el-input>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return{
				company:''
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>

.text{
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #040404;
	line-height: 20px;
}
.inp_box{
	margin-top: 26px;
	margin-right:200px;
}
.lastInput{
	margin-right: 0;
}
.largeinp{
	display: flex;
	flex-direction:column ;
	.el-input{
		width: 640px;
	}
}
.el-input{
	margin-top:8px ;
}
.company_Box{
	padding-left: 24px;
	.com_top{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		.gray{
			height: 36px;
			width: 36px;
			background: #F5F5F5;
			position: relative;
			top: 25px;
			margin-left: 100px;
		}
		.btn{
			width: 94px;
			height: 36px;
			background: #498EFB;
			border-radius: 4px;
			position: relative;
			top: 25px;
			margin-left: 100px;
			text-align: center;
			line-height: 36px;
			color: #fff;
		}
	}
	.com_middle{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}
	.com_buttom{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}
}
</style>