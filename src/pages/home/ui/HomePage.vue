<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/plan-trip'
import ServiceCard from '@/widgets/service-card'
import Review from '@/widgets/review'
import Footer from '@/widgets/footer/Footer.vue'
import Select from '@/shared/ui/UI/select/Select.vue'
</script>

<template>
  <HeroSection />
  <PlanTrip />
  <ServiceCard />
  <Review />

  <Select/>

  <Footer />
</template>

<style scoped lang="scss">
@import "style";
</style>