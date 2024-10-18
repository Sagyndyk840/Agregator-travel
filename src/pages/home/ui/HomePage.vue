<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import Field from '@/shared/ui/UI/field'
import { ref } from 'vue'
import Select from '@/shared/ui/UI/select/Select.vue'

let name = ref('')
</script>

<template>
  <HeroSection />
  <br>
  <br>
  {{name}}
  <br>
  <Select v-model="name" />
  <br>
  <br>
  <br>
  <div style="width: 300px">
    <Field v-model="name"   :rules="[
        value => !!value || 'Обязательно.',
        value => (value || '').length <= 20 || 'Максимум 20 цифр',
    ]" />
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