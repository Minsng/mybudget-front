// src/axios.js
import axios from 'axios'

// 기본 axios 인스턴스 생성
const api = axios.create({
    baseURL: '/api', // Vite 프록시를 통해 http://localhost:8080 으로 전달됨
    withCredentials: true, // 쿠키가 필요하다면 설정 (JWT만 쓴다면 없어도 무방)
})

// 요청 인터셉터: 토큰이 있을 경우 헤더에 자동 첨부
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// 응답 인터셉터: 토큰 만료 등 처리 가능
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // 예: 401 → 자동 로그아웃 or 알림
        if (error.response && error.response.status === 401) {
            console.warn('인증 실패: 로그인 다시 필요')
        }
        return Promise.reject(error)
    }
)

export default api
