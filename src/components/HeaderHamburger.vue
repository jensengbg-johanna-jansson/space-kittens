<template>
    <div class="hamburgerContainer" @click="handleClick">
        <img src="../assets/graphics/navicon.svg" alt="navicon" class="hamburgerIcon">
    </div>
</template>

<script>
export default {
    name: 'HeaderHamburger',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        handleClick() {
            this.isOpen = !this.isOpen 
        }
    },
    watch: {
        isOpen() {
            this.$store.commit('toggleMenu', this.isOpen)
        }
    },
    destroyed() {
        this.$store.commit('toggleMenu', false)
    }
}
</script>

<style lang="scss" scoped>
.hamburgerContainer {
    background: white;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.hamburgerIcon {
    height: 20px;
    width: 20px;
}
</style>