<template>
    <div class="CartItemContainer">
        <!-- 
            Use  cartCartItemData  to add data to the cartItem
        -->
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cartCartItemData: Object
    },
    /* 
        // Datan som skickats med v-for i Cart.vue
        // Vid sammanfogning med övriga componenter använd 'props' nedan istället för dummy-objektet i 'data()' 
    props: {
        cartCartItemData: Object
    },
    */
    data() {
        return {
                // Dummy-objekt
                // Ta bort detta objekt när API:et är kopplat
            cartCartItemData: {
                "id":2,
                "title":"Caffè Doppio",
                "price":49,
                "quantity":1
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>