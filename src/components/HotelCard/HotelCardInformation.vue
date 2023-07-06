<script setup lang="ts">
defineProps({
  location: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  weekdayPrice: { type: Array as () => number[], required: true },
  weekendPrice: { type: Array as () => number[], required: true }
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
    <h3>Regular Price:</h3>
    <h3 v-for="(price, index) in weekendPrice" :key="price">
      ${{ price }}
      <template v-if="index < weekdayPrice.length - 1"> - </template>
    </h3>
  </div>
  <div class="item">
    <h3>Reward Price:</h3>
    <h3 v-for="(price, index) in weekdayPrice" :key="price">
      ${{ price }}
      <template v-if="index < weekdayPrice.length - 1"> - </template>
    </h3>
  </div>
</template>
<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;
}
</style>
