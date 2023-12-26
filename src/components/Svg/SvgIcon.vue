<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: String,
    default: '100%'
  },
  width: {
    type: String,
    default: '28'
  },
  height: {
    type: String,
    default: '28'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" :width="width || size" :height="height || size">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
