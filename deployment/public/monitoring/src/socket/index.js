import Vue from 'vue';
import store from '../store'
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, `10.10.1.10:3000`, store);
