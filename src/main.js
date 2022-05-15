import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes  from './routes.js'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import '@shoelace-style/shoelace/dist/themes/light.css'
import './index.css'

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/')

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
