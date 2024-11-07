<script setup lang="ts">

import FlightTab from '@/features/service-tabs/flight-tab'
import { type Ref, ref } from 'vue'

let currentTab: Ref<string> = ref('flight-tab')

const chargeTab = (item: string) => {
  currentTab.value = item
}
</script>

<template>
  <div class="service-wrapper">
    <div class="container">
      <div class="service-tabs">
        <div class="service-tabs__top">
          <div class="service-tabs__top--item" :class="{
            'active': currentTab === 'flight-tab'
          }" @click="chargeTab('flight-tab')">Flights</div>
          <div class="service-tabs__top--item" :class="{
            'active': currentTab === 'stay-tab'
          }" @click="chargeTab('stay-tab')">Stays</div>
        </div>
        <div class="service-tabs__bottom">
          <div class="service-tabs__bottom--item" v-if="currentTab === 'flight-tab'">
            <FlightTab />
          </div>
          <div class="service-tabs__bottom--item" v-if="currentTab === 'stay-tab'">
            <!--          <StayTab />-->
            <h1>Stat</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>