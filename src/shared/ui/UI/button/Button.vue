<script setup lang="ts">
import type ButtonProps from './button.props';
import Loader from '@/shared/ui/UI/loader/Loader.vue'
import Icon from '@/shared/ui/UI/icon'

const emit = defineEmits(['click'])

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  label: 'label',
  align: 'center',
  outlined: false,
  color: '#8dd3bb',
  textColor: '#121',
  block: false,
  disabled: false,
  loading: false,
  size: 'small',
  flat: false,
  iconType: 'filled',
})

const click = (): void => {
  emit('click')
}

</script>

<template>
  <div>
    <component
        :is="props.to ? 'router-link' : 'button'" :to="props.to"
        :disabled="props.disabled"
        @click="click"
        :type="props.type"
        class="btn"
        :class='[
          props.to ? "display-inline-block" : "flex",
          !props.icon ? `btn-size-${props.size}` : `icon-${props.size}`,
          props.block ? "block" : "",
          props.disabled ? `disabled-${props.outlined ? "outlined" : "filled"}` : "",
          {
            "outlined": props.outlined,
            "flat": props.flat,
            "disabled": props.disabled,
          }
        ]'
        :style='[
          !props.disabled && props.outlined ? {
            color: props.color,
            border: `1px solid ${props.color} !important`
          } : {
            color: props.textColor,
            backgroundColor: props.color
          },
          {
            "backgroundColor": props.color,
            "color": props.textColor,
            "width": props.width,
          }
        ]'
    >
      <div class="loader flex align-center justify-center" v-if="props.loading">
        <slot name='loader'>
          <Loader :size="props.size" :color="props.outlined ? props.color : props.textColor" :loading="props.loading" />
        </slot>
      </div>
      <div v-else class="flex align-center justify-center">
        <div v-if="props.icon">
          <slot name="icon">
            <Icon :icon="icon" :type="props.iconType" />
          </slot>
        </div>
        <div v-else>
          <div v-if='!icon || !$slots["icon-left"]' class='flex align-center justify-center icon'>
            <div style='padding-right: 4px;' v-if='$slots["icon-left"] || props.iconLeft' class='flex align-center justify-center icon-slot icon-slot-left'>
              <slot name="icon-left">
                <Icon :icon="iconLeft" :type="props.iconType" />
              </slot>
            </div>
            <slot :class="props.textColor" name="label">
              {{ props.label }}
            </slot>
            <div style='padding-left: 4px;' v-if='$slots["icon-right"] || props.iconRight' class='flex align-center justify-center icon-slot icon-slot-right'>
              <slot name="icon-right">
                <Icon :icon="iconRight" :type="props.iconType" />
              </slot>
            </div>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<style scoped lang="scss">
@import 'style.scss';
</style>
