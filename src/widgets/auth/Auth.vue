<script setup lang="ts">

</script>

<template>
  <div class="auth">
    <div class="auth-inner">
      <slot name="auth-left"></slot>
      <slot name="auth-right"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>