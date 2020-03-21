<template>
    <div class="cartContainer">
        <button class="cartIcon" @click="toggle = !toggle"><img src="../assets/graphics/bag.svg" alt="carticon"></button>
        <span class="cartCounter" :class="{ popAnimation: addAnimation }">{{ vuexCartData }}</span>
    </div>
</template>

<script>
export default {
    name: 'HeaderCart',
    data() {
        return {
            toggle: false,
            addAnimation: false
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
    },
    watch: {
        vuexCartData() {
            this.addAnimation = true;
            setTimeout(()=>{ this.addAnimation = false; }, 1000);
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
        font-family: 'PT Serif';
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .popAnimation {
        animation: popAnimation 0.5s;
    }

    @keyframes popAnimation {
        0% { transform: scale(1,1) }
        65% { transform: scale(0.4,1.4) }
        85% { transform: scale(1.2,0.8) }
        100% { transform: scale(1,1) }
    }
</style>