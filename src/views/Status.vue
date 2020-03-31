<template>
  <transition
    appear
    appear-class="custom-appear-class"
    appear-to-class="custom-appear-to-class" (2.1.8+)
    appear-active-class="custom-appear-active-class"
  >
    <div class="statusContainer">
      <p class="ordernumber">Orderummer <span class="ordernumberNumber">{{ vuexOrderData.orderNr }}</span></p>
      <div class="imageContainer">
        <img src="../assets/graphics/drone.svg" alt="Drone" class="droneImage">
      </div>
      <h1 class="heading">Din beställning är på väg</h1>
      <p class="eta"><span class="etaTime">{{ vuexOrderData.eta }}</span> minuter</p>
      <router-link to="/home" class="button">Ok, cool!</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Status',
  computed: {
    vuexOrderData() {
      return this.$store.state.order;
    }
  }
}
</script>

<style lang="scss" scoped>
  .statusContainer {
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: $orange;
    color: #ffffff;
    letter-spacing: 1px;

      p {
        font-family: 'Work Sans', sans-serif;
      }

      .ordernumber {
        color: rgba(#ffffff, 0.7);

        .ordernumberNumber {
          font-weight: bolder;
        }
      }
      .imageContainer {
        position: relative;
        width: 220px;
        height: 120px;

          .droneImage {
            position: absolute;
            right: 0;
            animation-name: hooverAnimation;
            animation-duration: 1s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }
      }
      .heading {
        font-size: 2.25rem;
        text-align: center;
        font-family: 'PT Serif', serif;
      }
      .eta {
        font-size: 1.375rem;

        &Time {
          font-weight: bold;
        }
      }
      .button {
        background: #ffffff;
        color: $brown;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        border-radius: 5rem;
        padding: 0.8rem 2.5rem;
        font-weight: bold;
        font-family: 'PT Serif', serif;
      }
  }

  /* Transition vid rendering av componenten */
  .custom-appear-class {
    opacity: 0;  
  }
  .custom-appear-to-class {
    opacity: 1;
  }
  .custom-appear-active-class {
    transition: all 1s ease;
  }

  @keyframes hooverAnimation {
    0% {top: 0}
    100% {top: -1rem}
  }
</style>
