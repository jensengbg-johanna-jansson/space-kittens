<template>
    <div class="cartItemContainer">
        <!-- 
            Use  cartCartItemData  to add data to the cartItem
        -->
        <h2 class="coffeeName">{{ cartCartItemData.title }}</h2>
        <span class="divider"></span>
        <p class="coffeePrice">{{ cartCartItemData.price }} kr</p>
        <CartQuantityInput class="coffeeQuantity" :cartItemData="cartCartItemData" />
    </div>
</template>

<script>
import CartQuantityInput from '../components/CartQuantityInput'
export default {
    name: 'CartItem',
    components: {
        CartQuantityInput
    },
    props: {
        cartCartItemData: Object
    }
}
</script>

<style lang="scss" scoped>
    .cartItemContainer {
        width: 100%;
        display: grid;
        grid-template-columns: max-content 1fr max-content;
        grid-template-areas: 
            "coffeeName divider quantity"
            "coffeePrice . quantity";
        color: $brown;
        text-align: left;
        margin-bottom: 1.5rem;

        .coffeeName {
            grid-area: coffeeName;
            font-size: 1.25rem;
            font-family: 'PT Serif', serif;
            font-weight: bold;
        }
        .divider {
            grid-area: divider;
            width: 100%;
            display: block;
            border-bottom: 2px dotted rgba(#000000, 0.4);
        }
        .coffeePrice {
            grid-area: coffeePrice;
            font-size: 0.75rem;
            font-family: 'Work Sans', sans-serif;
            margin-top: 0.3rem;
        }
        .coffeeQuantity {
            grid-area: quantity;
        }
    }
</style>