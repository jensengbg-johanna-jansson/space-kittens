<template>
    <div class="hamburgerContainer">
        <img src="../assets/graphics/navicon.svg" alt="navicon" class="hamburgerIcon">
    </div>
</template>

<script>
export default {
    name: 'HeaderHamburger'
}
</script>

<style lang="scss" scoped>
.hamburgerContainer {
    background: white;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hamburgerIcon {
    height: 20px;
    width: 20px;
}
</style>