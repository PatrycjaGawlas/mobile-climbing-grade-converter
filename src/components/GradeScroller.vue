<template>
  <div class="grade-scroller">
    <div class="grade-scroller__column">
      <div 
        class="grade-scroller__grade grade-scroller__grade--left"
        v-for="grade in leftGrades"
        :key="grade"
      >{{ grade }}</div>
    </div>
    <div class="grade-scroller__column">
      <div
        class="grade-scroller__grade grade-scroller__grade--right"
        v-for="grade in rightGrades"
        :key="grade"
      >
        {{ grade }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import gradeData from "../assets/grade-data.json";

const props = defineProps(["leftGradeSystem", "rightGradeSystem"]);

const data = ref(gradeData);

const leftGrades = computed(() => {
  const gradeSystem = data.value.find(
    (system) => system.name === props.leftGradeSystem
  );
  return gradeSystem?.grades ? gradeSystem.grades : [];
});

const rightGrades = computed(() => {
  const gradeSystem = data.value.find(
    (system) => system.name === props.rightGradeSystem
  );
  return gradeSystem?.grades ? gradeSystem.grades : [];
});
</script>

<style scoped lang="scss">
.grade-scroller {
  font-size: 24px;
  border-radius: 15px;
  background: rgba(217, 217, 217, 0.35);
  margin-top: 32px;
  display: flex;
  height: calc(100% - 195px);
  overflow: auto;
  &__column {
    width: 50%;
    flex-direction: column;
  }
  &__grade {
    padding: 12px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    &:nth-child(even) {
      background: rgba(67, 76, 79, 0.1);
    }
    &--left {
      &:last-child {
        border-radius: 0 0 0 15px;
      }
    }
    &--right {
      &:last-child {
        border-radius: 0 0 15px 0;
      }
    }
  }
}
</style>
