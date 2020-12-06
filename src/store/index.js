import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state,user) {
      state.user = user
    }
  },
  getters: {
    getUserInfo (state) {
      return state.user
    }
  },

  actions: {

  },
  modules: {}
})
