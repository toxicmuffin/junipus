<template>
  <article class="round-pads">
    <div class="mb-4 mx-auto lg:w-10/12">
      <div class="inlay round-pads mb-4">
        <h1 class="mode-text-primary text-3xl font-bold">{{ article.title }}</h1>
        <h2 class="text-2xl mb-4">{{ article.description }}</h2>
        <Author :author="author" :date="article.createdAt" :ttr="article.body" />
        <img class="object-cover mb-4 h-32 md:h-64 w-screen" :src="article.hero_image" :alt="article.alt_tag">
      </div>
      <nuxt-content :document="article" class="blog-content prose prose-purple prose-sm sm:prose lg:prose-lg xl:prose-2xl"/>
      <div class="flex flex-row justify-center mb-8">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <TagLayout :tags="article.tags" />
      <PrevNext :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    let authorStr = article.author
    authorStr = authorStr.replace(/\s+/g, '-').toLowerCase()
    const author = await $content('authors', authorStr)
    .only(['title','avatar','path'])
    .fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      author,
      prev,
      next
    }
  },
}
</script>


<style>
.dot {
  @apply rounded-full w-2 h-2 mx-4;

  background-color: var(--color-secondary);
}
</style>