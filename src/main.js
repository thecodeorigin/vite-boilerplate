import { createApp } from 'vue'
import { router } from "./core/router/index"
import Root from './Root.vue'
import './main.css'

createApp(Root)
    .use(router)
    .mount('#app')
