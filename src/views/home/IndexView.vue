<script lang="ts" setup></script>

<template>
  <div class="home">
    <div class="home-title">Vue Template</div>
    <div class="home-buttons">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  &-title {
    margin-bottom: 36px;
    font-size: xx-large;
  }
}
</style>
