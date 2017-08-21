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
        'Hanseaticsoft': {
          projects: {
            'cfm-cloud-mt': { changes: [], id: 'maintenance', tabLabel: 'maintenance' },
            'cfm-cloud-blg': { changes: [], id: 'blog', tabLabel: 'blog' },
            'cfm-cloud-cw': { changes: [], id: 'crewing', tabLabel: 'crewing' },
            'cfm-cloud-mc': { changes: [], id: 'miscellaneous', tabLabel: 'miscellaneous' },
            'cfm-cloud-dr': { changes: [], id: 'disturbance', tabLabel: 'disturbance' },
            'cfm-cloud-ia': { changes: [], id: 'inspections', tabLabel: 'inspections' },
            'cfm-cloud-ctf': { changes: [], id: 'certificates', tabLabel: 'certificates' },
            'cfm-cloud-cir': { changes: [], id: 'circulars', tabLabel: 'circulars' },
            'cfm-cloud-tj': { changes: [], id: 'towage', tabLabel: 'towage' },
            'cfm-cloud-ep': { changes: [], id: 'employees', tabLabel: 'employees' }
          },
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
