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
          projects: {
            'cfm-cloud-mc': { changes: [], code: 'cfm-cloud-mc', id: 'miscellaneous', tabLabel: 'miscellaneous' },
            'cfm-cloud-mt': { changes: [], code: 'cfm-cloud-mt', id: 'maintenance', tabLabel: 'maintenance' },
            'cfm-cloud-blg': { changes: [], code: 'cfm-cloud-blg', id: 'blog', tabLabel: 'blog' },
            'cfm-cloud-cw': { changes: [], code: 'cfm-cloud-cw', id: 'crewing', tabLabel: 'crewing' },
            'cfm-cloud-dr': { changes: [], code: 'cfm-cloud-dr', id: 'disturbance', tabLabel: 'disturbance' },
            'cfm-cloud-ia': { changes: [], code: 'cfm-cloud-ia', id: 'inspections', tabLabel: 'inspections' },
            'cfm-cloud-ctf': { changes: [], code: 'cfm-cloud-ctf', id: 'certificates', tabLabel: 'certificates' },
            'cfm-cloud-cir': { changes: [], code: 'cfm-cloud-cir', id: 'circulars', tabLabel: 'circulars' },
            'cfm-cloud-tj': { changes: [], code: 'cfm-cloud-tj', id: 'towage', tabLabel: 'towage' },
            'cfm-cloud-ep': { changes: [], code: 'cfm-cloud-ep', id: 'employees', tabLabel: 'employees' }
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
