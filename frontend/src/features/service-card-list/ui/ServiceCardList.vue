<script setup lang="ts">
import ServiceCardItem from '@/enteties/service-card-item'

let data = [
  {
    title: 'Flights',
    description: 'Search Flights & Places Hire to our most popular destinations',
    img: 'src/shared/assets/images/service-card-flight.png',
    to: {name: 'HomePage'},
  },
  {
    title: 'Hotels',
    description: 'Search hotels & Places Hire to our most popular destinations',
    img: 'src/shared/assets/images/service-card-hotel.png',
    to: {name: 'HomePage'},
  }
]
</script>

<template>
  <div class="service-card__list">
    <ServiceCardItem
      v-for="(item, index) in data"
      :img="item.img"
      :title="item.title"
      :description="item.description"
      :key="index"
      :to="item.to" />
  </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>