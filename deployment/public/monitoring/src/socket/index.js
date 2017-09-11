import Vue from 'vue';
import store from '../store'
import VueSocketio from 'vue-socket.io';

const serverIp = process.env.NODE_ENV !== 'production' ? '10.10.1.10:3000' : '37.252.65.134:85';

Vue.use(VueSocketio, serverIp, store);
