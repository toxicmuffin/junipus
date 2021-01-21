<template>
  <ul class="bttn">
    <li
      v-for="(color,index) of colors"
      :key="color + index"
    >
      <component
        :is="`${color}-icon`"
        :class="getClasses(color)"
        @click="someFunction()"
        v-show="$colorMode.preference === color"
        class="cursor-pointer"
      />
    </li>
  </ul>
</template>

<script>
import DarkIcon from '@/assets/icons/dark.svg?inline'
import LightIcon from '@/assets/icons/light.svg?inline'
import SepiaIcon from '@/assets/icons/Sepia.svg?inline'
import SystemIcon from '@/assets/icons/System.svg?inline'
// nuxt svg module
  export default {
    components: {
      DarkIcon,
      LightIcon,
      SepiaIcon,
      SystemIcon,
    },
    data() {
      return {
        colors: ['system', 'dark', 'light', 'sepia'],
        currentIndex: 0,
      }
    },
    methods: {
      getClasses (color) {
        if (this.$colorMode.unknown) {
          return {}
        }
        return {
          preferred: color === this.$colorMode.preference,
          selected: color === this.$colorMode.value
        }
      },
      // checks which mode is active via index
      someFunction() {
        this.currentIndex+=1
        if (this.currentIndex == 0) {
          this.$colorMode.preference = 'system'
        } else if (this.currentIndex == 1) {
          this.$colorMode.preference = 'dark'
        } else if (this.currentIndex == 2) {
          this.$colorMode.preference = 'light'
        } else if (this.currentIndex == 3) {
          this.$colorMode.preference = 'sepia'
        } else {
          this.currentIndex = 0
          this.$colorMode.preference = 'system'
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
.icon-mode {
  @apply h-8;

  fill: var(--color-primary);
}
</style>