<script setup lang="ts"></script>
<template>
  <button class="button-info" role="button">
    <slot name="text"> </slot>
  </button>
</template>
<style scoped lang="scss">
@import './../../assets/main.scss';
.button-info {
  background-color: $secondary-color;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: $primary-color;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  margin: 0;
  padding: 10px 16px;
  text-align: center;
  width: 100%;
}
.button-info:hover,
.button-info:focus {
  background-color: $hover-button-color;
}
</style>
