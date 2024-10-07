<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import ReviewItem from '@/enteties/review-item/ui/ReviewItem.vue'
import 'swiper/css'

const onSwiper = () => {

}

const onSlideChange = () => {

}
</script>

<template>
  <swiper
    style="padding-bottom: 24px"
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    :centeredSlides="true"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in 9" :key="index">
      <ReviewItem />
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">

</style>