<script setup lang="ts">
import Button from '@/shared/ui/UI/button'

const props = withDefaults(defineProps<{
  img: string,
  title: string,
  description: string,
  to?: object,
}>(), {
  title: 'Flight',
  description: 'Flight',
})
</script>

<template>
  <div class="service-card__item" :style="{ backgroundImage: `url(${props.img})` }">
    <h3 class="service-card__item--title">
      {{ props.title }}
    </h3>
    <div class="service-card__item--description">
      {{ props.description }}
    </div>
    <Button icon-left="send" size="medium" class="service-card__item--button" :to="props.to" :label="`Show ${props.title}`" color="#8DD3BB" text-color="#112211" />
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>