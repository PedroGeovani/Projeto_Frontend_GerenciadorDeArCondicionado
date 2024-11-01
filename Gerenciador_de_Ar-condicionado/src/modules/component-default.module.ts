import type { App } from "vue";
import Navbar from "@/components/Navbar/navbar.vue";

export function componentsDefault(app: App){
  app.component('Navbar', Navbar)
}