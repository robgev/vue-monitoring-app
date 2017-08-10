import Vue from 'vue';

import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.css';

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: {
    color: 'cyan',
    hue: 500,
    textColor: 'white',
  },
  accent: {
    color: 'pink',
    hue: 'A200',
  },
  warn: 'red',
  background: 'grey'
})
