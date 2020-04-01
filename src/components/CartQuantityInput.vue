<template>
    <div class="cartQuantityInput">
        <button class="quantityButton" @click="changeQuantity('add')"><img src="../assets/graphics/arrow-up.svg" alt="quantity up"></button>
        <p class="quantity">{{ cartItemData.quantity }}</p>
        <button class="quantityButton" @click="changeQuantity('subtract')"><img src="../assets/graphics/arrow-down.svg" alt="quantity down"></button>
    </div>
</template>

<script>
export default {
    name: 'CartQuantityInput',
    props: {
        cartItemData: Object
    },
    methods: {
        changeQuantity(action) {
            let payload = {
                cartItemId: this.cartItemData.id,
                action: action
            }
            this.$store.commit('changeQuantity', payload);
        }
    },
    watch: {
        cartItemData: {
            deep: true,
            handler() {
                if(this.cartItemData.quantity === 0) {
                    this.$store.commit('removeItemFromCart', this.cartItemData.id);
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartQuantityInput {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-left: 1rem;

        .quantity {
            font-size: 0.875rem;
            font-family: 'Work Sans', sans-serif;
            color: $brown;
        }
    }
</style>