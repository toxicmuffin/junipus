<template>
  <div class="md:my-12">
    <div class="flex justify-between items-center">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="bttn hidden title-case md:block"
      >
        ⏮ {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
      <ScrollTop />
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="bttn hidden title-case md:block"
      >
        {{ next.title }} ⏭
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
