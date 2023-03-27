import type { Character } from '../../characters/interfaces/characters';
import { rickAndMortyApi } from '@/api/breakingBadApi';


const getCharactersSlow = async (): Promise<Character> => {

    return new Promise((resolve) => {

        //ejemplo de una peticion muy lenta
        // que dura 3s
        setTimeout(async () => {
            const { data } = await rickAndMortyApi.get<Character>('/character')
            resolve(data)
        }, 3000);
    })


}

export {
    getCharactersSlow
}