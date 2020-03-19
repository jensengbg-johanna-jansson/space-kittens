<template>
    <div class="menuItemContainer">
        <MenuButton class="menuButton" :menuItemId="menuMenuItemData.id" />
        <h2 class="heading coffeeName">{{ menuMenuItemData.title }}</h2>
        <span class="divider"></span>
        <p class="coffeeDescription">{{ menuMenuItemData.desc }}</p>
        <p class="heading coffeePrice">{{ menuMenuItemData.price }} kr</p>
    </div>
</template>

<script>
import MenuButton from '../components/MenuButton'
export default {
    name: 'MenuItem',
    components: {
        MenuButton
    },
    /* 
        // Datan som skickats med v-for i Menu.vue
        // Vid sammanfogning med övriga componenter ta bort dessa kommentarer och använd
        // 'props' nedan istället för dummy-objektet i 'data()' 
    props: {
        menuMenuItemData: Object
    },
    */
    data() {
        return {
                // Dummy-objekt för att testa datakopplingen mellan DOMen och vue
                // Ta bort detta objekt när API:et är kopplat
            menuMenuItemData: {
                "id":1,
                "title":"Bryggkaffe",
                "desc":"Bryggd på månadens bönor.",
                "price":39
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .menuItemContainer {
        width: 100%;
        display: grid;
        grid-template-columns: min-content min-content 1fr max-content;
        grid-template-areas: 
            "menuButton coffeeName divider coffeePrice"
            "menuButton coffeeDescription coffeeDescription .";
        color: $brown;
        text-align: left;

        .menuButton {
            grid-area: menuButton;
            margin-right: 1rem;
            align-self: center;
        }
        .coffeeName {
            grid-area: coffeeName;
        }
        .divider {
            grid-area: divider;
            width: 100%;
            display: block;
            border-bottom: 2px dotted rgba($brown, 0.4);
        }
        .heading {
            font-size: 1.4375rem;
            font-family: 'PT Serif', serif;
            font-weight: bold;
        }
        .coffeeDescription {
            grid-area: coffeeDescription;
            font-size: 0.75rem;
            font-family: 'Work Sans', sans-serif;
            margin-top: 0.3rem;
        }
        .coffeePrice {
            grid-area: coffeePrice;
        }
    }
</style>