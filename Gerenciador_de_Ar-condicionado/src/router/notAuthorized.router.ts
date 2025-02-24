import { Views } from "@/views/index.view"
import type { RouteRecordRaw } from "vue-router"

export const notAuthorized: Array<RouteRecordRaw> = [

  {
    path: '/login',
    name: 'login',
    component: Views.Login,
    meta: { authorized: false }
  },
  {
    path: '/',
    name: 'showEnvironment',
    component: Views.ShowEnvironment,
    meta: { authorized: false }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: Views.NotFound,
    meta: { authorized: false }
  }
] 