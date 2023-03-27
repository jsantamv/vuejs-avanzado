import { onMounted, ref } from 'vue'
import { rickAndMortyApi } from '@/api/breakingBadApi'
import type { Result, Character } from '@/characters/interfaces/characters'
import axios from 'axios';

//props de estado global
//estos parametros lo sacamos del USE
//para no volver hacer la petecion. 
//Podemos evaluar algun tiempo para validar 
// si debemos de obtener datos nuevamente.
const characters = ref<Result[]>([])

const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>()

const useCharaters = () => {

    //podemos realizarlo en algun siclo de vida 
    // del componente.
    onMounted(async () => {
        loadCharacters()
    })

    const loadCharacters = async () => {

        if (characters.value.length > 0) return
        isLoading.value = true
        
        try {
            const { data } = await rickAndMortyApi.get<Character>('/character')
            characters.value = data.results            
            isLoading.value = false

        } catch (error) {
            hasError.value = true
            if (axios.isAxiosError(error)) return errorMessage.value = error.message
            errorMessage.value = (error as string)
            isLoading.value = false
        }
    }

    return {
        isLoading,
        characters,
        hasError,
        errorMessage
    }
}

export default useCharaters