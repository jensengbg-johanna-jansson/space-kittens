<template>
  <div class="homeContainer">
    <Navigation />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.homeContainer {
  background: $pink;
  height: 100vh;
}
.menuHeader {
  font-family: 'PT Serif';
}
</style>
