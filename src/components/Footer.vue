<template>
  <footer class="footer">
    <a @click="openPage(key)" v-for="(value, key) in pages">{{value}}</a>
  </footer>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter();

  const pages = ref({
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    cookies: 'Cookies'
  })

  function openPage(page: string) {
    router.push(`/${page}`);  
  }

</script>

<style scoped lang="scss">
  .footer {
    padding: 32px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: white;
      margin-right: 12px;
    }
  }
</style>