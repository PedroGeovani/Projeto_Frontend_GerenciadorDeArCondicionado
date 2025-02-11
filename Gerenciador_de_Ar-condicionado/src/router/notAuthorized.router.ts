import { Views } from "@/views/index.view"
import type { RouteRecordRaw } from "vue-router"

export const notAuthorized: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'environment',
    component: Views.Environment,
    meta: { authorized: false }
  },
  {
    path: '/login',
    name: 'login',
    component: Views.Login,
    meta: { authorized: false }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: Views.NotFound,
    meta: { authorized: false }
  }
] 