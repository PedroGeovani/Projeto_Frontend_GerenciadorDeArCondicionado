import type { App } from "vue"
import Navbar from "@/components/Navbar/navbar.vue"
import RegisterTime from "@/components/Register/register-time.vue"
import TableTime from "@/components/Table/table-time.vue"
import Environment from "@/components/Environment/environment.vue"

export function componentsDefault(app: App) {
  app.component('Navbar', Navbar)
  app.component('RegisterTime', RegisterTime)
  app.component('TableTime', TableTime)
  app.component('Environment', Environment)
}