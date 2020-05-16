import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    shop: [],
  },
  mutations: {
  },
  actions: {
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
