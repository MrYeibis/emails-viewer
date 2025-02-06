<script setup lang="ts">
import EmailsTable from './components/EmailsTable.vue'
import EmailViewer from './components/EmailViewer.vue'
import SearchBar from './components/SearchBar.vue'

import { ref, onMounted, watch, computed } from 'vue'
import type { Email, PaginatedEmailsResponse } from './models'

const data = ref<PaginatedEmailsResponse | undefined>(undefined)
const email = ref<Email | undefined>(undefined)
const searchText = ref('')
const from = ref(0)
const maxResults = ref(20)

const buildUrl = () => {
  const baseUrl = import.meta.env.VITE_API_URL + '/api/emails'
  const params = new URLSearchParams()

  if (searchText.value) {
    params.append('match', searchText.value)
  }

  params.append('from', from.value.toString())
  params.append('maxResults', maxResults.value.toString())

  return `${baseUrl}?${params.toString()}`
}

const fetchData = async () => {
  const response = await fetch(buildUrl())
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  data.value = await response.json()
}

onMounted(fetchData)

watch([searchText, from, maxResults], fetchData)

const setEmail = (e: Email) => {
  email.value = e
}

const setSearchText = (text: string) => {
  searchText.value = text
  from.value = 0 // Reset to first page on new search
}

const setItemsPerPage = (value: number) => {
  maxResults.value = value
  from.value = 0 // Reset to first page when changing items per page
}

const nextPage = () => {
  if (data.value && from.value < data.value.total) {
    from.value += maxResults.value
  }
}

const previousPage = () => {
  const newFrom = from.value - maxResults.value
  if (newFrom >= 0) {
    from.value = newFrom
  }
}

const currentPage = computed(() => Math.floor(from.value / maxResults.value))
</script>

<template>
  <main class="h-screen p-4 md:p-6 flex flex-col gap-3 bg-gray-50">
    <SearchBar :set-search="setSearchText" />
    <div class="flex h-full flex-col sm:flex-row py-3 gap-3 overflow-hidden">
      <div class="flex-1 bg-white rounded-lg shadow overflow-hidden">
        <EmailsTable
          v-if="data"
          :emails="data.records"
          :set-selected-email="setEmail"
          :selected-email="email"
          :total="data.total"
          :current-page="currentPage"
          :on-next-page="nextPage"
          :on-previous-page="previousPage"
          :items-per-page="maxResults"
          :on-change-items-per-page="setItemsPerPage"
        />
      </div>
      <div class="flex-1 bg-white rounded-lg shadow overflow-hidden">
        <EmailViewer v-if="email" :email="email" />
      </div>
    </div>
  </main>
</template>
