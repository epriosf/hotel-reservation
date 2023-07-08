<script setup lang="ts">
import HotelSystem from '@/components/HotelSystem.vue'
import ListCard from '@/components/HotelCard/ListHotelCard.vue'
import { ref } from 'vue'
import DatePicker from '@/components/DatePicker.vue'
import BaseToggleButton from '@/components/ui/BaseToggleButton.vue'
import { UserType } from '@/models/hotel/enums/UserType'

const selectedDates = ref<Date[]>([])
const userType = ref<UserType>(UserType.Regular)
const isActive = ref(true)
const handleSelectedDates = (dates: Date[]) => {
  selectedDates.value = dates
}
const handleToggleButton = (isActive: boolean) => {
  if (isActive === true) {
    userType.value = UserType.Regular
  } else {
    userType.value = UserType.Reward
  }
}
</script>

<template>
  <hotel-system></hotel-system>
  <BaseToggleButton :initialIsActive="isActive" @toggleButton="handleToggleButton" />
  <DatePicker @selected-dates="handleSelectedDates" />
  <ListCard :selected-dates="selectedDates" :userType="userType"></ListCard>
</template>
