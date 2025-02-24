import type { App } from "vue"
import Navbar from "@/components/Navbar/navbar.vue"
import CardEnvironment from "@/components/CardEnvironment/card-environmento.vue"

export function componentsDefault(app: App) {
  app.component('Navbar', Navbar)
  app.component('CardEnvironment', CardEnvironment)
}