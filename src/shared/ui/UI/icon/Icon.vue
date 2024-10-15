<script setup lang="ts">

import { computed } from 'vue'
import type IconProps from '@/shared/ui/UI/icon/icon.props'

const props = withDefaults(defineProps<IconProps>(), {
  type: 'outlined'
})

const svgIcon = computed(() => `src/shared/assets/icons/sprite.svg#${props.icon}-${props.type}`)
</script>

<template>
  <svg class="icon">
    <use :xlink:href="svgIcon" />
  </svg>
</template>

<style scoped lang="scss">
@import 'style';
</style>