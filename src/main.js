import Vue from 'vue';
import feather from 'vue-icon';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(feather, 'v-icon');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
