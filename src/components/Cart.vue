<template>
    <div class="cartContainer">
        <LoadingOrder v-if="vuexLoadingOrder === true" />
        <NewProfile v-if="vuexHasOrderData" />
        <div v-else class="cartItemsContainer">
            <h1 class="mainHeading">Din beställning</h1>
            <div class="noItems" v-if="vuexNumberOfCartItemsData === 0">
                <p>Oh no there's no coffee!</p>
                <p>Quick add some</p>
            </div>
            <CartItemList v-else />
            <CartTotal />
            <CartButton />
        </div>
    </div>
</template>

<script>
import LoadingOrder from '../components/LoadingOrder'
import NewProfile from '../components/NewProfile'
import CartTotal from '../components/CartTotal'
import CartButton from '../components/CartButton'
import CartItemList from '../components/CartItemList'
export default {
    name: 'Cart',
    components: {
        LoadingOrder,
        NewProfile,
        CartTotal,
        CartButton,
        CartItemList
    },
    watch: {
        vuexLoadingOrder() {}
    },
    computed: {
        vuexNumberOfCartItemsData() {
            return this.$store.state.numberOfCartItems;
        },
        vuexLoadingOrder() {
            return this.$store.state.loadingOrder;
        },
        vuexHasOrderData() {
            return this.$store.state.hasOrder;
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
        padding: 4.5rem 1rem 1rem;

        .cartItemsContainer {
            background: #ffffff;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 3px rgba(#000000, 0.25);
            border-radius: 0.2rem;
            padding: 2rem 1rem;
            display: grid;
            grid-template-rows: min-content 1fr min-content min-content;
            position: relative;

            .mainHeading {
                color: $brown;
                font-size: 2rem;
                font-family: 'PT Serif', serif;
                text-align: center;
                margin-bottom: 2rem;
            }
            .noItems {
                p {
                    font-family: 'Work Sans', sans-serif;
                    font-size: 1.2rem;
                }
            }
        }
        .cartItemsContainer:after {
            content: '';
            position: absolute;
            top: 0;
            right: 1rem;
            z-index: 2;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom-color: #ffffff;
            border-top: 0;
            margin-left: -10px;
            margin-top: -10px;
        }
    }
</style>
