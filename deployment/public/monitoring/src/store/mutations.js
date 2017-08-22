import * as types from './mutation-types'

const mutations = {
  [types.ADD_PUSH_DATA] (state, { pushData }) {
    const companyName = pushData.push.company;
    const projectName = pushData.push.repo;
    const currentCompany = state.companies[companyName];
    const currentProject = currentCompany.projects[projectName];
    const { changes } = currentProject;
    const isNew = !(changes.find(change => change.uuid === pushData.uuid)) // Search the element
    if (isNew) {
      currentProject.changes.push(pushData)
    }
  },
}

export default mutations
