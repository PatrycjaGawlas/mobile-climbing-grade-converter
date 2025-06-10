<template>
  <div class="grade-selector">
    <div class="grade-selector__column">
      <ion-select
        :interface="selectInterface"
        aria-label="Garde 1"
        placeholder="Select System"
        v-model="selectedSystemLeft"
        @ionChange="selectGradeSystem(1, $event.detail.value)"
      >
        <ion-select-option
          class="grade-selector__select"
          v-for="system in leftGradeSystems"
          :key="system.id"
          :value="system.name"
        >
          {{ system.fullName }}
        </ion-select-option>
      </ion-select>
    </div>
    <div class="grade-selector__column">
      <ion-select
        aria-label="Grade 2"
        :interface="selectInterface"
        placeholder="Select System"
        v-model="selectedSystemRight"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { IonSelect, IonSelectOption } from "@ionic/vue";
import gradeData from "../assets/grade-data.json";
import { useResponsiveSelect } from '../composables/useResponsiveSelect.js';

const { selectInterface } = useResponsiveSelect();
const props = defineProps(["climbingType"]);
const emit = defineEmits(["update-grade-system"]);

const gradeSystems = ref(gradeData);
const selectedSystemLeft = ref("");
const selectedSystemRight = ref("");

watch(() => props.climbingType, () => {
  resetGradeSystems();
})

const filteredGradeSystems = computed(() => {
  return gradeSystems.value.filter((gradeSystem) => {
    return gradeSystem.type === props.climbingType;
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

function resetGradeSystems() {
  selectedSystemLeft.value = '';
  selectedSystemRight.value = '';
}
</script>

<style scoped lang="scss">
.grade-selector {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;

  &__column {
    width: 50%;
    display: flex;
    justify-content: center;
  }
}
</style>
