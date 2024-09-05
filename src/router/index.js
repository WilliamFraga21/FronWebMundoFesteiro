import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from "@/views/Login/Cadastro.vue";
import Login from "@/views/Login/Login.vue";
import AdminTela from "@/views/AdminTela.vue";
import Home from "@/views/Home.vue";

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
      path: '/admin',
      name: 'admnin',
      component: AdminTela
    },

  ]
})

export default router



