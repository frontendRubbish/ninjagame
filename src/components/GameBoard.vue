<template>
  <div class="gameboard__frame">
      <Hero />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'GameBoard',
  computed: {
    ...mapGetters({
      tick: 'getTick'
    })
  },
  watch: {
    tick: function (tick) {
      /* Do something here later */
    }
  },
  components: {
    Hero
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gameboard {
    &__frame {
      border: 1px solid red;
      height: 500px;
      position: relative;
    }
  }
</style>
