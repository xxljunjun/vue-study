<template>
    <div class="xxlMessage" v-if="dialogStatus">

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        computed:{
           dialogStatus(){
            return this.$store.state.mesageStatus
           }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>
.xxlMessage{
    position: absolute;
    color: #000;
    height: 150px;
    width: 300px;
    z-index: 999;
    background: #fff;
    right: 50px;
    bottom: 50px;
    box-shadow: 2px 2px 10px 2px #000;
}
</style>