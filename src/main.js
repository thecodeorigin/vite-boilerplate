/**
 * A few note:
 * Vite serves your source files over native ES modules
 */
import { createApp } from 'vue'
import { router } from './core/router'
import { store } from './core/store'
import { globalMixin } from './core/mixins/global'
import Root from './Root.vue'
import './assets/css/main.css'
import './assets/scss/main.scss'

createApp(Root)
    .use(store)
    .use(router)
    .mixin(globalMixin)
    .mount('#app')
