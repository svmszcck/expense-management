import Vue from 'vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faUtensils,
  faCalculator,
  faTag,
  faCommentAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';

library.add(
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faUtensils,
  faCalculator,
  faTag,
  faCommentAlt,
  faEye,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
