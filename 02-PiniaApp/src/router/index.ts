import { createRouter, createWebHistory } from 'vue-router'
import Counter1Page from '@/counter/pages/Counter1Page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1Page
    },


  ]
})

export default router
