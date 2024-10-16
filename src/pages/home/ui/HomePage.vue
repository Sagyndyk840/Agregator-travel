<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import Input from '@/shared/ui/UI/input'
import { ref } from 'vue'

let name = ref('asfsf')
let name2 = ref('asfsf')

</script>

<template>
  <HeroSection />
  <br>
  <br>
  {{name}}
  <br>
  <div style="width: 200px; margin-left: 50px;">
    <Input   v-model="name"/>
    <br>
    <Input  icon-left="plane"  v-model="name2"/>
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