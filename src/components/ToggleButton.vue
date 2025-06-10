<template>
  <div class="toggle">
    <div
      class="toggle__element toggle__element--left"
      :class="{ 'toggle__element--selected': props.climbingType === 'sport' }"
      @click="selectClimbingType('sport')"
    >
      <img src="../assets/icons/sport.svg" />
      SPORT CLIMBING
    </div>
    <div
      class="toggle__element toggle__element--right"
      :class="{ 'toggle__element--selected': props.climbingType === 'boulder' }"
      @click="selectClimbingType('boulder')"
    >
      <img src="../assets/icons/boulder.svg" />
      BOULDERING
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["climbingType"]);
const emit = defineEmits(["update-climbing-type"]);

function selectClimbingType(type: string): void {
  emit("update-climbing-type", type);
}
</script>

<style scoped lang="scss">
.toggle {
  width: 100%;
  display: flex;
  border-radius: 15px;
  &__element {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    background: rgba(254, 216, 185, 0.35);
    padding: 10px 0;
    font-size: 14px;
    &--left {
      border-radius: 15px 0 0 15px;
    }
    &--right {
      border-radius: 0 15px 15px 0;
    }
    &--selected {
      background: rgba(243, 180, 129, 0.7);
    }
    img {
      object-fit: contain;
      height: 48px;
      margin-bottom: 8px;
    }
  }
}
</style>
