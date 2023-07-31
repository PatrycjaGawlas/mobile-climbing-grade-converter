<template>
    <div class="grade-scroller-column">
      <div 
        class="grade-scroller-column__grade"
        v-for="(grade, index) in grades"
        :key="grade + index"
      >{{ grade }}</div>
    </div>
</template>

<script setup>

defineProps(["grades"]);

</script>

<style scoped lang="scss">
.grade-scroller-column {
  width: 50%;
  flex-direction: column;
  &__grade {
    padding: 12px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    &:nth-child(even) {
      background: rgba(67, 76, 79, 0.1);
    }
  }
}
</style>