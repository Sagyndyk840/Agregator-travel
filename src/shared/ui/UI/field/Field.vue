<script setup lang="ts">
import Icon from '@/shared/ui/UI/icon'
import type UIFieldProps from '@/shared/ui/UI/field/field.props'
import { computed } from 'vue'
import Loader from '@/shared/ui/UI/loader/Loader.vue'

const generateUniqueName = (): string => {
  const prefix = 'field_';
  const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  return `${prefix}${uniqueId}`;
}

const props = withDefaults(defineProps<UIFieldProps>(), {
  type: 'text',
  disabled: false,
  label: 'Label',
  error: false,
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
  loading: true,
})

const fieldName = computed((): string => props.name !== ' ' ? props.name : generateUniqueName())

const emit = defineEmits(['update:modelValue'])

const onField = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>

<template>
  <div class="field" :class="[
    {
      'outlined': !props.filled && props.outlined,
      'filled': props.filled,
      'disabled': props.disabled,
      'block': props.block,
    }
  ]">
    <div class="field-container" :class="[
      {
        'field-error': props.error,
      }
    ]">
      <Icon v-if="props.iconLeft" :size="18" :icon="props.iconLeft" :type="props.iconType" class="icon icon-left"/>
      <Icon v-if="props.loading ? false : props.iconRight" :size="18" :icon="props.iconRight" :type="props.iconType" class="icon icon-right"/>
<!--      <Icon v-if="props.loading ? false : props.iconRight" :size="18" :icon="props.iconRight" :type="props.iconType" class="icon icon-right"/>-->
      <component
        :style="[
          {
          'padding-left': props.iconLeft ? '40px': '14px',
          'padding-right': props.iconRight ? '40px': '14px',
          }
        ]"
        :is="props.field"
        :value="props.modelValue"
        @input="onField"
        :disabled="props.loading || props.disabled"
        :id="fieldName"
        :placeholder="props.filled ? props.label : ' '"
        :type="props.type"
      />
      <label
        :style="[
          {
          'padding-left': props.iconLeft ? '35px': '0',
          'padding-right': props.iconRight ? '35px': '0',
          }
        ]"
        :for="fieldName">
        {{ props.label }}
      </label>
      <Loader class="loader" :loading="props.loading" size="large" color="#79747e" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
