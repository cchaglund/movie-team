import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/filmer',
      name: 'alla-filmer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AllaFilmer.vue')
    },
    {
      path: '/barnfilmer',
      name: 'barnfilmer',
      component: () => import(/* webpackChunkName: "about" */ './views/Barnfilmer.vue')
    },
    {
      path: '/bokning',
      name: 'bokning',
      component: () => import(/* webpackChunkName: "about" */ './views/Bokning.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import(/* webpackChunkName: "about" */ './views/Confirmation.vue')
    },
    {
      path: '/salonger',
      name: 'salonger',
      component: () => import(/* webpackChunkName: "about" */ './views/Salonger.vue')
    },
  ]
})
