import Vue from 'vue'
import Vuex from 'vuex'

import * as signUp from './modules/signUp'

Vue.use(Vuex)

export default new Vuex.Store({
  signUp
})
