<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  document.title = import.meta.env.VITE_APP_TITLE
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
