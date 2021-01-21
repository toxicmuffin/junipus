<template>
  <div>
    <TagLayout :tags="tags.tag" />
    <BlogList :articles="articles" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const articles = await $content('articles')
        .only(['title', 'sub_title', 'hero_image', 'slug', 'author', 'createdAt', 'alt_tag', 'description'])
        .sortBy('createdAt', 'desc')
        .fetch()
      const tags = await $content('data/tags')
        .fetch()
      return {
        articles,
        tags
      }
    }
  }
</script>
