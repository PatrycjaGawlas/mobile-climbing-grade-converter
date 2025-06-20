<template>
  <ion-page>
    <ion-content>
      <TextBox :text="text" />
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';

import TextBox from '@/components/TextBox.vue';
import Footer from '@/components/Footer.vue';

const text = [
  'This application is provided for informational and educational purposes only. Climbing grade conversions are approximate and may contain errors. Users access and use this application at their own risk.',
  'The author disclaims all liability for any injuries, damages, or losses that may result from the use of this application. Always verify route grades through reliable sources before climbing.',
  'Prohibited uses:',
  '- Commercial use without permission',
  '- Copying or redistributing the code without consent',
  '- Misrepresenting authorship of this application',
  'The author reserves the right to modify the application and these terms at any time.'
];
</script>