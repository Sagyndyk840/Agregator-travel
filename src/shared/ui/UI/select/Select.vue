<script setup lang="ts">

</script>

<template>
  <div class="select">
    <div class="select-container">
<!--      <input value="222" onfocus="showDropdown()" onblur="hideDropdown()" placeholder=" " id="dropdown-search" type="text" onfocus="showDropdown()" onblur="hideDropdown()">-->
      <input placeholder=" " id="dropdown-select" type="text">
      <label for="dropdown-select">Label</label>
    </div>
    <ul class="select-dropdown">
      <li>Option 1</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "style.scss";
</style>
