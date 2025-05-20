<template>
  <div class="ledger-page">
    <h1>가계부</h1>
    <ul v-if="entries.length > 0">
      <li v-for="entry in entries" :key="entry.id">
        [{{ entry.type }}] {{ entry.title }} - {{ entry.amount }}원
      </li>
    </ul>
    <p v-else>항목이 없습니다.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const entries = ref([])

const fetchLedger = async () => {
  try {
    const token = localStorage.getItem('accessToken')
    const res = await axios.get('/api/ledger', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    entries.value = res.data
  } catch (err) {
    console.error('가계부 불러오기 실패:', err)
  }
}

onMounted(() => {
  fetchLedger()
})
</script>

<style scoped>
.ledger-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
}
</style>
