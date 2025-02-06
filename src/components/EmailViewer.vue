<script setup lang="ts">
import type { Email } from '../models'

const props = defineProps<{
  email: Email
}>()
</script>

<template>
  <div class="flex flex-col h-full w-full overflow-y-auto p-4 md:p-6 space-y-4">
    <div class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center gap-2">
        <h2 class="text-sm font-medium text-gray-500">From:</h2>
        <span class="text-sm text-gray-900">{{ props.email.from || props.email.xFrom }}</span>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2">
        <h2 class="text-sm font-medium text-gray-500">To:</h2>
        <span class="text-sm text-gray-900">{{ props.email.to || props.email.xTo }}</span>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2">
        <h2 class="text-sm font-medium text-gray-500">Date:</h2>
        <span class="text-sm text-gray-900">{{
          new Date(props.email.date).toLocaleDateString()
        }}</span>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-sm font-medium text-gray-500">Subject:</h2>
        <span class="text-lg font-medium text-gray-900">{{
          props.email.subject || 'No subject'
        }}</span>
      </div>
    </div>
    <hr class="border-gray-200" />
    <div class="prose prose-sm max-w-none">
      <pre class="whitespace-pre-wrap text-sm text-gray-600 font-sans">{{
        props.email.content
      }}</pre>
    </div>
  </div>
</template>
