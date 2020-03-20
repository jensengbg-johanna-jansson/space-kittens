<template>
    <button @click="AddToCart" class="buttonContainer">
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
        AddToCart() {
            let cartItem = {
                id: this.menuItemData.id,
                title: this.menuItemData.title,
                price: this.menuItemData.price,
                quantity: 1
            };
            this.$store.commit('AddItemToCart', cartItem);
            console.log(cartItem);
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