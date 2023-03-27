<script setup lang="ts">
import useCharaters from "@/characters/composables/useCharaters";
const { characters, isLoading, hasError, errorMessage } = useCharaters();

</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <ul>
    <li v-for="{ id, name } of characters" :key="id">
      {{ name }}
    </li>
  </ul>

  <h5 v-if="hasError">Error: {{ errorMessage }}</h5>

</template>

<style scoped></style>
