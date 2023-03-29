<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterOptionsStore } from "../../store/counter-options";
import CounterOptionsValue from "../components/CounterOptionsValue.vue";

const couterStore = useCounterOptionsStore();
const { count, squereCount } = storeToRefs(couterStore);


</script>

<template>
  <h1>Pinia Count</h1>
  <h4>contador: {{ count }}</h4>
  <h4>Squere Counter: {{ squereCount }}</h4>

  <hr>
  <CounterOptionsValue />
  <hr>

  <button @click="couterStore.increment()">+1</button>
  <button @click="couterStore.incrementBy(-2)">-2</button>
  <button @click="couterStore.incrementBy(5)">+5</button>
  <button @click="couterStore.$reset()">Reset</button>
</template>

<style scoped>
button {
  margin: 5px
}
</style>
