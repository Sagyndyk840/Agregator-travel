<script setup lang="ts">
import LogoDark from '@/shared/assets/images/logo-dark.png';
import LogoLight from '@/shared/assets/images/logo-light.png';


import { computed } from 'vue'

const props = withDefaults(defineProps<{
  alt: string,
  to: object | string,
  type: 'dark' | 'light'

}>(), {
  type: 'light',
  alt: 'logo',
  to: 'HomePage'
})

const logoSrc = computed(() => {
  return props.type === 'dark' ? LogoDark : LogoLight;
})

</script>

<template>
  <router-link :to="props.to">
    <img :src="logoSrc" :alt="props.alt"/>
  </router-link>
</template>

<style lang="scss" scoped>
@import '@/shared/ui/logo/style';
</style>
