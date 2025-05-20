import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,     // ← 포트 고정
    strictPort: true, // ← 사용 중이면 오류 발생 (자동 포트 증가 방지)
    proxy: {
      '/api': 'http://localhost:8080' // 백엔드 프록시 설정
    }
  }
})
