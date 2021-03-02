<template>
  <div class="container mx-auto">
    <section class="m-4 md:m-8">
      <div class="flex flex-col lg:flex-row lg:items-stretch">
        <div class="w-full mb-6 lg:mr-6 lg:mb-0">
          <div class="relative container-with-ratio rounded-lg overflow-hidden shadow-md">
            <ImageCarousel
              class="absolute inset-0 w-full h-full"
              :items="banners"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ImageCarousel from '~/components/ImageCarousel'

export default {
  components: {
    ImageCarousel
  },
  data () {
    return {
      icon: {
        faChevronRight
      }
    }
  },
  computed: {
    ...mapState({
      banners: state => state.banners.items
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.$store.dispatch('banners/getItems')
        .then((res) => {
          console.log('response', res)
        })
    })
  }
}

</script>

<style lang="scss" scoped>
.top-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  &__banner {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 58.625%;
    grid-column-end: span 2;
    grid-row-end: span 2;
    border-radius: 0.5rem;
    @apply shadow-md;
  }

  &__call-card {
    min-height: 100px;
    grid-column-end: span 1;
    @apply shadow-md;
  }

  &__socmed {
    grid-column: span 2;
    @apply p-5
    bg-white
    shadow-md;
  }
}

.hospital-list {
  display: block;
  @screen lg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
}

.li-check-mark {
  margin-left: 0;
  padding: 0 0 0.5rem 2.5rem;
  background-image: url('/img/check-mark.png');
  background-position: left top;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
}

.responded-question {
  grid-column: auto / span 2;

  @screen lg {
    grid-column: auto;
  }
}
.call-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  @screen lg {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.counter-cards {

  @screen lg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    align-items: stretch;
    row-gap: 1.5rem;
  }
}

.container-with-ratio {
  padding-top: (400 * 100/ 713) * 1%;

  &--lg {
    padding-top: 0;
    @screen lg {
      padding-top: (400 * 100/ 713) * 1%;
    }
  }
}
</style>
