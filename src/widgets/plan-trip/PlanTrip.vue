<script setup lang="ts">

import Button from '@/shared/ui/UI/button'
import PlanTripList from '@/features/plan-trip-list'
</script>

<template>
  <div class="plan-trip">
    <div class="container">
      <div class="plan-trip__top flex justify-between items-center">
        <div class="flex flex-col">
          <div class="plan-trip__top--title">Plan your perfect trip</div>
          <div class="plan-trip__top--subtitle">Search Flights & Places Hire to our most popular destinations</div>
        </div>
        <Button label="See more places" color="#8DD3BB" text-color="#112211" outlined />
      </div>
      <div class="plan-trip__bottom">
        <PlanTripList/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>