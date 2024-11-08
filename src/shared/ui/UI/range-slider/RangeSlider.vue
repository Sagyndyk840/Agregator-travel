<script setup lang="ts">
import { type Ref, ref, watchEffect } from 'vue'
import type RangeSliderProps from '@/shared/ui/UI/range-slider/range-slider.props';

const props = withDefaults(defineProps<RangeSliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  minValue: 50,
  maxValue: 80
})

const emit = defineEmits(['update:minValue', 'update:maxValue'])

const slider: Ref<HTMLDivElement | null> = ref(null)
const inputMin: Ref<HTMLInputElement | null> = ref(null)
const inputMax: Ref<HTMLInputElement | null> = ref(null)
const sliderMinValue: Ref<number> = ref(props.minValue)
const sliderMaxValue: Ref<number> = ref(props.maxValue)

const getPercent = (value: number, min: number, max: number): number => {
  return ((value - min) / (max - min)) * 100
}

const setCSSProps = (left: number, right: number): void => {
  slider.value.style.setProperty('--progressLeft', `${left}%`)
  slider.value.style.setProperty('--progressRight', `${right}%`)
}

watchEffect(() => {
  if (slider.value) {
    emit('update:minValue', sliderMinValue.value)
    emit('update:maxValue', sliderMaxValue.value)

    const leftPercent = getPercent(sliderMinValue.value, props.min, props.max)
    const rightPercent = 100 - getPercent(sliderMaxValue.value, props.min, props.max)

    setCSSProps(leftPercent, rightPercent)
  }
})

const onInput = (event: Event): void => {
  const target = event.target as HTMLInputElement
  if (target.name === 'min') {
    target.value = String(Math.min(parseFloat(target.value), sliderMaxValue.value))
    sliderMinValue.value = parseFloat(target.value)
  } else if (target.name === 'max') {
    target.value = String(Math.max(parseFloat(target.value), sliderMinValue.value))
    sliderMaxValue.value = parseFloat(target.value)
  }
}

</script>
<template>
  <div ref="slider" class="custom-slider minmax">
    <div class="minmax-indicator"></div>
    <input
        ref="inputMin"
        type="range"
        name="min"
        id="min"
        :min="min"
        :max="max"
        :value="minValue"
        :step="step"
        @input="onInput"
    />
    <input
        ref="inputMax"
        type="range"
        name="max"
        id="max"
        :min="min"
        :max="max"
        :value="maxValue"
        :step="step"
        @input="onInput"
    />
  </div>
  <div class="minmax-inputs">
    <div class="min count">{{ sliderMinValue }}</div>
    <div class="max count">{{ sliderMaxValue }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
