<script setup lang="ts">
import { RouterView } from 'vue-router';


</script>

<template>
  <div class="wrapper">
    <header>
    </header>
      <!-- NavBar -->
    <main>
      <RouterView/>
    </main>

  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>

