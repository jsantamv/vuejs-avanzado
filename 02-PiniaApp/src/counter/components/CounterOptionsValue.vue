<script setup lang="ts">

import { useCounterOptionsStore } from '../../store/counter-options';
const counter = useCounterOptionsStore()

</script>

<template>
    <h1>el Valor es: {{ counter.count }}</h1>
    <h4>Ultimo cambio: {{ counter.lastChanged }}</h4>
</template>


<style scoped></style>