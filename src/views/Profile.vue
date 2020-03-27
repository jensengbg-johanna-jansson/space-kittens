<template>
    <div class="profileContainer">
        <Header />
        <ProfileUser />
        <ProfileOrders />
    </div>
</template>

<script>
import Header from '../components/Header'
import ProfileUser from '../components/ProfileUser'
import ProfileOrders from '../components/ProfileOrders'

export default {
    name: 'Profile',
    components: {
        Header,
        ProfileUser,
        ProfileOrders
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