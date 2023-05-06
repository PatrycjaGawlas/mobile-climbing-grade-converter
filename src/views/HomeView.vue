<template>
  <ion-content class="ion-padding">
    <ToggleButton
      @update-grade-type="updateGradeType($event)"
      :grade-type="gradeType"
    />
    <GradeSelector 
      @update-grade-system="upgradeGradeSystem($event)"
      :grade-type="gradeType"
    />
    <GradeScroller
        :left-grade-system="gradeSystemLeft"
        :right-grade-system="gradeSystemRight"
    />
  </ion-content>
</template>

<script setup lang="ts">
import ToggleButton from '../components/ToggleButton.vue'
import GradeScroller from '../components/GradeScroller.vue'
import GradeSelector from '../components/GradeSelector.vue'

import { IonContent } from '@ionic/vue'
import { ref } from 'vue'

const gradeType = ref('sport')
const gradeSystemLeft = ref('')
const gradeSystemRight = ref('')

function updateGradeType(type: string) {
  gradeType.value = type;
}

function upgradeGradeSystem({ order, gradeSystem }) {
  console.log(gradeSystem);
  if (order === 1) {
    gradeSystemLeft.value = gradeSystem;
  } else {
    gradeSystemRight.value = gradeSystem;
  }
}

</script>

<style scoped lang="scss">

</style>
