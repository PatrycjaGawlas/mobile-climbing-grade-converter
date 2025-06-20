<template>
  <ion-page>
    <ion-content>
      <TextBox :text />
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';

import TextBox from '@/components/TextBox.vue';
import Footer from '@/components/Footer.vue';

const text = [
  'This application does not use cookies.',
  'No personal data is collected, stored, or processed by the app.',
  'Your usage is completely anonymous and no tracking is performed.'
]
</script>
