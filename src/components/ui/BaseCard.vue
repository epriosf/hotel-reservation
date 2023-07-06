<script setup lang="ts"></script>
<template>
  <div class="card">
    <div class="container">
      <div class="image">
        <slot name="image"></slot>
      </div>
      <div class="hotel-info">
        <slot name="info"></slot>
      </div>
      <div class="price">
        <slot name="price"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import './../../assets/main.scss';
.card {
  border: 1px solid #e8f6ef;
  box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
  border-radius: 15px;
  height: 500px;
}
.container {
  display: grid;
  grid-template-columns: 3fr 0.9fr;
  grid-template-rows: 9fr 1fr;
  grid-auto-flow: row;
  grid-template-areas:
    'image info'
    'image price';
  height: 100%;
  width: 100%;
  .image {
    border-radius: 15px 0px 0px 15px;
    grid-area: image;
    background-color: $background-secondary-color;
    width: 100%;
    height: 100%;
  }
  .hotel-info {
    border-radius: 0px 15px 0px 0px;
    grid-area: info;
    background-color: $primary-color;
  }
  .price {
    border-radius: 0px 0px 15px 0px;
    grid-area: price;
    background-color: $primary-color;
  }
}
</style>
