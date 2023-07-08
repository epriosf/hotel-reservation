<script setup lang="ts">
import HotelCard from '@/components/HotelCard/HotelCard.vue'
import { useHotelStore } from '@/stores/hotel'
import { computed, onMounted, ref, watch } from 'vue'
import type { Hotel, HotelCost } from '@/models/hotel/interfaces/Hotel'
import { HotelsProducer } from '@/models/hotel/HotelProducer/HotelsProducer'
import { FormatType } from '@/models/hotel/enums/FormatType'
import { UserType } from '@/models/hotel/enums/UserType'

const hotelStore = useHotelStore()
const hotels = ref<Hotel[]>([])
const selectedHotel= ref<Hotel | null>(null)
const lowCostPrice = ref<number>(0)

const gridItemClasses = computed(() => ({
  'single-hotel': hotels.value.length === 1
}))
const props = defineProps({
  selectedDates: {
    type: Array as ()=>Date[],
    default: () => []
  },
  userType: {
    default: UserType.Regular
  }
})
watch(
  () => [props.selectedDates, props.userType],
  async ([newDates, userType]) => {
    try {
      await hotelStore.getHotels()
      hotels.value = hotelStore.hotelsDetail
      const jsonProducer = new HotelsProducer(FormatType.JSON)

      const booking: HotelCost = jsonProducer.getLowestCostHotel(newDates, userType, hotels.value)
      if (booking) {
        selectedHotel.value = booking.hotel
        lowCostPrice.value = booking.price
        hotels.value = hotels.value.filter((hotel) => hotel.name === selectedHotel.value?.name)
      }
    } catch (error) {
      console.log(error)
    }
  }
)
onMounted(async () => {
  await hotelStore.getHotels()
  hotels.value = hotelStore.hotelsDetail
})
</script>

<template>
  <div class="low-price">Total Booking Cost: {{ lowCostPrice }}</div>
  <div class="grid-container">
    <div class="grid-item" v-for="hotel in hotels" :key="hotel.id" :class="gridItemClasses">
      <HotelCard :hotel="hotel"></HotelCard>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/main';
$column-width: calc(100% / 3);
$row-height: 800px;
.low-price {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  font-weight: bold;
  color: $text-primary-color;
  margin-top: 50px;
}
.grid-container {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: $row-height;
  gap: 20px;
  height: $row-height;
  justify-content: center;
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

  .single-hotel {
    grid-column: span 1;
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>
