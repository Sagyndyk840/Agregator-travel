<script setup lang="ts">
import { type Ref, ref } from 'vue'
import Slide from '@/shared/ui/slide'
import { type Slide as SlideType } from '@/shared/lib/utility-types/slide'
import slideImg from '@/shared/assets/images/Rectangle 20.png'
const slides: Ref<SlideType[]> = ref([
  {
    img: slideImg,
  },
  {
    img: slideImg,
  },
  {
    img: slideImg
  }
])

let currentSlide: Ref<number> = ref(0)

const clickDot = (index: any) => {

}

</script>

<template>
  <div class="slider">
    <div class="slider-container">
      <Slide v-for="slide in slides" :key="slide.img" :img="slide.img" :alt="slide.alt"/>
    </div>
    <div class="slider-dots">
      <div class="slide-dot " v-for="(index, dot) in slides" :key="index" @click="clickDot(index)"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>