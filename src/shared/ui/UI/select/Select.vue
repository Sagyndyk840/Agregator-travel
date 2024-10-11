<script setup lang="ts">

import type UISelectProps from '@/shared/ui/UI/select/select.props'
import { computed, type Ref, ref } from 'vue'

const props = withDefaults(defineProps<UISelectProps>(), {
  disabled: false,
  loading: false,
  label: 'Select',
  value: 'Value',
  error: false,
  options: () => {
    return [
      { id: '111', value: 'Option 1' },
      { id: '222', value: 'Option 2' },
      { id: '333', value: 'Option 3' }
    ]
  }
})

let dropDownShowOrHide: Ref<boolean> = ref(false)

const onFocus = (): boolean => dropDownShowOrHide.value = true

const onBlur = (): boolean => dropDownShowOrHide.value = false

const filter = () => {}
</script>

<template>
  <div class="select " :class="[
    {
      'select-disabled': props.disabled,
    }
  ]">
    <div class="select-container">
<!--      <input value="222" onfocus="showDropdown()" onblur="hideDropdown()" >-->
      <input placeholder=" " type="text" :value="props.value" @focus="onFocus" @blur="onBlur">
      <label for="dropdown-select">{{props.disabled && props.value ? '' : props.label  }}</label>
    </div>
    <transition>
      <ul class="select-dropdown" v-if="dropDownShowOrHide">
        <li v-for="option in props.options" :key="option.id">
          {{ option.value }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
