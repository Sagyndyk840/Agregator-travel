<script setup lang="ts">
import { computed } from 'vue'
import type LoaderProps from '@/shared/ui/UI/loader/loader.props'

const props = withDefaults(defineProps<LoaderProps>(), {
  loading: false,
  color: 'red',
  size: 'small',
  radius: '90%'
})

const spinnerStyle = computed(() => {
  return {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: props.color + ' ' + props.color + ' transparent',
    borderRadius: props.radius,
    background: 'transparent'
  }
})
</script>

<template>
  <div class="s-spinner" v-show="props.loading">
    <div class="s-clip" :class="[
        `s-clip-size-${props.size}`
    ]" :style="spinnerStyle">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>