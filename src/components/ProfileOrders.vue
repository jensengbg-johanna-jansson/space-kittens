<template>
    <div class="ordersContainer">
        <h2 class="heading">Orderhistorik</h2>
        <div class="pastOrdersContainer">
            <ProfileOrdersItem v-for="(order, index) in vuexOrderHistoryData" :key="index" :profileOrdersItemData="order" />
            <div class="ordersTotal">
                <p>Total spenderat</p>
                <p>{{ orderTotal }} kr</p>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileOrdersItem from '../components/ProfileOrdersItem'
export default {
    name: 'ProfileOrders',
    components: {
        ProfileOrdersItem
    },
    created() {
        this.$store.dispatch("getOrderHistory");
    },
    computed: {
        orderTotal() {
            let totalOrderValue = 0;
            for(let i = 0; i < this.vuexOrderHistoryData.length; i++) {
                totalOrderValue += this.vuexOrderHistoryData[i].totalValue;
            }
            return totalOrderValue;
        },
        vuexOrderHistoryData() {
            return this.$store.state.orderHistory
        }
    }
}
</script>

<style lang="scss" scoped>
    .ordersContainer {
        width: 100%;
        padding: 2rem;

        .heading {
            color: #ffffff;
            text-align: left;
            margin-bottom: 1rem;
            font-family: 'PT Serif', serif;
            font-size: 1.375rem;
            letter-spacing: 1px;
        }

        .ordersTotal {
            display: flex;
            justify-content: space-between;
            color: rgba(#ffffff, 0.8);
            border-top: 1px solid rgba(#ffffff, 0.6);
            font-family: 'Work Sans', sans-serif;
            font-weight: bold;
            font-size: 0.875rem;
            padding-top: 0.8rem;
        }
    }
</style>