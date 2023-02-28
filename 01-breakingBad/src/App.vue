<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';

import { routeLinks } from './router/link-routes';

</script>


<template>
  <div class="main-layout">
    <div class="wrapper">
      <header>
        <NavBar title="Sports" :links="routeLinks" />
      </header>

      <main>
        <RouterView />
      </main>

    </div>
  </div>
</template>

<style  lang="scss" scoped>

$background-color: #212632;
$font-color: #FFFFFF;
$header-navbar-color: #0A101F;

header {
  background: $header-navbar-color;
}

.main-layout{
  background: $background-color;
  color: $font-color;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
