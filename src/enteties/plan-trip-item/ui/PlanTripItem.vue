<script setup lang="ts">
const props = withDefaults(defineProps<{
  img: string,
  title: string,
  tags: string[]
}>(), {
  title: 'Istanbul, Turkey',
  tags: () => ['Flights', 'Hotels', 'Resorts']
})
</script>

<template>
  <div class="plan-trip__item flex items-center">
    <div class="plan-trip__item--left">
      <img :src="props.img" :alt="props.title">
    </div>
    <div class="plan-trip__item--right">
      <div class="plan-trip__item--right___top">
        {{ props.title }}
      </div>
      <div class="plan-trip__item--right___bottom">
        <span v-for="(item, index) in props.tags" :key="index">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>