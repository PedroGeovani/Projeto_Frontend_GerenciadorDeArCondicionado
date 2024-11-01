import { createRouter, createWebHistory } from 'vue-router'
import { guards } from './guards.router/index.guard'
import { authorized } from './authorized.router'
import { notAuthorized } from './notAuthorized.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authorized, ...notAuthorized]  
})

router.beforeEach((to, from, next) => guards(to, from, next))
export default router
