import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import Axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isLogin: false
  },
  mutations: {
    changeUser(state, msg) {
      // console.log(state.user, 'state')
      state.user = msg
    },
    setLogin(state, value) {
      state.isLogin = value
      localStorage.setItem('isLogin', value)
    },
  },
  actions: {
    getUser({
      commit
    }) {
      console.log(res)
      commit('changeUser', res.data.data)

    }
  }
})