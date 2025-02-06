<script setup lang="ts">
import { useTemplateRef } from 'vue'

type Props = {
  setSearch: (search: string) => void
}

const props = defineProps<Props>()

const searchInput = useTemplateRef('searchInput')

const handleSubmit = () => {
  props.setSearch(searchInput.value?.value ?? '')
}
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center gap-3">
    <input
      class="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
      type="text"
      placeholder="Search emails..."
      ref="searchInput"
      @keyup.enter="handleSubmit"
    />
    <button
      class="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      @click="handleSubmit"
    >
      Search
    </button>
  </div>
</template>
