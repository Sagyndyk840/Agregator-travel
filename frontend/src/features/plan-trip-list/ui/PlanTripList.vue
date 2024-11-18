<script setup lang="ts">

import PlanTripItem from '@/enteties/plan-trip-item'

let data = [
  {
    title: 'Istanbul, Turkey',
    img: 'src/shared/assets/images/image.png',
    tags: [
      'Flights',
      'Hotels',
      'Resorts',
    ]
  },
  {
    title: 'Istanbul, Turkey',
    img: 'src/shared/assets/images/image.png',
    tags: [
      'Flights',
      'Hotels',
      'Resorts',
    ]
  },
  {
    title: 'Istanbul, Turkey',
    img: 'src/shared/assets/images/image.png',
    tags: [
      'Flights',
      'Hotels',
      'Resorts',
    ]
  },
  {
    title: 'Istanbul, Turkey',
    img: 'src/shared/assets/images/image.png',
    tags: [
      'Flights',
      'Hotels',
      'Resorts',
    ]
  },
  {
    title: 'Istanbul, Turkey',
    img: 'src/shared/assets/images/image.png',
    tags: [
      'Flights',
      'Hotels',
      'Resorts',
    ]
  },
  {
    title: 'Istanbul, Turkey',
    img: 'src/shared/assets/images/image.png',
    tags: [
      'Flights',
      'Hotels',
      'Resorts',
    ]
  },

]

</script>

<template>
  <div class="plan-trip__list">
    <PlanTripItem v-for="(item, index) in data"
                  :img="item.img"
                  :title="item.title"
                  :tags="item.tags"
                  :key="index" />
  </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>