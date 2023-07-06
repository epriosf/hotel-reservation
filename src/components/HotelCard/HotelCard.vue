<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import HotelCardInformation from '@/components/HotelCard/HotelCardInformation.vue'
import TheRating from '@/components/TheRating.vue'
defineProps({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rate: { type: Number, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  weekdayPrice: { type: Array as number[], required: true },
  weekendPrice: { type: Array as number[], required: true }
})
</script>
<template>
  <BaseCard>
    <template #image>
      <img src="../../assets/hotel3.jpg" alt="photo" class="image" />
    </template>
    <template #info>
      <div class="name">{{ name }}</div>
      <TheRating :rate="rate" />
      <HotelCardInformation
        :location="location"
        :phone="phone"
        :website="website"
        :weekdayPrice="weekdayPrice"
        :weekendPrice="weekendPrice"
      />
    </template>
    <template #price>
      <div class="price">
        <BaseButton>
          <template #text> View Info </template>
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
  color: $background-secondary-color;
}
</style>
