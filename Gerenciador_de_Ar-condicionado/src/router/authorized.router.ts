import { Views } from "@/views/index.view"
import type { RouteRecord, RouteRecordRaw } from "vue-router"

export const authorized: Array<RouteRecordRaw> = [
  { 
    path: '/register', 
    name: 'register', 
    component: Views.Register, 
    meta: { authorized: false } 
  },
  { 
    path: '/program/:name', 
    name: 'program', 
    component: Views.Program, 
    meta: { authorized: false } 
  },
  { 
    path: '/edit/:name', 
    name: 'edit', 
    component: Views.Edit, 
    meta: { authorized: false } 
  },
]