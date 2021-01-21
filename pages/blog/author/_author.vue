<template>
  <div>
    <AuthorHeader :author="author" />
    <BlogList :articles="articles" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const author = await $content('authors', params.author).fetch()
      const articles = await $content('articles', params.slug)
        .where({ author: author.title})
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        author,
        articles
      }
    }
  }
</script>
