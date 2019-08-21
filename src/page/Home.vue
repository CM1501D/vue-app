<template>
    <div id='shoye'>
        <h1>{{msg}}</h1>
        <nav>
            <span v-for='(item,index) in navArr' 
                :key='index'
                @click='goDetail(index)'
                :class='activeIndex == index ? "active" : ""'
            >
                {{item}}
            </span>
        </nav>
        <Slider :message='picData'></Slider>
        <button @click = 'changeNum'>click me</button>
        <span>{{this.$store.state.status.count}}</span>
    </div>
</template>
<script>
    import Slider from '../components/Slider'
    export default {
        name: 'Home',
        mounted(){
            console.log(this)
        },
        components:{ 
            Slider
        },
        data () {
            return {
                msg: "welcome to home page!",
                navArr:['新闻','资讯','历史'],
                picData:[
                    '../assets/1.jpg',
                    '../assets/2.jpg',
                    '../assets/3.jpg'
                ],
                activeIndex:0
            }
        },
        methods:{
           changeNum(){
               this.$store.dispatch('addCount',1);
           },
           goDetail(id){
               this.activeIndex = id;
               switch(id){
                   case 0: 
                   this.$router.push({path:'/news',query:{id:id}}); //路由传参方式一,接收值用this.$route.query.id
                   break;

                   case 1:
                   this.$router.push({path:'/message',name:'MessageList',params:{"id":id}});//路由传参方式二,params传参必须搭配name属性使用,接收值用this.$route.params.id
                   break;

                   case 2:
                   this.$router.push({path:'/history/'+id}); //路由传参方式三,接收值用this.$route.params.id
                   break;
               }
           } 
        }
    }
</script>

<style  scoped type='text/css' lang='scss'>
   $color:orange;
   nav {
       width:100%;
       height:40px;
       background:$color;
       position:fixed;
       bottom:0;
       left:0;
       display:flex;
       justify-content:space-around;
       span {
           display: inline-block;
           flex:1;
           display: flex;
           align-items: center;
           justify-content: center;
       }
       .active{
           background:red;
       }
   }
    
</style>