<template>
  <div>
    <HeroArea :hero="hero" class="mb-4"/>
    <Featured :articles="featured" class="mb-4"/>
    <BlogList :articles="articles" class="mb-4"/>
    <BuiltWith />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const hero = await $content('data/homePage').fetch()
    const featured = await $content('articles')
      .where({ tags: { $contains: 'Featured' } })
      .limit(3)
      .only(['title', 'hero_image', 'createdAt', 'slug', 'alt_tag', 'description'])
      .sortBy('createdAt','desc')
      .fetch()
    const articles = await $content('articles')
      .limit(13)
      .only(['title', 'hero_image', 'createdAt', 'slug', 'alt_tag', 'author', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      hero,
      articles,
      featured
    }
  }
}
</script>
