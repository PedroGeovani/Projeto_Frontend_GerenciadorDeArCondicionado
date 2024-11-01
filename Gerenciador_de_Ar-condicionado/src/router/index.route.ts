import { createRouter, createWebHistory } from 'vue-router'
import { Views } from '@/views/index.view'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Views.Home
    },
    {
      path: '/register',
      name: 'register',
      component: Views.Register
    }
  ]
})

export default router
