import type { App, Component } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import DatePicker from 'primevue/datepicker'
import Checkbox from 'primevue/checkbox'
import Toast from 'primevue/toast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'



export function componetPrimeVue(app: App) {
  app.component('Button', Button)
  app.component('Card', Card)
  app.component('InputText', InputText)
  app.component('Password', Password)
  app.component('DatePicker', DatePicker)
  app.component('Checkbox', Checkbox)
  app.component('Toast', Toast)
  app.component('DataTable', DataTable)
  app.component('Column', Column)
  app.component('Dialog', Dialog)
}

