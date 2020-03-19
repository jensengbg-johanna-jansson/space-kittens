<template>
    <div class="cartContainer">
        <img src="../assets/graphics/bag.svg" alt="carticon" class="cartIcon">
        <span class="cartCounter">7</span>
    </div>
</template>

<script>
export default {
    name: 'HeaderCart'
}
</script>

<style lang="scss" scoped>
.cartContainer {
    background: black;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cartIcon {
    height: 20px;
    width: 20px;
}

.cartCounter {
    background: $orange;
    color: white;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    position: absolute;
    top: 2%;
    right: 4%;
    font-size: 10px;
    padding-top: 1%;
}
</style>