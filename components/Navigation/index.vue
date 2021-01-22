<template>
  <div class="relative flex flex-wrap items-center justify-between mt-2 shadow rounded">
    <NuxtLink to="/" class="flex flex-row items-end" exact-active-class="">
      <Logo class="h-8 mb-2 mr-2" />
      <h1 class=" text-3xl">Juniperus</h1>
    </NuxtLink>
    <button aria-label="menu" @click="menuOpen = !menuOpen" class="top-0 mt-2 p-4 absolute right-0 md:hidden">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <div
      :class="menuOpen ? 'flex flex-col w-screen h-screen justify-center' : 'hidden'"
      class="text-xl items-center md:h-8 md:w-auto md:flex md:flex-row md:justify-between md:items-end md:text-base"
    >
      <NuxtLink class="nav-item" to="/">Home</NuxtLink>
      <NuxtLink class="nav-item" to="/blog">Blog</NuxtLink>
      <!-- note to self: align right submenu and clean up classes -->
      <div>
        <button
          aria-label="Drop down menu for discover"
          @click="subMenuOpen = !subMenuOpen"
          class="nav-item text-left flex items-end"
        >
          Discover
          <DownArrow class="h-2 w-4"/>
        </button>
          <div
            :class="subMenuOpen ? 'flex flex-col' : 'hidden'"
            class="inlay rounded mode-bg-second z-10 md:absolute md:mt-2 md:ml-2"
          >
            <NuxtLink class="nav-item sub-nav" to="/blog/tag">Tags</NuxtLink>
            <NuxtLink class="nav-item sub-nav" to="/blog/author">Authors</NuxtLink>
            <AppSearchInput class="hidden md:block" />
          </div>
      </div>
      <NuxtLink class="nav-item" to="/gallery">Gallery</NuxtLink>
      <NuxtLink class="nav-item" to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        menuOpen: false,
        subMenuOpen: false
    }
  },
  watch: {
    '$route' () {
      this.menuOpen = false
      this.subMenuOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  display: block;
  width: 1.5rem;
  height: .125rem;
  background-color: black;
  margin-top: 7px;
  margin-bottom: 7px;
}
.nav-item {
  @apply p-8 transition duration-500;
  
  &:hover {
    @apply rounded shadow-xl;
  }
  @screen md {
    @apply py-0 px-4;
    &.sub-nav {
      @apply p-4;
    }
  }
}
.nuxt-link-exact-active {
  border-radius: .25rem;
  background-color: var(--bg);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) inset;
}
</style>