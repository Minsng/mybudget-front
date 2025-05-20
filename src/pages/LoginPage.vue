<template>
  <div class="login-page">
    <h1>로그인</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="이메일" required />
      <input v-model="password" type="password" placeholder="비밀번호" required />
      <button type="submit">로그인</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const message = ref('')

const handleLogin = async () => {
  try {
    const res = await axios.post('/api/auth/login', {
      email: email.value,
      password: password.value
    })

    const token = res.data.token
    localStorage.setItem('accessToken', token) // 나중에 Pinia로 대체 가능
    message.value = '로그인 성공!'

    // 원하는 페이지로 이동 예시
    window.location.href = '/'
  } catch (err) {
    message.value = err.response?.data || '로그인 실패'
  }
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.login-page input {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
}
.login-page button {
  width: 100%;
  padding: 10px;
}
</style>
