import Vue from 'vue';

import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
    app: 'monitoring',
    companies: {
        'hanseaticsoft': {
          projects: {},
          states: {},
          logoUrl: 'static/img/hs.png'
        }
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
