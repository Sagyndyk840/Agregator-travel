<script setup lang="ts">
import Auth from '@/widgets/auth/Auth.vue'
import Login from '@/features/login'
import Slider from '@/features/slider'
</script>

<template>
  <Auth>
    <template #auth-left>
      <Login />
    </template>
    <template #auth-right>
      <Slider />
    </template>
  </Auth>
</template>

<style scoped>

</style>