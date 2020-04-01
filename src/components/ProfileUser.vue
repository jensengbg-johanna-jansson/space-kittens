<template>
    <div class="userContainer">
        <img src="../assets/graphics/profile.svg" class="profileImage" alt="profile pic">
        <p class="name">{{ vuexUserData.name }}</p>
        <p class="email">{{ vuexUserData.email }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProfileUser',
    mounted() {
        this.$store.dispatch('getUser');
    },
    computed: {
        vuexUserData() {
            return this.$store.state.user;
        }
    }
}
</script>

<style lang="scss" scoped>
    .userContainer {
        margin-bottom: 2rem;
        
        .profileImage {
            margin-bottom: 0.5rem;
        }
        .name {
            color: #ffffff;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: 'PT Serif', serif;
            letter-spacing: 1px;
            margin-bottom: 0.4rem;
        }
        .email {
            color: rgba(#ffffff, 0.8);
            font-size: 0.875rem;
            font-family: 'Work Sans', sans-serif;
        }
    }
</style>