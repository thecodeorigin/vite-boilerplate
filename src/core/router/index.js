import { createRouter, createWebHistory  } from 'vue-router'
import home from '../../modules/home/router'
import about from '../../modules/about/router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...home,
        ...about,
    ],
})
