import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterSetupStore = defineStore('counterSetup', () => {
    const count = ref<number>(0)
    const lastChanged = ref<Date>()


    const incrementBy = (value: number) => {
        count.value = + value
        lastChanged.value = new Date()
    }

    return {
        //state propierties
        count,
        lastChanged,

        // Getters
        squareCount: computed(() => Math.pow(count.value, 2)),

        // Actions
        incrementBy,
        increment: () => incrementBy(1)
    }
})