<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1>Climbing Grade Converter</h1>
      <p class="home-view__text">Easily convert climbing grades between different systems including French, Yosemite, UIAA, British, and much more.</p>
      <ToggleButton
        @update-climbing-type="updateClimbingType($event)"
        :climbing-type="climbingType"
      />
      <GradeSelector
        @update-grade-system="updateGradeSystem($event)"
        :climbing-type="climbingType"
      />
      <GradeScroller
        :left-grade-system="gradeSystemLeft"
        :right-grade-system="gradeSystemRight"
      />
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import ToggleButton from '../components/ToggleButton.vue'
import GradeScroller from '../components/GradeScroller.vue'
import GradeSelector from '../components/GradeSelector.vue'
import Footer from '../components/Footer.vue';

import { IonContent, IonPage } from '@ionic/vue'
import { ref } from 'vue'

const climbingType = ref('sport')
const gradeSystemLeft = ref('')
const gradeSystemRight = ref('')

function updateClimbingType(type: string) {
  climbingType.value = type;
  gradeSystemLeft.value = '';
  gradeSystemRight.value = '';
}

function updateGradeSystem({ order, gradeSystem }: {order: number, gradeSystem: string}) {
  if (order === 1) {
    gradeSystemLeft.value = gradeSystem;
  } else {
    gradeSystemRight.value = gradeSystem;
  }
}

</script>

<style scoped lang="scss">
 .home-view {
  &__text {
    margin-bottom: 32px
  }
 }
</style>
