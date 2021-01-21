<template>
  <ul class="sm:vertical-masonry inlay p-4">
    <li v-for="article of articles" :key="article.slug" class="blog-list-card dont-break mode-bg-second">
      <div class="dont-break">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="dont-break">
          <img :src="article.hero_image"
            :alt="article.alt_tag"
            class="object-cover rounded-t"
          >
          <div class="blog-list-item dont-break">
            <h2 class="text-2xl font-bold dont-break">{{ article.title }}</h2>
            <h3 class="text-xl dont-break">{{ article.description }}</h3>
            <p>by {{ article.author }}</p>
            <FormatDate dateType="noTime" :date="article.createdAt" />
          </div>
        </NuxtLink>
      </div>
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
.blog-list-card {

  // break-inside: avoid;
  @apply mb-4 rounded shadow-xl transition duration-200 transform;
  .blog-list-item {
    @apply p-4;
  }
  @screen sm {
    @apply;
  }
  &:hover {
    @apply -translate-y-4;
  }
}
</style>