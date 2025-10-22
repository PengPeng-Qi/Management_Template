<script lang="ts" setup>
const curRotateCount = ref(0);

function handleRotate() {
  const startRotation = curRotateCount.value;
  const fullRotations = Math.floor(Math.random() * 3 + 2);
  curRotateCount.value = startRotation + fullRotations * 12 + fullRotations;
}
</script>

<template>
  <div class="draw-table">
    <div>
      <div class="draw-table__center-point">
        <img
          src="./assets/bg_turntable_pointer.png"
          alt=""
          :style="{
            rotate: 15 + curRotateCount * 30 + 'deg',
            transition: 'rotate 3.5s ease',
          }"
        />
      </div>

      <div v-for="index in 12" :key="index">
        <img
          src="./assets/bg_turntable_item.png"
          alt=""
          class="draw-table__turntable-item"
          :style="{ rotate: 15 + index * 30 + 'deg' }"
        />
      </div>

      <img
        src="./assets/bg_turntable_item_active.png"
        alt=""
        class="draw-table__turntable-item"
        :style="{
          rotate: 15 + curRotateCount * 30 + 'deg',
          transition: 'rotate 3.5s ease',
        }"
      />
    </div>

    <div class="draw-table__buttons">
      <div class="draw-table__button1" @click="handleRotate">
        <img src="./assets/btn-draw-1.png" alt="" />
      </div>

      <div class="draw-table__button2">
        <img src="./assets/btn-draw-all.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.draw-table {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 644px;
  height: 690px;
  background-image: url("./assets/bg_act_draw_table.png");
  background-repeat: no-repeat;
  background-size: contain;
  &__button1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 297px;
    height: 118px;
    margin-top: 150px;
  }
  &__button2 {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 297px;
    height: 118px;
    margin-top: 150px;
  }
  &__center-point {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 272px;
    height: 272px;
    transform: translate(-50%, -50%);
  }
  &__turntable-item {
    position: absolute;
    top: 40px;
    right: 250px;
    z-index: 1;
    transform-origin: center bottom;
  }
}
</style>
