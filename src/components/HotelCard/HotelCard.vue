<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import HotelCardInformation from '@/components/HotelCard/HotelCardInformation.vue'
import TheRating from '@/components/TheRating.vue'
import type { Hotel } from '@/models/hotel/interfaces/Hotel'

defineProps({
  hotel: {
    type: Object as () => Hotel,
    required: true
  }
})
</script>
<template>
  <BaseCard>
    <template #image>
      <img :src="`/images/hotel${hotel.id}.jpg`" :alt="hotel.name" class="image" />
    </template>
    <template #info>
      <div class="name">{{ hotel.name }}</div>
      <TheRating :rate="hotel.rate" />
      <HotelCardInformation
        :location="hotel.location"
        :phone="hotel.phone"
        :website="hotel.website"
        :weekdayPrice="hotel.weekdayPrice"
        :weekendPrice="hotel.weekendPrice"
      />
    </template>
    <template #price>
      <div class="price">
        <BaseButton>
          <template #text> Hotel information </template>
        </BaseButton>
      </div>
    </template>
  </BaseCard>
</template>
<style scoped lang="scss">
@import '../../assets/main';
.price {
  margin: 10px;
}
.name {
  display: flex;
  justify-content: center;
  font-family: 'Roboto Light';
  font-size: 30px;
  margin: 10px;
  color: $text-primary-color;
}
</style>
