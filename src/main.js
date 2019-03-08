import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store/';

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
