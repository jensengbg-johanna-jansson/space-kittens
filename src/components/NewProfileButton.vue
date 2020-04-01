<template>
    <div class="newProfileButtonContainer">
        <button class="newProfileButton">Brew me a cup!</button>
    </div>
</template>

<script>
export default {
    name: 'NewProfileButton',
}
</script>

<style lang="scss" scoped>
    .newProfileButtonContainer {
        position: relative;
    }
    .newProfileButton {
        background: $brown;
        color: #ffffff;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        border-radius: 5rem;
        border: none;
        padding: 0.8rem 2.5rem;
        font-weight: bold;
        font-family: 'PT Serif', serif;
        justify-self: center;
    }    
</style>