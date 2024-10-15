<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import Icon from '@/shared/ui/UI/icon'
</script>

<template>
  <HeroSection />
  <br>
  <br>
  <br>
  <div style="background: red">
    <Icon icon="bed" type="filled" />
    <Icon icon="plane" type="outlined" />
  </div>
  <br>
  <br>
  <br>

  <PlanTrip />
  <ServiceCard />
  <Review />
  <Footer />
</template>

<style scoped lang="scss">
@import "style";
</style>