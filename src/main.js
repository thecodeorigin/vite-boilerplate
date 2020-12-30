import { createApp } from 'vue'
import { router } from "./core/router/index"
import Root from './Root.vue'
import './index.css'

createApp(Root)
    .use(router)
    .mount('#app')
