<template>
  <div class="inlay built-container">
    <h1 class="text-center text-3xl mb-4">Developed With</h1>
    <div class="flex flex-row overflow-hidden">
      <div class="slider-1 flex flex-row flex-shrink-0 h-10 justify-between overflow-hidden">
        <NuxtBuilt class="h-10 mx-4 flex-shrink-0" />
        <Tailwind class="h-10 mx-4 flex-shrink-0" />
        <Forestry class="h-10 mx-4 flex-shrink-0" />
        <Sass class="h-10 mx-4" />
        <Netlify class="h-10 mx-4 flex-shrink-0" />
        <Kai class="h-10 mx-4 flex-shrink-0" />
        <NuxtBuilt class="h-10 mx-4 flex-shrink-0" />
        <Tailwind class="h-10 mx-4 flex-shrink-0" />
        <Forestry class="h-10 mx-4 flex-shrink-0" />
        <Sass class="h-10 mx-4" />
        <Netlify class="h-10 mx-4 flex-shrink-0" />
        <Kai class="h-10 mx-4 flex-shrink-0" />
      </div>
      <div class="slider-2 flex flex-row flex-shrink-0 h-10 justify-between overflow-hidden">
        <NuxtBuilt class="h-10 mx-4 flex-shrink-0" />
        <Tailwind class="h-10 mx-4 flex-shrink-0" />
        <Forestry class="h-10 mx-4 flex-shrink-0" />
        <Sass class="h-10 mx-4" />
        <Netlify class="h-10 mx-4 flex-shrink-0" />
        <Kai class="h-10 mx-4 flex-shrink-0" />
        <NuxtBuilt class="h-10 mx-4 flex-shrink-0" />
        <Tailwind class="h-10 mx-4 flex-shrink-0" />
        <Forestry class="h-10 mx-4 flex-shrink-0" />
        <Sass class="h-10 mx-4" />
        <Netlify class="h-10 mx-4 flex-shrink-0" />
        <Kai class="h-10 mx-4 flex-shrink-0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.built-container {
  @apply py-4 mb-8 rounded;
}
.slider-1 {
  position: relative;
  animation: build-slider-1 50s linear infinite;
}
@keyframes build-slider-1 {
  0% {transform:translateX(0%);}
  100% {transform:translateX(-100%);}
}
.slider-2 {
  position: relative;
  animation: build-slider-2 50s linear infinite;
}
@keyframes build-slider-2 {
    0% {transform:translateX(0%);}
    100% {transform:translateX(-100%);}
}
</style>