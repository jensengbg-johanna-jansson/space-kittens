<template>
    <div class="navigationContainer">
        <div class="header">
            <button @click="closeNav" class="nav-btn">
                <img src="../assets/graphics/close.svg" alt />
            </button>
        </div>
        <p @click="menu" class="menuItem">Meny</p>
        <span class="line"></span>
        <p @click="about" class="menuItem">Vårt Kaffe</p>
        <span class="line"></span>
        <!-- <p @click="orderStatus" class="menuItem">Orderstatus</p> -->
        <span class="line"></span>
        <!-- <p @click="myProfile" class="menuItem">Min profil</p> -->
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    methods: {
        closeNav() {
            this.$emit('closeNav');
        },
        menu() {
            if (this.$route.path !== "/home") {
                this.$router.push("/home");
            } else {
                this.closeNav();
            }
        },
        about() {
            if (this.$route.path !== "/about") {
                this.$router.push("/about");
            } else {
                this.closeNav();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.navigationContainer {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    z-index: 2;
}

.menuHamburger {
    position: absolute;
    top: 0;
    left: 0;
}

.menuItem {
    text-decoration: none;
    color: white;
    font-family: 'PT Serif';
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    margin: 1.5rem;
}

.line {
    height: 1px;
    width: 3rem;
    background: grey;
}

.header {
    display: flex;
    align-self: flex-start;
}

.nav-btn {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 100%;
    border: none;
    cursor: pointer;
}
</style>