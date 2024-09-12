<script setup lang="ts">

const props = withDefaults(defineProps<{
  type: 'default' | 'dark',
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
    <img :src='props.type === "default" ? "" : ""' :alt='props.alt'/>
  </router-link>
</template>

<style lang="scss" scoped>
@import '@/shared/ui/logo/style';
</style>
