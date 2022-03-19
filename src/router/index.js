import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import CatalogoFilmes from '../views/CatalogoFilmes'
import SugestaoDoDia from '../views/SugestaoDoDia'
import SugestaoResultado from '../views/SugestaoResultado'
import LoginUsuario from '../views/LoginUsuario'
import CadastroUsuario from '../views/CadastroUsuario'
import ValidacaoCadastro from '../views/ValidacaoCadastro'
import AssistidosFilmes from '../views/AssistidosFilmes'
import QuemSomos from '../views/QuemSomos'


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
  },
  {
    path: '/login',
    name: 'LoginUsuario',
    component: LoginUsuario
  },
  {
    path: '/cadastro',
    name: 'CadastroUsuario',
    component: CadastroUsuario
  },
  {
    path: '/validacao',
    name: 'ValidacaoCadastro',
    component: ValidacaoCadastro
  },
  {
    path: '/assistidos',
    name: 'AssistidosFilmes',
    component: AssistidosFilmes
  },
  {
    path: '/apresentacao',
    name: 'QuemSomos',
    component: QuemSomos
  }

]

const router = new VueRouter({
  routes
})

export default router
