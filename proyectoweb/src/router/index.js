import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import PageNotFound from '../views/NotFoundView.vue'
import UserStore from "@/store/UserStore";

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
    component: () => import(/* webpackChunkName: "about" */ '../views/QuienesSomosView.vue')
  },
  {
    path: '/Noticias',
    name: 'Noticias',
    component: () => import('../views/NoticiasView.vue')
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
    component: () => import('../views/AyudaRecibidaView.vue')
  },
  {
    path: '/Mapa',
    name: 'Mapa',
    component: () => import(/* webpackChunkName: "about" */ '../views/MapView.vue')

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

router.beforeEach((to, from, next) => {
  if ((to.name !== 'Home' && to.name !== 'Registro' && to.name !== 'QuienesSomos' && to.name !== 'AyudaRecibida' && to.name !== 'Noticias')
      && UserStore.getCurrentToken() === null){
    next({ name: 'Home' })
  }
  else if((to.name === 'VerCampaña' || to.name === 'EditarCampaña' || to.name === 'CrearCampaña' || to.name === 'MisCampañas')
      && UserStore.getCurrentCategory() === 'donator'){
    next({ name: 'Home' })
  }
  else
    next()
})

export default router
