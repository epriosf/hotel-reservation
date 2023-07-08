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
  border-radius: 15px;
  height: 500px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-template-areas:
    'image image'
    'info info'
    'price price';
  margin-bottom: 10%;
  .image {
    border-radius: 15px 15px 0px 0px;
    grid-area: image;
    background-color: $text-primary-color;
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
  .hotel-info {
    border-radius: 0px 0px 0px 0px;
    grid-area: info;
    background-color: $primary-color;
  }
  .price {
    border-radius: 0px 0px 15px 15px;
    grid-area: price;
    background-color: $primary-color;
  }
}
</style>
