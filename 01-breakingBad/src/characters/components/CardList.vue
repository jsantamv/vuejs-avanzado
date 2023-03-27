<script setup lang="ts">
// import { rickAndMortyApi } from '@/api/breakingBadApi';
//import useCharaters from "@/characters/composables/useCharaters"; (opcion 2)
import { useQuery } from '@tanstack/vue-query'
import CharacterCard from '@/characters/components/CharacterCard.vue';
import { getCharactersSlow } from '@/shared/utils/charactersOptions';
// import type { Character, Info, Result } from '../interfaces/characters';

// (opcion 1) Uso mediante compsables fucntions 
//const { characters, isLoading, hasError, errorMessage } = useCharaters();

// (opcion 2) Mediante TanStack Query (VUE-QUERY)
// const getCharactersSlow = async (): Promise<Character> => {

//   return new Promise((resolve) => {
//     //ejemplo de una peticion muy lenta
//     // que dura 3s
//     setTimeout(async () => {
//       const { data } = await rickAndMortyApi.get<Character>('/character')
//       resolve(data)
//     }, 1);
//   })
// }

const { isLoading, isError, data: characters, error } = useQuery(
  ['characters'],
  getCharactersSlow,
  {
    //1000*60 un minuto
    cacheTime: 1000 * 60,
    refetchOnReconnect: 'always',
  }

)

</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>

  <div id="card-list">
    <CharacterCard v-for="character of characters?.results" 
      :key="character.id" 
      :character="character" 
    />
  </div>

  <h5 v-if="isError">Error: {{ error }}</h5>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
