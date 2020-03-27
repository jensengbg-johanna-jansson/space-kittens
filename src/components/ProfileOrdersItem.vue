<template>
    <div class="orderItemContainer">
        <h3 class="orderNr">#asd798uokj3qh</h3>
        <p class="date">2020/09/21</p>
        <p class="sumHeading text">total ordersumma</p>
        <p class="orderTotal text">234 kr</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .orderItemContainer {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        color: rgba(#ffffff, 0.7);
        text-align: left;
        font-family: 'Work Sans', sans-serif;
        border-bottom: 1px solid rgba(#ffffff, 0.08);

        .orderNr {
            font-size: 0.875rem;
        }
        .date, .orderTotal {
            text-align: right;
        }
        .date {
            font-size: 0.875rem;
        }
        .text {
            font-size: 0.75rem;
        }
        h3, p {
            margin-bottom: 0.5rem;
        }
    }
</style>