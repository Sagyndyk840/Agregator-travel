<script setup lang="ts">

import Logo from '@/shared/ui/logo'
import Icon from '@/shared/ui/UI/icon'
import HeaderAuthORGuest from '@/features/header-auth-or-guest'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <nav class="header-nav">
          <ul>
            <li>
              <router-link class="header-nav__link" :to="{name: 'FlightList'}">
                <Icon icon="plane" type="filled" :size="24" />
                <span>
                  Find Flight
                </span>
              </router-link>
            </li>
            <li>
              <router-link class="header-nav__link" :to="{name: 'FlightDetail', params: {id: 1}}">
                <Icon icon="bed" type="filled" :size="24" />
                <span>
                  Find Stays
                </span>
              </router-link>
            </li>
          </ul>
        </nav>
        <Logo type="dark" />
        <HeaderAuthORGuest type="light" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "style";
</style>