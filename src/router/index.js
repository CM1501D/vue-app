import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
import NewsList from '@/page/NewsList'
import MessageList from '@/page/MessageList'
import HistoryList from '@/page/HistoryList'
import Login from '@/page/Login'


console.log(Home)
Vue.use(Router)

var router = new Router({
  mode:'history', //路由访问的模式,history模式,即在端口号后边直接访问路由(:8080/home),hash模式(:8080/#/home),不配置的情况下,默认是hash模式
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/news',
      name: 'NewsList',
      component:NewsList,
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/message',
      name: 'MessageList',
      component: MessageList,
    },
    {
      path: '/history/:id',
      name: 'HistoryList',
      component: HistoryList,
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})

router.beforeEach( (to,from,next) => {
  if(to.meta.requireAuth){  //该路由需要登录权限
    if(3==2){  //判断token是否存在
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
})

export default router;