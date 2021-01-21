<template>
  <div class="flex flex-col items-center mx-auto w-11/12 lg:w-9/12">
    <Navigation class="style-name-01"/>
    <Nuxt class="style-name-01 min-h-screen"/>
    <Footer class="style-name-01"/>
  </div>
</template>

<style lang="scss" scoped>
.style-name-01 {
  @apply w-full mb-4 p-4 rounded shadow;

  background-color: var(--bg-secondary);
}
</style>