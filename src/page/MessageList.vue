<template>
    <div>
        <h1>{{msg}}</h1>
        <div>资讯列表的id:{{message}}</div>
    </div>
</template>
<script>
    export default{
        name:"MessageList",
        mounted(){
            console.log(this)
            this.message = this.$route.params.id;
        },
        data(){
            return{
                msg:'资讯列表页',
                message:''
            }
        }
    }
</script>
<style>

</style>