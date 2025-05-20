// ./src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/LoginPage.vue'),
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/pages/SignUpPage.vue'),
    },
    {
        path: '/ledger',
        name: 'Ledger',
        component: () => import('@/pages/LedgerPage.vue'),
    },
    {
        path: '/',
        redirect: '/login',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
