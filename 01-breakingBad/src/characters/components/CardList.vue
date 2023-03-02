

<script setup lang="ts">
import { ref } from 'vue';
import { rickAndMortyApi } from '@/api/breakingBadApi';
import type { Character, Result } from '@/characters/interfaces/characters';

const characters = ref<Result[]>()

rickAndMortyApi.get<Character>('/character/')
    .then(resp => {
        characters.value = resp.data.results
    })


</script>


<template>
    <ul>
        <li v-for="{ id, name } of characters" :key="id">
            {{ name }}
        </li>
    </ul>
</template>


<style scoped></style>