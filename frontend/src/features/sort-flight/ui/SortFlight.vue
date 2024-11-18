<script setup lang="ts">

import { ref, type Ref } from 'vue'

let isSortShow: Ref<boolean> = ref(false)

const sortShow = () => {
  isSortShow.value = !isSortShow.value
}

type Sort = {
  id: number;
  name: string;
}

let sorts: Ref<Sort[]> = ref([
  { id: 1, name: 'Recommended' },
  { id: 2, name: 'Price' },
  { id: 3, name: 'Duration' },
])

let sortId: Ref<Sort> = ref({ id: 1, name: 'Recommended' },
)

const selectSort = (sort: Sort) => {
  sortId.value = sort
  isSortShow.value = false
}

</script>

<template>
  <div class="sort-flight">
      <div class="sort-flight__top">
        <div class="sort-flight__item">
          <div class="title">Cheapest</div>
          <div class="price-and-time">$99 . 2h 18m</div>
        </div>
        <div class="sort-flight__item">
          <div class="title">Best</div>
          <div class="price-and-time">$99 . 2h 18m</div>
        </div>
        <div class="sort-flight__item">
          <div class="title">Quickest</div>
          <div class="price-and-time">$99 . 2h 18m</div>
        </div>
      </div>
      <div class="sort-flight__bottom">
        <div class="show" >
          Showing <span class="to">4</span> of <span class="from">257 places</span>
        </div>
        <div class="dropdown">
          <div class="sort-by" @click.prevent="sortShow">
            Sort by <span>{{ sortId.name }}</span>
          </div>
          <transition>
            <ul class="dropdown-menu" v-if="isSortShow">
              <li
                  v-for="sort in sorts"
                  :key="sort.id"
                  @click="selectSort(sort)"
                  :class="{ active: sortId.name === sort.name }"
              >{{ sort.name }}</li>
            </ul>
          </transition>
        </div>
      </div>
  </div>
</template>

<style scoped lang="scss">
@import "style";
</style>