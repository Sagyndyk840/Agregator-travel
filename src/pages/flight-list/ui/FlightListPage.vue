<script setup lang="ts">

import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import FlightListFind from '@/features/flight-list-find'
import FilterFlight from '@/features/filter-flight'
import SortFlight from '@/features/sort-flight'
import FlightList from '@/widgets/flight-list'
</script>

<template>
  <Header />
  <div class="flight-list">
    <div class="container">
      <FlightListFind />

      <div class="flight-wrapper">
        <div class="flight-sidebar">
          <FilterFlight />
        </div>
        <div class="flight-content">
          <SortFlight />
          <FlightList />
        </div>
      </div>

    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@import "style";
</style>