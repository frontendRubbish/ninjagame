<template>
  <h1>Controller</h1>
</template>

<script>
const fps = 60
const fpsInterval = 1000 / fps

let store
let gamepad
let then

function gameLoop () {
  const now = Date.now()
  let delta = now - then
  let controls = {
    left: false,
    right: false,
    up: false,
    down: false,
    button: false
  }

  if (delta > fpsInterval) {
    then = now - (delta % fpsInterval)
    store.commit('nextFrame')
    gamepad = getGamepad()
    if (gamepad) {
      controls.button = checkButton(gamepad, 0)
      controls.left = checkButton(gamepad, 14)
      controls.right = checkButton(gamepad, 15)
      controls.up = checkButton(gamepad, 12)
      controls.down = checkButton(gamepad, 13)
      store.commit('updateControls', controls)
    }
  }

  requestAnimationFrame(gameLoop)
}

function checkButton (gamepad, buttonIdx) {
  let val = gamepad.buttons[buttonIdx]
  let buttonPressed = false

  buttonPressed = val === 1.0
  if (typeof (val) === 'object') {
    buttonPressed = val.pressed
    val = val.value
  }

  return buttonPressed
}

function getGamepad () {
  const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [])
  return gamepads[0]
}

function addConnectListener () {
  window.addEventListener('gamepadconnected', connecthandler)
}

function connecthandler (e) {
  addgamepad(e.gamepad)
}

function addgamepad (newGamepad) {
  gamepad = newGamepad
}

export default {
  name: 'GameController',
  mounted: function () {
    store = this.$store
    addConnectListener()
    then = Date.now()
    requestAnimationFrame(gameLoop)
  }
}

</script>
