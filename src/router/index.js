import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from "@/views/Login/CadastroComponent.vue";
import Login from "@/views/Login/LoginComponent.vue";

import HomePage from "@/views/HomePage.vue";
import ViewProduto from "@/views/ViewProduto.vue";
import Carrinho from "@/views/Carrinho.vue";
import CriarProduto from "@/views/Admin/CriarProduto.vue";
import MeuPerfil from "@/views/MinhaConta/MeuPerfil.vue";
import CriarCategoriaTamanho from "@/views/Admin/CriarCategoriaTamanho.vue";
import EditarProduto from "@/views/Admin/EditarProduto.vue";
import CreateEvento from "@/views/AdminEvento/CreateEvento.vue";
import PedidosHoje from "@/views/Admin/PedidosHoje.vue";
import MyEvents from "@/components/MyEvents.vue";
import ProdutosCat from "@/views/ProdutosCatView.vue";
import ProdutosFav from "@/views/ProdutosFavoritosView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/minhaconta',
      name: 'minhaconta',
      component: MeuPerfil
    },
    {
      path: '/viewproduto',
      name: 'viewProduto',
      component: ViewProduto
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: Carrinho
    },
    {
      path: '/adminCreateProduto',
      name: 'adminCreateProduto',
      component: CriarProduto
    },
    {
      path: '/adminCreatecategoria',
      name: 'adminCreatecategoria',
      component: CriarCategoriaTamanho
    },
    {
      path: '/adminEditProduto',
      name: 'adminEditProduto',
      component: EditarProduto
    },
    {
      path: '/adminPedidosHoje',
      name: 'adminPedidosHoje',
      component: PedidosHoje
    },
    {
      path: '/createevento',
      name: 'createevento',
      component: CreateEvento
    },
    {
      path: '/myeventos',
      name: 'myeventos',
      component: MyEvents
    },
    {
      path: '/ProdutosCat',
      name: 'ProdutosCat',
      component: ProdutosCat
    },
    {
      path: '/ProdutosFav',
      name: 'ProdutosFav',
      component: ProdutosFav
    },

  ]
})

export default router



