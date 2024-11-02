import type { App, Component } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'

export function componetPrimeVue(app: App) {
  app.component('Button', Button)
  app.component('Card', Card)
}

