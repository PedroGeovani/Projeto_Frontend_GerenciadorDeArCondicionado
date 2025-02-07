import type { App, Component } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

export function componetPrimeVue(app: App) {
  app.component('Button', Button)
  app.component('Card', Card)
  app.component('InputText', InputText)
  app.component('Password', Password)
}

