<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import Input from '@/shared/ui/UI/input'
import { ref } from 'vue'

let name = ref('')
</script>

<template>
  <HeroSection />
  <br>
  <br>
  <br>
  <div style="width: 200px">
    <Input v-model="name"/>
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