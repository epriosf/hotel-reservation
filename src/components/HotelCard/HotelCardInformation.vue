<script setup lang="ts">
import type { BookingPrice } from '@/models/hotel/interfaces/Hotel'

defineProps({
  location: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  weekdayPrice: { type: Object as () => BookingPrice, required: true },
  weekendPrice: { type: Object as () => BookingPrice, required: true }
})
</script>
<template>
  <div class="item">
    <img src="@/components/icons/location.svg" alt="location" width="25" height="25" />
    <h3>{{ location }}</h3>
  </div>
  <div class="item">
    <img src="@/components/icons/phone.svg" alt="phone" width="25" height="25" />
    <h3>{{ phone }}</h3>
  </div>
  <div class="item">
    <img src="@/components/icons/website.svg" alt="website" width="30" height="30" />
    <h3>{{ website }}</h3>
  </div>
  <div class="item">
    <h3>Weekend Price:</h3>
    <h3>${{ weekendPrice.regularPrice }}</h3>
    <h3>-</h3>
    <h3>${{ weekendPrice.rewardPrice }}</h3>
  </div>
  <div class="item">
    <h3>Weekday Price:</h3>
    <h3>${{ weekdayPrice.regularPrice }}</h3>
    <h3>-</h3>
    <h3>${{ weekdayPrice.rewardPrice }}</h3>
  </div>
</template>
<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;
}
</style>
