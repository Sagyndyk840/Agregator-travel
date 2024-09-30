<script setup lang="ts">

import Button from '@/shared/ui/UI/button'
import ReviewList from '@/features/review-list'
</script>

<template>
  <div class="review">
    <div class="container">
      <div class="review-top top flex justify-between items-center">
        <div class="flex flex-col">
          <div class="review-top__title top--title">Reviews</div>
          <div class="review-top__subtitle top--subtitle">What people says about Golobe facilities</div>
        </div>
        <Button label="See All" color="#8DD3BB" text-color="#112211" outlined />
      </div>
      <div class="review-bottom">
        <ReviewList />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>