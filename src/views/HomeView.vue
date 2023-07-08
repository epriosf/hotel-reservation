<script setup lang="ts">
import HotelSystem from '@/components/HotelSystem.vue'
import ListCard from '@/components/HotelCard/ListHotelCard.vue'
import { onMounted, ref } from 'vue'
import DatePicker from '@/components/DatePicker.vue'
import type { Hotel, HotelCost } from '@/models/hotel/interfaces/Hotel'
import { HotelsProducer } from '@/models/hotel/HotelProducer/HotelsProducer'
import { FormatType } from '@/models/hotel/enums/FormatType'
import { UserType } from '@/models/hotel/enums/UserType'

const jsonData = ref<null | Hotel[]>(null)
const date1 = new Date('2023-07-04')
const dates: Date[] = []
dates.push(date1)

onMounted(async () => {
  const jsonProducer = new HotelsProducer(FormatType.JSON)
  jsonData.value = await jsonProducer.fetchHotels()
  try {
    const booking: HotelCost = jsonProducer.getLowestCostHotel(
      dates,
      UserType.Reward,
      jsonData.value
    )
    if (booking) {
      console.log('Lowest cost hotel:', booking.hotel.name)
      console.log('Total Price:', booking.price)
    } else {
      console.log('No booking exists')
    }
  } catch (error) {
    console.log(error, 'error')
  }
})
</script>

<template>
  <hotel-system></hotel-system>
  <DatePicker />
  <ListCard></ListCard>
</template>
