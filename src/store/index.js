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
    numberOfCartItems: 2,

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
    increaseQuantity (state, cartItem) {
        const item = state.cart.find(item => item.id === cartItem.id);
        item.quantity++;
        state.numberOfCartItems++;
    },
    changeQuantity (state, payload) {
      const item = state.cart.find(item => item.id === payload.cartItemId);
      if(payload.action === 'add') {
        item.quantity++;
      } else if(payload.action === 'subtract') {
        if(item.quantity != 0) {
          item.quantity--;
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
    async getMenu(ctx) {
      const url = "http://localhost:5000/api/beans";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("setMenu", data["menu"]);
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    async sendOrder(ctx) {
      const url = "http://localhost:5000/api/beans";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("orderStatus", data);
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  modules: {
  }
})
