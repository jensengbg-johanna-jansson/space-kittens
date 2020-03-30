<template>
    <div class="orderItemContainer">
        <h3 class="orderNr">#{{ profileOrdersItemData.orderNr }}</h3>
        <p class="date">{{ orderTimeStamp }}</p>
        <p class="sumHeading text">total ordersumma</p>
        <p class="orderTotal text">{{ profileOrdersItemData.totalValue }} kr</p>
    </div>
</template>

<script>
export default {
    name: 'ProfileOrdersItem',
    props: {
        profileOrdersItemData: Object
    },
    mounted() {
        console.log(this.profileOrdersItemData);
    },
    computed: {
        orderTimeStamp() {
            const dividedTimeStamp = this.profileOrdersItemData.timeStamp.split(" ");
            return dividedTimeStamp[0];
        }
    }
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