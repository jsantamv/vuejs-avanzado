<script setup lang="ts">
import { ref, defineComponent } from 'vue';
const counter = ref(0)

</script>

<template>
  <div class="wrapper">
    <h1>Hola</h1>
    <p>Contador: {{ counter }}</p>
    <button @click="counter++">+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>

