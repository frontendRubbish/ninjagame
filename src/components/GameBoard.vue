<template>
  <ul>
    <li>Test</li>
  </ul>
</template>

<script>
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
      if (tick) {
        console.log('Tick')
      } else {
        console.log('Tock')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
