<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
const date = ref()
</script>
<template>
  <div class="date-picker">
    <VueDatePicker
      v-model="date"
      multi-dates
      multi-dates-limit="10"
      placeholder="Select booking dates"
      :min-date="new Date()"
      :max-date="new Date('2024/07/07')"
      :enable-time-picker="false"
      prevent-min-max-navigation
    ></VueDatePicker>
  </div>
</template>
<style lang="scss">
.date-picker {
  width: 80%;
  margin: 30px auto auto;
}
</style>
