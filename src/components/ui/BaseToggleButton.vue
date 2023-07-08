<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { ref } from 'vue'
const emits = defineEmits(['toggleButton'])

const props = defineProps({
  initialIsActive: {
    type: Boolean,
    default: false
  }
})
const isActive = ref(props.initialIsActive)

const handleClick = () => {
  isActive.value = !isActive.value
  emits('toggleButton', isActive.value)
}
</script>
<template>
  <button class="toggle-button" :class="{ active: isActive }" @click="handleClick">
    {{ isActive ? 'REGULAR USER' : ' REWARD USER' }}
  </button>
</template>

<style scoped lang="scss">
@import './../../assets/main.scss';
.toggle-button {
  padding: 10px 20px;
  background-color: $secondary-color;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  color: $primary-color;
  font-weight: bold;
}

.toggle-button.active {
  background-color: $primary-color;
  color: $text-primary-color;
}
</style>
