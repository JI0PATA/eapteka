import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import "@/assets/style.scss"
import GroupProducts from "@/views/GroupProducts";

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
