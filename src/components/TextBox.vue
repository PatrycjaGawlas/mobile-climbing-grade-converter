<template>
  <div class="text-box" >
    <p v-for="(paragraph, index) in props.text" :key="index">{{ paragraph }}</p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['text']);

</script>

<style scoped>
.text-box {
  margin: 32px;
  padding: 16px 32px;
  background: rgba(217, 217, 217, 0.35);
  border-radius: 15px;
  font-size: 18px;
}
</style>