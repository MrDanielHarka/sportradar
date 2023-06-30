<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <h1>Counter</h1>
  <p>The current count is...</p>
  <b>{{ count }}</b>
  <button @click="count--">-</button>
  <button @click="count++">+</button>
</template>

<style scoped>
b {
  margin: 1rem;
  font-size: 3rem;
  display: block;
}
button {
  margin: 0.25rem;
}
</style>
