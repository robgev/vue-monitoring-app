import Vue from 'vue';

import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, `${window.location.hostname}:3000`);
