<template>
  <div class="text-box" >
    <p v-for="(paragraph, index) in props.text" :key="index">{{ paragraph }}</p>
  </div>
</template>

<script setup lang="ts">
interface TextBoxProps {
  text: string[];
}
const props = defineProps<TextBoxProps>();
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