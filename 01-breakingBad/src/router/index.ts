import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/shared/pages/HomePage.vue'
import AboutPage from '@/shared/pages/AboutPage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //publicas
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage },

        //character
        { 
            path: '/characters', 
            name: 'about', 
            component: () => import('@/characters/layout/CharacterLayout.vue') 
        },

        //default
        //{ path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
})

export default router