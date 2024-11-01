<script setup lang="ts">

import type { UISelectProps, OptionType } from '@/shared/ui/UI/select/select.props'
import { computed, type Ref, ref } from 'vue'
import Field from '@/shared/ui/UI/field'
import type UIFieldProps from '@/shared/ui/UI/field/field.props'
import Icon from '@/shared/ui/UI/icon'

let model = defineModel()

interface SelectProps extends UIFieldProps, UISelectProps {}

const props = withDefaults(defineProps<SelectProps>(), {
  type: 'text',
  disabled: false,
  label: 'Label',
  outlined: true,
  filled: false,
  block: false,
  iconType: 'filled',
  field: 'input',
  name: ' ',
  value: '',
  placeholder: '',
  size: 'normal',
  prefix: '',
  loading: false,
  clear: false,
  options: () => {
    return [
      { id: '111', value: 'Option 1' },
      { id: '222', value: 'Option 2' },
      { id: '333', value: 'Option 3' }
    ]
  },
  optionValue: 'id',
  optionLabel: 'value'
})

let dropDownShowOrHide: Ref<boolean> = ref(false)

const onFocus = (): boolean => dropDownShowOrHide.value = true

const onBlur = (): boolean => dropDownShowOrHide.value = false

let selectedId = ref()

const emit = defineEmits(['update:modelValue'])

const selectOption = (option: any) => {
  model.value = option
  selectedId.value = option.id
  emit('update:modelValue', option)
  dropDownShowOrHide.value = false
}

</script>

<template>
  <div class="select">
    <div class="select-container">
      <Field v-bind="props" @focus="onFocus" @blur="onBlur" v-model="model.value" >
        <template #icon-right >
          <Icon :size="25" icon="select-down" type="general" class="select-icon__right"/>
        </template>
      </Field>
    </div>
    <transition>
      <ul class="select-dropdown" v-if="dropDownShowOrHide">
        <li
          v-for="option in props.options"
          :key="option.id"
          :class="{ 'active': selectedId === option.id }"
          @click="selectOption(option)"
        >
          {{ option.value }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
