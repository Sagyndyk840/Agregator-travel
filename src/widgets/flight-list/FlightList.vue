<script setup lang="ts">

import FlightItem from '@/features/flight-item'
import Button from '@/shared/ui/UI/button'
</script>

<template>
  <div class="flight-list">
    <div class="flight-list__top">
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />
    </div>
    <div class="flight-list__bottom">
      <Button block label="Show more results" color="#121" text-color="white" size="medium" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>