<template>
    <div class="cartItemListContainer">
        <transition-group name="cartList" tag="div">
            <CartItem v-for="cartItem in vuexCartData" :key="cartItem.id" :cartCartItemData="cartItem" class="cartItem" />
        </transition-group>
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
        position: relative;
    }
    .cartItem {
        transition: all 1s;
    }
    .cartList-leave-to {
        opacity: 0;
        transform: translateX(-30px);
    }
    .cartList-leave-active {
        position: absolute;
        margin-right: -30px;
    }
</style>