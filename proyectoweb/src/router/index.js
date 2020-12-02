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
    path: '/MisCampañas',
    name: 'MisCampañas',
    component: () => import('../views/MisCampañasView.vue')
  },
  {
    path: '/CrearCampaña',
    name: 'CrearCampaña',
    component: () => import('../views/CrearCampañaView.vue')
  },
  {
    path: '/EditarCampaña/:id',
    name: 'EditarCampaña',
    component: () => import('../views/EditarCampañaView.vue')
  },
  {
    path: '/VerCampaña/:id',
    name: 'VerCampaña',
    component: () => import('../views/VerCampañaView.vue')
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: () => import('../views/PerfilView.vue')
  },
  {
    path: '/EditarPerfil',
    name: 'EditarPerfil',
    component: () => import('../views/EditarPerfilView.vue')
  },

  {
    path: '/AyudaRecibida',
    name: 'AyudaRecibida',
    component: () => import('../views/AyudaRecibida.vue')
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
