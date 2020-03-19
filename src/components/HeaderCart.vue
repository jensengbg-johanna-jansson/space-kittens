<template>
    <div class="cartContainer">
        <img src="../assets/graphics/bag.svg" alt="carticon" class="cartIcon">
        <span class="cartCounter">{{ vuexCartData }}</span>
    </div>
</template>

<script>
export default {
    name: 'HeaderHamburger',
    computed: {
        vuexCartData() {
            return this.$store.state.numberOfCartItems;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>