<template>
    <div>
        <h1>{{msg}}</h1>
        <div>历史列表的id:{{message}}</div>
    </div>
</template>
<script>
    export default{
        name:"NewsList",
        mounted(){
            console.log(this)
            this.message = this.$route.params.id;
        },
        data(){
            return{
                msg:'历史列表页',
                message:''
            }
        }
    }
</script>
<style>

</style>