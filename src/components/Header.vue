<template>
    <div class="headerContainer">
        <HeaderHamburger />
        <HeaderCart />
    </div>
</template>

<script>
import HeaderHamburger from '../components/HeaderHamburger'
import HeaderCart from '../components/HeaderCart'
export default {
    name: 'Header',
    components: {
        HeaderHamburger,
        HeaderCart
    }
}
</script>

<style lang="scss" scoped>

</style>
