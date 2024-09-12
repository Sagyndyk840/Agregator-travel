<script setup lang="ts">
import type ButtonProps from "./button.props";

const emit = defineEmits(['click'])

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  label: "label",
  align: "center",
  outlined: false,
  color: "red",
  textColor: "white",
  block: false,
  disabled: false,
  loading: false,
})

const click = () => {
  emit('click')
}
</script>

<template>
  <div>
    <component
        :is="props.to ? 'router-link' : 'button'" :to="props.to"
        :disabled="props.disabled"
        @click="click"
        :type="props.type" class="btn"/>

    </component>
  </div>
</template>

<style scoped>

</style>
