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

const text = ['This application does not collect, store, or process any personal data from users. We do not use cookies, do not track user activity, and do not share any information with third parties. All calculations are performed locally in your browser.'];
</script>