<template>
    <div class="rounded shadow-xl mb-4" :style="styleObject">
      <div>
        <div class="relative bg-ratio">
          <img
            :src="author.background"
            alt="Authors background image"
            class="absolute object-cover w-full h-full z-0 rounded-t"
          >
          <div class="absolute h-full w-full bg-gradient-to-t from-black to-transparent opacity-50" />
        </div>
        <div class="relative flex -mt-24 ml-4">
          <img
            :src="author.avatar"
            :alt="author.title"
            class="w-32 h-32 object-cover border-4 border-white rounded"
          >
          <div class="flex flex-col">
            <h1 class="mt-8 ml-4 text-2xl text-white font-bold">{{ author.title }}</h1>
            <p class="mode-text mode-bg-second ml-4 p-4 rounded shadow hidden md:block">{{ author.bio }}</p>
          </div>
        </div>
        <p class="mode-text mode-bg-second m-4 p-4 rounded shadow md:hidden">{{ author.bio }}</p>
        <ul class="flex flex-wrap">
          <li v-for="(socials, index) in author.socials" :key="index" class="m-4">
            <a
              :href="socials.url"
              target="_blank"
              rel="noopener noreferrer"
              class="bttn"
            >
              {{ socials.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      styleObject: {
        backgroundColor: `${this.author.author_background_color}`
      }
  };
}
}
</script>

<style lang="scss" scoped>
.bg-ratio {
  padding-bottom: 33%;
}
</style>