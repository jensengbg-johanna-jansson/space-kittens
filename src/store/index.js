import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    user: '',

    numberOfCartItems: 0,

    order: '',
    showCart: false,
    isOpen: false,
    loadingOrder: false
  },
  mutations: {
    setMenu (state, menuData) {
      for(let i  = 0; i < menuData.length; i++) {
        state.menu.push(menuData[i]);
      }
    },
    setUser (state, userData) {
      state.user = userData;
    },
    setOrder (state, orderData) {
      state.order = orderData;
    },
    addItemToCart (state, menuItem) {
      state.cart.push(menuItem);
      state.numberOfCartItems++;
    },
    toggleMenu (state, toggle) {
      state.isOpen = toggle
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
    },
    showLoader (state, loading) {
      state.loadingOrder = loading;
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
          if(data) {
            ctx.commit("setMenu", data.menu);
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
            ctx.commit("setOrder", data);
            console.log(data);
            ctx.commit("showLoader", false);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    async getUser(ctx) {
      //const uuid = '';
      const url = "http://localhost:5000/api/beans/user/12345";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("setUser", data);
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
