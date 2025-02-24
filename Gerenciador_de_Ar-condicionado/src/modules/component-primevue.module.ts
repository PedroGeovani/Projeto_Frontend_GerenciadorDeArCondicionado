import type { App, Component } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DatePicker from 'primevue/datepicker'
import DataTable from 'primevue/datatable'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Toast from 'primevue/toast'
import Menu from 'primevue/menu'



export function componetPrimeVue(app: App) {
  app.component('Button', Button)
  app.component('Card', Card)
  app.component('Checkbox', Checkbox)
  app.component('Column', Column)
  app.component('DatePicker', DatePicker)
  app.component('DataTable', DataTable)
  app.component('Dialog', Dialog)
  app.component('InputText', InputText)
  app.component('Password', Password)
  app.component('Toast', Toast)
  app.component('Menu', Menu)
}

