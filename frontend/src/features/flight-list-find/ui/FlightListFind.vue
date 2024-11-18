<script setup lang="ts">

import Select from '@/shared/ui/UI/select/Select.vue'
import DatePicker from '@/shared/ui/UI/date-picker'
import Field from '@/shared/ui/UI/field'
import type { FlightData } from '@/shared/lib/utility-types/flight-data'
import { reactive, ref } from 'vue'
import Button from '@/shared/ui/UI/button'
import Icon from '@/shared/ui/UI/icon'

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
  <div class="flight-list-find">
    <Field v-model="flightData.from" label="From" />
    <Field v-model="flightData.to" label="To" />
    <Select :options="trips" v-model="flightData.trip"  label="Trip" filter />
    <DatePicker v-model="flightData.departReturn" label="Depart-Return" />
    <Button icon="search" class="button" align="center">
      <template #icon>
        <Icon icon="search" :size="20" type="filled" />
      </template>
    </Button>
  </div>
</template>

<style  lang="scss">
@import "style";
</style>