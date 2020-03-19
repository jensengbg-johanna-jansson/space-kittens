<template>
    <div class="buttonContainer">
        <img src="../assets/graphics/add.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'MenuButton'
}
</script>

<style lang="scss" scoped>
    .buttonContainer {
        border-radius: 50%;
        background: $brown;
        width: 32px;
        height: 32px;
        padding: 0.5rem;
    }
</style>