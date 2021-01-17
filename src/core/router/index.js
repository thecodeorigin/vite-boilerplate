import { createRouter, createWebHistory  } from 'vue-router'
import { auth } from '../middleware/auth'
import home from '../../modules/home/router'
import about from '../../modules/about/router'

/**
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @type {Array<RouteRecordRaw>}
 */
const routes = [
    ...home,
    ...about,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Global middleware
router.beforeEach(auth)

export { router }
