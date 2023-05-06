<template>
  <div class="grade-selector">
    <ion-select
      aria-label="Garde 1"
      interface="action-sheet"
      placeholder="Select Grade System"
      @ionChange="selectGradeSystem(1, $event.detail.value)"
    >
      <ion-select-option
        v-for="system in leftGradeSystems"
        :key="system.id"
        :value="system.name"
      >
        {{ system.fullName }}
      </ion-select-option>
    </ion-select>
    <ion-select
      aria-label="Grade 2"
      interface="action-sheet"
      placeholder="Select Grade System"
      @ionChange="selectGradeSystem(2, $event.detail.value)"
    >
      <ion-select-option
        v-for="system in rightGradeSystems"
        :key="system.id"
        :value="system.name"
      >
        {{ system.fullName }}
      </ion-select-option>
    </ion-select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { IonSelect, IonSelectOption } from "@ionic/vue";
import gradeData from "../assets/grade-data.json";

const props = defineProps(["gradeType"]);
const emit = defineEmits(["update-grade-system"]);

const gradeSystems = ref(gradeData);
const selectedSystemLeft = ref("");
const selectedSystemRight = ref("");

const filteredGradeSystems = computed(() => {
  return gradeSystems.value.filter((gradeSystem) => {
    return gradeSystem.type === props.gradeType;
  });
});

const leftGradeSystems = computed(() => {
  return filteredGradeSystems.value.filter((gradeSystem) => {
    return gradeSystem.name !== selectedSystemRight.value;
  });
});

const rightGradeSystems = computed(() => {
  return filteredGradeSystems.value.filter((gradeSystem) => {
    return gradeSystem.name !== selectedSystemLeft.value;
  });
});

function selectGradeSystem(order: number, gradeSystem: string) {
  if (order === 1) {
    selectedSystemLeft.value = gradeSystem;
  } else {
    selectedSystemRight.value = gradeSystem;
  }

  emit("update-grade-system", {
    order,
    gradeSystem,
  });
}
</script>

<style scoped lang="scss">
.grade-selector {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
}
</style>
