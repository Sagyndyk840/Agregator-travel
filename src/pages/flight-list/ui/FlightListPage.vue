<script setup lang="ts">

import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import FlightListFind from '@/features/flight-list-find'
import Filter from '@/features/filter'
</script>

<template>
  <Header />
  <div class="flight-list">
    <div class="container">
      <FlightListFind />

      <div class="flight-wrapper">
        <div class="flight-sidebar">
          <Filter />
        </div>
        <div class="flight-content">
          <h1></h1>
        </div>
      </div>

    </div>
  </div>
  <Footer />
</template>

<style scoped>

</style>