<script setup lang="ts">
import HotelCard from '@/components/HotelCard/HotelCard.vue'
import { useHotelStore } from '@/stores/hotel'
import { computed } from 'vue'
const hotelStore = useHotelStore()
const hotels = computed(() => hotelStore.hotels)
</script>

<template>
  <div class="grid-container">
    <div class="grid-item" v-for="hotel in hotels" :key="hotel.id">
      <HotelCard
        :name="hotel.name"
        :location="hotel.location"
        :rate="hotel.rate"
        :phone="hotel.phone"
        :website="hotel.website"
        :weekdayPrice="hotel.weekdayPrice"
        :weekendPrice="hotel.weekendPrice"
      ></HotelCard>
    </div>
  </div>
</template>

<style lang="scss">
$column-width: calc(100% / 3);
$row-height: 800px;

.grid-container {
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
