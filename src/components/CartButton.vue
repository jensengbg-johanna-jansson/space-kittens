<template>
    <button class="cartButtonContainer" @click="sendOrder">Take my money!</button>
</template>

<script>
export default {
    name: 'CartButton',
    methods: {
        sendOrder() {
            this.$router.push('status');
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartButtonContainer {
        background: $brown;
        color: #ffffff;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        border-radius: 5rem;
        padding: 0.8rem 2.5rem;
        font-weight: bold;
        font-family: 'PT Serif', serif;
        justify-self: center;
    }
</style>