<template>
  <div class="homeContainer">
    <transition name="fade">
      <Navigation v-if="vuexShowMenu" class="navOverlay"/>
    </transition>
    <Header />
    <Cart v-if="vuexShowCart" />
    <h1 class="mainHeader">Meny</h1>
    <Menu />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Menu from '../components/Menu'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
export default {
  name: 'Home',
  components: {
    Header,
    Menu,
    Cart,
    Footer,
    Navigation
  },
  // data: () => {
  //   return {
  //     vuexShowMenu: false
  //   };
  // },
  methods: {
    preventScroll() {
      if(this.vuexShowCart){
        document.getElementById('app').style.overflow = 'hidden';
        document.getElementById('app').style.height = '100vh';
      } else {
        document.getElementById('app').style.overflow = 'initial';
        document.getElementById('app').style.height = 'initial';
      } 
    },
    nav() {
      if (this.vuexShowMenu === true) {
        this.vuexShowMenu = false;
      } else {
        this.vuexShowMenu = true;
      }
    }
  },
  mounted() {
    this.preventScroll();
  },
  watch: {
    vuexShowCart: function() {
      this.preventScroll();
    }
  },
  computed: {
    vuexShowCart() {
      return this.$store.state.showCart;
    },
    vuexShowMenu() {
      return this.$store.state.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/transitions.scss";
.homeContainer {
  background: $pink;
  overflow: hidden;
}
.mainHeader {
  font-family: 'PT Serif', serif;
  color: $brown;
  text-align: center;
  font-size: 2.625rem;
  margin-bottom: 1.5rem;
}
</style>
