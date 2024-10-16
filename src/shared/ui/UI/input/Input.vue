<script setup lang="ts">
import type UIInputProps from '@/shared/ui/UI/input/input.props';
import Icon from '@/shared/ui/UI/icon'

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
<!--    <div v-if='!$slots["icon-left"]' class='flex align-center justify-center icon'>-->
<!--      <div style='padding-right: 4px;' v-if='$slots["icon-left"] || props.iconLeft' class='flex align-center justify-center icon-slot icon-slot-left'>-->
<!--        <slot name="icon-left">-->
<!--          <Icon :icon="iconLeft" :type="props.iconType" />-->
<!--        </slot>-->
<!--      </div>-->
    <div class="input-container" :class="[
      {
        'input-error': props.error,
      }
    ]">
<!--      <Icon class="icon icon-left"/>-->
<!--      <Icon class="icon icon-right"/>-->
      <component :is="props.field" :value="props.modelValue" @input="onField" :disabled="props.disabled" id="input" :placeholder="props.filled ? props.label : ' '"  :type="props.type" />
      <label for="input">{{ props.label }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
