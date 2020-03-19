<template>
    <div class="navigationContainer">
        <div class="navIconContainer">
            <img src="../assets/graphics/navicon.svg" alt="navicon" class="navIcon">
        </div>
        <div class="bagIconContainer">
            <img src="../assets/graphics/bag.svg" alt="bagicon" class="bagIcon">
            <span class="bagCounter">7</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style lang="scss" scoped>

.navigationContainer {
    height: 100vh;
    width: 100%;
    background: url('../assets/graphics/graphics-header.svg') no-repeat;
    display: flex;
    justify-content: space-between;
    padding: 17px;
}

.navIconContainer {
    background: white;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navIcon {
    height: 20px;
    width: 20px;
}

.bagIconContainer {
    background: black;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bagIcon {
    height: 20px;
    width: 20px;
}

.bagCounter {
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