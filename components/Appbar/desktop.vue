<template>
  <div class="hidden lg:block lg:mx-4">
    <div class="flex justify-between items-center">
      <div
        class="flex items-center"
      >
        <nuxt-link to="/">
          <img class="block h-10 mx-auto mr-4" src="/icon.png" alt>
        </nuxt-link>
        <nuxt-link to="/">
          <div class="text-left">
            <p class="text-base">
              Data Warga Yang Membutuhkan Bantuan
            </p>
            <p class="text-sm text-gray-700">
              Komplek Panghegar
            </p>
          </div>
        </nuxt-link>
      </div>
      <ul class="flex flex-row items-center">
        <li v-for="item in menus" :key="item.label">
          <a
            v-if="item.children === undefined"
            :href="'#'"
            :exact="item.exact"
            class="hidden lg:flex appbar-menu-item cursor-pointer mx-2 px-2 py-2 hover:bg-gray-200"
            @click.prevent.stop="onMenuItemClicked(item)"
          >
            <a>
              {{ item.label }}
            </a>
          </a>

          <nuxt-link
            v-if="item.children"
            to="#"
            :exact="item.exact"
            class="hidden lg:flex appbar-menu-item cursor-pointer mx-2 px-2 py-2 hover:bg-gray-200"
          >
            <a>
              {{ item.label }}
            </a>
          </nuxt-link>
          <ul v-if="item.children" :class="['hidden absolute rounded bg-white pb-3']">
            <li v-for="itemSub in item.children" :key="itemSub.to">
              <nuxt-link
                :to="itemSub.to"
                :exact="itemSub.exact"
                class="hidden lg:flex appbar-menu-item cursor-pointer mx-2 px-2 py-2 hover:bg-gray-200"
              >
                <a>
                  {{ itemSub.label }}
                </a>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { faChevronLeft, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
export default {
  data () {
    return {
      icon: {
        faBars,
        faChevronLeft,
        faBell
      },
      menus: [
        { label: 'Home', exact: true },
        { label: 'Kontak' }
      ]
    }
  },
  computed: {
  },
  methods: {
    onMenuItemClicked (m) {
      if (m.to.startsWith('http')) {
        window.open(m.to, '_blank')
      } else {
        this.$router.push(m.to)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.appbar-menu-item.nuxt-link-active {
  &,
  > * {
    @apply text-brand-green font-bold;
  }
}

ul li:hover ul {
  display: block;
}
</style>
