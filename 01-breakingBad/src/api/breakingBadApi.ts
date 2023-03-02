import axios from 'axios'  

const breakingBadApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

const rickAndMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export {    
    rickAndMortyApi,
    breakingBadApi
}