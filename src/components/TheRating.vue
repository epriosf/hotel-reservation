<script setup lang="ts">
defineProps({
  rate: { type: Number, required: true }
})
</script>
<template>
  <div class="rating">
    <div v-for="star in rate" :key="star" class="star-container">
      <img
        src="@/components/icons/star.svg"
        :alt="`star-${star}`"
        width="20"
        height="20"
        class="star-image"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.rating {
  display: flex;
  justify-content: center;
}

.star-container {
  display: flex;
  align-items: center;
  margin: 5px;
}
.star-image {
  display: block;
  margin: 0 auto;
}
</style>
