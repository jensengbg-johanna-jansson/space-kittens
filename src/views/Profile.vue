<template>
    <div class="profileContainer">
        <Header />
        <NewProfile v-if="vuexUuid === null" />
        <div v-else class="profile">
            <ProfileUser />
            <ProfileOrders />
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import NewProfile from '../components/NewProfile'
import ProfileUser from '../components/ProfileUser'
import ProfileOrders from '../components/ProfileOrders'

export default {
    name: 'Profile',
    components: {
        Header,
        NewProfile,
        ProfileUser,
        ProfileOrders
    },
    computed: {
        vuexUuid() {
            return this.$store.state.uuid;
        }
    }
}
</script>

<style lang="scss" scoped>
    .profileContainer {
        background: $brown;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>