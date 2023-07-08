<script setup lang="ts">
import HotelCard from '@/components/HotelCard/HotelCard.vue'
import { useHotelStore } from '@/stores/hotel'
import { onMounted, ref } from 'vue'
import type { Hotel } from '@/models/hotel/interfaces/Hotel'
const hotelStore = useHotelStore()
const hotels = ref<Hotel[]>([])

onMounted(async () => {
  await hotelStore.getHotels()
  hotels.value = hotelStore.hotelsDetail
})
</script>

<template>
  <div class="grid-container">
    <div class="grid-item" v-for="hotel in hotels" :key="hotel.id">
      <HotelCard :hotel="hotel"></HotelCard>
    </div>
  </div>
</template>

<style lang="scss">
$column-width: calc(100% / 3);
$row-height: 800px;

.grid-container {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: $row-height;
  gap: 20px;
  height: $row-height;
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  @media (max-width: 767px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }
}
</style>
