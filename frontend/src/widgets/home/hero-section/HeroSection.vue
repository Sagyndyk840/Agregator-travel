<script setup lang="ts">

import Logo from '@/shared/ui/logo'
import Button from '@/shared/ui/UI/button'
import heroSectionImage from '@/shared/assets/images/hero-section.png'
</script>

<template>
  <div class="hero-wrapper">
    <section class="hero-section" :style="{
    backgroundImage: `url(${heroSectionImage})`
  }">
      <div class="hero-section__top">
        <div class="hero-section__top--logo">
          <Logo />
        </div>
        <div class="hero-section__top--auth">
          <Button flat  text-color="white" label="Login" :to="{name: 'LoginPage'}"/>
          <Button color="white" text-color="#121" label="Sign up" :to="{name: 'LoginPage'}"/>
        </div>
      </div>
      <div class="hero-section__wrapper">
        <div class="hero-section__wrapper--title">
          Helping Others
          <br>
          <span>Live & Travel</span>
        </div>
        <div class="hero-section__wrapper--subtitle">
          Special offers to suit your plan
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>