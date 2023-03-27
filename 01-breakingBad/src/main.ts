import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from './App.vue';
import router from './router';

import './assets/main.scss';

const app = createApp(App);

//puede manejar el cahce por nosotros
//en algun lado de la memoria 
//del navegador web va utilizar la 
// ultima version actualizada. 
app.use(VueQueryPlugin)


app.use(router);
app.mount('#app');
