<script setup lang="ts">

const props = withDefaults(defineProps<{
  alt: string,
  to: object | string,
}>(), {
  type: 'default',
  alt: 'logo',
  to: 'HomePage'
})
</script>

<template>
  <router-link :to='props.to'>
    <img src='@/shared/assets/images/logo.png' :alt='props.alt'/>
  </router-link>
</template>

<style lang="scss" scoped>
@import '@/shared/ui/logo/style';
</style>
