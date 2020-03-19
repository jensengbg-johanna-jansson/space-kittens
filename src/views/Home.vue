<template>
  <div class="homeContainer">
    <Header />
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'Home',
  components: {
    Header
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
