<script setup lang="ts">

import {  type Ref, ref } from 'vue'

const props = withDefaults(defineProps<{
  title: string,
  show: boolean
}>(), {
  title: 'Title',
  show: false
})

const showHide: Ref<boolean> = ref(props.show)

const toggle = () => {
  showHide.value = !showHide.value
}

</script>

<template>
  <div class="filter-accordion">
    <div class="filter-accordion__header" @click="toggle">
      <div class="filter-accordion__header--title">{{ props.title }}</div>
      <div class="filter-accordion__header--btn"
        :class="{ 'active': showHide }"
      ></div>
    </div>
    <transition>
      <div class="filter-accordion__body" v-if="showHide">
        <slot>
        </slot>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>