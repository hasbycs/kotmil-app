<template>
  <div class="lg:hidden">
    <a
      v-show="canGoBack"
      class="cursor-pointer flex items-center"
      href="javascript:void(0)"
      @click.prevent="onGoBack"
    >
      <FontAwesomeIcon :icon="icon.faChevronLeft" />
      <div class="text-left px-4">
        <p class="text-lg">
          Kembali
        </p>
      </div>
    </a>
    <div
      v-show="!canGoBack"
      class="flex justify-between items-center"
    >
      <div
        class="flex items-center"
      >
        <a
          v-show="showDrawerToggle"
          class="cursor-pointer flex items-center mr-4"
          href="javascript:void(0)"
          @click.prevent="onToggleDrawer"
        >
          <FontAwesomeIcon :icon="icon.faBars" size="lg" class="text-gray-600 hover:text-green-700" />
        </a>
        <nuxt-link tag="img" to="/" class="flex-none block h-8 sm:h-10 mx-auto mr-4" src="/logo-milkot.png" alt />
        <nuxt-link to="/" tag="div" class="text-left">
          <p class="text-base">
            Millenial Koto-tuo
          </p>
          <p class="text-sm text-gray-700">
            Nagari Simarasok
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { faChevronLeft, faBell, faBars } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    toggleDrawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      icon: {
        faBars,
        faChevronLeft,
        faBell
      },
      isDrawerToggled: false
    }
  },
  computed: {
    showDrawerToggle () {
      return this.$route.path === '/'
    },
    canGoBack () {
      return this.$route.path !== '/'
    },
    pathToGoBack () {
      return this.$store.state.route.from.path
    }
  },
  watch: {
    toggleDrawer: {
      immediate: true,
      handler (v) {
        this.isDrawerToggled = v
      }
    }
  },
  methods: {
    onToggleDrawer () {
      this.isDrawerToggled = !this.isDrawerToggled
      this.$emit('toggle:drawer', this.isDrawerToggled)
    },
    onGoBack () {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
