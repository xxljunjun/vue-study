<template>
    <div v-if="isShow" class="notice">
        <div>{{title}}</div>
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isShow:false
            }
        },
        props:{
            title:{
                type:String,
                default:''
            },
            message:{
                type:String,
                default:''
            },
            deraction:{
                type:Number,
                default:0
            }
        },
        methods:{
            show(){
                this.isShow = true
                setTimeout(()=>{
                     this.hide()
                },this.deraction)
            },
            hide(){
                this.isShow = false
                this.remove()
            }
        }
    }
</script>

<style lang="scss" scoped>
.notice{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
}
</style>