<script setup lang="ts">
import CardList from "@/characters/components/CardList.vue";

//para obtener los propiedades heradades
const props = defineProps<{ title: string; visible: boolean }>();
</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
  </div>

  <CardList />
</template>

<style scoped></style>
