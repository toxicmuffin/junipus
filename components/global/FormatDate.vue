<template>
  <p v-if="dateType === 'noTime'" class="text-xs">{{ shortDate(date) }}</p>
  <p v-else class="text-xs">{{ dateType }} {{ formatDate(date) }}</p>
</template>

<script>
export default {
  props: ['date','dateType'],
  methods: {
    formatDate(date) {
      const options = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric',

        // timeZone: 'UTC',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      }
      return new Date(date).toLocaleString('en', options)
    },
    shortDate(date) {
      const options = { 
        year: '2-digit',
        month: 'short',
        day: 'numeric',
      }
      return new Date(date).toLocaleString('en', options)
    }
  }
}
</script>
