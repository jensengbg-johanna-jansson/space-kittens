<template>
    <div class="cartButtonContainer">
        <transition name="msgSlideFade">
            <span class="emptyCartMsg" v-if="showMsg">Din kundvagn är tom</span>
        </transition>
        <button class="cartButton" @click="addOrder">Take my money!</button>
    </div>
</template>

<script>
export default {
    name: 'CartButton',
    data() {
        return {
            showMsg: false
        }
    },
    methods: {
        sendOrder() {
            this.$store.commit('showLoader', true);
            
            this.$store.dispatch('sendOrder').then(() => {
                this.$router.push('status');
            }).catch(err => {
                console.log(err)
            })
        },
        addOrder() {
            if(this.vuexNumberOfCartItemsData === 0) {
                this.showMsg = true;
                setTimeout(()=>{ this.showMsg = false; }, 2000);
            } else {
                this.showMsg = false;
                    
                if(this.vuexUuid != null) {
                    this.sendOrder();
                } else {
                    this.$store.commit('setHasOrder', true);
                    console.log('Uuid missing');
                }
            }
        },
        resolve() {
            console.log('Success');
        }
    },
    computed: {
        vuexNumberOfCartItemsData() {
            return this.$store.state.numberOfCartItems;
        },
        vuexLoadingOrderData() {
            return this.$store.state.loadingOrder;
        },
        vuexUuid() {
            return this.$store.state.uuid;
        },
        vuexOrderData() {
            return this.$store.state.order;
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartButtonContainer {
        position: relative;
    }
    .cartButton {
        background: $brown;
        color: #ffffff;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
        border-radius: 5rem;
        border: none;
        padding: 0.8rem 2.5rem;
        font-weight: bold;
        font-family: 'PT Serif', serif;
        justify-self: center;
    }
    .emptyCartMsg {
        font-family: 'PT Serif', serif;
        background: $orange;
        color: $pink;
        padding: 0.5rem 1rem;
        position: absolute;
        top: -3rem;
        border-radius: 0.5rem;
    }
    .msgSlideFade-enter-active {
        transition: all .5s ease;
    }
    .msgSlideFade-leave-active {
        transition: all 1s ease;
    }
    .msgSlideFade-enter, .msgSlideFade-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }
    
</style>