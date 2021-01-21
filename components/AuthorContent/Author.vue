<template>
  <div class="flex flex-row items-center mb-8 mode-text-secondary">
    <img :src="author.avatar" :alt="author.title" height="64rem" width="64rem" class="object-cover mr-2"/>
    <div>
      <NuxtLink :to="`/blog/author/${author.title.replace(/\s+/g, '-').toLowerCase()}`">
        <h2>{{ author.title }}</h2>
      </NuxtLink>
      <FormatDate dateType="Created" :date="date" />
      <p class="text-xs">~ {{ time }} minute read</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        default: () => null
      },
      date: {
        type: String,
        default: () => null
      },
      ttr: {
        type: Object,
        default: () => null
      }
    },
    data() {
      return {
        time: null,
        readingTime() {
          const text = JSON.stringify(this.ttr)
          const wpm = 200
          const words = text.trim().split(/\s+/).length
          this.time = Math.ceil(words / wpm)
        }
      }
    },
    async mounted() {
      this.readingTime()
    }
  }
</script>
