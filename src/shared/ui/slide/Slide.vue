<script setup lang="ts">
import { type Slide } from '@/shared/lib/utility-types/slide'

const props = withDefaults(defineProps<Slide>(), {
  img: ''
})

</script>

<template>
  <div class="slide">
    <img :src="props.img" :alt="props.alt">
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>