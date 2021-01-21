<template>
  <div class="flex flex-col items-center justify-center text-6xl">
    <div class="relative flex flex-col items-center justify-center p-2 lg:8 text-center w-full h-screen">
      <div class="neon-box" />
      <div class="neon-box-inner" />
      <h1 class="after-dark-01">This is awkward...</h1>
      <h1 v-if="error.statusCode === 404" class="after-dark">404 Page not found</h1>
      <h1 v-else class="after-dark-01">An error occurred</h1>
      <NuxtLink to="/" class="after-dark-02">Return Home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  colorMode: 'dark-mode',
}
</script>

<style lang="scss">
@font-face {
  font-family: 'neontubes';
  src: url('~assets/fonts/NeonTubes2.otf');
}
.neon-box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0.25rem;
  border: 2px solid #c397ec;
  background-color: transparent;
  box-shadow: 0 0 1rem #8a2be2;
  -webkit-animation: buzz 0.01s infinite alternate;
          animation: buzz 0.01s infinite alternate;
}
.neon-box-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0.25rem;
  border: 2px solid #c397ec;
  background-color: transparent;
  box-shadow: 0 0 1rem #8a2be2 inset;
  -webkit-animation: buzz 0.01s infinite alternate;
    animation: buzz 0.01s infinite alternate;
}
.after-dark {
  font-family: 'neontubes', serif;
  color: #fff;
    margin-left: 4px;
    text-shadow: 0 0 1rem #8a2be2;
    -webkit-animation: blink 4.1s infinite alternate;
      animation: blink 4.1s infinite alternate;
}
.after-dark-01 {
  font-family: 'neontubes', serif;
  color: #fff;
    margin-left: 4px;
    text-shadow: 0 0 1rem #f145f1;
    -webkit-animation: blink 3.8s infinite alternate;
      animation: blink 3.8s infinite alternate;
}
.after-dark-02 {
  font-family: 'neontubes', serif;
  color: #fff;
    margin-left: 4px;
    text-shadow: 0 0 1rem #f145f1;
    -webkit-animation: blink 4.5s infinite alternate;
      animation: blink 4.5s infinite alternate;
}
@-webkit-keyframes buzz {
  70% {
    opacity: 0.80;
  }
}
 
@keyframes buzz {
  70% {
    opacity: 0.80;
  }
}
@-webkit-keyframes blink {
  40% {
    opacity: 1;
  }
  42% {
    opacity: 0.8;
  }
  43% {
    opacity: 1;
  }
  45% {
    opacity: 0.2;
  }
  46% {
    opacity: 1;
  }
}
@keyframes blink {
  40% {
    opacity: 1;
  }
  42% {
    opacity: 0.8;
  }
  43% {
    opacity: 1;
  }
  45% {
    opacity: 0.2;
  }
  46% {
    opacity: 1;
  }
}
</style>