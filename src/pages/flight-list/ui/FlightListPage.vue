<script setup lang="ts">

import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import FlightListFind from '@/features/flight-list-find'
</script>

<template>
  <Header />
  <div class="flight-list">
    <div class="container">
      <FlightListFind />
    </div>
  </div>
  <Footer />
</template>

<style scoped>

</style>