<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import ServiceTabs from '@/widgets/service-tabs'

import { ref } from 'vue'
import RangeSlider from '@/shared/ui/UI/range-slider';

const sliderMin = ref(65);
const sliderMax = ref(150);
</script>

<template>
  <div style="width: 500px; margin-left: 20px; margin-top: 50px">
    <RangeSlider
        :min="0"
        :max="2000"
        v-model:min-value="sliderMin"
        v-model:max-value="sliderMax"
    />
  </div>
  <div class="wrapper">
    <HeroSection />
    <ServiceTabs />
  </div>
  <PlanTrip />
  <ServiceCard />
  <Review />
  <Footer />
</template>

<style scoped lang="scss">
@import "style";
</style>
