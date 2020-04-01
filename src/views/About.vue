<template>
  <div class="aboutContainer">
    <transition name="fade">
      <Navigation v-if="vuexShowMenu" @closeNav="nav" class="navOverlay"/>
    </transition>
    <Header />
    <div class="aboutText">
      <h1 class="aboutHeader">Vårt kaffe</h1>
      <h2 class="aboutSubHeader">Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</h2>
      <p class="aboutSubText">Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
      <p class="aboutSubText">Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
    </div>  
    <div class="aboutOwner">
      <img src="../assets/graphics/eva-cortado.jpg" alt="eva" class="eva">
      <h1 class="aboutName">Eva Cortado</h1>
      <p class="aboutTitle">VD & Grundare</p>
    </div> 
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Header from '../components/Header'
export default {
  name: 'About',
  components: {
    Header,
    Navigation
  },
  // data: () => {
  //   return {
  //     vuexShowMenu: false
  //   };
  // },
  computed: {
    vuexShowMenu() {
      return this.$store.state.isOpen;
    }
  },
  methods: {
    nav() {
      if (this.vuexShowMenu === true) {
        this.vuexShowMenu = false;
      } else {
        this.vuexShowMenu = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.aboutContainer {
  background: $pink;
  height: auto;
  width: 100%;
}

.aboutText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0 7%;
}

.aboutSubText {
  font-family: 'Work Sans';
  font-size: 13px;
  line-height: 160%;
  margin-bottom: 1.5rem;
}

.aboutHeader {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 120%;
  margin-bottom: 1.5rem;
}

.aboutSubHeader {
  font-family: 'Work Sans';
  font-size: 15px;
  line-height: 160%;
  margin-bottom: 1.5rem;
}

.aboutOwner {
  justify-content: center;
  align-items: center;
}

.aboutName {
  font-family: 'PT Serif';
}

.aboutTitle {
  font-family: 'Work Sans';
}

.eva {
  border-radius: 50%;
}

.navOverlay {
  position: absolute;
  z-index: 100;
}
</style>