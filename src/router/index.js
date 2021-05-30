import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import "@/assets/style.scss"
import GroupProducts from "@/views/GroupProducts"
import Cart from "@/views/Cart"
import CartDone from '@/views/CartDone'
import Profile from '@/views/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/groupProducts/:id',
    name: 'GroupProducts',
    component: GroupProducts
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/cart/done',
    name: 'CartDone',
    component: CartDone
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
