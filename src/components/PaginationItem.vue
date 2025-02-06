<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onNext: () => void
  onPrevious: () => void
  onChangeItemsPerPage: (value: number) => void
}

const props = defineProps<Props>()

const isFirstPage = computed(() => props.currentPage === 0)
const isLastPage = computed(() => (props.currentPage + 1) * props.itemsPerPage >= props.totalItems)

const currentRange = computed(() => {
  const start = props.currentPage * props.itemsPerPage + 1
  const end = Math.min((props.currentPage + 1) * props.itemsPerPage, props.totalItems)
  return `${start}-${end}`
})

const itemsPerPageOptions = [10, 20, 50, 100]
</script>

<template>
  <div class="flex p-3 justify-between">
    <div class="sm:flex items-center gap-4">
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">{{ currentRange }}</span>
        of
        <span class="font-medium">{{ totalItems }}</span>
        results
      </p>
      <div class="hidden sm:flex items-center gap-2">
        <label for="perPage" class="text-sm text-gray-600">Per page:</label>
        <select
          id="perPage"
          :value="itemsPerPage"
          @change="(e) => onChangeItemsPerPage(Number((e.target as HTMLSelectElement).value))"
          class="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div>
      <button
        :disabled="isFirstPage"
        @click="props.onPrevious"
        class="p-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <button
        :disabled="isLastPage"
        @click="props.onNext"
        class="p-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
</template>
