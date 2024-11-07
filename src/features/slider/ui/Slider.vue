<script setup lang="ts">
import { type Ref, ref } from 'vue'
import Slide from '@/shared/ui/slide'
import { type Slide as SlideType } from '@/shared/lib/utility-types/slide'
const slides: Ref<SlideType[]> = ref([
  {
    img: 'src/shared/assets/images/slide-1.png',
  },
  {
    img: 'src/shared/assets/images/slide-2.png',
  },
  {
    img: 'src/shared/assets/images/slide-1.png',
  },
  {
    img: 'src/shared/assets/images/slide-2.png',
  },
])

let currentSlide: Ref<number> = ref(0)

const clickDot = (index: number) => {
  currentSlide.value = index
}

</script>

<template>
  <div class="slider">
    <div class="slider-container"
    >
      <Slide v-for="(slide, index) in slides"
             :key="slide.img"
             :img="slide.img"
             :alt="slide.alt"
             :class="{ active: index === currentSlide }"/>
    </div>
    <div class="slider-dots">
      <div class="slide-dot"
           v-for="(_, index) in slides"
           :key="index"
           @click="clickDot(index)"
           :class="{ active: index === currentSlide }"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>