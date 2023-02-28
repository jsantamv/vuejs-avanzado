<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';

import { routeLinks } from './router/link-routes';

</script>


<template>
  <div class="main-layout">
    <div class="wrapper">
      <header>
        <NavBar title="BreakingBad" :links="routeLinks" />
      </header>

      <main>
        <RouterView />
      </main>

    </div>
  </div>
</template>

<style  lang="scss" scoped>

$background-color: #212632;

.main-layout{
  background: $background-color;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
