<script setup lang="ts">

import FlightTab from '@/features/service-tabs/flight-tab'
</script>

<template>
  <div class="service-wrapper">
    <div class="container">
      <div class="service-tabs">
        <div class="service-tabs__top">
          <div class="service-tabs__top--item">Flights</div>
          <div class="service-tabs__top--item">Stays</div>
        </div>
        <div class="service-tabs__bottom">
          <div class="service-tabs__bottom--item">
            <FlightTab />
          </div>
          <div class="service-tabs__bottom--item">
            <!--          <StayTab />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>