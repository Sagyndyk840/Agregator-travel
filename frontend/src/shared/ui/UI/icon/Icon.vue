<script setup lang="ts">

import { computed } from 'vue'
import type { IconProps } from '@/shared/ui/UI/icon/icon.props'

const props = withDefaults(defineProps<IconProps>(), {
  type: 'outlined',
  size: 14,
})

const svgIcon = computed(() => `src/shared/assets/icons/sprite.svg#${props.icon}-${props.type}`)
</script>

<template>
  <svg class="icon" :style="{ width: props.size + 'px', height: props.size + 'px' }">
    <use :xlink:href="svgIcon" />
  </svg>
</template>

<style scoped lang="scss">
@import 'style';
</style>