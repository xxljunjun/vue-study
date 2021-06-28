<template>
    <div>
        <span>{{msg}}</span>
        <button @click="changeMsg">点我改变msg</button>
    </div>
</template>

<script>
/* 
    在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    this.$nextTick(()=>{

    })
*/
    export default {
        data(){
            return {
                msg:"未更新"
            }
        },
        methods:{
            changeMsg(){
                this.msg = "已更新"
                this.$nextTick(()=>{
                     console.log("1111111111111111",this.$el.textContent)
                })
               
            }
        },
        components:{

        },
        mounted(){}
    }
</script>

<style lang="scss" scoped>

</style>