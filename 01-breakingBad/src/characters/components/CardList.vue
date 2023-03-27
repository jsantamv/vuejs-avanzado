<script setup lang="ts">
import useCharaters from "@/characters/composables/useCharaters";

const { characters, isLoading } = useCharaters();
console.log(isLoading);

</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <ul>
    <li v-for="{ id, name } of characters" :key="id">
      {{ name }}
    </li>
  </ul>

  <h5>Error...</h5>
</template>

<style scoped></style>
