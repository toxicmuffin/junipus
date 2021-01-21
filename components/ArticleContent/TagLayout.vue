<template>
  <ul class="flex flex-row flex-wrap mb-2 round-pads">
    <li
      class="m-2"
      v-for="(tag, index) of tags"
      :key="index"
    >
      <NuxtLink :to="`/blog/tag/${tag}`" class="bttn">
        {{ tag }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => null
    }
  }
}
</script>
