import type { RouteRecordRaw } from 'vue-router';

import CharacterLayout from '@/characters/layout/CharacterLayout.vue';
import CharacterId from '@/characters/pages/CharacterId.vue';
import CharacterList from '@/characters/pages/CharaterList.vue';
import CharacterSearch from '@/characters/pages/CharacterSearch.vue';


export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children: [
        { 
            path: 'by/id',
            name: 'character-id', 
            props: { title: 'Por Id', visible: false, },
            component: CharacterId,
        },
        { 
            path: 'list',
            name: 'character-list', 
            props: { title: 'Lista Completa', visible: true, },
            component: CharacterList,
        },
        { 
            path: 'search',
            name: 'character-search', 
            props: { title: 'Búsqueda', visible: true, },
            component: CharacterSearch,
        },
    ]
}


