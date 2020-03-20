<template>
    <button @click="addToCart" class="buttonContainer">
        <img src="../assets/graphics/add.svg" alt="">
    </button>
</template>

<script>
export default {
    name: 'MenuButton',
    props: {
        menuItemData: Object
    },
    methods: {
        cartItemExist() {
            if (this.cartItems.some(item => item.id === this.menuItemData.id)) {
                return true;
            } else {
                return false;
            }            
        },
        addToCart() {
            if(this.cartItemExist()) {
                console.log('This one is in');
                this.$store.commit('increaseQuantity', this.menuItemData);
            } else {
                let cartItem = {
                    id: this.menuItemData.id,
                    title: this.menuItemData.title,
                    price: this.menuItemData.price,
                    quantity: 1
                };
                this.$store.commit('addItemToCart', cartItem);
                console.log('Added item to cart');
            }
            
            console.log(this.cartItems);
        }
    },
    computed: {
        cartItems() {
            return this.$store.state.cart;
        }
    }
}
</script>

<style lang="scss" scoped>
    .buttonContainer {
        border-radius: 50%;
        border: none;
        background: $brown;
        width: 32px;
        height: 32px;
        padding: 0.5rem;
    }
</style>