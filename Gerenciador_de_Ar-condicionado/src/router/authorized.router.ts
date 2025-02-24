import { Views } from "@/views/index.view"
import type { RouteRecord, RouteRecordRaw } from "vue-router"

export const authorized: Array<RouteRecordRaw> = [
  {
    path: '/ShowProgram/:id',
    name: 'showProgram',
    component: Views.ShowProgram,
    meta: { authorized: false }
  },  
  {
    path: '/CreateEnvironment',
    name: 'createEnvironment',
    component: Views.CreateEnvironment,
    meta: { authorized: false }
  },
  {
    path: '/CreateProgram/:id',
    name: 'createProgram',
    component: Views.CreateProgram,
    meta: { authorized: false }
  },
]