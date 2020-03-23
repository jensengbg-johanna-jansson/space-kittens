import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // Dummy-menu
      // Remove all objects inside array when adding the API fetch function
    menu: [
      {"id":1,"title":"Bryggkaffe","desc":"Bryggd på månadens bönor.","price":39},
      {
        "id":2,
        "title":"Caffè Doppio",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {"id":3,"title":"Cappuccino","desc":"Bryggd på månadens bönor.","price":49},
      {
        "id":4,
        "title":"Latte Macchiato",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {
        "id":5,
        "title":"Kaffe Latte",
        "desc":"Bryggd på månadens bönor.",
        "price":54
      },
      {"id":6,"title":"Cortado","desc":"Bryggd på månadens bönor.","price":39}
    ],
    cart: [],

    numberOfCartItems: 0,

      // Dummy-object
      // Change values to '0' and '' when adding the real order fetch function
    order: {
      eta: 13,
      orderNr: 'SW921389B',
    },
    showCart: false
  },
  mutations: {
    addItemToCart (state, menuItem) {
      state.cart.push(menuItem);
      state.numberOfCartItems++;
    },
    removeItemFromCart (state, cartItemId) {
      const cartItemArrayIndex = state.cart.map(function(cartItem) { return cartItem.id; }).indexOf(cartItemId);
      state.cart.splice(cartItemArrayIndex, 1);
    },
    changeQuantity (state, payload) {
      const item = state.cart.find(item => item.id === payload.cartItemId);
      if(payload.action === 'add') {
        item.quantity++;
        state.numberOfCartItems++;
      } else if(payload.action === 'subtract') {
        if(item.quantity != 0) {
          item.quantity--;
          state.numberOfCartItems--;
        }
      } else {
        console.log('Error: Could not change quantity');
      }
    },
    toggleCart (state, toggle) {
      state.showCart = toggle;
    }
  },
  actions: {
  },
  modules: {
  }
})
