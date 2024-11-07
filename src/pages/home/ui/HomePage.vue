<script setup lang="ts">
import HeroSection from '@/widgets/home/hero-section'
import PlanTrip from '@/widgets/home/plan-trip'
import ServiceCard from '@/widgets/home/service-card'
import Review from '@/widgets/home/review'
import Footer from '@/widgets/footer/Footer.vue'
import ServiceTabs from '@/widgets/service-tabs'
import Checkbox from '@/shared/ui/UI/checkbox'
import { ref } from 'vue'

let MySelectedValues = ref([])

let sss = ref(true)
</script>

<template>
  <div style="margin-left: 50px">
    {{MySelectedValues}}
<!--    {{// sss}}-->
    <Checkbox value="foo1" v-model="MySelectedValues"/>
    <br>
    <Checkbox value="foo2" v-model="MySelectedValues"/>
    <br>
    <Checkbox value="foo3" label="asfasfasf" v-model="MySelectedValues"/>
    <br>
<!--    <Checkbox label="Foo" value="foo2" v-model="sss"/>-->
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