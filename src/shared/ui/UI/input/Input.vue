<script setup lang="ts">
import type UIInputProps from '@/shared/ui/UI/input/input.props';
import Icon from '@/shared/ui/UI/icon'
import { onMounted } from 'vue'

const props = withDefaults(defineProps<UIInputProps>(), {
  type: 'text',
  disabled: false,
  label: 'Label',
  error: false,
  outlined: true,
  filled: false,
  block: false,
  iconType: 'filled',
  field: 'input',
})

const emit = defineEmits(['update:modelValue'])

const onField = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
onMounted(() => {
})

</script>

<template>
  <div class="input" :class="[
    {
      'outlined': !props.filled && props.outlined,
      'filled': props.filled,
      'disabled': props.disabled,
      'block': props.block,
    }
  ]">
    <div class="input-container" :class="[
      {
        'input-error': props.error,
      }
    ]">
      <Icon v-if="props.iconLeft" :size="18" :icon="props.iconLeft" :type="props.iconType" class="icon icon-left"/>
      <Icon v-if="props.iconRight" :size="18" :icon="props.iconRight" :type="props.iconType" class="icon icon-right"/>
      <component :style="[{
        'padding-left': props.iconLeft ? '40px': '14px',
        'padding-right': props.iconRight ? '40px': '14px',
      }]" :is="props.field" :value="props.modelValue" @input="onField" :disabled="props.disabled" :id="props.name" :placeholder="props.filled ? props.label : ' '"  :type="props.type" />
      <label :style="[{
        'padding-left': props.iconLeft ? '35px': '0',
        'padding-right': props.iconRight ? '35px': '0',
      }]" :for="props.name">{{ props.label }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
