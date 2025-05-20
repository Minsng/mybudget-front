import {createRouter, createWebHistory} from "vue-router";

import SignUpPage from "@/pages/SignUpPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import LedgerPage from "@/pages/LedgerPage.vue";

const routes = [
    { path: '/signup', component: SignUpPage },
    { path: '/login', component: LoginPage },
    { path: '/', component: LedgerPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router