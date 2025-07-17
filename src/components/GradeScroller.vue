<template>
  <div class="grade-scroller">
    <GradeScrollerColumn v-if="grades.left" :grades="grades.left"/>
    <GradeScrollerColumn v-if="grades.right" :grades="grades.right"/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import gradeData from "../assets/grade-data.json";
import GradeScrollerColumn from './GradeScrollerColumn.vue'

interface GradeScrollerProps {
  leftGradeSystem: string;
  rightGradeSystem: string;
}
const props = defineProps<GradeScrollerProps>();

const data = ref(gradeData);

const grades = computed(() => {
  const gradesData = JSON.parse(JSON.stringify(data.value));

  const leftGrades = gradesData.find(
    (system: Grade) => system.name === props.leftGradeSystem
  )?.grades || [];

  const rightGrades = gradesData.find(
    (system: Grade) => system.name === props.rightGradeSystem
  )?.grades || [];

  let gradesLength = leftGrades.length < rightGrades.length ? leftGrades.length : rightGrades.length

  for (let i = 0; i < gradesLength; i++) {
    if (
      leftGrades[i].includes('/') && rightGrades[i].includes('/') ||
      (leftGrades[i] === leftGrades[i + 1] || leftGrades[i] === leftGrades[i - 1]) && rightGrades[i].includes('/') ||
      (rightGrades[i] === rightGrades[i + 1] || rightGrades[i] === rightGrades[i - 1]) && leftGrades[i].includes('/')
    ) {
      leftGrades.splice(i, 1);
      rightGrades.splice(i, 1);
      gradesLength = gradesLength - 1;
    }
  }

  return {
    left: leftGrades,
    right: rightGrades
  }
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
}
</style>
