import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import PageNotFound from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/QuienesSomos',
    name: 'QuienesSomos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuienesSomos.vue')
  },
  {
    path: '/Noticias',
    name: 'Noticias',
    component: () => import('../views/Noticias.vue')
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import('../views/RegistroView.vue')
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
