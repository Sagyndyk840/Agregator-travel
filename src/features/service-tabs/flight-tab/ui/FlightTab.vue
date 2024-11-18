<script setup lang="ts">

import Field from '@/shared/ui/UI/field'
import { reactive, ref } from 'vue'
import Select from '@/shared/ui/UI/select/Select.vue'
import DatePicker from '@/shared/ui/UI/date-picker'
import Button from '@/shared/ui/UI/button'
import type { FlightData } from '@/shared/lib/utility-types/flight-data'

let flightData: FlightData = reactive({
  from: '',
  to: '',
  trip: '',
  departReturn: ''
})

let trips = ref([
  { id: '1', value: 'One-way' },
  { id: '2', value: 'Round trip' }
])
</script>

<template>
  <div class="flight-tabs">
    <div class="flight-tabs__top">
      <Select :options="trips" v-model="flightData.from"  label="From"  filter />
      <Select :options="trips" v-model="flightData.to"  label="To" filter  />

<!--      <Field v-model="flightData.from" label="From"  />-->
<!--      <Field v-model="flightData.to" label="To" />-->

      <Select :options="trips" v-model="flightData.trip"  label="Trip"  />
      <Select :options="trips" v-model="flightData.trip" label="Trip"  />
      <DatePicker v-model="flightData.departReturn" label="Depart-Return" />
    </div>
    <div class="flight-tabs__bottom">
      <Button icon-left="send" size="large" label="Show Filghts" color="#8DD3BB" text-color="#112211" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>