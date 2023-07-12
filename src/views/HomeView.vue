<template>
  <ion-content class="ion-padding">
    <ToggleButton
      @update-climbing-type="updateClimbingType($event)"
      :climbing-type="climbingType"
    />
    <GradeSelector 
      @update-grade-system="upgradeGradeSystem($event)"
      :climbing-type="climbingType"
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

const climbingType = ref('sport')
const gradeSystemLeft = ref('')
const gradeSystemRight = ref('')

function updateClimbingType(type: string) {
  climbingType.value = type;
  gradeSystemLeft.value = '';
  gradeSystemRight.value = '';
}

function upgradeGradeSystem({ order, gradeSystem }: {order: number, gradeSystem: string}) {
  if (order === 1) {
    gradeSystemLeft.value = gradeSystem;
  } else {
    gradeSystemRight.value = gradeSystem;
  }
}

</script>

<style scoped lang="scss">

</style>
