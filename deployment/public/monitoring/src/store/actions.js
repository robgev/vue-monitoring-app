import * as types from './mutation-types'

const actions = {
  socket_push ({ commit }, pushData) {
    commit(types.ADD_PUSH_DATA, { pushData });
  },
}

export default actions
