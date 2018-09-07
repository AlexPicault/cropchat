const state = {
  user: null
}

const mutations = {
  storeUser (state, user) {
    console.log('rrr')
    state.user = user
  }
}

const actions = {
  storeUser: ({commit}) => {
    commit('storeUser')
  }
}

const getters = {
  user (state) {
    return state.user
  }
}

export {
  state,
  mutations,
  actions,
  getters
}
