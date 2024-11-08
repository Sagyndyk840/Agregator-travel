<script setup lang="ts">

import { type Ref, ref } from 'vue'

const props = withDefaults(defineProps<{
  title: string,
}>(), {
  title: 'Title'
})

const showHide: Ref<boolean> = ref(false)

const toggle = () => {
  showHide.value = !showHide.value
}

</script>

<template>
  <div class="filter-accordion">
    <div class="filter-accordion__header">
      <div class="filter-accordion__header--title">{{ props.title }}</div>
      <div class="filter-accordion__header--btn" @click="toggle"></div>
    </div>
    <div class="filter-accordion__body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>