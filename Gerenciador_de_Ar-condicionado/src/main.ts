
import "./style.css";
import { createApp } from 'vue'
import App from './App.vue'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import router from './router/index.route'
import { componetPrimeVue } from "./modules/component-primevue.module"
import { componentsDefault } from "./modules/component-default.module"
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue, 
  { theme: { 
    preset: Aura
  } 
})
app.use(componetPrimeVue)
app.use(componentsDefault)
app.use(router)
app.mount('#app')
