import * as types from './mutation-types'

const mutations = {
  [types.ADD_PUSH_DATA] (state, { pushData }) {
    const companyName = pushData.push.company.toLowerCase();
    const projectName = pushData.push.repo;
    const currentCompany = state.companies[companyName];
    const currentProject = currentCompany.projects[projectName];
    const { changes } = currentProject;
    console.log(changes)
    const isNew = !(changes.find(change => change.uuid === pushData.uuid)) // Search the element
    if (isNew) {
      currentProject.changes.push(pushData)
    }
  },
  [types.LOAD_COMPANY_PROJECTS] (state, { companyid, projects }) {
    const currentCompany = state.companies[companyid];
    if(JSON.stringify(projects) !== JSON.stringify(currentCompany.projects)) {
      currentCompany.projects = projects; // Change data in store only if it's really changed. Done to fix a bug of topBar
    }
  }
}

export default mutations
