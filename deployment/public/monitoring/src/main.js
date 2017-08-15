// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import './material';

import App from './App';

import router from './router';

import store from './store';

import './socket';

import Navigation from 'vue-navigation'

Vue.use(Navigation, {router, store, keyName: 'nav'});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
