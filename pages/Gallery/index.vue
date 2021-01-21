<template>
  <div>
    <ul class="gallery-masonry inlay">
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