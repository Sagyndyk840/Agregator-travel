<script setup lang="ts">

import type CheckboxProps from '@/shared/ui/UI/checkbox/checkbox.props'
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: ' ',
  disabled: false,
  value: '',
  color: 'red',
  modelValue: ''
})

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
})
// const checkmarkStyle = computed(() => {
//   console.log(model.value)
//   return {
//     border: `1px solid ${props.color}`,
//     backgroundColor: model.value.length !== 0 ? props.color : 'transparent',
//   }
// })

</script>

<template>
  <label class="wrapper flex items-center">
    {{label}}
    <input class="checkbox" type="checkbox" v-model="model" :value="props.value"/>
    <span
      class="checkmark"
    ></span>
  </label>
</template>

<style scoped lang="scss">
@import "style";
</style>