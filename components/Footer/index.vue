<template>
  <div>
    <div class="flex items-end justify-between">
      <div>
        <h2 class="text-5xl inlay p-2 mb-4"><NuxtLink to="/">Juniperus</NuxtLink></h2>
        <div class="flex flex-col sm:flex-row">
          <NuxtLink to="/blog" class="bttn">Blog</NuxtLink>
          <NuxtLink to="/gallery" class="bttn">Gallery</NuxtLink>
          <NuxtLink to="/contact" class="bttn">Contact</NuxtLink>
          <NuxtLink to="/blog/tag" class="bttn">Tags</NuxtLink>
          <NuxtLink to="/blog/author" class="bttn">Authors</NuxtLink>
        </div>
      </div>
      <DarkMode />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bttn {
  @apply text-center;
}
.nuxt-link-exact-active {
  @apply underline;
}
</style>
