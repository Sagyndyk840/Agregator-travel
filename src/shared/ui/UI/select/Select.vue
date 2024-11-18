<script setup lang="ts">

import type { UISelectProps } from '@/shared/ui/UI/select/select.props'
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
  optionLabel: 'value',
  filter: false,
})

let dropDownShowOrHide: Ref<boolean> = ref(false)

const filteredOptions = computed(() => {
  if (!props.filter) {
    return props.options
  }
  const search = model.value?.toLowerCase() || ''

  return props.options.filter(option =>
    option.value.toLowerCase().includes(search)
  )
})

const onInput = () => {
  if (props.filter) {
    dropDownShowOrHide.value = filteredOptions.value.length > 0
  } else {
    dropDownShowOrHide.value = true
  }
}

const onFocus = () => {
  dropDownShowOrHide.value = !props.filter
}

const onBlur = () => {
  dropDownShowOrHide.value = false
}

let selectedId = ref()

const emit = defineEmits(['update:modelValue'])

const selectOption = (option: any) => {
  model.value = option
  selectedId.value = option.id
  emit('update:modelValue', option.value)
  dropDownShowOrHide.value = false
}

</script>

<template>
  <div class="select">
    <div class="select-container">
      <Field v-bind="props"  v-model="model"  @focus="onFocus" @blur="onBlur" @input="onInput" :readonly="!filter" >
        <template #icon-right >
          <Icon :size="25" icon="select-down" type="general" class="select-icon__right"/>
        </template>
      </Field>
    </div>
    <transition>
      <ul class="select-dropdown" v-if="dropDownShowOrHide">
        <li
          v-for="option in filteredOptions"
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
