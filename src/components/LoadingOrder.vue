<template>
    <div class="loadingOrderContainer">
        <img src="../assets/graphics/loader.png" alt="loading">
    </div>
</template>

<script>
export default {
    name: 'LoadingOrder'
}
</script>

<style lang="scss" scoped>
    .loadingOrderContainer {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $brown;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }
</style>