<script setup lang="ts">

import FilterAccordion from '@/enteties/filter-accordion'
import RangeSlider from '@/shared/ui/UI/range-slider'
import { reactive } from 'vue'
import Checkbox from '@/shared/ui/UI/checkbox'

let filter = reactive({
  priceMin: 0,
  priceMax: 2000,
  airlines: []
})
</script>

<template>
  <div class="filter">
    <h1>Filters</h1>
    <div class="filter-wrapper">
      <div class="filter-item">
        <FilterAccordion title="Price" :show="true">
          <RangeSlider
            :min="0"
            :max="10000"
            v-model:min-value="filter.priceMin"
            v-model:max-value="filter.priceMax"
          />
        </FilterAccordion>
      </div>
      <div class="filter-item">
        <FilterAccordion title="Airlines" :show="true">
          <Checkbox v-model="filter.airlines" value="emirated" label="Emirated"/>
          <Checkbox v-model="filter.airlines" value="fly-dubai" label="Fly Dubai"/>
          <Checkbox v-model="filter.airlines" value="air-astana" label="Air Astana"/>
          <Checkbox v-model="filter.airlines" value="qatar" label="Qatar"/>
        </FilterAccordion>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>