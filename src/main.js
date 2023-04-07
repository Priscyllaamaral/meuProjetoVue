import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'


import './assets/main.css'
import 'bootstrap'

createApp(App)
    .use(router)
    .mount('#app')
