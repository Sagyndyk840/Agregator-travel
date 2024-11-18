<script setup lang="ts">

import Button from '@/shared/ui/UI/button'
import Icon from '@/shared/ui/UI/icon'
</script>

<template>
  <div class="flight-item">
    <div class="flight-item__left">
      <img src="@/shared/assets/images/avia-logo.png" alt="avia-logo"/>
    </div>
    <div class="flight-item__right">
      <div class="flight-item__right--top">
        <div class="rating-review">
          <div class="rating">4.2</div>
          <div class="review">
            <span>Very Good</span> 54 reviews
          </div>
        </div>
        <div class="price">
          <span class="price-text">starting from</span>
          <span class="price-count">$104</span>
        </div>
      </div>
      <div class="flight-item__right--center">
        <div class="date">
          <div class="date-left date-general">
            <span class="first">
              12:00 pm - 01:28 pm
            </span>
            <span class="second">
              Emirates
            </span>
          </div>
          <div class="date-center">non stop</div>
          <div class="date-right date-general">
            <span class="first">
              12:00 pm - 01:28 pm
            </span>
            <span class="second">
              EWR-BNA
            </span>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="flight-item__right--bottom">
        <Button icon="plane" outlined size="medium" align="center">
          <template #icon>
<!--            <Icon icon="heart" type="outlined" :size="24" />-->
            <img src="@/shared/assets/icons/outlined/heart.svg" alt="heart" />
          </template>
        </Button>
        <Button label="View Deals" color="#8dd3bb" text-color="#121" size="medium" block/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>