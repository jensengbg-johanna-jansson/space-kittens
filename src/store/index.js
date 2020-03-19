import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // Dummy-cart
      // Remove all objects inside array when adding the AddToCart function
    cart: [
      {
        "id":2,
        "title":"Caffè Doppio",
        "price":49,
        "quantity":1
      },
      {
        "id":4,
        "title":"Latte Macchiato",
        "price":49,
        "quantity":3
      }
    ],

        // Dummy-variable
        // Change number to '0' when adding the real cartItem counter
    numberOfCartItems: 3,

      // Dummy-object
      // Change values to '0' and '' when adding the real order fetch function
    order: {
      eta: 13,
      orderNr: 'SW921389B',
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
