<template>
  <ul class="lg:vertical-masonry">
    <li
      v-for="article of articles"
      :key="article.slug"
      class="my-8 lg:my-0 p-4 inlay"
    >
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="flex flex-col relative">
        <img :src="article.hero_image" :alt="article.alt_tag" class="h-64 w-full object-cover">
        <div class="featured-detail-container">
          <div class="featured-detail-items">
            <h2 class="text-white text-xl font-bold">{{ article.title }}</h2>
            <FormatDate dateType="noTime" :date="article.createdAt"/>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      articles: {
        type: Array,
        default: () => null
      }
    }
  }
</script>

<style lang="scss" scoped>
.featured-detail-container {
  @apply flex flex-col justify-end text-white w-full absolute h-full bg-gradient-to-t from-black to-transparent;
  .featured-detail-items {
    @apply p-4 transition duration-500 transform;
  }
  &:hover {
    .featured-detail-items {
      @apply -translate-y-2;
    }
  }
}
</style>