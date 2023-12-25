<script setup lang="ts">
defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const icons = Array.from({ length: 3 }, (item, index) => 'library-icon' + (Number(index) + 1))

const iconLibraryDialog = ref(false)

const selectedIcon = (icon: string) => {
  emits('update:modelValue', icon)
  iconLibraryDialog.value = false
}
</script>

<template>
  <div class="icon-picker" @click="iconLibraryDialog = true">
    <!-- 没有选择的 icon -->
    <div v-if="!modelValue">+</div>

    <!-- 已有选中的 icon -->
    <SvgIcon :name="modelValue" />
  </div>

  <div class="icon-library" v-if="iconLibraryDialog">
    <div v-for="(icon, index) in icons" :key="index" @click="selectedIcon(icon)">
      <SvgIcon :name="icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-picker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #a8abb2;
}
.icon-library {
  display: flex;
}
</style>
