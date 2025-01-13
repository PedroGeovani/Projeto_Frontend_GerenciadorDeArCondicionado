import { Views } from "@/views/index.view"
import type { RouteRecord, RouteRecordRaw } from "vue-router"

export const authorized: Array<RouteRecordRaw> = [
  { 
    path: '/register', 
    name: 'register', 
    component: Views.Register, 
    meta: { authorized: true } 
  },
]