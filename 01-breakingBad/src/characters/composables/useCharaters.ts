import { ref } from 'vue'
import { rickAndMortyApi } from '@/api/breakingBadApi'
import type { Result, Character } from '@/characters/interfaces/characters'

//props de estado global
const characters = ref<Result[]>()
const isLoading = ref<boolean>(true)

const useCharaters = () => {

    rickAndMortyApi.get<Character>('/character')
        .then(resp => {
            characters.value = resp.data.results
            isLoading.value = false
        })

    return {
        isLoading,
        characters
    }
}

export default useCharaters