<template>
  <div class="signup-page">
    <h1>회원가입</h1>
    <form @submit.prevent="handleSignup">
      <input v-model="form.email" type="email" placeholder="이메일" required />
      <input v-model="form.nickname" type="text" placeholder="닉네임" required />
      <input v-model="form.password" type="password" placeholder="비밀번호" required />
      <button type="submit">가입</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  email: '',
  password: '',
  nickname: ''
})

const message = ref('')

const handleSignup = async () => {
  try {
    const res = await axios.post('/api/auth/signup', form.value)
    message.value = res.data
  } catch (err) {
    message.value = err.response?.data || '에러 발생'
  }
}
</script>

<style scoped>
.signup-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.signup-page input {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
}
.signup-page button {
  width: 100%;
  padding: 10px;
}
</style>
