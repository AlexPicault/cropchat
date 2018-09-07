const state = {
  user: 'dd'
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
    console.log('yyyyy')
    return state.user
  }
}

export {
  state,
  mutations,
  actions,
  getters
}
