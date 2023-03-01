
<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { RouterView } from 'vue-router';

</script>
<template>
    <div>
        <h1>Personajes</h1>

        <!-- NavBar -->
        <NavBar/>

                                                                                                         
        <!-- RouterView + suspense -->
        <RouterView />
    </div>
</template>

<style scoped></style>