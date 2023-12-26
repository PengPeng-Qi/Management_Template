<script setup lang="ts">
const props = defineProps({
  count: { type: Number, required: true }
})

const displayCount = ref(props.count)

const animateCount = (newCount: number) => {
  const duration = 2000 // 动画总时间，单位毫秒
  const difference = newCount - displayCount.value // 动画需要改变的差值
  let start: number | undefined = undefined // 动画开始时间

  // 动画函数
  const step = function (timestamp: number) {
    // 初始化动画开始时间
    if (start === undefined) {
      start = timestamp
    }

    // 计算已过时间
    const elapsed = timestamp - start

    // 计算动画进度 [0, 1]
    const progress = Math.min(elapsed / duration, 1)

    displayCount.value = Math.ceil(progress * difference + displayCount.value)

    // 如果时间未过且值未达到目标，继续动画
    if (elapsed < duration && displayCount.value < newCount) {
      requestAnimationFrame(step)
    } else {
      // 确保动画结束时，值为目标值
      displayCount.value = newCount
    }
  }

  requestAnimationFrame(step)
}

watch(
  () => props.count,
  newCount => {
    if (displayCount.value < newCount) {
      animateCount(newCount)
    } else {
      displayCount.value = newCount
    }
  }
)
</script>

<template>
  <transition name="fade">
    <div>{{ displayCount || '&nbsp;' }}</div>
  </transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
