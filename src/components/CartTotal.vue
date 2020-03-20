<template>
    <div class="cartTotalContainer">
        <h2 class="total heading">Total</h2>
        <span class="divider"></span>
        <p class="desc">inkl moms + drönarleverans</p>
        <p class="price heading">343 kr</p>
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
    .cartTotalContainer {
        width: 100%;
        display: grid;
        grid-template-columns: min-content 1fr max-content;
        grid-template-areas: 
            "total divider price"
            "desc desc .";
        color: $brown;
        text-align: left;
        margin-bottom: 2rem;
        
        .heading {
            font-size: 1.4375rem;
            font-weight: bold;
            font-family: 'PT Serif', serif;
        }
        .total {
            grid-area: total;
        }
        .divider {
            grid-area: divider;
            border-bottom: 2px dotted rgba($brown, 0.4);
        }
        .desc {
            grid-area: desc;
            font-size: 0.75rem;
            margin-top: 0.5rem;
            font-family: 'Work Sans', sans-serif;
        }
        .price {
            grid-area: price;
        }
    }
</style>