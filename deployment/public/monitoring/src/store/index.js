import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const getCompanyCardData = ({ companies }) => (
  Object.keys(companies).map(companyName => ({
    companyName,
    logoUrl: companies[companyName].logoUrl
  }))
)

const state = {
    app: 'monitoring',
    companies: {
        'HanseaticSoft': {
          projects: {
            'maintenance': { changes: {}, id: 'maintenance', tabLabel: 'maintenance' },
            'blog': { changes: {}, id: 'blog', tabLabel: 'blog' },
            'crewing': { changes: {}, id: 'crewing', tabLabel: 'crewing' },
            'miscellaneous': { changes: {}, id: 'miscellaneous', tabLabel: 'miscellaneous' },
            'disturbance': { changes: {}, id: 'disturbance', tabLabel: 'disturbance' },
            'inspections': { changes: {}, id: 'inspections', tabLabel: 'inspections' },
            'certificates': { changes: {}, id: 'certificates', tabLabel: 'certificates' },
            'circulars': { changes: {}, id: 'circulars', tabLabel: 'circulars' },
            'towage': { changes: {}, id: 'towage', tabLabel: 'towage' },
            'employees': { changes: {}, id: 'employees', tabLabel: 'employees' }
          },
          logoUrl: 'static/img/hs.png'
        }
    }
};

const getters = {
  companyCardData: state => getCompanyCardData(state)
}

export default new Vuex.Store({
    state,
    getters,
})
