<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import ServiceTabs from '@/widgets/service-tabs'
</script>

<template>
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
