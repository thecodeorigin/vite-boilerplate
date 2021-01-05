import { createApp } from 'vue'
import { router } from './core/router'
import { store } from './core/store'
import Root from './Root.vue'
import './main.css'

createApp(Root)
    .use(store)
    .use(router)
    .mount('#app')
