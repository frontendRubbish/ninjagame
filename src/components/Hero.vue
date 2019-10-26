<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       xmlns:ev="http://www.w3.org/2001/xml-events"
       class="hero"
       height="300"
       width="160"
       v-bind:style="{ left: xpos + 'px' }">
    <ellipse cx="80" cy="198" rx="46" ry="54" fill="white" stroke="black" stroke-width="3" />
  </svg>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Hero',
  data: function () {
    return {
      xpos: 0
    }
  },
  computed: {
    ...mapGetters({
      tick: 'getTick',
      controls: 'getControls'
    })
  },
  watch: {
    tick: function (tick) {
      if (this.controls.left && (this.xpos > 0)) {
        this.xpos -= 2
      }
      if (this.controls.right) {
        this.xpos += 2
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero {
    left: 0;
    position: absolute;
  }
</style>
