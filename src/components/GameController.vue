<template>
  <h1>Controller</h1>
</template>

<script>

let gamepad;

function addConnectListener() {
  window.addEventListener("gamepadconnected", connecthandler)
}

function connecthandler(e) {
  addgamepad(e.gamepad)
}

function addgamepad( newGamepad ) {
  gamepad = newGamepad;
  console.log( gamepad )
}

export default {
  name: 'GameController',
  mounted: function () {
    addConnectListener()
  }
}

</script>
