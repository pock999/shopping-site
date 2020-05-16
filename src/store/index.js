import Vue from 'vue';
import Vuex from 'vuex';
import service from '../service/ApiService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    shop: [],
  },
  mutations: {
    initShop(state, payload) {
      state.shop = payload;
    },
  },
  actions: {
    loadShop({ commit }) {
      service.allProducts()
        .then((data) => {
          commit('initShop', data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    shop(state) {
      return state.shop;
    },
  },
});
