import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import CatalogoFilmes from '../views/CatalogoFilmes'
import SugestaoDoDia from '../views/SugestaoDoDia'
import SugestaoResultado from '../views/SugestaoResultado'


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
  {
    path: '/sugestao',
    name: 'SugestaoDoDia',
    component: SugestaoDoDia
  },
  {
    path: '/resultado',
    name: 'SugestaoResultado',
    component: SugestaoResultado
  }
]

const router = new VueRouter({
  routes
})

export default router
