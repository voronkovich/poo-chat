import { createApp } from 'vue'
import App from './App.vue'
import router  from './router.js'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import '@shoelace-style/shoelace/dist/themes/light.css'
import './index.css'

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/')

createApp(App)
    .use(router)
    .mount('#app')
