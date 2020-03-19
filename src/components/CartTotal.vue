<template>
    <div class="cartTotalContainer">
    </div>
</template>

<script>
export default {
    name: 'CartTotal',
    computed: {
        vuexCartData() {
            return this.$store.state.cart;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>