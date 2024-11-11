<script setup lang="ts">

import Icon from '@/shared/ui/UI/icon'
import Button from '@/shared/ui/UI/button'

interface HeaderAuthORGuestProps {
  type: 'dark' | 'light'
}

const props = withDefaults(defineProps<HeaderAuthORGuestProps>(), {
  type: 'dark'
})

</script>

<template>
  <div v-if="true" class="header-top__guest">
    <Button flat  :text-color="props.type === 'light' ? '#121' : 'white'" label="Login" :to="{name: 'LoginPage'}"/>
    <Button :color="props.type === 'light' ? '#121' : 'white'"  :text-color="props.type === 'light' ? 'white' : '#121'" label="Sign up" :to="{name: 'LoginPage'}"/>
  </div>
  <div v-else class="header-top__auth">
    <div class="favorites">
      <router-link to="">
        <Icon icon="heart" type="filled" :size="22" />
        <span>
          Favorites &nbsp;&nbsp;&nbsp;  |
        </span>
      </router-link>
    </div>
    <router-link to="" class="profile">
      <img class="avatar" src="@/shared/assets/images/avatar.png" alt="avatar" />
      <span class="name">John D.</span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>