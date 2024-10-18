<script setup lang="ts">
import Icon from '@/shared/ui/UI/icon'
import type UIFieldProps from '@/shared/ui/UI/field/field.props'
import { computed, type Ref, ref } from 'vue'
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
})

const fieldName = computed((): string => props.name !== ' ' ? props.name : generateUniqueName())

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const onField = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

let errorMessage: Ref<string> = ref('')
let errorStatus: Ref<boolean> = ref(false)

const validateInput = (): void => {
  errorMessage.value = ''
  errorStatus.value = false

  if (props.rules) {
    for (const rule of props.rules) {
      const result = rule(props.modelValue)
      if (result !== true) {
        errorMessage.value = result as string
        errorStatus.value = true
        break
      }
    }
  }
}

const clear = (): void => {
  emit('update:modelValue', '')
}

const handleBlur = ():void => {
  validateInput();
  emit('blur')
}

const handleFocus = (): void => {
  emit('focus')
}


</script>

<template>
  <div class="field" :class="[
    {
      'outlined': !props.filled && props.outlined,
      'filled': props.filled,
      'disabled': props.disabled,
      'block': props.block,
      'field-error': errorStatus,
    }
  ]">
    <div class="field-container">
      <Icon v-if="props.iconLeft" :size="18" :icon="props.iconLeft" :type="props.iconType" class="icon icon-left"/>
      <div v-if="props.loading"></div>
      <Icon v-else-if="props.clear"  @click="clear" :size="18" icon="clear" :type="props.iconType" class="icon icon-right cursor-pointer" />
      <Icon v-else-if="props.iconRight" :size="18" :icon="props.iconRight" :type="props.iconType" class="icon icon-right "/>
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
        @blur="handleBlur"
        @focus="handleFocus"
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
    <transition>
      <div class="hint" v-if="props.hint || errorStatus">
        <span v-if="errorStatus">{{ errorMessage }}</span>
        <span v-else-if="props.hint">{{ props.hint }}</span>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
