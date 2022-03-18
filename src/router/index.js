import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import CatalogoFilmes from '../views/CatalogoFilmes'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/catalogo',
    name: 'CatalogoFilmes',
    component: CatalogoFilmes
  },
]

const router = new VueRouter({
  routes
})

export default router
