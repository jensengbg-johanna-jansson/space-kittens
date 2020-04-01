import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    uuid: null,
    user: '',
    orderHistory: '',

    numberOfCartItems: 0,

    order: '',
    showCart: false,
    isOpen: false,
    loadingOrder: false,
    hasOrder: false
  },
  mutations: {
    setMenu (state, menuData) {
      for(let i  = 0; i < menuData.length; i++) {
        state.menu.push(menuData[i]);
      }
    },
    setUuid (state, localStorageUuid) {     
      state.uuid = localStorageUuid.key;
    },
    setUser (state, userData) {
      state.user = userData;
    },
    setOrderHistory (state, historyData) {
      state.orderHistory = historyData;
    },
    setHasOrder (state, value) {
      state.hasOrder = value;
    },
    setOrder (state, orderData) {
      let cartValue = 0;
      for(let i = 0; i < state.cart.length; i++) {
        let itemTotal = state.cart[i].price * state.cart[i].quantity;
        cartValue += itemTotal;
      }

      let current_datetime = new Date();
      let day = String(current_datetime.getDate()).padStart(2, '0');
      let month = String(current_datetime.getMonth() + 1).padStart(2, '0'); //January is 0!
      let year = current_datetime.getFullYear();
      let time = current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      let timeStamp = year + "-" + month + "-" + day + " " + time; 

      state.order = {
        uuid: state.uuid,
        orderNr: orderData.orderNr,
        timeStamp: timeStamp,
        items: state.cart,
        totalValue: cartValue,
        eta: orderData.eta
      }

      console.log(state.order);
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
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("setOrder", data);

            console.log(this.state.order);
            const orderUrl = "http://localhost:5000/api/beans/order";
            fetch(orderUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state.order)
            })
            .then(response => response.json())
            .then(data => {
              if (data) {
                  console.log('Order was added to database');
              } else {
                  console.log('Error: could not add order to database');
              }
            })
            .catch(error => {
              console.error("Error:", error);             
            });

            console.log(data);
            ctx.commit("showLoader", false);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    async getUser(ctx) {
      const uuid = ctx.state.uuid;
      const url = "http://localhost:5000/api/beans/user/" + uuid;
      if(uuid != null) {
        fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
          .then(response => response.json())
          .then(data => {
            console.log('Min data: ')
            console.log(data);
            if(data) {
              ctx.commit("setUser", data);
            }
          })
          .catch(error => {
            console.error("Error 3:", error);
          });
      } else {
        console.log('No UuID');
      }
    },
    async getOrderHistory(ctx) {
      const uuid = ctx.state.uuid;
      const url = "http://localhost:5000/api/beans/order/" + uuid;

      fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
      })
      .then(response => response.json())
      .then(data => {
      if (data) {
        ctx.commit("setOrderHistory", data);
      }
      })
      .catch(error => {
          console.error("Error 2:", error);
      });
    },
    async createUuid(ctx) {
      const url = "http://localhost:5000/api/beans/key";
      await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if(data) {
            localStorage.setItem('airBeanUuid', JSON.stringify(data));
            ctx.commit("setUuid", data);
            return true;
          }
        })
        .catch(error => {
          console.error("Error 4:", error);
        });
    },
    async addUser(ctx) {
      const url = "http://localhost:5000/api/beans/user";
      let userData = ctx.state.user;
      fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
          if (data) {
              console.log('User was added to database');
          } else {
              console.log('Error: could not add user to database');
          }
      })
      .catch(error => {
        console.error("Error 1:", error);             
      });
    },
  },
  modules: {
  }
})
