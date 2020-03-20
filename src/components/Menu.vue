<template>
    <div class="menuContainer">
        <MenuItem
                v-for="(menuItem, index) in vuexMenuData"
                :key="index"
                :menuMenuItemData="menuItem"
         />
    </div>
</template>

<script>
import MenuItem from '../components/MenuItem'
export default {
    name: 'Menu',
    components: {
        MenuItem
    },
    computed: {
        vuexMenuData() {
            return this.$store.state.menu;
        }
    }
}
</script>

<style lang="scss" scoped>
    .menuContainer {
        width: 100%;
        padding: 0 2rem 2rem;
    }
</style>
