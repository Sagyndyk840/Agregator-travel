<script setup lang="ts">

import type { UISelectProps, OptionType } from '@/shared/ui/UI/select/select.props'
import { computed, type Ref, ref } from 'vue'
import Field from '@/shared/ui/UI/field'
import type UIFieldProps from '@/shared/ui/UI/field/field.props'

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

const selectOption = (option: OptionType) => {
  model.value = option[props.optionLabel as keyof ];  // Убрано приведение, т.к. уже определено
  selectedId.value = option[props.optionValue as keyof ];  // Убрано приведение, т.к. уже определено
}

</script>

<template>
  <div class="select">
    <div class="select-container">
      <Field :props @focus="onFocus" @blur="onBlur" v-model="model" label="Select" />
    </div>
    <transition>
      <ul class="select-dropdown" v-if="dropDownShowOrHide">
        <li
          v-for="option in props.options"
          :key="option[props.optionValue]"
          @click="selectOption(option)"
          :class="{ 'active': selectedId === option.id }"
        >
          {{ option[props.optionLabel] }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
