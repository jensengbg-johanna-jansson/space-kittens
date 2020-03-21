<template>
    <div class="cartItemListContainer">
        <CartItem v-for="(cartItem, index) in vuexCartData" :key="index" :cartCartItemData="cartItem" />
    </div>
</template>

<script>
import CartItem from '../components/CartItem'
export default {
    name: 'CartItemList',
    components: {
        CartItem
    },
    computed: {
        vuexCartData() {
            return this.$store.state.cart;
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartItemListContainer {
        height: 100%;
        overflow: scroll;
    }
</style>