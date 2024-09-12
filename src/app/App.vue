<script setup lang='ts'>
import Button from '@/shared/ui/UI/button/Button.vue'
</script>

<template>
  <div class='wrapper'>
    <Button label='Button' size='medium' outlined />
  </div>
</template>

<style lang='scss' scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>