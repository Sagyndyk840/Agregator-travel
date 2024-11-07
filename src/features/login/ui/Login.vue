<script setup lang="ts">

import Logo from '@/shared/ui/logo'
import Field from '@/shared/ui/UI/field'
import { type Ref, ref } from 'vue'

let email: Ref<string> = ref('')
let password: Ref<string> = ref('')

</script>

<template>
  <div class="login">
    <div class="login-inner">
      <Logo type="dark"/>
      <h2>Login</h2>
      <p>
        Login to access your Golobe account
      </p>
      <Field v-model="email" label="Email" />
      <Field v-model="password" label="Password" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>