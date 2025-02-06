<script setup lang="ts">
import type { Email } from '@/models'
import Pagination from './PaginationItem.vue'

interface Props {
  emails: Email[] | undefined
  selectedEmail: Email | undefined
  setSelectedEmail: (email: Email) => void
  total: number
  currentPage: number
  onNextPage: () => void
  onPreviousPage: () => void
  itemsPerPage: number
  onChangeItemsPerPage: (value: number) => void
}

const props = defineProps<Props>()
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <table class="w-full table-fixed">
      <thead class="bg-gray-800 text-white sticky top-0 z-10">
        <tr>
          <th class="p-3 md:p-4 w-1/2 font-semibold text-sm uppercase">Subject</th>
          <th class="p-3 md:p-4 w-1/4 font-semibold text-sm uppercase">From</th>
          <th class="p-3 md:p-4 w-1/4 font-semibold text-sm uppercase">To</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-100">
        <tr
          v-for="email in props.emails"
          :key="email.messageId"
          :class="[
            'hover:bg-gray-100 transition-colors duration-150 ease-in-out cursor-pointer',
            {
              'bg-blue-50': email.messageId === selectedEmail?.messageId,
            },
          ]"
          @click="props.setSelectedEmail(email)"
        >
          <td class="p-3 md:p-4">
            <div class="truncate">
              {{ email.subject || 'No subject' }}
            </div>
          </td>
          <td class="p-3 md:p-4 text-gray-600">
            <div class="truncate">
              {{ email.from || email.xFrom || 'No from' }}
            </div>
          </td>
          <td class="p-3 md:p-4 text-gray-600">
            <div class="truncate">
              {{ email.to || email.xTo || 'No to' }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :current-page="currentPage"
      :total-items="total"
      :items-per-page="itemsPerPage"
      :on-next="onNextPage"
      :on-previous="onPreviousPage"
      :on-change-items-per-page="onChangeItemsPerPage"
    />
  </div>
</template>
