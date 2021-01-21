<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl p-2">Authors</h1>
    <AuthorList :authors="authors" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content}) {
      const authors = await $content('authors')
        .only(['title', 'bio', 'avatar', 'background'])
        .sortBy('title')
        .fetch()
      return {
        authors
      }
    }
  }
</script>
