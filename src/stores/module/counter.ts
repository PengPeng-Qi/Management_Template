export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const increment = () => {
      count.value++;
    };

    return {
      count,
      doubleCount,
      increment,
    };
  },
  {
    persist: true, // 是否持久化
  }
);
