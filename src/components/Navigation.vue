<template>
    <div class="navigationContainer">
        <router-link to="/home" class="menuItem">Meny</router-link>
        <span class="line"></span>
        <router-link to="/about" class="menuItem">Vårt Kaffe</router-link>
        <span class="line"></span>
        <router-link to="/status" class="menuItem">Orderstatus</router-link>
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
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    z-index: 2;
}

.menuHamburger {
    position: absolute;
    top: 0;
    left: 0;
}

.menuItem {
    text-decoration: none;
    color: white;
    font-family: 'PT Serif';
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    margin: 1.5rem;
}

.line {
    height: 1px;
    width: 3rem;
    background: grey;
}
</style>