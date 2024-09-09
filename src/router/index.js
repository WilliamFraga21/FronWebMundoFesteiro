import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from "@/views/Login/Cadastro.vue";
import Login from "@/views/Login/Login.vue";
import EditePerfil from "@/views/EditePerfil.vue";
import Home from "@/views/Home.vue";
import ViewProduto from "@/views/ViewProduto.vue";
import Carrinho from "@/views/Carrinho.vue";
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
      path: '/editeperfil',
      name: 'editeperfil',
      component: EditePerfil
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

  ]
})

export default router



