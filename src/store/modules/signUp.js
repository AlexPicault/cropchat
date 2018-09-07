import {fire} from '../../services/firebase'

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
  storeUser: ({commit}, user) => {
    console.log(this.$http)
    fire.auth().createUserWithEmailAndPassword(user.email, user.password).then(res => {
    }).catch(err => {
      console.log(err)
    })
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
