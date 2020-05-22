import Vue from 'vue';
import Vuex from 'vuex';
import service from '../service/ApiService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [
      {
        id: 0,
        name: '藍色牛仔褲',
        price: 599,
        imageUrl: '@/assets/images/blue_jeans.jpg',
        detailInfo: {
          description: '舒服、簡單、寬鬆，簡單搭配就很好看。經典刷白牛仔，適合簡單隨興的你',
        },
        amount: 1,
      },
      {
        id: 1,
        name: '深灰直筒牛仔褲',
        price: 699,
        imageUrl: '@/assets/gray_jeans.jpg',
        detailInfo: {
          description: '經典直筒牛仔褲，合身又不會不舒服，寬鬆又不會不修身，成熟中帶有一些活力，簡直是今夏潮流聖品',
        },
        amount: 2,
      },
    ],
    shop: [],
    like: [],
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
