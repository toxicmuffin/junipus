<template>
  <div>
    <TagLayout :tags="tags.tag" />
    <BlogList :articles="articles" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .where({ tags: { $contains: params.tag } })
        .without('body')
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
