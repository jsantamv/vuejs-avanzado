<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterOptionsStore } from "../../store/counter-options";
import CounterOptionsValue from "../components/CounterOptionsValue.vue";

const counterStore = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(counterStore);


</script>

<template>
  <h1>Pinia Count</h1>
  <h4>contador: {{ count }}</h4>
  <h4>Squere Counter: {{ squareCount }}</h4>

  <hr>
  <CounterOptionsValue />
  <hr>

  <button @click="counterStore.increment()">+1</button>
  <button @click="counterStore.incrementBy(-2)">-2</button>
  <button @click="counterStore.incrementBy(5)">+5</button>
  <button @click="counterStore.$reset()">Reset</button>
</template>

<style scoped>
button {
  margin: 5px
}
</style>
