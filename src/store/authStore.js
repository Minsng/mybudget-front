// src/store/authStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from "@/axios.js";

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token') || '')
    const isLoggedIn = ref(!!token.value)

    const login = async ({ email, password }) => {
        try {
            const response = await api.post('/api/auth/login', { email, password })

            // JWT 저장
            token.value = response.data.token
            localStorage.setItem('token', token.value)
            isLoggedIn.value = true
        } catch (error) {
            throw new Error('로그인 실패')
        }
    }

    const logout = () => {
        token.value = ''
        isLoggedIn.value = false
        localStorage.removeItem('token')
    }

    return {
        token,
        isLoggedIn,
        login,
        logout,
    }
})
