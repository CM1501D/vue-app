<template>
    <yd-slider autoplay="3000">
        <yd-slider-item v-for='(item,index) in picArr' :key='index'>
            <a href="http://www.ydcss.com">
                <img :src="item">
            </a>
        </yd-slider-item>
    </yd-slider>
</template>

<script type="text/babel">
    export default {
        mounted(){
            this.picArr = this.$props.message;
        },
        props:['message'],
        data(){
            return{
                picArr:[]
            }
        }
    }
</script>
<style>

</style>