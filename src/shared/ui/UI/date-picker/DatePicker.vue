<script setup lang="ts">
import { computed, onMounted, type Ref, ref, watch } from 'vue'
import Field from '@/shared/ui/UI/field'
import type UIFieldProps from '@/shared/ui/UI/field/field.props'
import type { UIDatePickerProps } from '@/shared/ui/UI/date-picker/date-picker.props'

const emit = defineEmits(['update:modelValue'])

interface UiDatePickerProps extends UIFieldProps, UIDatePickerProps {}

const props = withDefaults(defineProps<UiDatePickerProps>(), {
  type: 'text',
  disabled: false,
  label: 'date',
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

let startDate = ref()
let endDate = ref()
let showCalendar: Ref<boolean> = ref(false)
let currentDate = ref(new Date())
let days: Ref<number[]> = ref([])
let selectingStart: Ref<boolean> = ref(true)

const year = computed(() => currentDate.value.getFullYear())

const month = computed(() => currentDate.value.getMonth())

const monthName = computed(() => currentDate.value.toLocaleString('default', { month: 'long' }))

const formattedDateRange = computed((): string => {
  if (startDate.value && endDate.value) {
    let value = `${startDate.value.toLocaleDateString()} - ${endDate.value.toLocaleDateString()}`
    emit('update:modelValue', value)
    return value
  } else if (startDate.value) {
    let value = `${startDate.value.toLocaleDateString()}`
    emit('update:modelValue', value)
    return value
  }
  return ''
})

const prevMonth = (): void => {
  currentDate.value.setMonth(month.value - 1)
}
const nextMonth = (): void => {
  currentDate.value.setMonth(month.value + 1)
}
const generateDays = () => {
  const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()
  days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1)
}

const selectDate = (day: number): void => {
  const selectedDate = new Date(year.value, month.value, day)

  if (selectingStart.value) {
    startDate.value = selectedDate;
    endDate.value = null
    selectingStart.value = false;
  } else {
    if (selectedDate < startDate.value) {
      endDate.value = startDate.value;
      startDate.value = selectedDate;
    } else {
      endDate.value = selectedDate
    }
    selectingStart.value = true
  }
}

const dayClass = (day: number): string => {
  const date = new Date(year.value, month.value, day)
  if (startDate.value && endDate.value && date >= startDate.value && date <= endDate.value) {
    return 'selected-range'
  }
  if (startDate.value && date.getTime() === startDate.value.getTime()) {
    return 'selected-start'
  }
  if (endDate.value && date.getTime() === endDate.value.getTime()) {
    return 'selected-end'
  }
  return ''
}

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('.')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

const initializeDates = (): void => {
  if (props.modelValue) {
    const dateParts = props.modelValue.split(' - ')
    startDate.value = parseDate(dateParts[0])
    if (dateParts[1]) {
      endDate.value = parseDate(dateParts[1])
    }
  }
}

onMounted(() => {
  initializeDates()
})

watch(() => props.modelValue, () => {
  initializeDates()
})

watch(currentDate.value, () => {
    generateDays()
  }, { immediate: true }
)

const openCalendar = (): void => {
  showCalendar.value = true
}

const closeCalendar = (): void => {
  showCalendar.value = false
}

</script>

<template>
  <div class="datepicker-container">
    <Field v-bind="props" v-model="formattedDateRange" @focus="openCalendar" />

    <div v-if="showCalendar" class="calendar">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;</button>
        <span>{{ monthName }} {{ year }}</span>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="calendar-body">
        <div class="day"
             v-for="day in days"
             :key="day"
             :class="dayClass(day)"
             @click="selectDate(day)">
          {{ day }}
        </div>
      </div>
      <div class="calendar-footer">
        <button @click="closeCalendar">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>