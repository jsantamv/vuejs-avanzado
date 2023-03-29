<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterSetupStore } from '../../store/counter-setup';
import CounterOptionsValue from "../components/CounterOptionsValue.vue";

const counterStore = useCounterSetupStore();
const { count, squareCount } = storeToRefs(counterStore);


</script>

<template>
  <h1>counter-2</h1>
  <h4>contador: {{ count }}</h4>
  <h4>Squere Counter: {{ squareCount }}</h4>

  <button @click="counterStore.increment()">+1</button>
  <button @click="counterStore.incrementBy(-2)">-2</button>
  <button @click="counterStore.incrementBy(5)">+5</button>
</template>

<style scoped>
button {
  margin: 5px
}
</style>
