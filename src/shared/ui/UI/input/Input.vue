<script setup lang="ts">
import type UIInputProps from '@/shared/ui/UI/input/input.props';

const props = withDefaults(defineProps<UIInputProps>(), {

})
</script>

<template>
  <div>
    <input class="input" />
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
