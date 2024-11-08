<script setup lang="ts">

import Logo from '@/shared/ui/logo'
import Button from '@/shared/ui/UI/button'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <nav>
          <ul>
            <li>
              <router-link to=""></router-link>
            </li>
            <li>
              <router-link to=""></router-link>
            </li>
          </ul>
          <Logo type="dark" />

          <div class="header-top__auth">
            <Button flat  text-color="white" label="Login" :to="{name: 'LoginPage'}"/>
            <Button color="white" text-color="#121" label="Sign up" :to="{name: 'LoginPage'}"/>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "style";
</style>