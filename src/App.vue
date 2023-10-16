<script setup lang="ts">
onMounted(() => {
  document.title = import.meta.env.VITE_APP_TITLE
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
