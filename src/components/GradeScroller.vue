<template>
  <div class="grade-scroller">
    <div class="grade-scroller__column">
      <div 
        class="grade-scroller__grade"
        v-for="grade in leftGrades"
        :key="grade"
      >{{ grade }}</div>
    </div>
    <div class="grade-scroller__column">
      <div
        class="grade-scroller__grade"
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
  padding: 32px 0;
  margin-top: 32px;
  display: flex;
  // TO DO
  min-height: calc(100% - 200px);
  &__column {
    align-items: center;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  &__grade {
    margin-bottom: 24px;
  }
}
</style>
