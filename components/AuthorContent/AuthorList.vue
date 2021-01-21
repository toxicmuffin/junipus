<template>
  <ul class="w-full inlay p-4 flex flex-row flex-wrap items-center justify-center">
    <li
      v-for="(author, index) in authors"
      :key="index"
      class="author-card dont-break mode-bg-second"
    >
      <NuxtLink
        :to="`/blog/author/${author.title.replace(/\s+/g, '-').toLowerCase()}`"
        class="flex flex-col dont-break"
      >
      <div class="h-24 w-64 relative mode-bg rounded-t dont-break">
        <img
          :src="author.background"
          alt="Authors background image"
          class="rounded-t object-cover h-24 w-full z-0"
        >
        <img
            :src="author.avatar"
            :alt="author.title+'\'s avatar'"
            class="absolute top-0 mt-10 ml-2 rounded border-white border-4 w-20 h-20 object-cover z-10"
        >
        </div>
        <div class="w-full">
          <h2 class="mt-6 mx-2 font-bold">{{ author.title }}</h2>
          <p class="mx-2 pb-4">{{ author.bio }}</p>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
      default: () => null
    }
  }
}
</script>

<style lang="scss" scoped>
.author-card {
  @apply m-8 w-64 rounded shadow transition duration-200 transform;
  &:hover {
    @apply -translate-y-4;
  }
}
</style>