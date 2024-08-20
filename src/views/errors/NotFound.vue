<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>{{ $t("notFound.message") }}</p>
    <router-link to="/">{{ $t("notFound.backBtn") }}</router-link>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  h1 {
    font-size: 6em;
  }
  p {
    font-size: 1.5em;
  }
}
</style>
