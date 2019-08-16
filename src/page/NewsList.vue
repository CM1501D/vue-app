<template>
    <div>
        <h1>{{msg}}</h1>
        <div>新闻列表页的id : {{message}}</div>
    </div>
    
</template>
<script>
    export default{
        name:"NewsList",
        mounted(){
            console.log(this)
           this.message =  this.$route.query.id;
        },
        data(){
            return{
                msg:'新闻列表页',
                message:''
            }
        }
    }
</script>
<style>

</style>