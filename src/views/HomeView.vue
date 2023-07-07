<script setup lang="ts">
import HotelSystem from '@/components/HotelSystem.vue'
import ListCard from '@/components/HotelCard/ListHotelCard.vue'
import { getLowestCostHotelWithBestRating } from '@/models/hotel/HotelService'
import DatePicker from '@/components/DatePicker.vue'
const date1 = new Date('2023-07-09')
const dates: Date[] = []
dates.push(date1)

const [lowestCostHotel, lowestCost] = getLowestCostHotelWithBestRating(dates, 'reward')
if (lowestCostHotel) {
  console.log('Lowest cost hotel:', lowestCostHotel.name)
  console.log('Total Price:', lowestCost)
} else {
  console.log('No hotels found')
}
</script>

<template>
  <hotel-system></hotel-system>
  <DatePicker />
  <ListCard></ListCard>
</template>
