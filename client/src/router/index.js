import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import("../views/home.vue")
const Login = ()=>import("../views/login.vue")
const Sort = ()=>import("../views/sort.vue")
const Search = ()=>import("../views/search.vue")
const Detail = ()=>import("../views/detail/detail.vue")
Vue.use(Router)

const router = new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      meta:{
        title:"加班/请假"
      },
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      meta:{
        title:"登录"
      },
      name:'login',
      component:Login
    },
    {
      path:'/sort',
      meta:{
        title:"排序"
      },
      name:'sort',
      component:Sort
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/detail/:type/:id',
      name:'detail',
      meta:{
        title:"详情"
      },
      props:true,
      component:Detail
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/apply/:type',
      meta:{
        title:"申请"
      },
      props:true,
      name:'apply',
      component:()=>import('../views/apply/apply.vue')
    }
  ]
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})
export default router