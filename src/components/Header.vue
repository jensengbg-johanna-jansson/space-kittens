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
.headerContainer {
    height: 8rem;
    width: 100%;
    background: url('../assets/graphics/graphics-header.svg') no-repeat;
    display: flex;
    justify-content: space-between;
    padding: 17px;
}
</style>
