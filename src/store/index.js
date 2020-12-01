import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userId: '1234567891478523695',
      username: '王金锋',
      avatar: 'https://online-edu-adela.oss-cn-chengdu.aliyuncs.com/2020/10/10/09edff03e1fc427abdbcda6607eeb18801.jpg'
    }

  },
  mutations: {},
  getters: {
    getUserInfo (state) {
      return state.user
    }
  },

  actions: {},
  modules: {}
})
