import * as types from './mutation-types'

const loadProjects = async (companyid) => {
  const request_options = {
    method:'get',
    headers: new Headers({
      'Content-Type':'application/json'
    })
  };

  const serverIp = process.env.NODE_ENV !== 'production' ? '10.10.1.10:3000' : '37.252.65.134:85';

  const promise = await fetch(`http://${serverIp}/api/${companyid}/projects`, request_options);
  const projects = await promise.json();
  if(projects) {
    return { companyid, projects }
  }
}

const actions = {
  async socket_push ({ state, commit, dispatch }, pushData) {
    const companyid = pushData.push.company.toLowerCase();
    const { projects } = state.companies[companyid];
    if( !Object.keys(projects).length ) { // Check if object is empty
      await dispatch('load_company_projects', { companyid });
    }
    commit(types.ADD_PUSH_DATA, { pushData });
  },
  async load_company_projects ({ commit }, { companyid }) {
    commit(types.LOAD_COMPANY_PROJECTS, await loadProjects(companyid))
  }
}

export default actions
