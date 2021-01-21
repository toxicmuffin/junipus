<template>
  <div class="inlay flex flex-row justify-between items-end p-4 rounded shadow sm:items-center">
    <div class="mode-bg-second p-2 m-2 w-7/12 rounded sm:p-8 sm:ml-4 sm:shadow md:w-auto">
      <h1 class="mode-text-primary text-3xl">{{ hero.heading }}</h1>
      <h2 class="text-2xl mb-4">{{ hero.sub_heading }}</h2>
      <div class="flex flex-wrap">
        <a
        :href="hero.call_to_action_link_00"
        class="hero-button mode-text">
          {{ hero.call_to_action_00 }}
        </a>
        <a
          :href="hero.call_to_action_link_01"
          target="_blank"
          class="hero-button text-white"
          :style="`backgroundColor:${hero.call_to_action_color}`"
        >
          {{ hero.call_to_action_01 }}
        </a>
      </div>
    </div>
    <img :src="hero.heading_image" alt="Hero image" class="m-2 w-1/3 mode-bg-second round-pads">
  </div>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      default: () => null
    }
  },
}
</script>

<style lang="scss" scoped>
.hero-button {
  @apply rounded p-2 shadow transition duration-300;
  &:hover {
    @apply opacity-50;

    background-color: var(--bg);
  }
}
</style>