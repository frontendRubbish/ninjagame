<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       xmlns:ev="http://www.w3.org/2001/xml-events"
       class="hero"
       viewBox="0 0 30 20"
       v-bind:style="style">

       <!-- standing 01 -->
       <g v-if="runPhase === 0">
         <path d="m0,0h30v20h-7v-1h-2v-2h-2v-3h-2v-1h2v-1h2v3h2v-14h-2v9h-2v-2h-2v-5h-2v-1h-4v2h4v1h-4v2h2v1h-2v1h-2v3h2v1h2v1h-2v2h-2v3h-2v1h-7zm8,12h-1v2h2v-2zm5,4h4v2h2v2h-8v-3h2z" opacity="0"/>
         <path d="m21,1h2v14h-2v-3h-2v1h-2v1h2v3h2v2h2v1h-4v-2h-2v-2h-4v1h-2v3h-4v-1h2v-3h2v-2h2v-1h-2v-1h-2v2h-2v-2h2v-3h2v-1h2v-1h-2v-2h4v-1h-4v-2h4v1h2v5h2v2h2z"/>
       </g>

       <!-- running 01 -->
       <g v-else-if="runPhase === 1">
         <path d="m0,0h15v1h2v-1h13v20h-11v-3h-2v-3h2v-1h-2v-4h2v-2h2v-2h-2v1h-2v1h-2v-2h-2v-1h-4v2h2v1h-2v2h2v1h-2v4h2v1h2v3h2v1h2v1h-17zm18,1h-1v1h2v-1zm2,1h-1v1h2v-1zm2,1h-1v2h2v-2zm-14,11h-1v2h2v-2z" opacity="0"/>
         <path d="m15,0h2v1h2v1h2v1h2v2h-2v2h-2v2h-2v4h2v1h-2v3h2v3h-2v-1h-2v-1h-2v-3h-2v-1h-2v2h-2v-2h2v-4h2v-1h-2v-2h2v-1h-2v-2h4v1h2v2h2v-1h2v-1h2v-2h-2v-1h-2v-1h-2z"/>
       </g>

       <!-- running 02 -->
       <g v-else-if="runPhase === 2">
         <path d="m0,0h13v1h2v-1h15v20h-13v-2h-2v-1h-2v2h2v1h-15zm16,1h-1v1h2v-1zm2,1h-1v1h2v-1zm2,1h-1v1h2v-1zm-10,1h-1v2h2v1h-2v2h2v1h-2v3h2v4h2v-2h2v1h4v2h2v-3h-2v-1h-2v-1h2v-1h-2v-3h2v-2h2v-1h2v-2h-2v1h-2v1h-2v1h-2v-2h-2v-1zm-2,9h-1v2h2v-2z" opacity="0"/>
         <path d="m13,0h2v1h2v1h2v1h2v1h2v2h-2v1h-2v2h-2v3h2v1h-2v1h2v1h2v3h-2v-2h-4v-1h-2v2h2v1h2v2h-2v-1h-2v-2h-2v-4h-2v2h-2v-2h2v-3h2v-1h-2v-2h2v-1h-2v-2h4v1h2v2h2v-1h2v-1h2v-1h-2v-1h-2v-1h-2v-1h-2z"/>
       </g>

       <!-- attacking 01 -->
       <g v-else-if="attackPhase === 1">
         <path d="m0,0h21v1h2v-1h7v20h-7v-2h-2v-1h-2v2h2v1h-21zm20,1h-1v1h2v-1zm-6,1h-1v2h2v1h-4v1h2v1h2v2h-4v-3h-2v1h-2v1h2v2h2v1h4v1h-2v1h-2v2h-2v2h-2v1h4v-1h2v-3h2v-1h2v4h2v-2h2v-2h2v-2h-2v-5h-2v-4z" opacity="0"/>
         <path d="m21,0h2v1h-2v1h-2v4h2v5h2v2h-2v2h-2v2h2v1h2v2h-2v-1h-2v-2h-2v-4h-2v1h-2v3h-2v1h-4v-1h2v-2h2v-2h2v-1h2v-1h-4v-1h-2v-2h-2v-1h2v-1h2v-1h4v-1h-2v-2h6v-1h2zm-9,6h-1v3h4v-2h-2v-1z"/>
       </g>

       <!-- attacking 02 -->
       <g v-else-if="attackPhase === 2">
         <path d="m0,0h30v18h-4v-2h-4v-5h-4v-1h-2v-3h-6v2h4v1h-4v2h4v1h-14zm0,14h14v1h-4v3h4v1h2v1h-16zm14,2h4v1h4v2h6v1h-10v-3h-4z" opacity="0"/>
         <path d="m10,7h6v3h2v1h4v5h4v2h4v2h-2v-1h-6v-2h-4v3h-2v-1h-2v-1h-4v-3h4v-1h-14v-1h14v-1h-4v-2h4v-1h-4zm5,9h-1v1h4v-1z"/>
       </g>
  </svg>
</template>

<script>
import { mapGetters } from 'vuex'

function changeDirection (component, newDirection) {
  component.runCounter = 0
  component.runPhase = 0
  component.direction = newDirection
}

function keepRunning (component) {
  component.runCounter++
  if (component.runCounter === 3) {
    component.runPhase = 1
  } else if (component.runCounter === 10) {
    component.runPhase = 2
  } else if (component.runCounter === 17) {
    component.runPhase = 1
    component.runCounter = 2
  }
}

export default {
  name: 'Hero',
  data: function () {
    return {
      attackPhase: 0,
      direction: -1,
      runCounter: 0,
      runPhase: 0,
      runSpeed: 4,
      xpos: 0
    }
  },
  computed: {
    ...mapGetters({
      tick: 'getTick',
      controls: 'getControls'
    }),
    style () {
      return {
        left: this.xpos + 'px',
        transform: 'scaleX(' + this.direction + ')'
      }
    }
  },
  watch: {
    tick: function (tick) {
      if (this.controls.left) {
        this.xpos -= this.runSpeed
        if (this.direction === 1) {
          keepRunning(this)
        } else {
          changeDirection(this, 1)
        }
      }
      if (this.controls.right) {
        this.xpos += this.runSpeed
        if (this.direction === -1) {
          keepRunning(this)
        } else {
          changeDirection(this, -1)
        }
      }
      if (!this.controls.right && !this.controls.left) {
        this.runCounter = 0
        this.runPhase = 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero {
    height: 100px;
    left: 0;
    position: absolute;
  }
</style>
