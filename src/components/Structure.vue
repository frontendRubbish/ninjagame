<template>
  <div :style="position" class="ground"></div>
</template>

<script>
export default {
  name: 'Structure',
  props: ['position']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ground {
    background-color: black;
    position: absolute;
  }
</style>
