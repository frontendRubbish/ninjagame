<template>
  <div class="gameboard__frame">
      <Hero />
      <Structure v-for="structure in structures" :key="structure.id" :position="structure" />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Structure from '@/components/Structure.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'GameBoard',
  data: function () {
    return {
      structures: [
        {
          height: '20px',
          width: '500px',
          left: '0',
          top: '400px'
        },
        {
          height: '20px',
          width: '500px',
          left: '500px',
          top: '380px'
        }
      ]
    }
  },
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
    Hero,
    Structure
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
