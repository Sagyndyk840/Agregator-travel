<script setup lang="ts">
import { computed, onMounted, type Ref, ref, watch, useTemplateRef, onUnmounted } from 'vue'
import Field from '@/shared/ui/UI/field'
import type UIFieldProps from '@/shared/ui/UI/field/field.props'
import type { UIDatePickerProps } from '@/shared/ui/UI/date-picker/date-picker.props'
import Icon from '@/shared/ui/UI/icon'
import moment from 'moment'

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
  const date = new Date(currentDate.value)
  date.setMonth(date.getMonth() - 1)
  currentDate.value = date

}
const nextMonth = (): void => {
  const date = new Date(currentDate.value)
  date.setMonth(date.getMonth() + 1)
  currentDate.value = date

}
const generateDays = () => {
  const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()
  days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1)
}

const isPastDate = (day: number): boolean => {
  const today = new Date()
  const date = new Date(year.value, month.value, day)
  return date < today && date.toDateString() !== today.toDateString()
}

const selectDate = (day: number): void => {
  const selectedDate = new Date(year.value, month.value, day)
  if (isPastDate(day)) return
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
  if (isPastDate(day)) return 'disabled'
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

let datePickerContainer = ref('datePickerContainer')

const handleClickOutside = (event: MouseEvent) => {
  const calendarElement = datePickerContainer.value
  if (calendarElement && !calendarElement.contains(event.target as Node)) {
    closeCalendar()
  }
}

onMounted(() => {
  initializeDates()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
  <div class="datepicker-container" ref="datePickerContainer">
    <Field v-bind="props" v-model="formattedDateRange" @focus="openCalendar" />

    <div v-if="showCalendar" class="calendar">
      <div class="calendar-header">
        <Icon icon="back-chevron" type="general" @click="prevMonth" />
        <span>{{ monthName }} {{ year }}</span>
        <Icon icon="next-chevron" type="general" @click="nextMonth" />
      </div>
      <div class="calendar-body">
        <div class="day"
             v-for="day in days"
             :key="day"
             :class="dayClass(day)"
             @click="isPastDate(day) ? null : selectDate(day)">
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