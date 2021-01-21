<template>
  <div>
    <h1 class="text-3xl text-center">Gallery</h1>
    <ul class="gallery-masonry">
      <li
        v-for="image in gallery.gallery"
        :key="image.index"
      >
        <img :src="image" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const gallery = await $content('data/galleryPage').fetch()
    return {
      gallery
    }
  }
}
</script>

<style lang="scss">
.gallery-masonry {
  columns: 2;
  gap: 0;
  @apply p-4 rounded shadow-xl;
  @screen lg {
    columns: 3;
  }
}
</style>