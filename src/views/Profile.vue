<template>
    <div class="profileContainer">
        <transition name="fade">
            <Navigation v-if="vuexShowMenu" class="navOverlay"/>
        </transition>
        <Header />
        <NewProfile v-if="vuexUuid === null" />
        <div v-else class="profile">
            <ProfileUser />
            <ProfileOrders />
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import NewProfile from '../components/NewProfile'
import ProfileUser from '../components/ProfileUser'
import ProfileOrders from '../components/ProfileOrders'

export default {
    name: 'Profile',
    components: {
        Navigation,
        Header,
        NewProfile,
        ProfileUser,
        ProfileOrders
    },
    computed: {
        vuexUuid() {
            return this.$store.state.uuid;
        },
        vuexShowMenu() {
            return this.$store.state.isOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../scss/transitions.scss";
    .profileContainer {
        background: $brown;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>