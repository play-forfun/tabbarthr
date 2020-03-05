import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/Category')
const ShopCart=()=>import('../views/shopcart/ShopCart')
const Profile=()=>import('../views/profile/Profile')

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
]

const router=new VueRouter(
    {
      routes
    }
)

export default router