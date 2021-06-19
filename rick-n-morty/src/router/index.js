import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Personaje from '../views/Personaje.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'HomepageDefault',
    component: Homepage
  },
  {
    path: '/page/:page',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/page/:page/:idPersonaje',
    name: 'Personaje',
    component: Personaje
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router