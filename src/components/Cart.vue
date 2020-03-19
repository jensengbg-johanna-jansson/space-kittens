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
    </div>
</template>

<script>
export default {
    name: 'Cart',
    computed: {
        vuexCartData() {
            return this.$store.state.cart;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
