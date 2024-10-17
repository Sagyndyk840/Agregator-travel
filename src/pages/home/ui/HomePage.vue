<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import Field from '@/shared/ui/UI/field'
import { type Ref, ref } from 'vue'

let name: Ref<string> = ref('')
</script>

<template>
  <HeroSection />
  <br>
  <br>
  {{name }}
  <br>
  <Field v-model="name" />
  <br>
  <Field v-model="name" />
  <br>
  <Field name="asd22222" v-model="name" />
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