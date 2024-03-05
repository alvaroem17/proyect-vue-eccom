import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'

import Vueform from '@vueform/vueform'
import vueformConfig from './vueform.config'

const pinia = createPinia()
const app = createApp(App)

pinia.use(persistedState)

app.use(router)
app.use(pinia)
app.use(Vueform, vueformConfig)

app.mount('#app')
