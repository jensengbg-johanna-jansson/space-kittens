<template>
    <div class="cartContainer">
        <!-- 
            Use  vuexCartData  when creating loop for the cartItems
            OBS! Until api is connected there is always two objects in the vuexCartData dummy-object

            {{ vuexCartData.id }}           <-- returns id
            {{ vuexCartData.title }}        <-- returns coffee name
            {{ vuexCartData.price}}         <-- returns coffee price/unit
            {{ vuexCartData.quantity}}      <-- returns coffee quantity
        -->
        <div class="cartItemsContainer">
            <h1 class="mainHeading">Din beställning</h1>
            <CartItemList />
            <CartTotal />
            <CartButton />
        </div>
    </div>
</template>

<script>
import CartTotal from '../components/CartTotal'
import CartButton from '../components/CartButton'
import CartItemList from '../components/CartItemList'
export default {
    name: 'Cart',
    components: {
        CartTotal,
        CartButton,
        CartItemList
    },
    computed: {
        vuexCartData() {
            return this.$store.state.cart;
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartContainer {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(#000000, 0.8);
        padding: 5rem 1rem 1rem;

        .cartItemsContainer {
            background: #ffffff;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 3px rgba(#000000, 0.25);
            border-radius: 0.2rem;
            padding: 2rem 1rem;
            display: grid;
            grid-template-rows: min-content 1fr min-content min-content;

            .mainHeading {
                color: $brown;
                font-size: 2rem;
                font-family: 'PT Serif', serif;
                text-align: center;
                margin-bottom: 2rem;
            }
        }
    }
</style>
