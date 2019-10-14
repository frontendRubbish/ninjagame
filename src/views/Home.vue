<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <GameBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import GameBoard from '@/components/GameBoard.vue'

export default {
  name: 'home',
  components: {
    GameBoard
  }
}
</script>
