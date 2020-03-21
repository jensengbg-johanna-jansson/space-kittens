<template>
    <div class="cartContainer">
        <button class="cartIcon" @click="toggle = !toggle"><img src="../assets/graphics/bag.svg" alt="carticon"></button>
        <span class="cartCounter">{{ vuexCartData }}</span>
    </div>
</template>

<script>
export default {
    name: 'HeaderHamburger',
    data() {
        return {
            toggle: false
        }
    },
    beforeDestroy() {
        this.toggle = false;
        this.$store.commit('toggleCart', this.toggle);
    },
    watch: {
        toggle() {
            this.$store.commit('toggleCart', this.toggle);
        }
    },
    computed: {
        vuexCartData() {
            return this.$store.state.numberOfCartItems;
        }
    }
}
</script>

<style lang="scss" scoped>
.cartContainer {
    background: black;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.cartIcon {
    height: 20px;
    width: 20px;
}

.cartCounter {
    background: $orange;
    color: white;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    position: absolute;
    top: 2%;
    right: 4%;
    font-size: 10px;
    padding-top: 1%;
      font-family: 'PT Serif';

}
</style>