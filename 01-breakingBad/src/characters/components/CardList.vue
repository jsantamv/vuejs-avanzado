<script setup lang="ts">
import { breakingBadApi, rickAndMortyApi } from '@/api/breakingBadApi';
import useCharaters from "@/characters/composables/useCharaters";
import { useQuery } from '@tanstack/vue-query'
import type { Character, Info, Result } from '../interfaces/characters';

// (opcion 1) Uso mediante compsables fucntions 
//const { characters, isLoading, hasError, errorMessage } = useCharaters();



// (opcion 2) Mediante TanStack Query (VUE-QUERY)
const getCharactersSlow = async (): Promise<Character> => {
  const { data } = await rickAndMortyApi.get<Character>('/character')
  return data
}
const { isLoading, isError, data: characters, error } = useQuery(
  ['characters'],
  getCharactersSlow,

)

</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <ul>
    <li v-for="{ id, name } of characters?.results" :key="id">
      {{ name }}
    </li>
  </ul>

  <h5 v-if="isError">Error: {{ error }}</h5>
</template>

<style scoped></style>
