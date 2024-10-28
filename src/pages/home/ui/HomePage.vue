<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import Field from '@/shared/ui/UI/field'
import { ref } from 'vue'
import Select from '@/shared/ui/UI/select/Select.vue'
import DatePicker from '@/shared/ui/UI/date-picker/DatePicker.vue'

let name = ref('')

let data = ref([
  {id: 1, value: 'Hello 1'},
  {id: 2, value: 'Hello 2'},
  {id: 3, value: 'Hello 3'},
  {id: 4, value: 'Hello 4'},
])

let date = ref('15.10.2024')
</script>

<template>
  <br>
  <br>
  <br>
  {{ date }}
  <br>
  <br>
  <br>
  <div style="width: 400px;">
    <DatePicker v-model="date" label="date" format="MM/dd/yyyy" />
  </div>
  <br>
  <br>
  <br>
  <HeroSection />
  <PlanTrip />
  <ServiceCard />
  <Review />
  <Footer />
</template>

<style scoped lang="scss">
@import "style";
</style>