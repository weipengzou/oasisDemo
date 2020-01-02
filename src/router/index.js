import Vue from 'vue'
import VueRouter from 'vue-router'
import messageRouter from './message'
import mineRouter from './mine'
import homeRouter from './home'
import newsRouter from './search'
import loginRouter from './login'
import axios from 'axios'

Vue.use(VueRouter, axios)

const routes = [
  { path: '*', redirect: '/home' },
  messageRouter, mineRouter, homeRouter, newsRouter, loginRouter
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
