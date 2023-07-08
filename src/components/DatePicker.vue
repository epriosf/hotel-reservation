<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
const emits = defineEmits(['selected-dates'])
const selectedDates = ref([])
const handleDates = (dates: Date[]) => {
  emits('selected-dates', dates)
}
</script>
<template>
  <div class="date-picker">
    <VueDatePicker
      v-model="selectedDates"
      multi-dates
      multi-dates-limit="10"
      placeholder="Select booking dates"
      :min-date="new Date()"
      :max-date="new Date('2024/07/07')"
      :enable-time-picker="false"
      prevent-min-max-navigation
      @update:model-value="handleDates"
    ></VueDatePicker>
  </div>
</template>
<style lang="scss">
.date-picker {
  width: 80%;
  margin: 30px auto auto;
}
</style>
