import {fire} from '../../services/firebase'

const state = {
  pseudo: null
}

const mutations = {
  storeUser (state, pseudo) {
    state.pseudo = pseudo
  }
}

const actions = {
  storeUser: ({commit}, user) => {
    fire.auth().createUserWithEmailAndPassword(user.email, user.password).then(res => {
      commit('storeUser', user.pseudo)
    }).catch(err => {
      console.log(err)
    })
  }
}

const getters = {
  pseudo: state => {
    return state.pseudo
  }
}

export {
  state,
  mutations,
  actions,
  getters
}
