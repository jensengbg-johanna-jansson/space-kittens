<template>
  <div class="homeContainer">
    <Header />
    <h1 class="mainHeader">Meny</h1>
    <Menu />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Menu,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.homeContainer {
  background: $pink;

  .mainHeader {
    font-family: 'PT Serif', serif;
    color: $brown;
    text-align: center;
    font-size: 2.625rem;
    margin-bottom: 1.5rem;
  }
}
</style>
