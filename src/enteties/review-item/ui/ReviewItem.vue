<script setup lang="ts">

interface User {
  name: string;
  company: string;
  social: string;
}

interface Props {
  title: string;
  description: string;
  rating: number;
  user: User;
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Welcome',
  description: 'Welcome',
  rating: 4,
  user: () => ({
    name: 'John Doe',
    company: 'Default Company',
    social: '@defaultuser',
  }),
})
</script>

<template>
  <div class="review-item">
    <div class="review-item__title">
      {{ props.title }}
    </div>
    <div class="review-item__description">
      {{ props.description }}
    </div>
    <div class="review-item__more">View more</div>
    <div class="review-item__ratings"></div>
    <div class="review-item__name">
      {{ props.user.name }}
    </div>
    <div class="review-item__company">
      {{ props.user.company }}
    </div>
    <div class="review-item__social">
      {{ props.user.social }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>