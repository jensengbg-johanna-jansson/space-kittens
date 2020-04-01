<template>
<transition name="fade">
  <div
  class="introContainer"
  @click="goNext">
      <img src="../assets/graphics/intro-graphic-left.svg" alt="airbeanleft" class="logo-left">
      <img src="../assets/graphics/airbean-landing.svg" alt="airbeanlogo" class="logo">
      <img src="../assets/graphics/intro-graphic-right.svg" alt="airbeanright" class="logo-right">
  </div>
</transition>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
      goNext() {
          this.$router.push('/home')
      }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Rufina&display=swap');
@import "../scss/transitions.scss";
.introContainer {
    height: 100vh;
    width: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    background: $darkgreen;
    overflow: hidden;
}

.logo {
    position: relative;
    right: 0%;
    top: 32%;
}

.logo-right {
    position: absolute;
    right: 0;
    top: 0;
}

.logo-left {
    position: absolute;
    left: 0;
    top: 0;
}
</style>
