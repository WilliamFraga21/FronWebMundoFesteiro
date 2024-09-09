import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from "@/views/Login/Cadastro.vue";
import Login from "@/views/Login/Login.vue";

import Home from "@/views/Home.vue";
import ViewProduto from "@/views/ViewProduto.vue";
import Carrinho from "@/views/Carrinho.vue";
import CriarProduto from "@/views/Admin/CriarProduto.vue";
import MeuPerfil from "@/views/MinhaConta/MeuPerfil.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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

  ]
})

export default router



