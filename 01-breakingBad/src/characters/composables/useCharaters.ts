import { ref } from 'vue'
import { rickAndMortyApi } from '@/api/breakingBadApi'
import type { Result, Character } from '@/characters/interfaces/characters'

//props de estado global
const isLoading = ref<boolean>(true)
const characters = ref<Result[]>()

const useCharaters = () => {

    // esto es para cuando queremos utilizar Suspense en nuestro Router
    // const { data } = await rickAndMortyApi.get<Character>('/character')
    // const characters = ref<Result[]>(data.results)


    console.log((characters.value?.length == false));


    if (characters.value?.length) {
        rickAndMortyApi.get<Character>('/character')
            .then(resp => {
                const { results } = resp.data
                characters.value = results
                isLoading.value = false
            })
    }

    return {
        isLoading,
        characters
    }
}

export default useCharaters