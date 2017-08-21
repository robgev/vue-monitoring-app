import * as types from './mutation-types'

const mutations = {
  [types.ADD_PUSH_DATA] (state, { pushData }) {
    const companyName = pushData.push.company
    const projectName = pushData.push.repo
    const currentCompany = state.companies[companyName]
    const currentProject = currentCompany.projects[projectName]
    currentProject.changes.push(pushData)
  },
}

export default mutations
